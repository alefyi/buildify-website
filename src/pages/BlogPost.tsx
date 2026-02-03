import React, { useMemo } from "react";
import { Link, useParams } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { JSONLD } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { getPostBySlug } from "@/data/posts";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Badge } from "@/components/ui/badge";
import BlogCTA from "@/components/BlogCTA";
import SocialShare from "@/components/SocialShare";

const BlogPost = () => {
    const { slug } = useParams();

    const post = useMemo(() => {
        if (!slug) return undefined;
        return getPostBySlug(slug);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
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
                title={post.seo.title}
                description={post.seo.description}
                url={`https://usebuildify.com/post/${post.slug}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.seo.description,
                "author": {
                    "@type": "Person",
                    "name": post.author.name
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
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://usebuildify.com/post/${post.slug}`
                }
            }} />

            {/* Hero Section (Match UseCases Style) */}
            <div className="relative pt-20 md:pt-32 pb-20 border-b border-zinc-100 overflow-hidden">
                <DottedGlowBackground />

                <div className="max-w-[900px] mx-auto px-8 relative z-10 text-center">
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

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
                        {post.title}
                    </h1>

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
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-20 w-full relative">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Article Content */}
                    <div className="flex-1 w-full max-w-[800px] mx-auto">

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

                    {/* Sidebar CTA (Desktop Sticky) */}
                    <div className="hidden lg:block w-[320px] shrink-0">
                        <div className="sticky top-32">
                            <BlogCTA tags={post.tags || []} />
                        </div>
                    </div>

                </div>

                {/* Mobile Sticky CTA (Handled internally by component) */}
                <BlogCTA tags={post.tags || []} />

                {/* Footer CTA removed as requested */}
            </div>
        </div>
    );
};

export default BlogPost;
