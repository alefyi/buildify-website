import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllPosts } from '../data/posts';
import { SEO } from '../components/SEO';
import { JSONLD } from '../components/Schema';
import { User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import DottedGlowBackground from '../components/DottedGlowBackground';

const AuthorPage = () => {
    const { name } = useParams<{ name: string }>();
    const posts = useMemo(() => getAllPosts(), []);

    const authorPosts = useMemo(() => {
        if (!name) return [];
        // Decode URI component to handle spaces if passed as "Benita%20Bahoya"
        const decodedName = decodeURIComponent(name);
        return posts.filter(p => p.author.name === decodedName);
    }, [posts, name]);

    // Get author details from the first post found (assuming consistent author data)
    const authorData = authorPosts.length > 0 ? authorPosts[0].author : { name: name ? decodeURIComponent(name) : 'Author', role: 'Contributor' };

    if (!authorPosts.length) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32">
                <SEO title="Author Not Found | Buildify" description="Author not found." url={`https://usebuildify.com/author/${name}`} />
                <h1 className="text-2xl font-bold mb-4">Author Not Found</h1>
                <Link to="/insights">
                    <Button variant="outline">Back to Insights</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title={`${authorData.name} - Insights | Buildify`}
                description={`Read articles by ${authorData.name} on Buildify.`}
                url={`https://usebuildify.com/author/${name}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "ProfilePage",
                "mainEntity": {
                    "@type": "Person",
                    "name": authorData.name,
                    "description": authorData.role || 'Contributor',
                    "image": authorData.avatar || "https://usebuildify.com/og-image.jpg",
                    "url": `https://usebuildify.com/author/${name}`,
                    "sameAs": []
                }
            }} />

            {/* Author Hero */}
            <section className="pt-32 pb-20 border-b border-zinc-200 bg-white relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <Link to="/insights" className="inline-flex items-center text-sm text-zinc-500 hover:text-black mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Link>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
                            {authorData.avatar ? (
                                <img src={authorData.avatar} alt={authorData.name} className="w-full h-full object-cover rounded-full" />
                            ) : (
                                <User className="w-10 h-10 text-zinc-400" />
                            )}
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-3">
                                {authorData.name}
                            </h1>
                            <p className="text-xl text-zinc-500">
                                {authorData.role || 'Contributor'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author's Posts */}
            <section className="py-20 bg-zinc-50 min-h-[50vh]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-10 tracking-tight">Latest from {authorData.name.split(' ')[0]}</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {authorPosts.map(post => (
                            <Link key={post.id} to={`/post/${post.slug}`} className="group flex flex-col h-full bg-white border border-zinc-200 rounded-[4px] overflow-hidden hover:border-zinc-400 transition-colors shadow-sm hover:shadow-md">
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-[10px] font-mono font-medium text-zinc-400 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                        <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-black transition-colors leading-tight text-zinc-900">
                                        {post.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-2 text-primary font-medium text-sm">
                                        Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuthorPage;
