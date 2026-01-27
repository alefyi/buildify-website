import React from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, PieChart, Target, ArrowRight, Eye, FileText, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MarketAnalysis = () => {
    const steps = [
        {
            title: "The Spy",
            description: "We look at your competitors. We see what works, what fails, and exactly how they make money.",
            icon: Eye
        },
        {
            title: "The Data",
            description: "Numbers don't lie. We find the gaps in the market where you can win.",
            icon: BarChart3
        },
        {
            title: "The Plan",
            description: "We give you a simple roadmap. Here is who to sell to, and exactly what to say.",
            icon: Target
        },
        {
            title: "The Action",
            description: "No 100-page PDFs. Just a clear list of what to build and how to launch it.",
            icon: FileText
        }
    ];

    const includedItems = [
        {
            title: "Competitor Audit",
            text: "We spy on the other guys.",
            icon: Search
        },
        {
            title: "Pricing Strategy",
            text: "How much can you charge?",
            icon: PieChart
        },
        {
            title: "User Personas",
            text: "Who specifically buys this?",
            icon: Eye
        },
        {
            title: "Feature List",
            text: "What to build (and what to skip).",
            icon: CheckCircle
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Market Analysis"
                description="We do the homework. You get the answers. Competitor analysis and market strategy without the fluff."
                url="https://usebuildify.com/market-analysis"
            />

            {/* Hero Section */}
            <section className="bg-white pt-32 pb-32 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-[4px] flex items-center justify-center mb-10">
                            <Search className="w-6 h-6 text-black" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            We do the homework. <br className="hidden md:block" />
                            You get the answers.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Stop guessing what your competitors are doing. We spy on them (legally) and tell you exactly how to beat them.
                        </p>
                    </div>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* How We Work (Steps) */}
            <section className="py-32 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">The Process</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Truth Hurts (Them)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
                        {steps.map((step, index) => (
                            <div key={index} className="p-10 bg-white hover:bg-zinc-50 transition-colors group h-full flex flex-col">
                                <span className="font-mono text-[10px] text-zinc-400 mb-8 block">0{index + 1}</span>
                                <step.icon className="w-8 h-8 text-black mb-6" />
                                <h3 className="text-xl font-bold tracking-tight mb-4 text-black">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Everything Included */}
            <section className="py-32 bg-white border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">Deliverables</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">The Playbook</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
                        {includedItems.map((item, index) => (
                            <div key={index} className="p-10 bg-white hover:bg-zinc-50 transition-colors group flex flex-col border border-transparent">
                                <item.icon className="w-6 h-6 text-zinc-400 mb-6 group-hover:text-black transition-colors" />
                                <h3 className="font-bold tracking-tight mb-2 text-black">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                        Get Started
                    </Badge>
                    <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Stop Guessing.</h2>
                    <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                        Ready to see what the competition is hiding?
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-16 px-10 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MarketAnalysis;
