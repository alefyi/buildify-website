import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { BioPageSchema } from "@/components/Schema";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Smartphone,
    Globe,
    ArrowRight,
    Database,
    Search,
    MapPin,
    Layers,
    Layout,
    Zap,
    TrendingUp,
    Shield,
    Terminal,
    Check,
    ChevronDown
} from "lucide-react";
import { BioAuditTool } from "@/components/BioAuditTool";

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
            <section className="bg-white pt-20 md:pt-32 pb-24 border-b border-zinc-200 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-[4px] flex items-center justify-center mb-10">
                            <Smartphone className="w-6 h-6 text-black" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            Own Your Identity. <br />
                            Not Just a Link.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            The "link-in-bio" is a relic of the past. Stop building your brand on a subdomain and start owning your digital real estate. Launch a high-performance, multi-page site on your own custom domain in under 48 hours.
                        </p>
                    </div>

                    <BioAuditTool />
                </div>
            </section>

            {/* 2. Value Props (Why Your Domain Matters) */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    {[
                        {
                            title: "Owned Authority",
                            desc: "Stop being linktr.ee/you. Be you.com. Build equity in your own domain, not someone else’s platform.",
                            icon: Globe
                        },
                        {
                            title: "AEO & GEO Ready",
                            desc: "Your content is structured for the AI era. We optimize for Answer Engine Optimization and Generative Engine Optimization so LLMs cite you.",
                            icon: Search
                        },
                        {
                            title: "Hyper-Local Reach",
                            desc: "Native GEO-tagging ensures your pages rank where your audience lives.",
                            icon: MapPin
                        },
                        {
                            title: "Multi-Page Architecture",
                            desc: "Instead of a long list of buttons, give your audience a real experience with dedicated, lightning-fast pages for every project.",
                            icon: Layers
                        }
                    ].map((item) => (
                        <div key={item.title} className="p-10 lg:p-16 bg-white hover:bg-zinc-50 transition-colors group">
                            <item.icon className="w-8 h-8 text-zinc-400 group-hover:text-black transition-colors mb-6" />
                            <h3 className="text-2xl font-bold tracking-tight mb-4 text-black">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Comparison Table: The New Standard vs. Legacy Tools */}
            <section className="py-24 bg-white border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 mb-6">Comparison</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 leading-[0.9]">The New Standard vs. Legacy Tools</h2>
                    </div>

                    <div className="overflow-x-auto border border-zinc-200 rounded-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-200">
                                    <th className="p-6 font-mono text-xs text-zinc-500 uppercase tracking-wider w-1/4">Feature</th>
                                    <th className="p-6 font-mono text-xs text-zinc-500 uppercase tracking-wider w-1/3">Linktree / Bio.site</th>
                                    <th className="p-6 font-mono text-xs text-black uppercase tracking-wider font-bold bg-zinc-100 w-1/3">Our Platform</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                                {[
                                    { feature: "URL Structure", legacy: "platform.com/user", us: "user.com" },
                                    { feature: "Architecture", legacy: "Single-page scroll", us: "Full multi-page site" },
                                    { feature: "SEO Focus", legacy: "Basic Meta Tags", us: "SEO + AEO + GEO" },
                                    { feature: "Indexing", legacy: "Shared Domain Authority", us: "Individual Domain Authority" },
                                    { feature: "Setup Time", legacy: "Instant (Generic)", us: "Live in 48 Hours" },
                                    { feature: "Price", legacy: "Free to $40+/mo", us: "$20/mo (Flat)" }
                                ].map((row, i) => (
                                    <tr key={i} className="bg-white hover:bg-zinc-50 transition-colors">
                                        <td className="p-6 font-medium text-zinc-900">{row.feature}</td>
                                        <td className="p-6 text-zinc-500">{row.legacy}</td>
                                        <td className="p-6 font-bold text-black bg-zinc-50/50">{row.us}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. Creator Tier Section */}
            <section className="bg-black text-white py-24 border-b border-zinc-800">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full mb-8">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase">For 10k+ Followers</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            You are no longer a "user"—you are a media property.
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                            Continuing to host your primary call-to-action on a shared subdomain like linktr.ee/you is actively costing you revenue and reach.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact">
                                <Button className="h-12 px-6 bg-white text-black hover:bg-zinc-200 rounded-[4px]">
                                    Upgrade Infrastructure
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-sm">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <TrendingUp className="text-green-500 w-6 h-6" />
                            The 30% Leak
                        </h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Every extra click in a user journey loses approximately 30-50% of the audience. Moving from a single-page list to a dedicated user.com with deep-linked "Answer Pages" captures users who would otherwise bounce from a cluttered link list.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-black rounded-sm border border-zinc-800">
                                <Search className="w-5 h-5 text-zinc-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white text-sm mb-1">Search Engine Dead-Ends</h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">Linktree pages are often "no-index" or carry zero domain authority. When fans search, Google should show YOUR website.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-black rounded-sm border border-zinc-800">
                                <Shield className="w-5 h-5 text-zinc-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white text-sm mb-1">Platform Risk</h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">You are renting your audience. By directing them to a custom domain, you convert "rented" attention into "owned" equity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Comparison Table: Professional Infrastructure vs. Link Lists */}
            <section className="py-24 bg-white border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 mb-6">Infrastructure</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 leading-[0.9]">Professional Infrastructure vs. Link Lists</h2>
                    </div>

                    <div className="overflow-x-auto border border-zinc-200 rounded-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-200">
                                    <th className="p-6 font-mono text-xs text-zinc-500 uppercase tracking-wider w-1/4">Metric</th>
                                    <th className="p-6 font-mono text-xs text-zinc-500 uppercase tracking-wider w-1/3">Legacy Link-in-Bio</th>
                                    <th className="p-6 font-mono text-xs text-black uppercase tracking-wider font-bold bg-zinc-100 w-1/3">Custom AEO Engine</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200">
                                {[
                                    { metric: "Brand Equity", legacy: "Building Linktree's SEO", us: "Building Your Domain Authority" },
                                    { metric: "Searchability", legacy: "Invisible to Google/AI", us: "Ranked for AEO (AI Answers)" },
                                    { metric: "User Journey", legacy: "High Friction (Middleman)", us: "Native Experience (Direct)" },
                                    { metric: "Analytics", legacy: "Surface-level clicks", us: "Full Conversion Attribution" },
                                    { metric: "Growth Potential", legacy: "Capped by platform", us: "Unlimited Multi-Page Scale" }
                                ].map((row, i) => (
                                    <tr key={i} className="bg-white hover:bg-zinc-50 transition-colors">
                                        <td className="p-6 font-medium text-zinc-900">{row.metric}</td>
                                        <td className="p-6 text-zinc-500">{row.legacy}</td>
                                        <td className="p-6 font-bold text-black bg-zinc-50/50">{row.us}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 6. AEO/GEO/Performance Section */}
            <section className="bg-zinc-50 py-24 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">Optimized for the 2026 Discovery Stack</h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Traditional SEO is dead. When Perplexity, ChatGPT, or Gemini are asked about your recommendations, they don't crawl social bios—they crawl authoritative domains.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AEO-Native",
                                desc: "We structure your sub-pages so AI agents can easily parse and cite your content.",
                                icon: Terminal
                            },
                            {
                                title: "GEO-Targeted",
                                desc: "Localize your landing pages for brand deals or events in specific cities automatically.",
                                icon: MapPin
                            },
                            {
                                title: "High Performance",
                                desc: "Sub-100ms load times. Because at 10k+ followers, a 1-second delay is a 10% drop.",
                                icon: Zap
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-zinc-200 rounded-sm hover:border-black transition-colors duration-300 group">
                                <item.icon className="w-8 h-8 text-zinc-300 group-hover:text-black mb-6 transition-colors" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 7. CTA (Vercel Style) */}
            <section className="py-32 bg-white border-t border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
                    <div className="w-full max-w-[800px] border border-black bg-zinc-50 p-12 md:p-16 text-center rounded-none shadow-none">
                        <div className="mb-8 px-3 py-1 text-[10px] font-bold tracking-[0.2em] border border-black text-black rounded-sm uppercase inline-block">
                            Start Now
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-black leading-[0.9]">
                            Stop leaving impressions <br /> on the table.
                        </h2>
                        <p className="text-lg text-zinc-500 mb-10 max-w-lg mx-auto leading-relaxed">
                            I can analyze your current link-in-bio and show you exactly which 3 pages we should build first to recapture that lost traffic.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-sm bg-black text-white hover:bg-zinc-800 shadow-none border border-black">
                                Run Audit <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Creators;
