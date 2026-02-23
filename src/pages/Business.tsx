import React, { useState } from "react";
import { AppIconPricing } from "@/components/AppIconPricing";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Minus, Smartphone, Star, Bell, Calendar, Sparkles, Activity, Link as LinkIcon, Headphones, ChevronDown, Monitor, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BuildifyIcon } from "@/components/BuildifyIcon";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiDollarCircle, BiGroup, BiBriefcase, BiStar } from "react-icons/bi";
import { BusinessAuditTool } from "@/components/BusinessAuditTool";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import { HeroPattern } from "@/components/HeroPattern";

const Business = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Buildify for Business | Solutions & Pricing"
                description="One simple price. Your entire technical team. No setup fees, no contracts, just results."
                url="https://usebuildify.com/business"
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
                                One{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiDollarCircle className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                                {" "}simple price. <br />
                                Your{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiGroup className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}entire{" "}
                                <IconReveal index={2}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-violet-50"><BiBriefcase className="w-3.5 h-3.5 text-violet-500" /></span></IconReveal>
                                {" "}tech team.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                Month-to-month. No long-term contracts. Just results. Enter your business URL to see what we can build for you.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.3}>
                        <BusinessAuditTool />
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
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">One plan. Everything included. No per-seat charges, no hidden fees.</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
                            {/* Left: Pricing Card */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Business</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="relative inline-flex items-baseline px-2 -mx-2">
                                        <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 rounded-sm" />
                                        <span className="relative text-base font-medium text-gray-500">$</span>
                                        <span className="relative text-4xl font-semibold text-gray-900">650</span>
                                        <span className="relative ml-2 text-sm text-gray-500">/mo</span>
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Full-service business technology.</p>

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
                                    icon={Briefcase}
                                    gradient="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
                                    planName="Business"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 4. What's Included */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Everything included, one price
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            No surprise fees. No add-ons. Everything your business needs to grow online.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Mobile App", desc: "Native iOS & Android app styled for your brand.", icon: Smartphone, color: "text-blue-500" },
                            { title: "Rewards", desc: "Digital loyalty system to drive repeat purchases.", icon: Star, color: "text-yellow-500" },
                            { title: "Notifications", desc: "Instant push alerts to your customers' phones.", icon: Bell, color: "text-orange-500" },
                            { title: "Events", desc: "Automated calendar for specials and events.", icon: Calendar, color: "text-purple-500" },
                            { title: "AI Insights", desc: "Dashboard to track trends and engagement.", icon: Sparkles, color: "text-pink-500" },
                            { title: "Analytics", desc: "Real-time user data and behavioral metrics.", icon: Activity, color: "text-green-500" },
                            { title: "No Upfront", desc: "Skip the $50k agency fee. Just pay monthly.", icon: LinkIcon, color: "text-red-500" },
                            { title: "Support", desc: "Real humans in California provided 24/7.", icon: Headphones, color: "text-cyan-500" },
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

            {/* Comparison Table */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Why business owners choose Buildify.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">See exactly what you're paying for.</p>
                    </FadeIn>

                    {/* Comparison Table */}
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
                                    { feature: "Branded Mobile App", buildify: "Included", other: "$20,000+" },
                                    { feature: "Rewards Program", buildify: "Included", other: "Paid Add-on" },
                                    { feature: "Instant Notifications", buildify: "Unlimited", other: "Extra Cost" },
                                    { feature: "Event Calendar", buildify: "Included", other: "Custom Dev" },
                                    { feature: "AI Insights Dashboard", buildify: "Included", other: "Not Included" },
                                    { feature: "Live User Analytics", buildify: "Real-time", other: "3rd Party Tool" },
                                    { feature: "Upfront Cost", buildify: "$0", other: "$50,000+" },
                                    { feature: "Support & Maintenance", buildify: "Included", other: "$150/hr" },
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

            {/* 5. Solutions by Industry */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Solutions by Industry.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Tailored strategies for your specific business model.</p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        {industries.filter(ind => ['restaurant', 'retail-store', 'appliance-repair-service'].includes(ind.slug)).map((industry, idx) => (
                            <FadeIn key={industry.slug} delay={0.1 + (idx * 0.1)} className="h-full">
                                <Link to={`/for/${industry.slug}`} className="group block h-full">
                                    <div className="bg-white border border-zinc-200 p-8 rounded-xl hover:border-black transition-all h-full flex flex-col">
                                        <div className="mb-4">
                                            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">{industry.name}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {industry.seo.description}
                                        </p>
                                        <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-wider">
                                            View Solution <ArrowRight className="ml-2 w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/industries">
                            <Button variant="outline" className="h-12 px-8">
                                View All Industries
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 6. FAQ Section (Home-style full-width accordion) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Common questions about the model and billing.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "Do I have to build the app?", a: "No. We build everything. You just provide the vision." },
                            { q: "Is there a contract?", a: "Just a simple one-page agreement. No long-term contracts — pause or cancel anytime." },
                            { q: "What if I need help?", a: "We provide 24/7 US-based support via Slack and Email." },
                            { q: "Are there really no setup fees?", a: "Zero. You pay $650/mo and we start building." },
                            { q: "Is hosting handling included?", a: "Yes. We cover AWS/Vercel hosting, SSL certificates, and scaling costs." },
                            { q: "Can I update the content myself?", a: "Absolutely. We include a CMS and Admin Dashboard for you to manage products/posts." },
                            { q: "How do you handle App Store rejection?", a: "We handle the entire submission process and fix any compliance issues for free." },
                            { q: "Will this help my SEO?", a: "Yes. We build with Next.js for perfect Core Web Vitals and include Schema markup by default." }
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

            {/* 6. Business Resources */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Business Resources</h2>
                            <Link
                                to="/insights"
                                className="text-sm font-semibold px-4 py-2 rounded-xl hover:bg-black/5 transition-all duration-300 hidden md:block"
                            >
                                View all →
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.filter(p => ['restaurant-roi-calculator-demo', 'technical-barriers-for-local-retail-shop-owners', 'technical-barriers-for-local-restaurant-owners'].includes(p.slug)).slice(0, 3).map((post, i) => {
                            const gradients = ["from-zinc-800 to-zinc-600", "from-blue-900 to-blue-700", "from-emerald-900 to-emerald-700"];
                            return (
                                <FadeIn key={post.slug} delay={i * 0.1}>
                                    <Link to={`/post/${post.slug}`} className="group block">
                                        <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${gradients[i % 3]} mb-4 overflow-hidden`}>
                                            <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                    <path d="M18 14h-8" />
                                                    <path d="M15 18h-5" />
                                                    <path d="M10 6h8v4h-8V6Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-sm text-zinc-400 mb-2">{post.date}</p>
                                        <h3 className="text-lg font-bold tracking-tight text-zinc-900 group-hover:text-black mb-2 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* 7. Final CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to launch?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Stop stressing about software. Start growing your business today.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Get Started <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div >
    );
};

export default Business;
