import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Server, ArrowRight, Activity, Globe, Lock, Code2, Database, ChevronDown, Terminal, Check, Headphones, Zap, BarChart3, Cloud, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiServer, BiCheckShield } from "react-icons/bi";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/FadeIn";
import { HeroPattern } from "@/components/HeroPattern";

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

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <div className="mb-12">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                                Big{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiServer className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}systems. <br />
                                Zero{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiCheckShield className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                                {" "}headaches.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                You have complex needs. We have simple solutions. We untangle your legacy mess and build systems that just work — without the enterprise bureaucracy.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.3}>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Book Technical Audit <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. Trust Bar (Partners) */}
            <Section variant="full" className="bg-white">
                <FadeIn delay={0.2} fullWidth>
                    <div className="max-w-layout mx-auto py-10 md:py-16">
                        <div className="py-10 text-center">
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Trusted Infrastructure Partner For</p>
                        </div>
                        <div className="relative w-full overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <div className="isolate flex w-max items-center gap-16 animate-scroll">
                                {[
                                    { name: "AmCham", src: amcham },
                                    { name: "Founders First", src: foundersFirst },
                                    { name: "CO100", src: co100 },
                                    { name: "Chamber", src: chamber },
                                    { name: "AmCham", src: amcham },
                                    { name: "Founders First", src: foundersFirst },
                                    { name: "CO100", src: co100 },
                                    { name: "Chamber", src: chamber },
                                ].map((partner, i) => (
                                    <div key={i} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-w-[120px]">
                                        <img
                                            src={partner.src}
                                            alt={partner.name}
                                            className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 3. Everything Included — Icon Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Enterprise-grade, without the enterprise price tag.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Everything your organization needs to modernize, all in one engagement.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Legacy Migration", desc: "We untangle your monolith and move you to a modern, scalable architecture.", icon: Database, color: "text-blue-500" },
                            { title: "Cloud Infrastructure", desc: "AWS, GCP, or Azure — we set up auto-scaling infra that handles millions.", icon: Cloud, color: "text-cyan-500" },
                            { title: "Security Audit", desc: "Bank-grade encryption, SOC 2 readiness, and penetration testing.", icon: Shield, color: "text-green-500" },
                            { title: "API Development", desc: "Build robust, documented APIs that your partners can integrate with.", icon: Code2, color: "text-purple-500" },
                            { title: "Performance", desc: "Sub-100ms response times. We optimize every query and endpoint.", icon: Zap, color: "text-yellow-500" },
                            { title: "Monitoring", desc: "Real-time dashboards, alerting, and anomaly detection built in.", icon: BarChart3, color: "text-orange-500" },
                            { title: "Team Augmentation", desc: "Embed our senior engineers with your existing team seamlessly.", icon: Users, color: "text-pink-500" },
                            { title: "24/7 SLA Support", desc: "Real humans in California. 15-minute response for critical issues.", icon: Headphones, color: "text-red-500" },
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

            {/* 4. Comparison Table */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Why enterprises choose Buildify.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">See exactly what you're paying for.</p>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Traditional Agency</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Setup Time", buildify: "2-4 weeks", other: "3-6 months" },
                                    { feature: "Upfront Cost", buildify: "$0", other: "$100,000+" },
                                    { feature: "Code Ownership", buildify: "100% Yours", other: "Often Licensed" },
                                    { feature: "SLA Response", buildify: "< 15 minutes", other: "24-48 hours" },
                                    { feature: "Team Size", buildify: "Full Stack Team", other: "1-2 Consultants" },
                                    { feature: "Cloud Setup", buildify: "Included", other: "$50k+ Add-on" },
                                    { feature: "Security Audit", buildify: "Included", other: "$25k+ Separate" },
                                    { feature: "Ongoing Support", buildify: "Included", other: "$200/hr Retainer" },
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

            {/* 5. Strategy Bento Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Buildify Process</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            We don't just patch bugs. We re-architect for scale.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "The Audit", desc: "Deep dive into your legacy code. We find the bottlenecks, security risks, and scaling limits before writing a single line.", icon: Terminal, color: "bg-violet-100", iconColor: "text-violet-600" },
                            { title: "The Plan", desc: "Architecture designed for millions of concurrent users. We map the migration path with zero-downtime guarantees.", icon: Globe, color: "bg-blue-100", iconColor: "text-blue-600" },
                            { title: "The Migration", desc: "Zero-downtime transition to modern infrastructure. Your users never notice. Your engineers celebrate.", icon: Server, color: "bg-emerald-100", iconColor: "text-emerald-600" },
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

            {/* 6. Standards Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Rock solid standards.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Non-negotiable guarantees on every enterprise engagement.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                        <FadeIn delay={0.1}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                                    <Server className="w-4.5 h-4.5 text-blue-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">99.9% Uptime</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    It never goes down. We guarantee it with real SLAs, not just words. Automated failover, multi-region deployment.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                    <Lock className="w-4.5 h-4.5 text-emerald-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Bank-Grade Security</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    We keep your customer data safe and locked down. AES-256 encryption at rest and in transit. SOC 2 Type II ready.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 7. Testimonials */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">
                            Don't take our word for it
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {[
                            {
                                flag: "🏢",
                                title: "\"They migrated our entire stack in 3 weeks.\"",
                                desc: "Our legacy Rails monolith was falling apart. Buildify moved us to a modern microservices architecture with zero downtime. Our p95 latency dropped from 2s to 80ms.",
                                author: "David Kim, VP Engineering @ Nexus Logistics"
                            },
                            {
                                flag: "🔒",
                                title: "\"SOC 2 ready in half the time.\"",
                                desc: "We needed SOC 2 compliance for an enterprise deal. Buildify implemented every control, documented everything, and got us audit-ready in 4 weeks instead of 4 months.",
                                author: "Rachel Torres, CTO @ Vantage Health"
                            },
                            {
                                flag: "⚡",
                                title: "\"10x the output, 1/3 the cost.\"",
                                desc: "We replaced a 6-person consulting engagement with Buildify. The velocity tripled and the monthly cost dropped by two-thirds. Best decision we made.",
                                author: "James Wright, CEO @ Axiom Partners"
                            }
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

            {/* 8. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Common questions about our enterprise engagement.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "Do you sign NDAs?", a: "Yes. We sign standard mutual NDAs before any code review or discussion of proprietary systems." },
                            { q: "What happens if the site goes down?", a: "Our SLA guarantees response times under 15 minutes for critical outages. We have automated alerting and on-call engineers 24/7." },
                            { q: "Can we inherit the codebase later?", a: "Absolutely. We build for handover. You get full documentation, training, and the GitHub repo. Your team can take over at any point." },
                            { q: "Do you work with onsite teams?", a: "Yes. We can embed with your existing team or operate as a standalone unit. We adapt to your workflow, not the other way around." },
                            { q: "What's the minimum engagement?", a: "We typically work on 3-month engagements for enterprise projects. This gives us enough time to audit, plan, and execute a meaningful migration." },
                            { q: "How do you handle compliance?", a: "We build with SOC 2, HIPAA, and GDPR compliance in mind from day one. We don't bolt it on after — it's baked into the architecture." },
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

            {/* 9. Final CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Stop technical debt.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Book a free technical audit. We'll tell you exactly what's wrong and how to fix it.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Book Audit <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default Enterprise;
