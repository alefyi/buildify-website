import React, { useMemo } from "react";
import { Link, useParams } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { JSONLD, FAQSchema } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock, User, Share2, ArrowRight } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Badge } from "@/components/ui/badge";
import BlogCTA from "@/components/BlogCTA";
import SocialShare from "@/components/SocialShare";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";

/** Extract FAQ pairs from blog post HTML content */
function extractFAQs(html: string): { q: string; a: string }[] {
    const faqMatch = html.split(/<h2[^>]*>\s*FAQ\s*<\/h2>/i);
    if (faqMatch.length < 2) return [];
    const faqSection = faqMatch[1];
    const items: { q: string; a: string }[] = [];
    const questionRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gs;
    let match;
    while ((match = questionRegex.exec(faqSection)) !== null) {
        const q = match[1].replace(/<[^>]+>/g, '').trim();
        const a = match[2].replace(/<[^>]+>/g, '').trim();
        if (q && a) items.push({ q, a });
    }
    return items;
}

const BlogPost = () => {
    const { slug } = useParams();

    const post = useMemo(() => {
        if (!slug) return undefined;
        return getPostBySlug(slug);
    }, [slug]);

    const relatedPosts = useMemo(() => {
        if (!post) return [];
        const allPosts = getAllPosts();
        return allPosts
            .filter(p => p.slug !== post.slug)
            .slice(0, 3);
    }, [post]);

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
                <SEO
                    title="Post Not Found"
                    description="The article you are looking for does not exist."
                    noIndex={true}
                />
                <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                <p className="text-zinc-500 mb-8">The article you are looking for does not exist or has been moved.</p>
                <Link to="/insights">
                    <Button>Back to Insights</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-sans bg-white">
            <SEO
                title={post.seo.title.replace(' | Buildify', '')}
                description={post.excerpt || post.seo.description}
                url={`https://usebuildify.com/post/${post.slug}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.seo.description,
                "image": "https://usebuildify.com/og-image.jpg",
                "author": {
                    "@type": "Person",
                    "name": post.author.name,
                    "url": `https://usebuildify.com/author/${encodeURIComponent(post.author.name)}`
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Buildify",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://usebuildify.com/favicon.png"
                    }
                },
                "datePublished": post.date,
                "dateModified": post.date,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://usebuildify.com/post/${post.slug}`
                }
            }} />

            {/* FAQ Schema for rich snippets */}
            {(() => {
                const faqs = extractFAQs(post.content);
                return faqs.length > 0 ? <FAQSchema items={faqs} /> : null;
            })()}

            {/* Hero Section */}
            <Section variant="default" className="relative pt-20 md:pt-32 pb-20 overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />

                <div className="max-w-[900px] mx-auto px-8 relative z-10 text-center">

                    <FadeIn>
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <Link to="/insights">
                                <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-500 hover:text-black hover:border-zinc-400 bg-white/50 backdrop-blur-sm transition-colors cursor-pointer uppercase">
                                    <ChevronLeft className="w-3 h-3 mr-1 inline-block" /> Insights
                                </Badge>
                            </Link>
                            <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 bg-white/50 backdrop-blur-sm uppercase">
                                {post.readingTime}
                            </Badge>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
                            {post.title}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
                            <Link to={`/author/${encodeURIComponent(post.author.name)}`} className="flex items-center gap-2 hover:text-black transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-200 transition-colors overflow-hidden">
                                    {post.author.avatar ? (
                                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="w-4 h-4" />
                                    )}
                                </div>
                                <span className="font-medium text-black group-hover:underline decoration-zinc-400 underline-offset-4">By {post.author.name}</span>
                            </Link>
                            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-200" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Content Section */}
            <div className="max-w-layout mx-auto px-4 md:px-8 py-20 w-full relative">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Article Content */}
                    <FadeIn className="flex-1 w-full max-w-[800px] mx-auto">
                        <div>
                            {/* Social Share (Desktop - Top) */}
                            <div className="mb-8 flex items-center justify-between border-b border-zinc-100 pb-8">
                                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Share this insight</span>
                                <SocialShare title={post.title} url={`https://usebuildify.com/post/${post.slug}`} />
                            </div>

                            <article className="prose prose-zinc md:prose-lg max-w-none 
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black
                                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:text-zinc-600 prose-p:leading-relaxed
                                prose-li:text-zinc-600
                                prose-strong:text-black prose-strong:font-semibold
                                first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px]">

                                {/* Render Content */}
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>

                            {/* Social Share (Mobile/Bottom) */}
                            <div className="mt-12 pt-8 border-t border-zinc-100 lg:hidden">
                                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-center">Share this article</h4>
                                <div className="flex justify-center">
                                    <SocialShare title={post.title} url={`https://usebuildify.com/post/${post.slug}`} />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Sidebar CTA (Desktop Sticky) */}
                    <div className="hidden lg:block w-[320px] shrink-0">
                        <div className="sticky top-32">
                            <FadeIn delay={0.2}>
                                <BlogCTA tags={post.tags || []} />
                            </FadeIn>
                        </div>
                    </div>

                </div>

                {/* Mobile Sticky CTA (Handled internally by component) */}
                <BlogCTA tags={post.tags || []} />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <Section variant="full" className="">
                    <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                        <FadeIn>
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-section">Keep reading</h2>
                                <Link
                                    to="/insights"
                                    className="text-sm font-semibold px-4 py-2 rounded-xl hover:bg-black/5 transition-all duration-300"
                                >
                                    View all →
                                </Link>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relPost, i) => {
                                const gradients = [
                                    "from-zinc-800 to-zinc-600",
                                    "from-blue-900 to-blue-700",
                                    "from-emerald-900 to-emerald-700",
                                ];
                                return (
                                    <FadeIn key={relPost.id} delay={i * 0.1}>
                                        <Link to={`/post/${relPost.slug}`} className="group block">
                                            {/* Gradient Thumbnail */}
                                            <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} mb-4 overflow-hidden`}>
                                                <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                        <path d="M18 14h-8" />
                                                        <path d="M15 18h-5" />
                                                        <path d="M10 6h8v4h-8V6Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* Date */}
                                            <p className="text-sm text-zinc-400 mb-2">
                                                {new Date(relPost.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                            {/* Title */}
                                            <h3 className="text-card-title-sm text-zinc-900 group-hover:text-black mb-2">
                                                {relPost.title}
                                            </h3>
                                            {/* Excerpt */}
                                            <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                                                {relPost.excerpt}
                                            </p>
                                        </Link>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </Section>
            )}

            {/* CTA Footer */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Build with us.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Turn insights into action. Let's build something great together.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default BlogPost;
