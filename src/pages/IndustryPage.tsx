import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { JSONLD } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Quote, CheckCircle, Terminal, Layers, TrendingUp, AlertCircle, Smartphone, Globe, Database, ArrowUpRight } from "lucide-react";
import { useUseCases } from "@/hooks/useUseCases";
import { Badge } from "@/components/ui/badge";
import { GrowthTool } from "@/components/GrowthTool";

const IndustryPage = () => {
    const { industry } = useParams(); // URL slug (e.g., 'accounting-firm')
    const { getUseCaseBySlug } = useUseCases();

    const data = useMemo(() => {
        return getUseCaseBySlug(industry || "");
    }, [industry, getUseCaseBySlug]);

    if (!data) {
        return <div className="py-40 text-center">
            <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
            <p className="text-zinc-500 mb-8">We couldn't find the use case for '{industry}'.</p>
            <Link to="/use-cases"><Button>View All Use Cases</Button></Link>
        </div>;
    }

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title={data.seo.title}
                description={data.seo.description}
                url={`https://usebuildify.com/${industry}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": `Buildify for ${data.name}`,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                    "@type": "Offer",
                    "price": "650",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "price": "650",
                        "priceCurrency": "USD",
                        "referenceQuantity": {
                            "@type": "QuantitativeValue",
                            "value": "1",
                            "unitCode": "MON"
                        }
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "12",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "description": data.seo.description
            }} />

            {/* 1. Hero (Matches Home.tsx Hero) */}
            <section className="pt-32 pb-32 border-b border-zinc-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-10">
                        <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase bg-zinc-50 mb-8">
                            {data.name} Solutions
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05] max-w-4xl">
                            {data.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
                            {data.hero.subtitle}
                        </p>
                    </div>
                    <div>
                        <GrowthTool industryName={data.name} />
                    </div>
                </div>
            </section>

            {/* 2. The Problem (Matches Home.tsx "The Grid Mesh") */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:col-span-1">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-[4px]">
                                <AlertCircle className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">The Challenge</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Every {data.name.toLowerCase()} business faces the same growth bottlenecks.
                            </p>
                        </div>
                    </div>

                    {/* Problem Statement as a wide card */}
                    <div className="p-10 lg:p-16 bg-white hover:bg-zinc-50 transition-colors lg:col-span-2 flex flex-col justify-center">
                        <h4 className="font-bold text-lg mb-6 tracking-tight text-red-600 uppercase text-xs font-mono">Pain Point</h4>
                        <p className="text-2xl md:text-3xl text-zinc-900 leading-tight font-medium italic">
                            "{data.problem.text}"
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. The Solution / Value Prop */}
            <section className="border-b border-zinc-200 bg-white">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 bg-white flex flex-col justify-center">
                        <div className="mb-6">
                            <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-green-200 text-green-700 bg-green-50 rounded-[4px] uppercase">
                                The Fix
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
                            {data.solution.valueProp}
                        </h2>
                        <div className="h-1 w-20 bg-green-500 rounded-full mt-4"></div>
                    </div>
                    <div className="p-10 lg:p-16 bg-zinc-50 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6">How it works</h3>
                        <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                            {data.solution.text}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
                                <span className="text-zinc-700 font-medium">Tailored for {data.name}</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0 mt-1" />
                                <span className="text-zinc-700 font-medium">Rapid Implementation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Benefits Grid (Matches Home.tsx Services Grid) */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-[4px]">
                                <TrendingUp className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">The Impact</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Why leading {data.name.toLowerCase()} businesses choose Buildify.
                            </p>
                        </div>
                    </div>

                    {[
                        { title: "Efficiency", desc: data.benefits[0], icon: ArrowUpRight },
                        { title: "Growth", desc: data.benefits[1], icon: Globe },
                        { title: "Retention", desc: data.benefits[2], icon: Database },
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                            <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Social Proof (Matches Home.tsx Partners/Testimonials) */}
            <section className="border-b border-zinc-200 bg-white">
                <div className="max-w-[1200px] mx-auto border-x border-zinc-200 bg-white p-10 lg:p-16 text-center">
                    <Quote className="w-8 h-8 text-zinc-300 mx-auto mb-6" />
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight max-w-4xl mx-auto mb-8">
                        "{data.testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span className="font-bold text-black">{data.testimonial.author}</span>
                        <span className="text-zinc-300">|</span>
                        <span className="text-zinc-500">{data.testimonial.business}</span>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA (Matches Home.tsx) */}
            <section className="py-32 border-t border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                        Get Started
                    </Badge>
                    <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        Ready to scale?
                    </h2>
                    <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                        Join other {data.name.toLowerCase()} businesses growing with Buildify.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-16 px-12 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800 shadow-none">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default IndustryPage;
