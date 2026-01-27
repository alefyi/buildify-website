import React from "react";
import { SEO } from "@/components/SEO";
import { JSONLD } from "@/components/Schema";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Terminal, Globe, Smartphone, Database, Zap, Shield, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceData: Record<string, { title: string; desc: string; icon: any; features: string[] }> = {
    "development": {
        title: "Development",
        desc: "We build high-performance web and mobile applications using modern stacks.",
        icon: Terminal,
        features: ["React & Next.js", "Native Mobile Apps", "Scalable Backend", "API Design"]
    },
    "market-analysis": {
        title: "Market Analysis",
        desc: "Research-driven insights to find your competitive advantage.",
        icon: Search,
        features: ["Competitor Benchmarking", "User Research", "Market Sizing", "Growth Strategy"]
    },
    "branding-identity": {
        title: "Branding & Identity",
        desc: "Create a visual language that resonates with your customers.",
        icon: Globe,
        features: ["Logo Design", "Style Guides", "Brand Voice", "Visual Assets"]
    },
    "wireframes-blueprints": {
        title: "Wireframes & Blueprints",
        desc: "Detailed technical documentation and UX architecture.",
        icon: Database,
        features: ["User Flows", "Interactive Mocks", "Technical Spec", "Infrastructure Plan"]
    },
    "next-versions": {
        title: "Next Versions",
        desc: "Iterative post-launch support and feature development.",
        icon: Zap,
        features: ["Maintenance", "Feature Expansion", "Performance Tuning", "Security Audits"]
    },
    "enterprise": {
        title: "Enterprise Solutions",
        desc: "Our dedicated link for established enterprise clients, separating complex requirements from the startup flow.",
        icon: Shield,
        features: ["High-Security Infrastructure", "Dedicated Support SLAs", "Legacy System Integration", "Global Scaling Architecture"]
    },
    "insights": {
        title: "Research-Driven Insights",
        desc: "Our 'Two Steps Ahead' data tracking and research-driven approach to business growth.",
        icon: Search,
        features: ["Real-time Data Tracking", "Industry Benchmarking", "Predictive Analytics", "Consumer Trend Reports"]
    }
};

export const ServicePage = () => {
    const { id } = useParams();
    const pathname = window.location.pathname.split("/").pop();
    const serviceId = id || pathname || "development";
    const service = serviceData[serviceId] || serviceData["development"];

    return (
        <div className="pt-24 pb-24 px-6 bg-white">
            <SEO
                title={service.title}
                description={service.desc}
                url={`https://usebuildify.com/${serviceId}`}
            />
            <JSONLD data={{
                "@context": "https://schema.org",
                "@type": "Service",
                "name": service.title,
                "description": service.desc,
                "provider": {
                    "@type": "Organization",
                    "name": "Buildify",
                    "url": "https://usebuildify.com"
                },
                "areaServed": "Global",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Features",
                    "itemListElement": service.features.map((feature, i) => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": feature
                        }
                    }))
                }
            }} />
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-12">
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{service.title}</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
                        {service.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {service.features.map((feature) => (
                        <div key={feature} className="p-8 border border-zinc-200 rounded-lg bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
                            <h4 className="font-bold text-lg mb-2">{feature}</h4>
                            <p className="text-sm text-zinc-500">Premium service standards for high-performance business applications.</p>
                        </div>
                    ))}
                </div>

                <div className="p-12 bg-black rounded-[4px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Ready to start?</h2>
                        <p className="text-zinc-400">Let's discuss how {service.title} can transform your business.</p>
                    </div>
                    <Link to="/contact">
                        <Button size="lg" className="bg-white text-black hover:bg-zinc-100 px-8">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
