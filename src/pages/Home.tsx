import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Globe, Smartphone, Database, AlertCircle, Check, ChevronDown, Briefcase, Church, Palette } from "lucide-react";
import { AppIconPricing } from "@/components/AppIconPricing";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GrowthTool } from "@/components/GrowthTool";

import { OrganizationSchema, WebsiteSchema } from "@/components/Schema";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { MeshGradientBackground } from "@/components/MeshGradientBackground";
import amcham from "@/assets/partners/amcham.webp";
import foundersFirst from "@/assets/partners/founders_first.webp";
import co100 from "@/assets/partners/co100.webp";
import chamber from "@/assets/partners/chamber.webp";
import vodafone from "@/assets/partners/vodafone.svg";
import tmobile from "@/assets/partners/tmobile.svg";
import { HeroPattern } from "@/components/HeroPattern";
import { Section } from "@/components/ui/section";
import { FadeIn, StaggerContainer, fadeInVariants } from "@/components/animations/FadeIn";


import { IconReveal } from "@/components/animations/IconReveal";
import { BiSolidTerminal, BiSolidPalette, BiSolidCheckCircle, BiSolidHappyAlt, BiSolidMagicWand, BiHeart, BiBarChartAlt2, BiTimeFive, BiGroup, BiNotification, BiFlag, BiPencil, BiBroadcast } from "react-icons/bi";

/* ── Pricing plan data ── */
const PRICING_PLANS = [
    {
        name: "Business",
        price: "650",
        subtitle: "Full-service business technology.",
        link: "/business",
        icon: Briefcase,
        gradient: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
        benefits: [
            { title: "Simple contract", sub: "No 50-page legal docs. Just a clear, one-page agreement." },
            { title: "Cancel anytime", sub: "Month-to-month. Walk away whenever — no penalties." },
            { title: "No hidden fees", sub: "The price you see is the price you pay. Period." },
        ],
    },
    {
        name: "Faith",
        price: "150",
        subtitle: "Everything your ministry needs.",
        link: "/faith",
        icon: Church,
        gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800",
        benefits: [
            { title: "Simple contract", sub: "No 50-page legal docs. Just a clear, one-page agreement." },
            { title: "Cancel anytime", sub: "Month-to-month. Walk away whenever — no penalties." },
            { title: "No hidden fees", sub: "The price you see is the price you pay. Period." },
        ],
    },
    {
        name: "Creator",
        price: "20",
        subtitle: "Your own domain, your own brand.",
        link: "/creators",
        icon: Palette,
        gradient: "bg-gradient-to-br from-orange-400 via-rose-500 to-pink-600",
        benefits: [
            { title: "Simple contract", sub: "No 50-page legal docs. Just a clear, one-page agreement." },
            { title: "Cancel anytime", sub: "Month-to-month. Walk away whenever — no penalties." },
            { title: "No hidden fees", sub: "The price you see is the price you pay. Period." },
        ],
    },
];

/* ── Pricing Carousel ── */
const PricingCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance every 5 seconds
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PRICING_PLANS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const plan = PRICING_PLANS[activeIndex];

    return (
        <div
            className="mt-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="flex flex-col md:flex-row gap-12 items-center min-h-[340px]">
                {/* Left: Benefits */}
                <div className="flex-1 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="relative inline-flex items-baseline px-2 -mx-2">
                                    <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 rounded-sm" />
                                    <span className="relative text-base font-medium text-gray-500">$</span>
                                    <span className="relative text-4xl font-semibold text-gray-900">{plan.price}</span>
                                    <span className="relative ml-2 text-sm text-gray-500">/mo</span>
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">{plan.subtitle}</p>

                            <ul className="mt-8 space-y-4">
                                {plan.benefits.map((f, i) => (
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
                                <Link to={plan.link}>
                                    <button className="bg-gray-900 text-white rounded-2xl px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: iPhone Mock */}
                <div className="flex-1 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={plan.name + "-phone"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <AppIconPricing
                                icon={plan.icon}
                                gradient={plan.gradient}
                                planName={plan.name}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-10">
                {PRICING_PLANS.map((p, i) => (
                    <button
                        key={p.name}
                        onClick={() => setActiveIndex(i)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                            i === activeIndex
                                ? "bg-black w-6"
                                : "bg-zinc-300 hover:bg-zinc-400"
                        )}
                        aria-label={`View ${p.name} pricing`}
                    />
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="High-Performance Business Tech"
                description="We build, brand, maintain, and support the tools your business runs on. Scalable web apps, mobile apps, and enterprise software."
                url="https://usebuildify.com"
            />
            <OrganizationSchema />
            <WebsiteSchema />

            {/* 1. The Hook (Hero) */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-section text-black mb-4 max-w-2xl">
                            We{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiSolidTerminal className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}build,{" "}
                            <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-violet-50"><BiSolidPalette className="w-3.5 h-3.5 text-violet-500" /></span></IconReveal>
                            {" "}brand, and{" "}
                            <IconReveal index={2}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiSolidCheckCircle className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                            {" "}support your people{" "}
                            <IconReveal index={3}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-yellow-50"><BiSolidHappyAlt className="w-3.5 h-3.5 text-yellow-500" /></span></IconReveal>
                            {" "}coming back. That's{" "}
                            <IconReveal index={4}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-rose-50"><BiSolidMagicWand className="w-3.5 h-3.5 text-rose-500" /></span></IconReveal>
                            {" "}tech made easy.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-base text-zinc-500 max-w-2xl leading-relaxed">
                            Buildify develops, maintains, and protects apps for everyone to manage their audience, without hiring a tech team or dealing with code. We handle everything.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="mt-12">
                            <GrowthTool />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. What We Do (UserJot-style) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16 ">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">
                            We stay on top of tech, so you don't have to.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-body-lg text-zinc-500 max-w-2xl mt-6">
                            We build brands, websites, apps, and software for creators, businesses, and ministries. People using Buildify <span className="font-semibold text-black">ship 3× faster</span> because they finally have a team that does it all, in one place.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            {
                                icon: BiHeart,
                                color: "text-pink-500",
                                title: "97% client retention",
                                desc: "Clients stay because we treat their product like our own"
                            },
                            {
                                icon: BiBarChartAlt2,
                                color: "text-green-500",
                                title: "3× faster launches",
                                desc: "Get to market in weeks while competitors wait months"
                            },
                            {
                                icon: BiTimeFive,
                                color: "text-blue-500",
                                title: "24/7 support",
                                desc: "Real engineers, not ticket bots. Always available"
                            },
                            {
                                icon: BiGroup,
                                color: "text-purple-500",
                                title: "Full team, one price",
                                desc: "Design, dev, branding, and support without the overhead"
                            }
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

            {/* 2.5. Our Partners */}
            {/* 2.5. Our Partners */}
            <Section variant="full" className="bg-white">
                <FadeIn delay={0.2} fullWidth>
                    <div className="max-w-layout mx-auto  bg-white py-10 md:py-16">
                        <div className="py-10 text-center">
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Partnered With</p>
                        </div>

                        <div className="relative w-full overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <div className="isolate flex w-max items-center gap-16 animate-scroll">
                                {[
                                    { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
                                    { name: "Zoom", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
                                    { name: "Disney", src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg" },
                                    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                                    { name: "Vodafone", src: vodafone },
                                    { name: "T-Mobile", src: tmobile },
                                    { name: "AmCham", src: amcham },
                                    { name: "Founders First", src: foundersFirst },
                                    { name: "CO100", src: co100 },
                                    { name: "Chamber", src: chamber },
                                    // Duplicate for seamless loop
                                    { name: "Cisco", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
                                    { name: "Zoom", src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
                                    { name: "Disney", src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg" },
                                    { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                                    { name: "Vodafone", src: vodafone },
                                    { name: "T-Mobile", src: tmobile },
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
                                            onError={(e) => {
                                                // Fallback if logo fails
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement!.innerText = partner.name;
                                                e.currentTarget.parentElement!.className = "flex items-center justify-center min-w-[120px] text-lg font-bold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-tight";
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 3. How We Help (UserJot-style) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16 ">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">
                            Everything you need to grow, all in one place
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-body-lg text-zinc-500 max-w-2xl mt-6">
                            Whether you're a creator, a business, or a ministry, Buildify brings design, development, and support together so you can stay focused on what matters most.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 mt-16">
                        {[
                            {
                                icon: BiNotification,
                                color: "text-orange-500",
                                title: "Custom websites",
                                desc: "A beautiful, fast website built to connect with your audience and turn visitors into loyal customers, members, or supporters."
                            },
                            {
                                icon: BiFlag,
                                color: "text-purple-500",
                                title: "Mobile apps",
                                desc: "Put your brand on their home screen. Send push notifications, build community, and keep people engaged with a dedicated app."
                            },
                            {
                                icon: BiPencil,
                                color: "text-green-500",
                                title: "Custom software",
                                desc: "Streamline your day to day with tools built around how you actually work. From internal dashboards to automated workflows, we build it for you."
                            },
                            {
                                icon: BiBroadcast,
                                color: "text-red-500",
                                title: "Design that builds trust",
                                desc: "First impressions matter. We craft polished, professional visuals that make people confident in choosing you."
                            }
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={0.15 + (i * 0.1)}>
                                <div className="flex flex-col gap-3">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                    <h4 className="text-card-title-sm">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3.5. Pricing Carousel */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 pt-16 pb-20">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Pricing that makes sense.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Flat monthly rates. No per-user fees, no hidden costs. Every plan includes everything you need.</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <PricingCarousel />
                    </FadeIn>
                </div>
            </Section>

            {/* 4. Social Proof (Testimonials) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16 ">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">
                            Don't take our word for it
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14 mt-16">
                        {[
                            {
                                flag: "🇺🇸",
                                title: "\"Buildify shipped our MVP in 3 weeks.\"",
                                desc: "We raised seed funding a month later. Having a polished product that early gave us a real edge with investors.",
                                author: "Alex Chen, Founder @ Nexus"
                            },
                            {
                                flag: "🇨🇦",
                                title: "\"The code quality is unmatched.\"",
                                desc: "It's rare to find a team that cares this much about the details. Every feature works exactly like we imagined it would.",
                                author: "Sarah Jones, CTO @ Flowstate"
                            },
                            {
                                flag: "🇲🇽",
                                title: "\"They think like partners.\"",
                                desc: "They don't just build what you ask for. They challenge ideas, suggest improvements, and genuinely care about your success.",
                                author: "Mike Ross, CEO @ Syntax"
                            }
                        ].map((item, i) => (
                            <FadeIn key={item.flag} delay={0.15 + (i * 0.1)}>
                                <div className="flex flex-col gap-4">
                                    <span className="text-card-title">{item.flag}</span>
                                    <h4 className="text-card-title-sm">{item.title}</h4>
                                    <p className="text-body text-zinc-500">{item.desc}</p>
                                    <p className="text-xs font-mono text-zinc-400 mt-1">{item.author}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.5}>
                        {/* Grant Program Card */}
                        <Link to="/uscc-grant" className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all duration-200 mt-16">
                            <div>
                                <span className="text-card-title">🇺🇸</span>
                                <h4 className="text-card-title-sm mt-3">The US CC Grant Program is open</h4>
                                <p className="text-body text-zinc-500 mt-2">Get funded to build your app. We partner with qualifying businesses and ministries to cover development costs.</p>
                            </div>
                            <p className="text-sm font-semibold text-black mt-4 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                Apply now <ArrowRight className="w-3.5 h-3.5" />
                            </p>
                        </Link>
                    </FadeIn>



                </div>
            </Section>

            {/* 5. Blog (Card Grid — UserJot style) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-section">Read Our Insights</h2>
                            <Link
                                to="/insights"
                                className="text-sm font-semibold px-4 py-2 rounded-xl hover:bg-black/5 transition-all duration-300"
                            >
                                View all →
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                slug: "why-modern-smb-systems-fail-to-scale",
                                date: "January 20, 2025",
                                title: "Why Modern SMB Systems Fail to Scale",
                                excerpt: "Most small-business tech stacks weren't built for growth. Here's why they break — and what to do about it.",
                                gradient: "from-zinc-800 to-zinc-600"
                            },
                            {
                                slug: "data-privacy-risks-boutique-law-firms",
                                date: "January 22, 2025",
                                title: "Data Privacy Risks for Boutique Law Firms",
                                excerpt: "Small firms face the same compliance requirements as large ones — with a fraction of the resources.",
                                gradient: "from-blue-900 to-blue-700"
                            },
                            {
                                slug: "revenue-recovery-orlando-auto-repair",
                                date: "January 23, 2025",
                                title: "Revenue Recovery for Auto Repair",
                                excerpt: "How a local auto shop recovered $40K in annual revenue by digitizing their service pipeline.",
                                gradient: "from-emerald-900 to-emerald-700"
                            },
                        ].map((post, i) => (
                            <FadeIn key={post.slug} delay={i * 0.1}>
                                <Link to={`/post/${post.slug}`} className="group block">
                                    {/* Placeholder image */}
                                    <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${post.gradient} mb-4 overflow-hidden`}>
                                        <div className="w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                <path d="M18 14h-8" />
                                                <path d="M15 18h-5" />
                                                <path d="M10 6h8v4h-8V6Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Date */}
                                    <p className="text-sm text-zinc-400 mb-2">{post.date}</p>
                                    {/* Title */}
                                    <h3 className="text-card-title-sm text-zinc-900 group-hover:text-black mb-2">
                                        {post.title}
                                    </h3>
                                    {/* Excerpt */}
                                    <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 6. FAQ (Accordion Style) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16 ">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-2xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-body-lg text-zinc-500 max-w-2xl mt-6">
                            Common questions about working with us.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "How fast can you build?", a: "We typically ship MVPs in 2-4 weeks using our pre-built core." },
                            { q: "Do I own the code?", a: "100%. You get the GitHub repo and all IP rights upon handover." },
                            { q: "What is the cost structure?", a: "We work on a fixed-project basis. No hourly billing surprises." },
                            { q: "Do you use WordPress or Squarespace?", a: "No. We build custom, high-performance web apps with Next.js and React." },
                            { q: "Can you handle high traffic (1M+ users)?", a: "Yes. Our architecture is serverless and auto-scales indefinitely on Vercel/AWS." },
                            { q: "Do you build mobile apps?", a: "Yes. We use React Native to ship to both iOS and Android from a single codebase." },
                            { q: "Can you redesign an existing app?", a: "Absolutely. We can take over legacy codebases or rebuild from scratch for better performance." },
                            { q: "Is SEO included?", a: "Yes. We bake in technical SEO, including OpenGraph tags, sitemaps, and Schema markup." },
                            { q: "Do you provide hosting?", a: "We set up your hosting on enterprise-grade platforms (Vercel, Railway, AWS). You own the account." },
                            { q: "What if I need updates later?", a: "We offer flexible monthly retainers for ongoing feature development content updates." },
                            { q: "Can you integrate with my CRM/Database?", a: "Yes. We build custom APIs to connect with Salesforce, HubSpot, Airtable, or any SQL/NoSQL DB." },
                            { q: "Where is the team based?", a: "We are a distributed team of senior engineers, primarily based in the US and Europe." },
                            { q: "How do we communicate?", a: "We use Slack for daily updates and have weekly video syncs to demo progress." },
                            { q: "Do you sign NDAs?", a: "Yes. We are happy to sign an NDA before discussing your intellectual property." }
                        ].map((faq, i) => (
                            <button
                                key={faq.q}
                                className="w-full text-left py-6 transition-colors group cursor-pointer focus:outline-none"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-card-title-sm">{faq.q}</h4>
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
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white to-transparent" />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-section mb-8">Launch by next week.</h2>
                        <p className="text-body-lg text-zinc-500 mb-12 max-w-lg mx-auto">Get your app live and ready by next Monday.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Launch Next Week <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div >
    );
};

export default Home;
