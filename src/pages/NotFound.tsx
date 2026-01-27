import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight, Home as HomeIcon } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
                noIndex={true}
            />

            <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 py-32">
                {/* Background Grid Pattern (Subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl w-full text-center">
                    <div className="inline-block mb-8">
                        <div className="flex items-center justify-center w-16 h-16 rounded-[4px] bg-zinc-100 border border-zinc-200 mx-auto mb-6">
                            <span className="text-xl font-mono font-bold text-zinc-400">404</span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-6">
                        Page not found.
                    </h1>

                    <p className="text-xl text-zinc-500 max-w-lg mx-auto mb-12 leading-relaxed">
                        The page you're looking for doesn't exist. <br className="hidden md:block" />
                        But your next project could.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                        {/* Calculator Card - The Conversion Hook */}
                        <Link to="/app-calculator/for-business" className="group block">
                            <div className="h-full p-8 border border-zinc-200 bg-white hover:border-black transition-colors rounded-[4px] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Calculator className="w-24 h-24 -mr-8 -mt-8" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-[4px] flex items-center justify-center mb-6 text-black">
                                        <Calculator className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-2 tracking-tight">Estimate Project Cost</h3>
                                    <p className="text-sm text-zinc-500 mb-6">Stop guessing. Get a precise quote for your idea in under 60 seconds.</p>
                                    <span className="text-sm font-medium text-black flex items-center">
                                        Start Calculation <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* Return Home Card */}
                        <Link to="/" className="group block">
                            <div className="h-full p-8 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 transition-colors rounded-[4px]">
                                <div className="w-10 h-10 bg-white border border-zinc-200 rounded-[4px] flex items-center justify-center mb-6 text-black">
                                    <HomeIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-black mb-2 tracking-tight">Return Home</h3>
                                <p className="text-sm text-zinc-500 mb-6">Go back to the main site and explore our services.</p>
                                <span className="text-sm font-medium text-black flex items-center">
                                    Back to Home <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;
