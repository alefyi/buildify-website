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
import { HeroPattern } from "@/components/HeroPattern";
import { Section } from "@/components/ui/section";

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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-hero">
                        We're what your competitors use.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
                        We build, brand, maintain, and support the tools your business runs on. All in one place to keep customers coming back.
                    </p>



                    <div className="mt-16">
                        <GrowthTool />
                    </div>
                </div>
            </Section>

            {/* 2. The Grid Mesh (Services & Problem) */}
            <Section variant="grid">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-md">
                                <AlertCircle className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">The Problem</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                Most agencies over-promise and under-deliver. Freelancers ghost. In-house teams get bogged down.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Status: FAILED</p>
                        </div>
                    </div>

                    {[
                        { title: "Transparency", desc: "No black boxes. You see every commit, every decision.", icon: Terminal },
                        { title: "Speed", desc: "MVP in weeks. We leverage battle-tested boilerplate.", icon: ArrowUpRight },
                        { title: "Ownership", desc: "Code quality that survives due diligence.", icon: Database },
                        { title: "Scale", desc: "Infrastructure ready for 1M+ users from Day 1.", icon: Globe }
                    ].map((item) => (
                        <div key={item.title} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors mb-4" />
                            <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 2.5. Our Partners */}
            {/* 2.5. Our Partners */}
            <Section variant="full" className="bg-white">
                <div className="max-w-layout mx-auto border-x border-zinc-200">
                    <div className="py-10 border-b border-zinc-200 bg-white text-center">
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Recognized By</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 bg-white border-b border-zinc-200">
                        {[amcham, foundersFirst, co100, chamber].map((logo, i) => (
                            <div key={i} className="flex items-center justify-center p-10 h-40">
                                <img
                                    src={logo}
                                    alt="Partner"
                                    width="160"
                                    height="48"
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. Services Grid */}
            <Section variant="grid">
                <div className="max-w-layout mx-auto grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-md">
                                <Smartphone className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">Our Expertise</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Full-stack capabilities for every stage of growth. From day one to IPO.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <Link to="/development">
                                <Button variant="outline" className="w-full rounded-md border-zinc-200">View Process</Button>
                            </Link>
                        </div>
                    </div>

                    {[
                        {
                            title: "Web Apps",
                            desc: "Scalable, high-performance web applications built with Next.js. Capable of handling 1M+ monthly active users with sub-100ms load times.",
                            tech: "Next.js",
                            link: "https://nextjs.org"
                        },
                        {
                            title: "Mobile Apps",
                            desc: "Native-quality iOS and Android apps using React Native. One codebase delivering 99.9% crash-free sessions across both platforms.",
                            tech: "React Native",
                            link: "https://reactnative.dev"
                        },
                        {
                            title: "Enterprise",
                            desc: "Robust backend systems designed for massive scale. Secure cloud architecture supporting 50k+ concurrent connections.",
                            tech: "Cloud"
                        },
                        {
                            title: "Product Design",
                            desc: "UI/UX that converts. Beautiful, functional, and user-centric interfaces designed in Figma to boost engagement.",
                            tech: "Figma",
                            link: "https://figma.com"
                        },
                    ].map((service) => (
                        <div key={service.title} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                                {service.link ? (
                                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                                        <Badge variant="outline" className="font-mono text-[10px] rounded-[2px] bg-zinc-100 border-zinc-200 text-zinc-500 uppercase hover:bg-zinc-200 cursor-pointer transition-colors">
                                            {service.tech}
                                        </Badge>
                                    </a>
                                ) : (
                                    <Badge variant="outline" className="font-mono text-[10px] rounded-[2px] bg-zinc-100 border-zinc-200 text-zinc-500 uppercase">
                                        {service.tech}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-zinc-500 mb-8 text-sm leading-relaxed">{service.desc}</p>
                            <Link to="/development" className="text-sm font-medium flex items-center text-zinc-900 group-hover:underline underline-offset-4">
                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4. Social Proof (Testimonials) */}
            <Section variant="full" className="bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-layout mx-auto border-x border-zinc-200">
                    <div className="bg-white p-10 border-b border-zinc-200">
                        <div className="flex items-center gap-2 mb-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Trusted By Founders</h2>
                        </div>
                        <p className="text-3xl font-bold tracking-tight text-black">Don't take our word for it.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200">
                        {[
                            { text: "Buildify shipped our MVP in 3 weeks. We raised seed funding a month later.", author: "Alex Chen, Founder @ Nexus" },
                            { text: "The code quality is insane. It's rare to find an agency that cares this much.", author: "Sarah Jones, CTO @ Flowstate" },
                            { text: "They don't just build, they think. Strategic partners in every sense.", author: "Mike Ross, CEO @ Syntax" }
                        ].map((t) => (
                            <div key={t.author} className="p-10 bg-white hover:bg-zinc-50 transition-colors">
                                <p className="text-lg text-zinc-900 mb-6 leading-relaxed">"{t.text}"</p>
                                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">- {t.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. Blog (List View) */}
            <Section variant="full" className="bg-white">
                <div className="max-w-layout mx-auto px-6 border-x border-zinc-200 py-24">
                    <div className="flex items-center justify-between mb-16 px-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-md uppercase">
                                Research
                            </Badge>
                            <h2 className="text-4xl font-bold tracking-tight">Latest Insights</h2>
                        </div>
                        <Link to="/posts">
                            <Button variant="outline" size="sm" className="rounded-md text-xs font-mono px-6">VIEW_ALL</Button>
                        </Link>
                    </div>

                    <div className="w-full border-t border-zinc-200">
                        {[
                            { slug: "how-to-make-an-app", date: "OCT 12", title: "How to build an app in 2026" },
                            { slug: "tech-stack-guide", date: "NOV 01", title: "Choosing the right tech stack" },
                            { slug: "hiring-developers", date: "NOV 15", title: "How much does it cost to hire an engineer?" },
                        ].map((post) => (
                            <Link key={post.slug} to={`/post/${post.slug}`} className="group block">
                                <div className="flex items-center justify-between py-10 border-b border-zinc-200 hover:bg-zinc-50 transition-colors px-6">
                                    <div className="flex items-center gap-12">
                                        <span className="text-xs font-mono text-zinc-500 w-20">{post.date}</span>
                                        <h3 className="text-xl font-medium text-zinc-900 group-hover:text-black tracking-tight">{post.title}</h3>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-black transition-all group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 6. FAQ (Accordion Style) */}
            <Section variant="boxed">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50">
                        <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                        <p className="text-zinc-500">Common questions about working with us.</p>
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
            </Section>

            {/* 7. Final CTA */}
            <Section variant="default" className="py-32 border-t border-zinc-200 bg-zinc-50">
                <div className="max-w-layout mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-md uppercase">
                        Get Started
                    </Badge>
                    <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to scale?</h2>
                    <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">We handle the tech so you can focus on the business.</p>
                    <Link to="/contact">
                        <Button size="lg" className="h-16 px-12 text-lg rounded-md bg-black text-white hover:bg-zinc-800 shadow-none">
                            Talk To Our Founders <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default Home;
