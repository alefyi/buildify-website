import React from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, RefreshCw, Shield, Activity, ArrowRight, Server, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NextVersions = () => {
    const steps = [
        {
            title: "We Monitor",
            description: "We watch your app 24/7. If something breaks, we know before you do.",
            icon: Activity
        },
        {
            title: "We Fix",
            description: "Bugs happen. We squash them immediately. No hourly billing, no surprise invoices.",
            icon: RefreshCw
        },
        {
            title: "We Improve",
            description: "Users want new features. We build them. Your app keeps getting better every month.",
            icon: Zap
        },
        {
            title: "We Scale",
            description: "Too many users? Good problem. We add more power to the servers so you never crash.",
            icon: Server
        }
    ];

    const includedItems = [
        {
            title: "24/7 Uptime",
            text: "We keep the lights on.",
            icon: Clock
        },
        {
            title: "Security Updates",
            text: "We keep the hackers out.",
            icon: Shield
        },
        {
            title: "Speed Tuning",
            text: "We make it load faster.",
            icon: Zap
        },
        {
            title: "Feature Drops",
            text: "New tools for your users.",
            icon: Activity
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Post-Launch Support"
                description="Software is never done. We keep it alive. Maintenance, updates, and scaling for your business."
                url="https://usebuildify.com/next-versions"
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 md:pt-32 pb-32 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-[4px] flex items-center justify-center mb-10">
                            <Zap className="w-6 h-6 text-black" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            Software is never "done". <br className="hidden md:block" />
                            We keep it alive.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Launch day is just day one. We stick around to fix bugs, add new features, and keep your business running smooth 24/7.
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
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">The Cycle</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">The Long Haul</h2>
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
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">What You Get</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Infinite Runway</h2>
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
                    <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Stay Online.</h2>
                    <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                        Ready for a partner, not just a vendor?
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

export default NextVersions;
