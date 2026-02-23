import React, { useState } from "react";
import { AppIconPricing } from "@/components/AppIconPricing";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Minus, Smartphone, Star, Bell, Calendar, Sparkles, Activity, Heart, Headphones, ChevronDown, BookOpen, Users, Radio, CreditCard, Church } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BuildifyIcon } from "@/components/BuildifyIcon";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiChurch, BiMobileAlt, BiHeart } from "react-icons/bi";
import { FaithAuditTool } from "@/components/FaithAuditTool";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import { HeroPattern } from "@/components/HeroPattern";

const Faith = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Buildify for Churches & Ministries | Congregation App"
                description="Don't lose touch between services. We build custom mobile apps that keep your congregation engaged, inspired, and connected to their faith—every single day."
                url="https://usebuildify.com/faith"
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
                                Your{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-violet-50"><BiChurch className="w-3.5 h-3.5 text-violet-500" /></span></IconReveal>
                                {" "}ministry, <br />
                                in their{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiMobileAlt className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}pocket.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                Don't lose touch between services. We build custom mobile apps that keep your congregation engaged, inspired, and connected to their faith — every single day.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.3}>
                        <FaithAuditTool />
                    </FadeIn>
                </div>
            </Section>


            {/* 3.5. Pricing */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 pt-16 pb-20">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Simple, transparent pricing.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">One plan built for churches and ministries. No per-member fees, no surprises.</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
                            {/* Left: Pricing Card */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Faith</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="relative inline-flex items-baseline px-2 -mx-2">
                                        <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 rounded-sm" />
                                        <span className="relative text-base font-medium text-gray-500">$</span>
                                        <span className="relative text-4xl font-semibold text-gray-900">150</span>
                                        <span className="relative ml-2 text-sm text-gray-500">/mo</span>
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Everything your ministry needs.</p>

                                <ul className="mt-8 space-y-4">
                                    {[
                                        { title: "Simple contract", sub: "No 50-page legal docs. Just a clear, one-page agreement." },
                                        { title: "Cancel anytime", sub: "Month-to-month. Walk away whenever — no penalties." },
                                        { title: "No hidden fees", sub: "The price you see is the price you pay. Period." },
                                    ].map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-sm font-medium text-gray-800">{f.title}</span>
                                                <p className="text-xs font-normal text-gray-400 mt-0.5">{f.sub}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8">
                                    <Link to="/contact">
                                        <button className="bg-gray-900 text-white rounded-2xl px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                                            Get Started <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Wallpaper + App Icon */}
                            <div className="flex-1 w-full">
                                <AppIconPricing
                                    icon={Church}
                                    gradient="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"
                                    planName="Faith"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 4. Everything Your Congregation Needs */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Everything your congregation needs
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            From sermons to small groups, all in one dedicated app.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Sermons on the Go", desc: "Native media player for sermons, podcasts, and worship — listen anywhere.", icon: Radio, color: "text-blue-500" },
                            { title: "Push Prayers", desc: "Instant prayer requests and words of encouragement to entire community.", icon: Bell, color: "text-orange-500" },
                            { title: "One-Tap Giving", desc: "Secure recurring tithes and offerings without third-party redirects.", icon: CreditCard, color: "text-green-500" },
                            { title: "Daily Devotionals", desc: "Scriptures, reading plans, and pastoral blogs for every morning.", icon: BookOpen, color: "text-purple-500" },
                            { title: "Small Groups", desc: "Find, join, and message your local groups directly in the app.", icon: Users, color: "text-pink-500" },
                            { title: "Event Calendar", desc: "Service times, retreats, volunteer signups, and community events.", icon: Calendar, color: "text-yellow-500" },
                            { title: "AI Engagement", desc: "Understand which content resonates and when members are disengaging.", icon: Sparkles, color: "text-red-500" },
                            { title: "Support", desc: "Real humans in California, available to help your ministry succeed.", icon: Headphones, color: "text-cyan-500" },
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

            {/* Comparison Table — Ministry vs. Traditional */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Why ministries choose Buildify.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Premium quality. No template compromises.</p>
                    </FadeIn>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Buildify</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Template Apps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "Custom Branded App", buildify: "100% Custom", other: "White-label" },
                                    { feature: "Sermon Streaming", buildify: "Native Player", other: "Basic Player" },
                                    { feature: "Push Notifications", buildify: "Unlimited", other: "Limited" },
                                    { feature: "One-Tap Giving", buildify: "Integrated", other: "3rd Party Link" },
                                    { feature: "Daily Devotionals", buildify: "Included", other: "Not Included" },
                                    { feature: "Small Groups", buildify: "Full Messaging", other: "Basic" },
                                    { feature: "Code Ownership", buildify: "You Own It", other: "Platform-locked" },
                                    { feature: "Upfront Cost", buildify: "$0", other: "$5,000+" },
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

            {/* "Why Buildify" Differentiator for Faith */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Your message deserves better.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Your message is important. It shouldn't be delivered through a clunky, slow template.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        <FadeIn delay={0.1}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                                    <Smartphone className="w-4.5 h-4.5 text-blue-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Premium, Not Template</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Custom-coded apps that feel as fast and reliable as the biggest apps on the App Store. No white-label templates.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                    <Activity className="w-4.5 h-4.5 text-emerald-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">You Own the Code</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    No locked-in platforms. Your ministry owns the code 100%. If you ever want to move, you take everything with you.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-rose-100 rounded-xl flex items-center justify-center mb-5">
                                    <Heart className="w-4.5 h-4.5 text-rose-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Ministry, Not Expense</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Every dollar goes toward keeping your congregation connected, inspired, and growing in faith.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* "Take Your Faith Everywhere" */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Take your faith everywhere.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Faith doesn't stop when the service ends. Your app shouldn't either.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                        <FadeIn delay={0.1}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
                                    <Calendar className="w-4.5 h-4.5 text-violet-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Monday Through Saturday Connection</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    A dedicated space on their phone for daily devotionals, prayer requests, and community updates. Content that inspires throughout the week.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                                    <Heart className="w-4.5 h-4.5 text-amber-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">A Distraction-Free Zone</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    A safe, focused environment dedicated purely to spiritual growth — no ads, no algorithms, no distractions.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Common questions from ministry leaders.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "Do we need any technical staff?", a: "No. We build everything — the app, the content system, the giving integration. Your team focuses on ministry." },
                            { q: "Is there a contract?", a: "Just a simple one-page agreement. No long-term contracts — pause or cancel anytime. We earn your trust monthly." },
                            { q: "How is this different from Subsplash or Pushpay?", a: "We build a 100% custom app that your ministry owns — not a white-labeled template shared with thousands of other churches. It's faster, more reliable, and uniquely yours." },
                            { q: "Can we send push notifications?", a: "Unlimited push notifications. Prayer requests, daily devotionals, event reminders, emergency alerts — instantly to every member's phone." },
                            { q: "How does giving work?", a: "Secure, in-app giving with recurring tithe management and one-time offerings. No redirect to a third-party site. Members give in 2 taps." },
                            { q: "Will members actually download it?", a: "Yes — because it's YOUR app, not a generic platform. It's on the App Store under your church's name with your branding. Members download it because it's theirs." },
                            { q: "How fast can we launch?", a: "Most congregation apps launch within 2-3 weeks. We handle design, development, App Store submission, and compliance." },
                            { q: "Is our congregation's data secure?", a: "Yes. Enterprise-grade encryption, GDPR-compliant data handling, and your ministry controls all data access. Nothing is sold to third parties." }
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

            {/* 7. Final CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to connect?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Your congregation is waiting to take their faith beyond Sunday.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Get Started <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default Faith;
