import React from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { JSONLD } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const BlogPost = () => {
    const { slug } = useParams();

    // Clean up slug for display title
    const title = slug
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "Blog Post";

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <SEO
                title={title}
                description={`Read about ${title} on Buildify.`}
                url={`https://usebuildify.com/posts/${slug}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": title,
                "description": `Read about ${title} on Buildify.`,
                "author": {
                    "@type": "Organization",
                    "name": "Buildify Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Buildify",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://usebuildify.com/favicon.png"
                    }
                },
                "datePublished": new Date().toISOString().split('T')[0],
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://usebuildify.com/posts/${slug}`
                }
            }} />

            <div className="mb-8">
                <Link to="/posts">
                    <Button variant="ghost" size="sm" className="pl-0 gap-1 text-zinc-500 hover:text-black">
                        <ChevronLeft className="w-4 h-4" /> Back to Blog
                    </Button>
                </Link>
            </div>

            <article className="prose prose-zinc lg:prose-lg max-w-none">
                <h1 className="font-bold tracking-tight text-4xl md:text-5xl mb-6">{title}</h1>

                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-10 border-b border-zinc-100 pb-10">
                    <span>By Buildify Team</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString()}</span>
                    <span>•</span>
                    <span>10 min read</span>
                </div>

                {/* Placeholder Content Content */}
                <p className="lead text-xl text-zinc-600 mb-8">
                    This is a placeholder for the verified content of <strong>{title}</strong>.
                    In a real implementation, this would fetch markdown or JSON content from a CMS or local file based on the slug <code>{slug}</code>.
                </p>

                <p>
                    Building an app can be an exciting journey, offering the chance to create something that solves problems, engages users, or provides convenience right at their fingertips. However, turning an app idea into a reality takes careful planning, research, and strategic execution.
                </p>

                <h2>Why {title}?</h2>
                <p>
                    Whether you’re a beginner or a business looking to expand digitally, these insights will help you make informed decisions and maximize your app’s potential for success.
                </p>

                <div className="my-10 p-6 bg-zinc-50 border border-zinc-200 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Need help building this?</h3>
                    <p className="text-zinc-600 mb-4">Our team specializes in {title} and can help you launch faster.</p>
                    <Link to="/contact">
                        <Button>Get a Free Consultation</Button>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
