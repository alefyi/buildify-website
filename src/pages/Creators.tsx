import React, { useState } from "react";
import { AppIconPricing } from "@/components/AppIconPricing";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { BioPageSchema } from "@/components/Schema";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Smartphone,
    Globe,
    ArrowRight,
    Search,
    MapPin,
    Layers,
    Zap,
    TrendingUp,
    Shield,
    Terminal,
    Check,
    ChevronDown,
    Palette
} from "lucide-react";
import { BioAuditTool } from "@/components/BioAuditTool";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiFingerprint, BiLink } from "react-icons/bi";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import { HeroPattern } from "@/components/HeroPattern";
import { cn } from "@/lib/utils";

const Creators = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Own Your Identity - Bio Page"
                description="Stop building your brand on a subdomain. Launch a high-performance, multi-page site on your own custom domain in under 48 hours."
                url="https://usebuildify.com/creators"
            />
            <BioPageSchema />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <div className="mb-12">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                                Own Your{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-violet-50"><BiFingerprint className="w-3.5 h-3.5 text-violet-500" /></span></IconReveal>
                                {" "}Identity. <br />
                                Not Just a{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiLink className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}Link.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                The "link-in-bio" is a relic of the past. Stop building your brand on a subdomain and start owning your digital real estate. Launch a high-performance, multi-page site on your own custom domain in under 48 hours.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.3}>
                        <BioAuditTool />
                    </FadeIn>
                </div>
            </Section>

            {/* 2. Pricing */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 pt-16 pb-20">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Simple, transparent pricing.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">One flat rate. No per-follower charges, no hidden upsells.</p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mt-12 flex flex-col md:flex-row gap-12 items-center">
                            {/* Left: Pricing Card */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900">Creator</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="relative inline-flex items-baseline px-2 -mx-2">
                                        <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 rounded-sm" />
                                        <span className="relative text-base font-medium text-gray-500">$</span>
                                        <span className="relative text-4xl font-semibold text-gray-900">20</span>
                                        <span className="relative ml-2 text-sm text-gray-500">/mo</span>
                                    </span>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">Your own domain, your own brand.</p>

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
                                    icon={Palette}
                                    gradient="bg-gradient-to-br from-orange-400 via-rose-500 to-pink-600"
                                    planName="Creator"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 3. Why Your Domain Matters — Features Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Why your domain matters
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Stop building someone else's brand equity. Own your digital real estate.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            {
                                title: "Owned Authority",
                                desc: "Stop being linktr.ee/you. Be you.com. Build equity in your own domain, not someone else's platform.",
                                icon: Globe,
                                color: "text-blue-500"
                            },
                            {
                                title: "AEO & GEO Ready",
                                desc: "Your content is structured for the AI era. We optimize for Answer Engine Optimization and Generative Engine Optimization so LLMs cite you.",
                                icon: Search,
                                color: "text-green-500"
                            },
                            {
                                title: "Hyper-Local Reach",
                                desc: "Native GEO-tagging ensures your pages rank where your audience lives.",
                                icon: MapPin,
                                color: "text-orange-500"
                            },
                            {
                                title: "Multi-Page Architecture",
                                desc: "Instead of a long list of buttons, give your audience a real experience with dedicated, lightning-fast pages for every project.",
                                icon: Layers,
                                color: "text-purple-500"
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

            {/* 4. Comparison Table */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The New Standard vs. Legacy Tools</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">See exactly how we compare.</p>
                    </FadeIn>

                    <div className="overflow-x-auto mt-14">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Our Platform</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Linktree / Bio.site</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: "URL Structure", buildify: "user.com", other: "platform.com/user" },
                                    { feature: "Architecture", buildify: "Full multi-page site", other: "Single-page scroll" },
                                    { feature: "SEO Focus", buildify: "SEO + AEO + GEO", other: "Basic Meta Tags" },
                                    { feature: "Indexing", buildify: "Individual Domain Authority", other: "Shared Domain Authority" },
                                    { feature: "Setup Time", buildify: "Live in 48 Hours", other: "Instant (Generic)" },
                                    { feature: "Price", buildify: "$20/mo (Flat)", other: "Free to $40+/mo" },
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

            {/* 5. Own Your Audience — UserJot style */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Own your audience. Own your revenue.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Every extra click in a user journey loses 30–50% of the audience. Stop leaking revenue through middleman platforms.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        <FadeIn delay={0.1}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center mb-5">
                                    <TrendingUp className="w-4.5 h-4.5 text-red-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">The 30% Leak</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Moving from a link list to yourname.com with deep-linked pages captures users who would otherwise bounce at the middleman.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                                    <Search className="w-4.5 h-4.5 text-blue-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Search Engine Dead-Ends</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Linktree pages are "no-index" with zero domain authority. When fans search, Google should show YOUR website.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                                    <Shield className="w-4.5 h-4.5 text-emerald-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">Platform Risk</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    You're renting your audience. A custom domain converts "rented" attention into "owned" equity you control forever.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 6. Discovery Stack — UserJot style */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Optimized for the 2026 Discovery Stack</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            When Perplexity, ChatGPT, or Gemini are asked about you, they don't crawl social bios — they crawl authoritative domains.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                        <FadeIn delay={0.1}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
                                    <Terminal className="w-4.5 h-4.5 text-violet-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">AEO-Native</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Structured sub-pages so AI agents can easily parse and cite your content in answers.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                                    <MapPin className="w-4.5 h-4.5 text-amber-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">GEO-Targeted</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Localize your landing pages for brand deals or events in specific cities automatically.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-zinc-50 rounded-2xl p-8 h-full">
                                <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                                    <Zap className="w-4.5 h-4.5 text-orange-600" />
                                </div>
                                <h3 className="text-base font-semibold mb-2">High Performance</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Sub-100ms load times. At 10k+ followers, a 1-second delay is a 10% drop in conversions.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 7. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">
                            Frequently asked questions
                        </h2>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "How is this different from Linktree?", a: "Linktree is a single page on their domain. We build a full multi-page site on YOUR domain — with SEO, AEO, and real analytics." },
                            { q: "Do I need technical skills?", a: "Zero. We handle everything — design, development, domain setup, and ongoing maintenance." },
                            { q: "How long does setup take?", a: "Most sites are live within 48 hours. We handle DNS, SSL, and deployment." },
                            { q: "Can I keep my existing links?", a: "Absolutely. We migrate all your links and create dedicated pages for each one — plus automatic redirects." },
                            { q: "What about analytics?", a: "Full conversion attribution, not just click counts. See exactly how visitors flow through your site and where they convert." },
                            { q: "Is there a contract?", a: "Just a simple one-page agreement. No long-term contracts — pay monthly, cancel anytime." }
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

            {/* 8. Final CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Stop leaving impressions on the table.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">I can analyze your current link-in-bio and show you exactly which 3 pages we should build first.</p>
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

export default Creators;
