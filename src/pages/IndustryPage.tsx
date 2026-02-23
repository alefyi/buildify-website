import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { JSONLD, FAQSchema } from "@/components/Schema";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Quote, CheckCircle, TrendingUp, AlertCircle, Globe, ArrowUpRight, Database, X, ChevronDown } from "lucide-react";
import { useUseCases } from "@/hooks/useUseCases";
import { GrowthTool } from "@/components/GrowthTool";
import { getRichUseCase } from "@/data/rich-use-cases";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import { HeroPattern } from "@/components/HeroPattern";
import { cn } from "@/lib/utils";

const IndustryPage = () => {
    const { industry } = useParams();
    const { getUseCaseBySlug } = useUseCases();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const data = useMemo(() => {
        return getUseCaseBySlug(industry || "");
    }, [industry, getUseCaseBySlug]);

    const richData = useMemo(() => {
        return industry ? getRichUseCase(industry, data || null) : null;
    }, [industry, data]);

    const faqItems = useMemo(() => {
        if (!data) return [];
        const items = [
            {
                q: `What are the biggest growth challenges for a ${data.name}?`,
                a: data.problem.text
            },
            {
                q: `How does Buildify help ${data.name} businesses?`,
                a: data.solution.text
            }
        ];

        if (richData) {
            items.push({
                q: richData.strategicPlaybook.title,
                a: richData.strategicPlaybook.subtitle
            });

            if (richData.competitorComparison?.rows?.length > 0) {
                items.push({
                    q: `Why choose Buildify over traditional ${data.name} solutions?`,
                    a: `Traditional solutions often involve "${richData.competitorComparison.rows[0].oldWay}", whereas Buildify offers "${richData.competitorComparison.rows[0].buildifyWay}".`
                });
            }
        }
        return items;
    }, [data, richData]);

    if (!data) {
        return <Navigate to="/use-cases" replace />;
    }

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title={data.seo.title}
                description={data.seo.description}
                url={`https://usebuildify.com/for/${industry}`}
            />
            <FAQSchema items={faqItems} />
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

            {/* 1. Hero */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <div className="mb-12">
                        <FadeIn delay={0.1}>
                            <p className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-6">{data.name} Solutions</p>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05] max-w-4xl">
                                {data.hero.title}
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                {data.hero.subtitle}
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.3}>
                        <GrowthTool industryName={data.name} />
                    </FadeIn>
                </div>
            </Section>

            {/* 2. The Challenge */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Challenge</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Every {data.name.toLowerCase()} business faces the same growth bottlenecks.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <p className="text-xs font-bold uppercase tracking-wider text-red-500">Pain Point</p>
                            </div>
                            <p className="text-2xl md:text-3xl text-zinc-900 leading-tight font-medium italic">
                                "{data.problem.text}"
                            </p>
                            {richData?.deepContext && (
                                <div className="pt-8 mt-8 border-t border-zinc-200">
                                    <h5 className="font-bold text-lg mb-4">{richData.deepContext.title}</h5>
                                    {richData.deepContext.content}
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2.5 Competitor Comparison */}
            {richData && (
                <Section variant="full" className="">
                    <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                        <FadeIn>
                            <h2 className="text-section text-black max-w-xl">{richData.competitorComparison.title}</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">See exactly what you're getting.</p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="overflow-x-auto mt-14">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="py-3 pr-4 text-left text-sm font-medium text-gray-900">Feature</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">{richData.competitorComparison.columns[0]}</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">{richData.competitorComparison.columns[1]}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {richData.competitorComparison.rows.map((row, i) => (
                                            <tr key={i}>
                                                <td className="py-3 pr-4 text-sm font-medium text-gray-600">{row.feature}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">
                                                    <X className="inline w-4 h-4 mr-2 text-red-400" />
                                                    {row.oldWay}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-900">
                                                    <Check className="inline w-4 h-4 mr-2 text-green-600" />
                                                    {row.buildifyWay}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </FadeIn>
                    </div>
                </Section>
            )}

            {/* 3. The Solution */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">{data.solution.valueProp}</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            {data.solution.text}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            { title: `Tailored for ${data.name}`, desc: "Built specifically for your industry's needs." },
                            { title: "Rapid Implementation", desc: "Go from zero to live in weeks, not months." },
                            { title: "All-Inclusive Pricing", desc: "No hidden fees, no per-seat charges." },
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={0.2 + (i * 0.1)}>
                                <div className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-sm font-medium text-gray-800">{item.title}</span>
                                        <p className="text-xs font-normal text-gray-400 mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3.5 Strategic Playbook */}
            {richData && (
                <Section variant="full" className="">
                    <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                        <FadeIn>
                            <h2 className="text-section text-black max-w-xl">{richData.strategicPlaybook.title}</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">{richData.strategicPlaybook.subtitle}</p>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                            {richData.strategicPlaybook.cards.map((card, i) => (
                                <FadeIn key={i} delay={0.15 + (i * 0.1)}>
                                    <div className="flex flex-col gap-3">
                                        <card.icon className="w-8 h-8 text-zinc-400" />
                                        <h4 className="font-bold text-base tracking-tight">{card.title}</h4>
                                        <div className="text-sm text-zinc-500 leading-relaxed">
                                            {card.content}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* 4. Benefits / Impact */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">The Impact</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Why leading {data.name.toLowerCase()} businesses choose Buildify.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                        {[
                            { title: "Efficiency", desc: data.benefits[0], icon: ArrowUpRight, color: "text-blue-500" },
                            { title: "Growth", desc: data.benefits[1], icon: Globe, color: "text-green-500" },
                            { title: "Retention", desc: data.benefits[2], icon: TrendingUp, color: "text-purple-500" },
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

            {/* 5. Testimonial */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16 text-center">
                    <FadeIn>
                        <Quote className="w-8 h-8 text-zinc-200 mx-auto mb-6" />
                        <p className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight max-w-4xl mx-auto mb-8">
                            "{data.testimonial.quote}"
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="font-bold text-black">{data.testimonial.author}</span>
                            <span className="text-zinc-300">|</span>
                            <span className="text-zinc-500">{data.testimonial.business}</span>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 6. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Frequently asked questions</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Common questions about {data.name.toLowerCase()} solutions.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {faqItems.map((faq, i) => (
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
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to scale?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                            Join other {data.name.toLowerCase()} businesses growing with Buildify.
                        </p>
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

export default IndustryPage;
