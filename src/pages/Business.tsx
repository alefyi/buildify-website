import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Minus, Smartphone, Star, Bell, Calendar, Sparkles, Activity, Link as LinkIcon, Headphones, ChevronDown, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BuildifyIcon } from "@/components/BuildifyIcon";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { CypherText } from "@/components/animations/CypherText";

const Business = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Buildify for Business | Solutions & Pricing"
                description="One simple price. Your entire technical team. No setup fees, no contracts, just results."
                url="https://usebuildify.com/business"
            />

            {/* 1. Hero Section (Centered Clean Card) */}
            <section className="pt-20 md:pt-32 pb-20 border-b border-zinc-200 bg-white relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase bg-zinc-50">
                        Zero Overhead
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.05] max-w-4xl mx-auto">
                        <CypherText text="One simple price." duration={1500} />
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Month-to-month. No long-term contracts. Just results.
                    </p>

                    {/* Horizontal Pricing Banner (Glow Effect) */}
                    <div className="w-full max-w-5xl mx-auto relative group p-[2px] overflow-hidden rounded-sm bg-zinc-200 transition-all duration-500">
                        {/* Glow Layers */}
                        <div className="absolute inset-[-200%] animate-border-glow glow-gradient glow-blur z-0" />
                        <div className="absolute inset-[-200%] animate-border-glow glow-gradient z-0 opacity-100" />

                        <div className="relative z-10 bg-white p-8 md:p-12 rounded-[1px] h-full w-full flex flex-col">

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                                {/* Left: Price */}
                                <div className="text-center md:text-left">
                                    <div className="flex items-baseline justify-center md:justify-start">
                                        <span className="text-7xl md:text-8xl font-bold tracking-tighter text-black leading-none">$650</span>
                                        <span className="text-xl text-zinc-400 ml-2 font-medium">/mo</span>
                                    </div>
                                    <p className="text-zinc-500 mt-2 text-sm leading-relaxed">Pause or cancel anytime.</p>
                                </div>

                                {/* Right: CTA */}
                                <div className="w-full md:w-auto flex-shrink-0">
                                    <Link to="/contact">
                                        <Button size="lg" className="w-full md:w-auto h-16 px-10 text-lg font-bold bg-black text-white hover:bg-zinc-800 rounded-sm shadow-none flex items-center justify-center gap-2">
                                            Let's meet <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <p className="text-xs text-zinc-400 mt-3 text-center md:text-right">No contracts. Cancel anytime.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 1.5 Solutions by Industry (New Section) */}
            <section className="bg-zinc-50 py-24 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">Solutions by Industry.</h2>
                        <p className="text-zinc-500 text-lg">Tailored strategies for your specific business model.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {industries.filter(i => ['restaurant', 'retail-store', 'appliance-repair-service'].includes(i.slug)).map((industry) => (
                            <Link key={industry.slug} to={`/for/${industry.slug}`} className="group block h-full">
                                <div className="bg-white border border-zinc-200 p-8 rounded-sm hover:border-black transition-all h-full flex flex-col">
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
            </section>

            {/* 2. Comparison Table (Light Mode - Feature Rich - With BuildifyIcon) */}
            <section className="bg-white py-24 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">Why business owners choose Buildify.</h2>
                        <p className="text-zinc-500 text-lg">See exactly what you're paying for.</p>
                    </div>

                    {/* Comparison Grid */}
                    <div className="w-full border border-zinc-200 rounded-sm overflow-hidden">
                        {/* Headers */}
                        <div className="grid grid-cols-1 md:grid-cols-4 bg-zinc-50 border-b border-zinc-200 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                            <div className="p-6 md:col-span-2 font-medium text-zinc-500 text-xs tracking-widest uppercase flex items-center">Feature</div>
                            <div className="p-6 text-center font-medium text-zinc-500 text-xs tracking-widest uppercase hidden md:block">Traditional Agency</div>
                            <div className="p-6 text-center font-bold text-black text-xs tracking-widest uppercase bg-zinc-100/50 flex items-center justify-center gap-2">
                                <BuildifyIcon className="w-5 h-5" gradient /> Buildify
                            </div>
                        </div>

                        {/* Rows */}
                        {[
                            {
                                title: "Branded Mobile App",
                                desc: "Your very own app, designed for repeat orders and customer loyalty.",
                                agency: "$20,000+",
                                buildify: "Included"
                            },
                            {
                                title: "Rewards Program",
                                desc: "Get more repeat business with a rewards system like major business chains.",
                                agency: "Paid Add-on",
                                buildify: "Included"
                            },
                            {
                                title: "Instant Notifications",
                                desc: "Post updates and engage customers without email spam filters or pricey SMS.",
                                agency: "Extra Cost",
                                buildify: "Unlimited"
                            },
                            {
                                title: "Event Calendar",
                                desc: "Easily add upcoming events, specials, and important dates.",
                                agency: "Custom Dev",
                                buildify: "Included"
                            },
                            {
                                title: "AI Insights Dashboard",
                                desc: "Understand customer trends, track engagement, and optimize marketing.",
                                agency: "Not Included",
                                buildify: "Included"
                            },
                            {
                                title: "Live User Analytics",
                                desc: "See in real time where your users are and what they like!",
                                agency: "3rd Party Tool",
                                buildify: "Real-time"
                            },
                            {
                                title: "Upfront Cost",
                                desc: "Get a custom-built app and website without the massive expense.",
                                agency: "$50,000+",
                                buildify: "$0"
                            },
                            {
                                title: "Support & Maintenance",
                                desc: "Our highly rated support team is always available (M-F 9-5).",
                                agency: "$150/hr",
                                buildify: "Included"
                            },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-4 group hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
                                {/* Feature Column */}
                                <div className="p-6 md:col-span-2 flex flex-col justify-center">
                                    <h3 className="font-bold text-zinc-900 text-base mb-1">{row.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{row.desc}</p>
                                </div>

                                {/* Agency Column (Mobile: Hidden or Inline?) -> Let's show clearly */}
                                <div className="p-4 md:p-6 flex items-center justify-between md:justify-center bg-white md:bg-transparent text-zinc-400 font-medium">
                                    <span className="md:hidden text-xs uppercase tracking-wider">Agency</span>
                                    <div className="flex items-center gap-2">
                                        {row.agency.includes("$") || row.agency === "Paid Add-on" ? <X className="w-4 h-4 text-red-300" /> : <Minus className="w-4 h-4" />}
                                        {row.agency}
                                    </div>
                                </div>

                                {/* Buildify Column */}
                                <div className="p-4 md:p-6 flex items-center justify-between md:justify-center bg-zinc-50/50 font-bold text-black border-l border-zinc-100">
                                    <span className="md:hidden text-xs uppercase tracking-wider">Buildify</span>
                                    <div className="flex items-center gap-2">
                                        {row.buildify === "Included" || row.buildify === "Unlimited" || row.buildify === "Real-time" || row.buildify === "$0" ? (
                                            <Check className="w-4 h-4 text-green-600" />
                                        ) : null}
                                        {row.buildify}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Mesh (Exact Home.tsx Style) */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    {[
                        { title: "Mobile App", desc: "Native iOS & Android app styled for your brand.", icon: Smartphone },
                        { title: "Rewards", desc: "Digital loyalty system to drive repeat purchases.", icon: Star },
                        { title: "Notifications", desc: "Instant push alerts to your customers' phones.", icon: Bell },
                        { title: "Events", desc: "Automated calendar for specials and events.", icon: Calendar },
                        { title: "AI Insights", desc: "Dashboard to track trends and engagement.", icon: Sparkles },
                        { title: "Analytics", desc: "Real-time user data and behavioral metrics.", icon: Activity },
                        { title: "No Upfront", desc: "Skip the $50k agency fee. Just pay monthly.", icon: LinkIcon },
                        { title: "Support", desc: "Real humans in California provided 24/7.", icon: Headphones },
                    ].map((item, i) => (
                        <div key={i} className="p-10 lg:p-16 bg-white hover:bg-zinc-50 transition-colors group h-full">
                            <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section (Home.tsx Style with Testimonial) */}
            <section className="max-w-[1200px] mx-auto border-x border-zinc-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                            <p className="text-zinc-500 mb-8">Common questions about the model and billing.</p>
                        </div>

                        {/* Social Proof (Integrated in Left Col) */}
                        <div className="bg-white p-6 border border-zinc-200 rounded-sm">
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-black text-black" />)}
                            </div>
                            <p className="text-xs font-medium text-zinc-900 leading-relaxed mb-4">
                                "We launched in 4 days. The speed was unbelievable."
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-[10px]">MC</div>
                                <div>
                                    <p className="text-[10px] font-bold text-black">Michael Chang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
                        {[
                            { q: "Do I have to build the app?", a: "No. We build everything. You just provide the vision." },
                            { q: "Is there a contract?", a: "No contracts. Pause or cancel anytime." },
                            { q: "What if I need help?", a: "We provide 24/7 US-based support via Slack and Email." },
                            { q: "Are there really no setup fees?", a: "Zero. You pay $650/mo and we start building." },
                            { q: "Is hosting handling included?", a: "Yes. We cover AWS/Vercel hosting, SSL certificates, and scaling costs." },
                            { q: "Can I update the content myself?", a: "Absolutely. We include a CMS and Admin Dashboard for you to manage products/posts." },
                            { q: "How do you handle App Store rejection?", a: "We handle the entire submission process and fix any compliance issues for free." },
                            { q: "Will this help my SEO?", a: "Yes. We build with Next.js for perfect Core Web Vitals and include Schema markup by default." }
                        ].map((faq, i) => (
                            <div
                                key={faq.q}
                                className="p-10 hover:bg-zinc-50 transition-colors group cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black",
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.5 Business Resources (New Section) */}
            <section className="py-24 border-b border-zinc-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Business Resources.</h2>
                            <p className="text-zinc-500 text-lg">Deep dives into ROI, retention, and growth.</p>
                        </div>
                        <Link to="/insights">
                            <Button variant="outline" className="h-12 px-8 hidden md:flex">
                                View All Articles
                            </Button>
                        </Link>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.filter(p => ['restaurant-roi-calculator-demo', 'technical-barriers-for-local-retail-shop-owners', 'technical-barriers-for-local-restaurant-owners'].includes(p.slug)).slice(0, 3).map((post) => (
                            <Link key={post.slug} to={`/post/${post.slug}`} className="group block">
                                <article className="flex flex-col h-full">
                                    <div className="aspect-video bg-zinc-100 mb-6 rounded-sm overflow-hidden border border-zinc-100">
                                        {/* Placeholder for post image if available, else generic pattern */}
                                        <div className="w-full h-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                                            <BuildifyIcon className="w-12 h-12 opacity-20" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3 uppercase tracking-wider font-medium">
                                        <span>{post.readingTime}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:underline decoration-1 underline-offset-4">
                                        {post.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto text-xs font-bold uppercase tracking-wider flex items-center">
                                        Read Article <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12 md:hidden">
                        <Link to="/insights">
                            <Button variant="outline" className="w-full h-12">
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section (Boxed Vercel Style - Correct Spacing) */}
            <section className="py-32 lg:py-48 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="bg-white border border-zinc-200 p-16 lg:p-24 text-center shadow-sm rounded-sm max-w-[900px] mx-auto">
                        <div className="mb-10 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] border border-zinc-200 text-zinc-600 rounded-sm uppercase inline-block bg-zinc-50">
                            Get Started
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-black leading-[0.95]">
                            Ready to launch?
                        </h2>
                        <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed">
                            Stop stressing about software. Start growing your business today.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="h-16 px-10 text-lg rounded-md bg-black text-white hover:bg-zinc-800 shadow-none">
                                Start My 7-Day Launch <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Business;
