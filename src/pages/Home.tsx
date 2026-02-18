import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Globe, Smartphone, Database, AlertCircle, Check, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GrowthTool } from "@/components/GrowthTool";

import { OrganizationSchema, WebsiteSchema } from "@/components/Schema";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import amcham from "@/assets/partners/amcham.webp";
import foundersFirst from "@/assets/partners/founders_first.webp";
import co100 from "@/assets/partners/co100.webp";
import chamber from "@/assets/partners/chamber.webp";
import vodafone from "@/assets/partners/vodafone.svg";
import tmobile from "@/assets/partners/tmobile.svg";
import { HeroPattern } from "@/components/HeroPattern";
import { Section } from "@/components/ui/section";
import { FadeIn, StaggerContainer, fadeInVariants } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { CypherText } from "@/components/animations/CypherText";

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
            <Section variant="default" className="pt-20 md:pt-32 pb-32 border-b border-zinc-200 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-hero min-h-[1.2em]">
                            <CypherText text="We're what your competitors use." duration={1500} />
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
                            We build, brand, maintain, and support the tools your business runs on. All in one place to keep customers coming back.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="mt-16">
                            <GrowthTool />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. The Grid Mesh (Services & Problem) */}
            <Section variant="grid">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <FadeIn>
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4">What We Do</h3>
                                <p className="text-zinc-500 leading-relaxed">
                                    We provide the engineering power of a silicon valley team, at the cost of a freelancer.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-zinc-200">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-medium text-green-700 font-mono uppercase tracking-wider">Operational • 99.99% Uptime</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Staggered Grid Items */}
                    {[
                        { title: "No Secrets", desc: "You see every update, every day. No black boxes.", icon: Terminal },
                        { title: "Launch Fast", desc: "Get your business online in weeks, not months.", icon: ArrowUpRight },
                        { title: "You Own It", desc: "We build it, you keep it. 100% IP ownership.", icon: Database },
                        { title: "Growth Ready", Desc: "Built to handle 10 customers or 10 million.", icon: Globe }
                    ].map((item, i) => (
                        <FadeIn key={item.title} delay={0.1 + (i * 0.1)} className="h-full">
                            <div className="p-10 bg-white hover:bg-gradient-to-t hover:from-blue-50/40 hover:to-transparent transition-all duration-500 group h-full">
                                <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors mb-4" />
                                <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc || item.Desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* 2.5. Our Partners */}
            {/* 2.5. Our Partners */}
            <Section variant="full" className="bg-white border-b border-zinc-200">
                <FadeIn delay={0.2} fullWidth>
                    <div className="max-w-layout mx-auto border-x border-zinc-200 bg-white">
                        <div className="py-10 border-b border-zinc-200 text-center">
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

            {/* 3. Services Grid */}
            <Section variant="grid">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <FadeIn>
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4">How We Help</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    We build the tools that run your business.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-zinc-200">
                                <Link to="/development">
                                    <Button variant="outline" className="w-full rounded-md border-zinc-200">View Process</Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    {[
                        {
                            title: "Custom Websites",
                            desc: "A website that works like a 24/7 salesman. It doesn't just look good, it makes money."
                        },
                        {
                            title: "Mobile Apps",
                            desc: "Your logo on their phone home screen. Send push notifications directly to your customers."
                        },
                        {
                            title: "Company Software",
                            desc: "Stop using spreadsheets. We build custom software to automate your operations."
                        },
                        {
                            title: "World Class Design",
                            desc: "We make you look more expensive than you are. Trust is built on first impressions."
                        },
                    ].map((service, i) => (
                        <FadeIn key={service.title} delay={0.1 + (i * 0.1)} className="h-full">
                            <div className="p-10 bg-white hover:bg-gradient-to-t hover:from-blue-50/40 hover:to-transparent transition-all duration-500 group h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                                </div>
                                <p className="text-zinc-500 mb-8 text-sm leading-relaxed">{service.desc}</p>
                                <Link to="/development" className="text-sm font-medium flex items-center text-zinc-900 group-hover:underline underline-offset-4">
                                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* 4. Social Proof (Testimonials) */}
            <Section variant="full" className="bg-white border-b border-zinc-200">
                <div className="max-w-layout mx-auto border-x border-zinc-200">
                    <FadeIn className="bg-white p-10 border-b border-zinc-200">
                        <div className="flex items-center gap-2 mb-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Trusted By Founders</h2>
                        </div>
                        <p className="text-3xl font-bold tracking-tight text-black">Don't take our word for it.</p>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200">
                        {[
                            { text: "Buildify shipped our MVP in 3 weeks. We raised seed funding a month later.", author: "Alex Chen, Founder @ Nexus" },
                            { text: "The code quality is insane. It's rare to find an agency that cares this much.", author: "Sarah Jones, CTO @ Flowstate" },
                            { text: "They don't just build, they think. Strategic partners in every sense.", author: "Mike Ross, CEO @ Syntax" }
                        ].map((t) => (
                            <motion.div variants={fadeInVariants} key={t.author} className="p-10 bg-white hover:bg-zinc-50 transition-colors">
                                <p className="text-lg text-zinc-900 mb-6 leading-relaxed">"{t.text}"</p>
                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">- {t.author}</p>
                            </motion.div>
                        ))}
                    </StaggerContainer>
                </div>
            </Section>

            {/* 5. Blog (List View) */}
            <Section variant="full" className="bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-layout mx-auto px-6 border-x border-zinc-200 py-24 bg-white">
                    <FadeIn>
                        <div className="flex items-center justify-between mb-16 px-6">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold tracking-tight">Read Our Insights</h2>
                            </div>
                            <Link to="/insights">
                                <Button variant="outline" size="sm" className="rounded-md text-xs font-mono px-6">View all</Button>
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="w-full border-t border-zinc-200">
                        {[
                            { slug: "why-modern-smb-systems-fail-to-scale", date: "Jan 20", title: "Why Modern SMB Systems Fail to Scale" },
                            { slug: "data-privacy-risks-boutique-law-firms", date: "Jan 22", title: "Data Privacy Risks for Boutique Law Firms" },
                            { slug: "revenue-recovery-orlando-auto-repair", date: "Jan 23", title: "Revenue Recovery for Auto Repair" },
                        ].map((post, i) => (
                            <FadeIn key={post.slug} delay={i * 0.1}>
                                <div className="group relative flex items-center justify-between py-8 px-6 border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                                    <Link to={`/post/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
                                    <div className="space-y-1">
                                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wide">{post.date}</p>
                                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black">{post.title}</h3>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div >
            </Section >

            {/* 6. FAQ (Accordion Style) */}
            < Section variant="boxed" >
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50">
                        <FadeIn>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                            <p className="text-zinc-500">Common questions about working with us.</p>
                        </FadeIn>
                    </div>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
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
                                className="w-full text-left p-10 hover:bg-zinc-50 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
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
                            </button>
                        ))}
                    </div>
                </div>
            </Section >

            {/* 7. Final CTA */}
            <Section variant="full" className="py-32 border-t border-zinc-200 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Launch by next week.</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Get your app live and ready by next Monday.</p>
                        <Link to="/contact">
                            <Button size="lg" className="h-16 px-12 text-lg rounded-md bg-black text-white hover:bg-zinc-800 shadow-none">
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
