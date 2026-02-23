
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { getAllPosts } from '../data/posts';
import DottedGlowBackground from '../components/DottedGlowBackground';
import { Badge } from '../components/ui/badge';
import { Search, User, ArrowRight } from 'lucide-react';
import { SmartInput } from '../components/ui/smart-input';
import { FadeIn } from '@/components/animations/FadeIn';
import { Section } from '@/components/ui/section';

import { CypherText } from '@/components/animations/CypherText';

const BlogIndex = () => {
    const posts = useMemo(() => getAllPosts(), []);
    const [search, setSearch] = useState("");

    const filteredPosts = useMemo(() => {
        if (!search) return posts;
        const lower = search.toLowerCase();
        return posts.filter(p =>
            p.title.toLowerCase().includes(lower) ||
            p.excerpt.toLowerCase().includes(lower)
        );
    }, [posts, search]);

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Insights | Buildify"
                description="Expert insights on business technology, software development, and scaling your company."
                url="https://usebuildify.com/insights"
            />

            <Section variant="default" className="pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10 text-center">

                    <FadeIn>
                        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase bg-zinc-50">
                            Insights
                        </Badge>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            <CypherText text="Buildify Insights" duration={1500} />
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Strategies, technical deep dives, and stories from the team building the future of business software.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="max-w-2xl mx-auto">
                            <SmartInput
                                type="text"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            <Section variant="full">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, i) => (
                            <FadeIn key={post.id} delay={0.05 + (i * 0.05)}>
                                <div className="group flex flex-col h-full bg-white border border-zinc-200 rounded-[4px] overflow-hidden hover:border-zinc-400 transition-colors shadow-sm hover:shadow-md">
                                    <Link to={`/post/${post.slug}`} className="block flex-1 p-8 pb-0">
                                        <div className="text-[10px] font-mono font-medium text-zinc-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                            <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                                            <span>{post.readingTime}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-black transition-colors leading-tight text-zinc-900">
                                            {post.title}
                                        </h2>
                                        <p className="text-zinc-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </Link>

                                    <div className="mt-auto p-8 pt-0 flex items-center justify-between">
                                        <Link to={`/author/${encodeURIComponent(post.author.name)}`} className="flex items-center gap-3 group/author">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-100 group-hover/author:border-zinc-300 transition-colors">
                                                {post.author.avatar ? (
                                                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover rounded-full" />
                                                ) : (
                                                    <User className="w-4 h-4 text-zinc-400 group-hover/author:text-zinc-600" />
                                                )}
                                            </div>
                                            <span className="text-xs font-bold text-zinc-600 group-hover/author:text-black transition-colors">
                                                {post.author.name}
                                            </span>
                                        </Link>
                                        <Link to={`/post/${post.slug}`} className="text-zinc-400 hover:text-black transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 text-zinc-500">
                            No articles found matching "{search}"
                        </div>
                    )}
                </div>
            </Section>

            {/* CTA Footer */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Build with us.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Ready to turn insights into action? Let's build something great.</p>
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

export default BlogIndex;
