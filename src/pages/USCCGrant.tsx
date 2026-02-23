import React, { useState } from 'react';
import { IconReveal } from "@/components/animations/IconReveal";
import { BiGlobe, BiBoltCircle, BiDollarCircle } from "react-icons/bi";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { CheckCircle, ArrowRight, Building2, User, Globe, FileText, Server, CreditCard, ShieldCheck, HelpCircle, ChevronDown, ExternalLink, Terminal, ArrowUpRight, Database, Code, Zap, Layout as LayoutIcon } from "lucide-react";
import { USFlag } from "@/components/icons/USFlag";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/FadeIn";
import { HeroPattern } from "@/components/HeroPattern";

const GOOGLE_FORM_URL = import.meta.env.VITE_USCC_GRANT_FORM_URL || "#";

const USCCGrant = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            q: "Will Buildify, Deloitte, or the US Chamber of Commerce own any of my IP?",
            a: "No. You retain 100% ownership of your code, brand, and intellectual property. Buildify and our partners do not claim any equity or rights to your work. The grant covers the cost of labor, but the output belongs entirely to you."
        },
        {
            q: "Can I use this grant to build an app that harms people?",
            a: "No. We strictly prohibit the development of applications that promote hate speech, violence, harassment, or illegal activities. Buildify reserves the right to reject any project that violates our ethical guidelines or community standards."
        },
        {
            q: "Can I use this grant to build an app that defames people?",
            a: "No. Applications designed to libel, slander, or maliciously target individuals or organizations are not eligible. We support technology that empowers and connects, not divides."
        },
        {
            q: "Who is eligible to apply?",
            a: "The program is open to US-based small businesses, startups, and entrepreneurs. We prioritize applicants who can demonstrate a clear vision for how their technology will create positive economic or community impact."
        },
        {
            q: "Is there a cost to participate?",
            a: "The grant covers over $100,000 in development labor. However, selected partners are required to pay a flat operational retainer of $650/month. This fee covers server hosting, ongoing maintenance, and 24/7 support."
        },
        {
            q: "What specific services does the grant cover?",
            a: "The grant covers the engineering hours required to build your Minimum Viable Product (MVP). This includes UI/UX design implementation, frontend development (mobile/web), backend infrastructure setup, and deployment to app stores."
        },
        {
            q: "Do I need to be a member of the US Chamber of Commerce?",
            a: "No, membership is not required to apply. However, we encourage all small businesses to explore the resources available through the Chamber."
        },
        {
            q: "What technology stack do you use?",
            a: "We build using enterprise-grade, scalable technologies: React Native for mobile apps (iOS & Android), Next.js for web applications, and Google Cloud Platform / Firebase for the backend infrastructure."
        },
        {
            q: "Accreditation & Partners",
            a: "This program is authorized by the US Chamber of Commerce's CO100 program and delivered exclusively by Buildify's engineering team."
        },
        {
            q: "How long does the process take?",
            a: "Once accepted, most MVPs are designed, built, and launched within 4-6 weeks. The timeline depends on the complexity of your specific requirements and your responsiveness during the design phase."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Digital Impact Grant Information"
                description="Learn about the US Chamber of Commerce & Buildify Digital Impact Grant. Funding for American small business technology."
                noIndex={true}
            />

            {/* 1. Hero Section (Home Style) */}
            <Section variant="default" className="pt-20 md:pt-32 pb-32 border-b border-zinc-200 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <div className="max-w-4xl">
                        <FadeIn>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-hero min-h-[1.2em]">
                                Digital{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiGlobe className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}Impact{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-amber-50"><BiBoltCircle className="w-3.5 h-3.5 text-amber-500" /></span></IconReveal>
                                {" "}Grant{" "}
                                <IconReveal index={2}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiDollarCircle className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                                {" "}<USFlag className="h-10 md:h-16 w-auto rounded-sm shadow-sm inline-block ml-4 align-middle" />
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
                                We cover the development costs for apps that empower American businesses. Transform your idea into a scalable technology platform without the agency price tag.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                                    <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                        Apply Now <ExternalLink className="ml-2 w-5 h-5" />
                                    </Button>
                                </a>
                                <p className="text-zinc-500 text-sm">
                                    Takes ~5 mins via Google Forms
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 2. Value Props Grid (Grid Mesh Style) */}
            <Section variant="grid">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-md">
                                <CreditCard className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">Grant Benefits</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                Access enterprise-grade engineering resources usually reserved for venture-backed startups.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Status: ACCEPTING APPLICATIONS</p>
                        </div>
                    </div>

                    {[
                        { title: "$100k+ Value", desc: "We cover the full upfront engineering cost to build your MVP.", icon: Zap },
                        { title: "100% Ownership", desc: "You retain full IP rights. We take 0% equity in your business.", icon: ShieldCheck },
                        { title: "Enterprise Tech", desc: "Built on Google Cloud & React Native for massive scale.", icon: Server },
                        { title: "Rapid Launch", desc: "Go from concept to App Store in as little as 4-6 weeks.", icon: ArrowUpRight }
                    ].map((item, i) => (
                        <FadeIn key={item.title} delay={0.1 + (i * 0.1)}>
                            <div className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                                <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors mb-4" />
                                <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* 3. FAQ Section (Identical to Home) */}
            <Section variant="boxed">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <FadeIn>
                        <div className="p-10 bg-zinc-50">
                            <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                            <p className="text-zinc-500">Everything you need to know about eligibility and terms.</p>
                        </div>
                    </FadeIn>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
                        {faqs.map((faq, i) => (
                            <button
                                key={i}
                                className="w-full text-left p-10 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg pr-8">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black flex-shrink-0",
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
            </Section>

            {/* 4. Final CTA */}
            <Section variant="default" className="py-32 border-t border-zinc-200 bg-white">
                <div className="max-w-layout mx-auto px-6 text-center">
                    <FadeIn>
                        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-md uppercase">
                            Final Step
                        </Badge>
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to build?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                            Secure your grant and start building your future today.
                        </p>
                        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Start Application <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </a>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};

export default USCCGrant;
