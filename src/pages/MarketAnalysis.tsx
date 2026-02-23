import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, BarChart3, PieChart, Target, ArrowRight, Eye, FileText, CheckCircle, Check, ChevronDown, TrendingUp, Users, DollarSign, Globe, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiSearchAlt, BiTargetLock } from "react-icons/bi";

const MarketAnalysis = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Market Analysis"
                description="We do the homework. You get the answers. Competitor analysis and market strategy without the fluff."
                url="https://usebuildify.com/market-analysis"
            />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            We do the{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiSearchAlt className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}homework. <br className="hidden md:block" />
                            You get the{" "}
                            <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-rose-50"><BiTargetLock className="w-3.5 h-3.5 text-rose-500" /></span></IconReveal>
                            {" "}answers.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Stop guessing what your competitors are doing. We spy on them (legally) and tell you exactly how to beat them.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <p className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                            <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />Team in North America</span>
                            <span className="text-zinc-300">·</span>
                            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />9–5 Mon–Fri</span>
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. Icon Grid — Deliverables */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">What you get in the playbook.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            No 100-page PDFs. Just actionable intelligence.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Competitor Audit", desc: "Full teardown of your top 5 competitors — pricing, features, traffic, tech stack.", icon: Search, color: "text-blue-500" },
                            { title: "Pricing Strategy", desc: "We tell you exactly what to charge based on market positioning and willingness-to-pay.", icon: DollarSign, color: "text-green-500" },
                            { title: "User Personas", desc: "Who specifically buys this? We define your ideal customer with psychographic detail.", icon: Users, color: "text-purple-500" },
                            { title: "Feature Prioritization", desc: "What to build first, what to skip. Ranked by market demand and complexity.", icon: CheckCircle, color: "text-orange-500" },
                            { title: "Market Sizing", desc: "TAM, SAM, SOM — with real data sources, not guesses.", icon: PieChart, color: "text-cyan-500" },
                            { title: "Traffic Analysis", desc: "Where your competitors get their users and how you can steal them.", icon: TrendingUp, color: "text-red-500" },
                            { title: "Go-to-Market Plan", desc: "Launch sequence: channels, messaging, and timeline for first 1,000 users.", icon: Target, color: "text-yellow-500" },
                            { title: "SEO Opportunity", desc: "Keywords your competitors rank for that you can capture in 90 days.", icon: Globe, color: "text-pink-500" },
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={0.15 + (i * 0.1)}>
                                <div className="flex flex-col gap-3">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                    <h4 className="font-bold text-base tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. Process */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Buildify research process.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "The Spy", desc: "We reverse-engineer your top competitors. We see what works, what fails, and exactly how they monetize their users.", icon: Eye, color: "bg-blue-100", iconColor: "text-blue-600" },
                            { title: "The Data", desc: "Numbers don't lie. We pull real traffic data, download numbers, review scores, and financial metrics to find the gaps.", icon: BarChart3, color: "bg-emerald-100", iconColor: "text-emerald-600" },
                            { title: "The Plan", desc: "We give you a simple, actionable roadmap. Who to sell to, what to say, and exactly which features to build first.", icon: Target, color: "bg-violet-100", iconColor: "text-violet-600" },
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={0.1 + (i * 0.1)}>
                                <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                    <div className={`w-9 h-9 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                                        <item.icon className={`w-4.5 h-4.5 ${item.iconColor}`} />
                                    </div>
                                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Comparison Table */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Why Buildify, not guessing.</h2>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">DIY Research</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Competitor Teardown", buildify: "5 Full Audits", other: "Surface-level Googling" },
                                    { feature: "Data Sources", buildify: "SimilarWeb, Crunchbase, SEMrush", other: "Free tools" },
                                    { feature: "Turnaround", buildify: "5-7 Days", other: "Weeks of part-time work" },
                                    { feature: "Actionable Output", buildify: "Prioritized Feature Roadmap", other: "Unstructured Notes" },
                                    { feature: "Pricing Model", buildify: "Data-Backed", other: "Gut Feel" },
                                    { feature: "Go-to-Market Plan", buildify: "Included", other: "Not included" },
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="py-3 pr-4 text-sm text-gray-600">{row.feature}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">
                                            <Check className="inline w-4 h-4 mr-2 text-green-600" />
                                            {row.buildify}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{row.other}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* 5. Testimonials */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">Don't take our word for it</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {[
                            { flag: "📊", title: "\"We pivoted before wasting $50k.\"", desc: "The market analysis showed our original idea had 3 competitors with $10M+ funding. Buildify found a gap they all missed. We pivoted and launched into a blue ocean.", author: "Mike R., Founder @ LoanLens" },
                            { flag: "🎯", title: "\"Our pricing was 3x too low.\"", desc: "Buildify's pricing strategy analysis showed we were massively undercharging. We raised prices and revenue went up — not down. Counterintuitive but data-proven.", author: "Amanda L., CEO @ Stylebase" },
                            { flag: "🚀", title: "\"First 1,000 users in 30 days.\"", desc: "Their go-to-market plan mapped out exactly which channels to use and what messaging to run. We hit 1,000 signups in a month.", author: "Carlos D., CTO @ FieldNotes" },
                        ].map((item, i) => (
                            <FadeIn key={item.flag + i} delay={0.15 + (i * 0.1)}>
                                <div className="flex flex-col gap-4">
                                    <span className="text-card-title">{item.flag}</span>
                                    <h4 className="text-card-title-sm">{item.title}</h4>
                                    <p className="text-body text-zinc-500">{item.desc}</p>
                                    <p className="text-xs font-mono text-zinc-400 mt-1">{item.author}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 6. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Frequently asked questions</h2>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "How long does a market analysis take?", a: "5-7 business days. We use premium data tools and human analysis to deliver insights, not just downloaded reports." },
                            { q: "What if I'm in a niche market?", a: "Even better. Niche markets are where we find the biggest opportunities. Fewer competitors = more gaps to exploit." },
                            { q: "Do you sign an NDA?", a: "Yes. All engagement details and your business idea are protected by a mutual NDA before we start." },
                            { q: "Can you do this for an existing product?", a: "Absolutely. We analyze where your current product sits in the market and find growth opportunities you're missing." },
                        ].map((faq, i) => (
                            <button
                                key={faq.q}
                                className="w-full text-left py-6 transition-colors group cursor-pointer focus:outline-none"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black flex-shrink-0 ml-4",
                                        openFaq === i ? "rotate-180 text-black" : ""
                                    )} />
                                </div>
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openFaq === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 7. CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Stop Guessing.</h2>
                        <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                            Ready to see what the competition is hiding?
                        </p>
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

export default MarketAnalysis;
