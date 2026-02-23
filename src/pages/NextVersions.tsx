import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, RefreshCw, Shield, Activity, ArrowRight, Server, Clock, Check, ChevronDown, Bug, BarChart3, Headphones, Code2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiCodeBlock, BiRevision } from "react-icons/bi";

const NextVersions = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Post-Launch Support"
                description="Software is never done. We keep it alive. Maintenance, updates, and scaling for your business."
                url="https://usebuildify.com/next-versions"
            />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            Software{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiCodeBlock className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}is never "done". <br className="hidden md:block" />
                            We keep it{" "}
                            <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiRevision className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                            {" "}alive.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Launch day is just day one. We stick around to fix bugs, add new features, and keep your business running smooth 24/7.
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
                        <h2 className="text-section text-black max-w-xl">What's included in every plan.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            A full operations team, not just a developer on standby.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "24/7 Monitoring", desc: "We watch your app around the clock. If something breaks, we know before you do.", icon: Activity, color: "text-green-500" },
                            { title: "Bug Fixes", desc: "Bugs happen. We squash them immediately — no hourly billing, no surprise invoices.", icon: Bug, color: "text-red-500" },
                            { title: "New Features", desc: "Users want new features. We build them. Your app keeps getting better every month.", icon: Zap, color: "text-yellow-500" },
                            { title: "Infrastructure", desc: "Too many users? Great problem. We scale the servers so you never crash.", icon: Server, color: "text-blue-500" },
                            { title: "Security Updates", desc: "We keep the hackers out. Dependencies patched, vulnerabilities scanned, always.", icon: Shield, color: "text-purple-500" },
                            { title: "Performance", desc: "We optimize queries, bundle sizes, and load times continuously. Faster every month.", icon: BarChart3, color: "text-cyan-500" },
                            { title: "Code Reviews", desc: "If you have in-house devs, we review their PRs to maintain quality standards.", icon: Code2, color: "text-orange-500" },
                            { title: "Priority Support", desc: "Real humans in California. Slack channel, 15-minute response for critical issues.", icon: Headphones, color: "text-pink-500" },
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

            {/* 3. The Cycle — Process Cards */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The ongoing cycle.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "Monitor", desc: "We proactively watch your app — uptime, error rates, performance metrics, and user behavior. If something degrades, we catch it before your users do.", icon: Activity, color: "bg-green-100", iconColor: "text-green-600" },
                            { title: "Fix & Improve", desc: "Every month we ship bug fixes, performance improvements, and new features from your backlog. You prioritize, we build. Simple.", icon: RefreshCw, color: "bg-blue-100", iconColor: "text-blue-600" },
                            { title: "Scale", desc: "As your user base grows, we add capacity. Auto-scaling policies, database sharding, CDN optimization — whatever it takes.", icon: Server, color: "bg-violet-100", iconColor: "text-violet-600" },
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
                        <h2 className="text-section text-black max-w-xl">Why Buildify, not DIY maintenance.</h2>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">In-House / Freelancer</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Response Time", buildify: "< 15 minutes (SLA)", other: "Next business day" },
                                    { feature: "Monitoring", buildify: "24/7 Automated", other: "Manual checks" },
                                    { feature: "Security Patches", buildify: "Same-day", other: "When remembered" },
                                    { feature: "Feature Development", buildify: "Monthly sprints", other: "As budget allows" },
                                    { feature: "Cost Model", buildify: "Flat monthly rate", other: "$150-250/hr" },
                                    { feature: "Knowledge Retention", buildify: "Full team coverage", other: "Single point of failure" },
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
                            { flag: "🛡️", title: "\"Zero downtime in 18 months.\"", desc: "Since we brought Buildify on for maintenance, we haven't had a single minute of unplanned downtime. Our previous vendor couldn't go 2 weeks.", author: "David S., VP Engineering @ MetroHealth" },
                            { flag: "📈", title: "\"They ship features faster than our team.\"", desc: "We get 2-3 new features every month now. Before, our in-house dev was shipping maybe 1 every quarter. The velocity difference is night and day.", author: "Rachel P., CEO @ Tutorly" },
                            { flag: "💰", title: "\"Saved us from hiring 2 engineers.\"", desc: "Buildify's flat rate costs us less than one junior engineer. But we get a full senior team — backend, frontend, devops. The math is absurd.", author: "Tom K., CTO @ ShipFast" },
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
                            { q: "What's included in the monthly plan?", a: "Bug fixes, security updates, performance monitoring, feature development, and priority support. Everything you need to keep your app running and growing." },
                            { q: "Can I cancel anytime?", a: "Yes. All plans are month-to-month. No long-term contracts, no cancellation fees. We earn your business every month." },
                            { q: "What if I need something urgent?", a: "Critical issues get a < 15-minute response time via our SLA. You'll have a dedicated Slack channel with our team." },
                            { q: "Do you work with apps you didn't build?", a: "Yes. We maintain apps built by other agencies, in-house teams, and freelancers. We'll do a quick code audit first to understand the codebase." },
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
                        <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Stay Online.</h2>
                        <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                            Ready for a partner, not just a vendor?
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

export default NextVersions;
