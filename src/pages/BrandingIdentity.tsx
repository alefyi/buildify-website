import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Image, Type, ArrowRight, Layout, Smile, Check, ChevronDown, Layers, Globe, Sparkles, Camera, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiStar, BiDollarCircle } from "react-icons/bi";

const BrandingIdentity = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Branding & Identity"
                description="Look expensive. Charge more. We build brands that customers trust instantly."
                url="https://usebuildify.com/branding-identity"
            />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            Look{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber-50"><BiStar className="w-3.5 h-3.5 text-amber-500" /></span></IconReveal>
                            {" "}expensive. <br className="hidden md:block" />
                            Charge{" "}
                            <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiDollarCircle className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                            {" "}more.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Your logo is the first thing people see. We make sure you look like a market leader from day one, not a DIY project.
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

            {/* 2. Icon Grid — What's Included */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Everything in the brand kit.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            A complete identity system, not just a logo.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Primary Logo", desc: "Main logo, icon variant, and wordmark — optimized for every medium.", icon: Smile, color: "text-pink-500" },
                            { title: "Color Palette", desc: "Primary, secondary, and accent colors with exact hex/RGB/HSL codes.", icon: Palette, color: "text-violet-500" },
                            { title: "Typography", desc: "Curated font pairings for headlines, body, and UI — with licensing.", icon: Type, color: "text-blue-500" },
                            { title: "Social Assets", desc: "Ready-to-post templates for Instagram, LinkedIn, and Twitter/X.", icon: Camera, color: "text-green-500" },
                            { title: "Brand Guidelines", desc: "A PDF playbook teaching your team exactly how to use every asset.", icon: Layers, color: "text-orange-500" },
                            { title: "Illustrations", desc: "Custom icons and illustrations that match your brand personality.", icon: PenTool, color: "text-cyan-500" },
                            { title: "App Icon", desc: "A pixel-perfect icon for the App Store and Google Play.", icon: Image, color: "text-red-500" },
                            { title: "Web Presence", desc: "Favicon, OG images, and email signatures — all on-brand.", icon: Globe, color: "text-yellow-500" },
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

            {/* 3. Process — Differentiator Cards */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Buildify branding process.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "Discovery", desc: "We dig into your mission, audience, and competitors. We find the feeling you want customers to have when they see your brand.", icon: Sparkles, color: "bg-pink-100", iconColor: "text-pink-600" },
                            { title: "Design", desc: "We create 3 distinct directions. You pick a winner and we refine it until it's perfect — unlimited revisions included.", icon: PenTool, color: "bg-violet-100", iconColor: "text-violet-600" },
                            { title: "Delivery", desc: "You get a complete brand kit folder. Fonts, colors, logos, social templates. Just drag, drop, and look expensive.", icon: Layout, color: "bg-blue-100", iconColor: "text-blue-600" },
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
                        <h2 className="text-section text-black max-w-xl">Why Buildify, not Fiverr.</h2>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Fiverr / DIY</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Strategy Session", buildify: "Included", other: "None" },
                                    { feature: "Logo Concepts", buildify: "3 Directions", other: "1 Take-it-or-leave-it" },
                                    { feature: "Revisions", buildify: "Unlimited", other: "1-2 Max" },
                                    { feature: "Brand Guidelines", buildify: "Full PDF", other: "Not included" },
                                    { feature: "Social Templates", buildify: "Included", other: "Extra $$$" },
                                    { feature: "File Formats", buildify: "SVG, PNG, PDF, AI", other: "PNG Only" },
                                    { feature: "Turnaround", buildify: "5-7 Days", other: "24 Hrs (Low Quality)" },
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

            {/* 5. Testimonial */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">Don't take our word for it</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {[
                            { flag: "🎨", title: "\"Our conversion rate doubled.\"", desc: "After Buildify redesigned our brand, our landing page conversion rate went from 2.1% to 4.8%. People trust us now.", author: "Sarah M., Founder @ NutriFit" },
                            { flag: "💼", title: "\"Investors took us seriously.\"", desc: "We went from Canva logos to a real brand. Two weeks later we closed our seed round. The deck looked incredible.", author: "James K., CEO @ CloudBase" },
                            { flag: "📱", title: "\"The app icon alone was worth it.\"", desc: "Our app downloads increased 35% after the rebrand. The icon stands out in the App Store now.", author: "Linda T., CTO @ QuickMeal" },
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
                            { q: "How long does a branding project take?", a: "Most projects are completed in 5-7 business days. Rush delivery (3 days) is available for an additional fee." },
                            { q: "Do I own the final files?", a: "100% — you own everything. All source files, vectors, and assets are yours forever. No licensing, no restrictions." },
                            { q: "What if I don't like the designs?", a: "We offer unlimited revisions until you're happy. In 4+ years, we've never had a client walk away unsatisfied." },
                            { q: "Can you match an existing brand?", a: "Yes. If you already have a partial identity, we extend it into a complete system while preserving what you love." },
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
                        <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Stand Out.</h2>
                        <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                            Ready to look like a billion dollars?
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

export default BrandingIdentity;
