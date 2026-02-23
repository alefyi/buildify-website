
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Database, Smartphone, CheckCircle, HelpCircle, ChevronDown, Check, Globe, Code2, Shield, Users, BarChart3, Headphones, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/FadeIn";

import { IconReveal } from "@/components/animations/IconReveal";
import { BiRocket, BiTrendingUp } from "react-icons/bi";

import { OrganizationSchema, FAQSchema } from '@/components/Schema';

const FAQS = [
    {
        q: "Why is my Adalo app listing loading so slowly?",
        a: "Slow lists usually happen when you filter data on the \"Client Side\" rather than the database level. If you have 1,000 users and filter for \"Status = Active\", Adalo might download all 1,000 records before hiding the inactive ones. We fix this by moving logic to backend queries or externalizing heavy data to Xano."
    },
    {
        q: "Can I publish to the Apple App Store and Google Play?",
        a: "Yes. Adalo supports native publishing, but the compliance process can be tricky. We handle the entire submission lifecycle, including Apple's strict 'Design Guidelines' and Google's recent '20 Tester' requirement for personal accounts."
    },
    {
        q: "Can I export my Adalo code to React Native?",
        a: "Adalo does not allow direct code export. However, Buildify specializes in \"Rebuilding to Scale.\" We map your exact Adalo database structure and rebuild the frontend in React Native in rapid sprints, preserving your user data while unlocking 10x performance."
    },
    {
        q: "How do I accept payments other than Stripe?",
        a: "Native Adalo only supports Stripe. To use PayPal, Razorpay, or others, we build a \"Custom Component\" or use a Webview bridge securely connected to the API. We have implemented this for clients in 12+ unsupported countries."
    },
    {
        q: "Does Adalo support Push Notifications?",
        a: "Yes, but advanced triggers (like 'Notify user when X happens') require custom setup via OneSignal or Make.com automation. We configure complex notification workflows that drive user retention."
    },
    {
        q: "Is my user data secure?",
        a: "We audit Adalo permissions to ensure users can only read their own data. For medical (HIPAA) or fintech apps, we architect a 'Split Stack' solution where sensitive data lives in Xano (compliant backend) and Adalo just serves as the visual interface."
    },
    {
        q: "My app crashes when too many users join. Why?",
        a: "This is often a \"Relationship Loop\" issue. If User A is linked to all \"Posts\" and the system tries to load User A's profile, it might try to load all associated Posts simultaneously. We optimize your database relationships to \"Lazy Load\" data only when needed."
    },
    {
        q: "Can you build a marketplace on Adalo?",
        a: "Absolutely. We have built 2-sided marketplaces (like Uber or Airbnb clones) on Adalo using advanced filtering and multi-user permissions. The key is in the database structure to keep buyer and seller data distinct."
    }
];

const Adalo = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Adalo Experts & Rescue"
                description="Fix performance issues, build custom components, and scale your Adalo app with certified experts. We save projects others give up on."
                url="https://usebuildify.com/adalo"
            />
            <OrganizationSchema />
            <FAQSchema items={FAQS} />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">


                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 max-w-4xl leading-[1.05]">
                            We{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiRocket className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}push Adalo <br className="hidden md:block" />
                            <span className="text-zinc-400">beyond the{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiTrendingUp className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                                {" "}limit.</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed">
                            Most agencies complain about Adalo's limitations. We engineer around them.
                            From complex databases to high-performance logic, we build what others can't.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Check My Adalo App <ArrowRight className="ml-2 w-5 h-5" />
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

            {/* 2. Everything Included — Icon Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            What we do for Adalo apps.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            We specialize in fixing the "unfixable" — performance, architecture, and native feel.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Performance Tuning", desc: "Cut list load times by 70% with collection caching and optimized queries.", icon: Zap, color: "text-yellow-500" },
                            { title: "Database Architecture", desc: "Restructure messy schemas. Xano integration for heavy data.", icon: Database, color: "text-blue-500" },
                            { title: "Native Feel", desc: "Advanced CSS tricks and custom components that look and feel like real code.", icon: Smartphone, color: "text-purple-500" },
                            { title: "App Store Publishing", desc: "Full submission lifecycle — Apple Guidelines, Google 20 Tester requirement.", icon: Globe, color: "text-green-500" },
                            { title: "Custom Components", desc: "Build functionality that doesn't exist natively — payments, maps, charts.", icon: Code2, color: "text-cyan-500" },
                            { title: "Security Audit", desc: "Ensure proper data permissions. HIPAA/fintech Split Stack architectures.", icon: Shield, color: "text-red-500" },
                            { title: "Scale Prep", desc: "Optimize relationship loops and lazy loading for 10,000+ user apps.", icon: Users, color: "text-orange-500" },
                            { title: "Ongoing Support", desc: "Real humans in California available for bug fixes and feature additions.", icon: Headphones, color: "text-pink-500" },
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

            {/* 3. Comparison Table */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Why Buildify, not a freelancer.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            There's a reason we're a Top 3 agency. See the difference.
                        </p>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Freelancer</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Adalo Forum Ranking", buildify: "Top 3 Expert", other: "Unknown" },
                                    { feature: "Average Fix Time", buildify: "1-3 days", other: "1-3 weeks" },
                                    { feature: "Custom Components", buildify: "Yes (100+ built)", other: "Rarely" },
                                    { feature: "Xano Integration", buildify: "Specialist", other: "Learning" },
                                    { feature: "App Store Publishing", buildify: "Full lifecycle", other: "Your problem" },
                                    { feature: "Post-Launch Support", buildify: "Included", other: "Extra $$$" },
                                    { feature: "Performance Guarantee", buildify: "Measurable SLA", other: "None" },
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

            {/* 4. Rescue Kit Differentiators */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Adalo Rescue Kit</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Three pillars of every Adalo recovery engagement.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        {[
                            { title: "Performance Tuning", desc: "Slow lists? Laggy buttons? We optimize collections and relationship logic to cut load times by 70%. Collection caching + external collections.", icon: Zap, color: "bg-yellow-100", iconColor: "text-yellow-600" },
                            { title: "Database Architecture", desc: "We restructure messy schemas that cause crashes, ensuring your data relationships scale with your users. Xano integration + schema normalization.", icon: Database, color: "bg-blue-100", iconColor: "text-blue-600" },
                            { title: "Native Feel", desc: "We use advanced CSS tricks and custom components to make Adalo look and feel like true native code. Custom actions + responsive fixes.", icon: Smartphone, color: "bg-violet-100", iconColor: "text-violet-600" },
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

            {/* 5. Testimonials */}
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
                                flag: "📱",
                                title: "\"They saved our app from the graveyard.\"",
                                desc: "Our Adalo app was crashing every time we hit 500 users. Buildify restructured our entire database and now we handle 5,000+ with zero lag.",
                                author: "Sarah Chen, Founder @ MealHub"
                            },
                            {
                                flag: "🚀",
                                title: "\"Published to both stores in 2 weeks.\"",
                                desc: "We'd been rejected by Apple 3 times. Buildify handled the compliance, fixed the design guidelines issues, and got us live on both stores.",
                                author: "Marcus Johnson, CEO @ FieldTrack"
                            },
                            {
                                flag: "💰",
                                title: "\"Custom payments in 12 countries.\"",
                                desc: "We needed Razorpay support in India — something Adalo doesn't do natively. Buildify built a custom bridge component that works perfectly.",
                                author: "Priya Sharma, CTO @ QuickDeliver"
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

            {/* 6. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Real questions we answer daily for frustrated founders on the Adalo forum.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {FAQS.map((faq, i) => (
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

            {/* 7. Final CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Fix your Adalo app.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Send us your app link. We'll diagnose the issues and give you a clear fix plan — free.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Check My App <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default Adalo;
