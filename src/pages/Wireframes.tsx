import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, PenTool, Layout, FileText, ArrowRight, Eye, CheckCircle, Check, ChevronDown, Smartphone, MousePointer2, Layers, Figma, Globe, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiShow, BiPencil } from "react-icons/bi";

const Wireframes = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Wireframes & Blueprints"
                description="See the future before we build it. We draw every screen so you know exactly what you're paying for."
                url="https://usebuildify.com/wireframes-blueprints"
            />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            See{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-violet-50"><BiShow className="w-3.5 h-3.5 text-violet-500" /></span></IconReveal>
                            {" "}the future <br className="hidden md:block" />
                            before we{" "}
                            <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiPencil className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}build it.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            You wouldn't build a house without a blueprint. Don't build an app without one either. We draw every screen first so you know exactly what you're paying for.
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

            {/* 2. Icon Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Why wireframe first.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Fixing a drawing costs $0. Fixing code costs thousands.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "No Surprises", desc: "See exactly what you're buying before you buy it. Every screen, every button.", icon: Eye, color: "text-blue-500" },
                            { title: "Save Money", desc: "Catching a bad flow in wireframes saves $10k+ vs. catching it in code.", icon: CheckCircle, color: "text-green-500" },
                            { title: "Clear Roadmap", desc: "A complete map for your development team to follow with zero ambiguity.", icon: Layout, color: "text-purple-500" },
                            { title: "Clickable Demo", desc: "Test it on your phone before spending a dollar on development.", icon: Smartphone, color: "text-orange-500" },
                            { title: "User Flows", desc: "We map the complete user journey — sign up, onboard, convert, and retain.", icon: MousePointer2, color: "text-cyan-500" },
                            { title: "Data Architecture", desc: "Database schema designed alongside the UI so nothing gets missed.", icon: Database, color: "text-red-500" },
                            { title: "Design System", desc: "Component library, spacing rules, and typography — ready for pixel-perfect build.", icon: Layers, color: "text-yellow-500" },
                            { title: "Developer Handoff", desc: "Figma files with specs, assets, and annotations. Your devs love us.", icon: FileText, color: "text-pink-500" },
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
                        <h2 className="text-section text-black max-w-xl">From idea to blueprint.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "Sketch", desc: "We start with rough ideas. Napkin drawings, whiteboard scribbles — we get the bad ideas out fast so we can find the great ones.", icon: PenTool, color: "bg-orange-100", iconColor: "text-orange-600" },
                            { title: "Blueprint", desc: "We draw every single screen in high fidelity. You see exactly where every button, input, and modal goes before we write code.", icon: Layout, color: "bg-blue-100", iconColor: "text-blue-600" },
                            { title: "Prototype", desc: "We build a clickable version you can test on your phone. It looks and feels real, but it's just pictures. We iterate until it's perfect.", icon: Smartphone, color: "bg-violet-100", iconColor: "text-violet-600" },
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
                        <h2 className="text-section text-black max-w-xl">Why Buildify, not skipping wireframes.</h2>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Skip to Code</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Change Cost", buildify: "$0 (it's a drawing)", other: "$5-15k per revision" },
                                    { feature: "Stakeholder Buy-in", buildify: "Yes — they can test it", other: "Hope and prayer" },
                                    { feature: "Developer Clarity", buildify: "100% — every screen specced", other: "\"Figure it out\"" },
                                    { feature: "User Testing", buildify: "Before any code is written", other: "After $50k spent" },
                                    { feature: "Time to First Feedback", buildify: "3-5 days", other: "4-8 weeks" },
                                    { feature: "Design Consistency", buildify: "Enforced by system", other: "Varies by developer" },
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
                            { flag: "✏️", title: "\"Saved us $30k in rework.\"", desc: "We almost built a feature nobody wanted. The wireframe test proved it was confusing. We redesigned the flow in 2 hours instead of 2 months of code.", author: "Sophia L., PM @ GreenLeaf" },
                            { flag: "📲", title: "\"Investors loved the prototype.\"", desc: "We showed the clickable prototype in our pitch meeting. Investors could tap through the entire app. We closed the round that week.", author: "Daniel M., Founder @ Parkly" },
                            { flag: "🎯", title: "\"Our dev team shipped 2x faster.\"", desc: "When developers have clear wireframes, they don't waste time guessing. Our sprint velocity doubled after bringing Buildify in for blueprints.", author: "Maria G., CTO @ FitStack" },
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
                            { q: "What tool do you use for wireframes?", a: "Figma. We deliver fully organized Figma files with components, auto-layout, and developer handoff mode enabled." },
                            { q: "How long does it take?", a: "Most projects take 5-10 business days depending on the number of screens. A typical MVP is 20-40 screens." },
                            { q: "Can I test the prototype on my phone?", a: "Yes! We create a clickable Figma prototype that opens in your mobile browser. Your stakeholders can test the entire flow." },
                            { q: "Do you also do the development?", a: "Yes. Most clients hire us for wireframes + development together. The wireframe phase reduces overall project cost by 20-40% by eliminating rework." },
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
                        <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Let's Draw It.</h2>
                        <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                            Ready to see your idea on screen?
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

export default Wireframes;
