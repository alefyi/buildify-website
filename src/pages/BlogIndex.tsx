
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { getAllPosts } from '../data/posts';
import DottedGlowBackground from '../components/DottedGlowBackground';
import { Badge } from '../components/ui/badge';
import { Search, User, ArrowRight } from 'lucide-react';

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

            <section className="pt-32 pb-20 border-b border-zinc-200 bg-white relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase bg-zinc-50">
                        Insights
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                        Buildify Insights
                    </h1>
                    <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Strategies, technical deep dives, and stories from the team building the future of business software.
                    </p>

                    {/* Styled Search Bar (Matches GrowthTool) */}
                    <div className="max-w-2xl mx-auto relative group p-[2px] overflow-hidden rounded-[4px] bg-zinc-200 transition-all duration-500">
                        <div className="absolute inset-[-200%] animate-border-glow glow-gradient glow-blur z-0" />
                        <div className="absolute inset-[-200%] animate-border-glow glow-gradient z-0 opacity-100" />

                        <div className="relative z-10 flex items-center px-4 py-3 bg-white rounded-[3px]">
                            <Search className="w-5 h-5 text-zinc-400 mr-3 shrink-0" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="flex-1 bg-transparent outline-none text-base text-black placeholder:text-zinc-400"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1200px] mx-auto px-6 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="group flex flex-col h-full bg-white border border-zinc-200 rounded-[4px] overflow-hidden hover:border-zinc-400 transition-colors shadow-sm hover:shadow-md">
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
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 text-zinc-500">
                        No articles found matching "{search}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogIndex;
