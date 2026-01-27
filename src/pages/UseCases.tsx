import React, { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { useUseCases } from "@/hooks/useUseCases";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowUpRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Simple Levenshtein distance for "Did you mean"
const levenshteinDistance = (a: string, b: string): number => {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[a.length][b.length];
};

const UseCases = () => {
    const { useCases } = useUseCases();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredUseCases = useMemo(() => {
        if (!searchQuery) return useCases;
        return useCases.filter(uc =>
            uc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            uc.hero.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [useCases, searchQuery]);

    const didYouMean = useMemo(() => {
        if (filteredUseCases.length > 0 || !searchQuery) return null;

        let minDistance = Infinity;
        let pMatch = null;

        useCases.forEach(uc => {
            const dist = levenshteinDistance(searchQuery.toLowerCase(), uc.name.toLowerCase());
            if (dist < minDistance && dist < 5) { // Threshold for relevance
                minDistance = dist;
                pMatch = uc;
            }
        });

        return pMatch;
    }, [filteredUseCases, searchQuery, useCases]);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Use Cases"
                description="Discover how Buildify helps businesses in every industry scale their operations."
                url="https://usebuildify.com/use-cases"
            />

            {/* Desktop Sticky Container */}
            <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row relative">

                {/* Main Content (Left) */}
                <div className="flex-1 w-full lg:pr-12">
                    {/* Hero - Modified: px-8 to match grid padding */}
                    <div className="px-8 py-32 border-b border-zinc-100">
                        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                            Industries
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black">
                            Built for Your Business.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-8">
                            Find your industry to see exactly how we can help you scale.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md relative">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <Input
                                    type="text"
                                    placeholder="Search your industry..."
                                    className="pl-10 h-12 text-lg border-zinc-200 bg-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            {/* Did You Mean */}
                            {didYouMean && (
                                <div className="mt-2 text-sm text-zinc-500">
                                    Did you mean <button onClick={() => setSearchQuery(didYouMean.name)} className="text-blue-600 font-medium hover:underline">{didYouMean.name}</button>?
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Grid - Modified: Removed outer border to prevent 'box' look. Inner lines via gap-px. */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200">
                        {filteredUseCases.length > 0 ? (
                            filteredUseCases.map((useCase) => (
                                <Link
                                    key={useCase.slug}
                                    to={`/for/${useCase.slug}`}
                                    className="bg-white p-8 hover:bg-zinc-50 transition-all group block h-full outline-none focus:bg-zinc-50"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black">
                                            {useCase.name}
                                        </h3>
                                        <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" />
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {useCase.hero.subtitle}
                                    </p>
                                    <div className="flex items-center text-xs font-medium text-zinc-900">
                                        Read Case Study <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-1 md:col-span-2 p-12 text-center bg-white">
                                <p className="text-zinc-500">No industries found matching "{searchQuery}".</p>
                                <button onClick={() => setSearchQuery("")} className="text-black font-medium mt-2 hover:underline">Clear Search</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Sidebar (Sticky on Desktop) */}
                <div className="hidden lg:block w-[350px] flex-shrink-0 border-l border-zinc-200 bg-white relative">
                    <div className="sticky top-24 p-8">
                        <div className="bg-zinc-50 p-8 border border-zinc-200 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">Don't see your industry?</h3>
                            <p className="text-zinc-500 mb-8 leading-relaxed">
                                We work with all types of businesses. Let's chat about your specific needs.
                            </p>
                            <Link to="/contact" className="block">
                                <Button size="lg" className="w-full h-12 text-lg rounded-none bg-black text-white hover:bg-zinc-800">
                                    Let's Chat
                                </Button>
                            </Link>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center text-sm text-zinc-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Custom Solutions
                                </div>
                                <div className="flex items-center text-sm text-zinc-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Same Day Quote
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Sticky Footer CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-200 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                <Link to="/contact">
                    <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg rounded-none">
                        Let's Chat
                    </Button>
                </Link>
            </div>
            {/* Spacer for Mobile Sticky Footer */}
            <div className="h-24 lg:hidden"></div>
        </div>
    );
};

export default UseCases;
