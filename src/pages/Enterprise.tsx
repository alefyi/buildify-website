import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Server, ArrowRight, Activity, Globe, Lock, Code2, Database, ChevronDown, Check, Terminal, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import amcham from "@/assets/partners/amcham.webp";
import foundersFirst from "@/assets/partners/founders_first.webp";
import co100 from "@/assets/partners/co100.webp";
import chamber from "@/assets/partners/chamber.webp";

const Enterprise = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Enterprise Engineering"
                description="Big systems. Zero headaches. Enterprise-grade software development without the bureaucracy."
                url="https://usebuildify.com/enterprise"
            />

            {/* 1. Hero Section (Standardized) */}
            <section className="bg-white pt-20 md:pt-32 pb-32 border-b border-zinc-200 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-md flex items-center justify-center mb-10">
                            <Globe className="w-6 h-6 text-black" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-hero">
                            Big systems. <br className="hidden md:block" />
                            Zero headaches.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            You have complex needs. We have simple solutions. We untangle your legacy mess and build systems that just work.
                        </p>
                    </div>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-md bg-black text-white hover:bg-zinc-800 shadow-none">
                            Book Technical Audit <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* 2. Trust Bar (Partners) */}
            <section className="max-w-layout mx-auto border-x border-b border-zinc-200 bg-white">
                <div className="py-10 border-b border-zinc-200 bg-white text-center">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Trusted Infrastructure Partner For</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 bg-white">
                    {[amcham, foundersFirst, co100, chamber].map((logo, i) => (
                        <div key={i} className="flex items-center justify-center p-10 h-40">
                            <img
                                src={logo}
                                alt="Partner"
                                width="160"
                                height="48"
                                loading="lazy"
                                decoding="async"
                                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Strategy Bento Grid */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-md">
                                <Activity className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">The Strategy</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                We don't just patch bugs. We re-architect for scale. Our process is designed to minimize risk and maximize uptime.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Status: OPTIMIZED</p>
                        </div>
                    </div>

                    {[
                        { title: "The Audit", desc: "Deep dive into legacy code. We find the bottlenecks.", icon: Terminal },
                        { title: "The Plan", desc: "Architecture designed for millions of concurrent users.", icon: Globe },
                        { title: "The Migration", desc: "Zero-downtime transition to modern infrastructure.", icon: Server },
                        { title: "The Scale", desc: "Automated scaling policies that handle traffic spikes.", icon: Database }
                    ].map((item) => (
                        <div key={item.title} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors mb-4" />
                            <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Standards Grid (White Layout) */}
            <section className="py-32 bg-white border-b border-zinc-200">
                <div className="max-w-layout mx-auto px-6">
                    <div className="mb-20">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-6">Standards</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Rock Solid</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                title: "99.9% Uptime",
                                text: "It never goes down. We guarantee it.",
                                icon: Server
                            },
                            {
                                title: "Bank-Grade Security",
                                text: "We keep your customer data safe and locked down.",
                                icon: Lock
                            },
                            {
                                title: "24/7 SLA Support",
                                text: "Real human support. Call or text us M-F 9-5.",
                                icon: Shield
                            },
                            {
                                title: "Code Ownership",
                                text: "You own everything. No IP lock-in.",
                                icon: Code2
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-8 border border-zinc-200 bg-white hover:border-black transition-colors duration-300 group flex flex-col rounded-sm">
                                <item.icon className="w-6 h-6 text-zinc-500 mb-6 group-hover:text-black transition-colors" strokeWidth={1.5} />
                                <h3 className="font-bold tracking-tight mb-2 text-black text-lg">
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

            {/* 5. Social Proof (Testimonials) */}
            <section className="max-w-layout mx-auto border-x border-b border-zinc-200 bg-zinc-200">
                <div className="bg-white p-10 border-b border-zinc-200">
                    <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">CTO Approved</h2>
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-black">Don't take our word for it.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px">
                    {[
                        { text: "We replaced our entire engineering team with Buildify. It was the best decision we made.", author: "David Kim, CEO @ FinTech Co" },
                        { text: "Legacy code was killing our velocity. Buildify refactored it in 2 months. Incredible.", author: "Sarah Jones, CTO @ Flowstate" },
                        { text: "The SLA support is real. They actually answer the phone at 2 AM.", author: "Mike Ross, VP Eng @ ScaleUp" }
                    ].map((t) => (
                        <div key={t.author} className="p-10 bg-white hover:bg-zinc-50 transition-colors">
                            <p className="text-lg text-zinc-900 mb-6 leading-relaxed">"{t.text}"</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">- {t.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. FAQ (Accordion Style) */}
            <section className="max-w-layout mx-auto border-x border-zinc-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50">
                        <h3 className="text-2xl font-bold tracking-tight mb-4">Common Questions</h3>
                        <p className="text-zinc-500">Everything you need to know about our enterprise engagement.</p>
                    </div>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
                        {[
                            { q: "Do you sign NDAs?", a: "Yes. We sign standard mutual NDAs before any code review." },
                            { q: "What happens if the site goes down?", a: "Our SLA guarantees response times under 15 minutes for critical outages." },
                            { q: "Can we inherit the codebase later?", a: "Absolutely. We build for handover. You get full documentation and training." },
                            { q: "Do you work with onsite teams?", a: "Yes. We can embed with your existing team or operate as a standalone unit." }
                        ].map((faq, i) => (
                            <button
                                key={faq.q}
                                className="w-full text-left p-10 hover:bg-zinc-50 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black",
                                        openFaq === i ? "rotate-180 text-black" : ""
                                    )} />
                                </div>
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openFaq === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-zinc-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA (Vercel Inverted Box) */}
            <section className="py-32 bg-zinc-50 border-b border-zinc-200 border-t border-zinc-200">
                <div className="max-w-layout mx-auto px-6 flex justify-center">
                    <div className="w-full max-w-[800px] border border-black bg-white p-12 md:p-16 text-center rounded-none shadow-none">
                        <div className="mb-8 px-3 py-1 text-[10px] font-bold tracking-[0.2em] border border-black text-black rounded-sm uppercase inline-block">
                            Start Now
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-black leading-[0.9]">
                            Stop technical debt.
                        </h2>
                        <p className="text-lg text-zinc-500 mb-10 max-w-lg mx-auto leading-relaxed">
                            Book a free technical audit. We'll tell you exactly what's wrong (and how to fix it).
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-sm bg-black text-white hover:bg-zinc-800 shadow-none border border-black">
                                Book Audit <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Enterprise;
