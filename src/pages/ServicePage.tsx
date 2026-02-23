import React from "react";
import { SEO } from "@/components/SEO";
import { JSONLD } from "@/components/Schema";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Terminal, Globe, Smartphone, Database, Zap, Shield, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";


const serviceData: Record<string, { title: string; desc: string; icon: any; features: { name: string; desc: string }[] }> = {
    "development": {
        title: "Development",
        desc: "We build high-performance web and mobile applications using modern stacks.",
        icon: Terminal,
        features: [
            { name: "React & Next.js", desc: "Server-rendered, blazing-fast frontends that rank on Google." },
            { name: "Native Mobile Apps", desc: "iOS and Android apps built with React Native — one codebase, two platforms." },
            { name: "Scalable Backend", desc: "Firebase, Node.js, and cloud infrastructure that handles millions." },
            { name: "API Design", desc: "Clean, documented REST and GraphQL APIs your partners can integrate with." },
        ]
    },
    "market-analysis": {
        title: "Market Analysis",
        desc: "Research-driven insights to find your competitive advantage.",
        icon: Search,
        features: [
            { name: "Competitor Benchmarking", desc: "Full teardown of your top competitors' pricing, features, and traffic." },
            { name: "User Research", desc: "We define your ideal customer with psychographic precision." },
            { name: "Market Sizing", desc: "TAM, SAM, SOM — with real data sources, not guesses." },
            { name: "Growth Strategy", desc: "Actionable go-to-market plan for your first 1,000 users." },
        ]
    },
    "branding-identity": {
        title: "Branding & Identity",
        desc: "Create a visual language that resonates with your customers.",
        icon: Globe,
        features: [
            { name: "Logo Design", desc: "Main logo, icon variant, and wordmark — optimized for every medium." },
            { name: "Style Guides", desc: "Colors, fonts, and usage rules in a downloadable PDF playbook." },
            { name: "Brand Voice", desc: "Tone, messaging, and copy guidelines that make your brand consistent." },
            { name: "Visual Assets", desc: "Social templates, app icons, and email signatures — all on-brand." },
        ]
    },
    "wireframes-blueprints": {
        title: "Wireframes & Blueprints",
        desc: "Detailed technical documentation and UX architecture.",
        icon: Database,
        features: [
            { name: "User Flows", desc: "Complete journey mapping from sign up to conversion." },
            { name: "Interactive Mocks", desc: "Clickable Figma prototypes you can test on your phone." },
            { name: "Technical Spec", desc: "Database schemas, API endpoints, and architecture diagrams." },
            { name: "Infrastructure Plan", desc: "Cloud architecture, CI/CD pipelines, and scaling strategy." },
        ]
    },
    "next-versions": {
        title: "Next Versions",
        desc: "Iterative post-launch support and feature development.",
        icon: Zap,
        features: [
            { name: "Maintenance", desc: "24/7 monitoring, bug fixes, and dependency updates." },
            { name: "Feature Expansion", desc: "Monthly sprints to add new features from your backlog." },
            { name: "Performance Tuning", desc: "Continuous optimization for speed, SEO, and user experience." },
            { name: "Security Audits", desc: "Quarterly penetration testing and vulnerability scanning." },
        ]
    },
    "enterprise": {
        title: "Enterprise Solutions",
        desc: "Our dedicated link for established enterprise clients, separating complex requirements from the startup flow.",
        icon: Shield,
        features: [
            { name: "High-Security Infrastructure", desc: "SOC 2, HIPAA, and GDPR compliance baked into the architecture." },
            { name: "Dedicated Support SLAs", desc: "15-minute response times with on-call engineers 24/7." },
            { name: "Legacy System Integration", desc: "We connect your modern frontend to your existing backend." },
            { name: "Global Scaling Architecture", desc: "Multi-region deployment with automated failover." },
        ]
    },
    "insights": {
        title: "Research-Driven Insights",
        desc: "Our 'Two Steps Ahead' data tracking and research-driven approach to business growth.",
        icon: Search,
        features: [
            { name: "Real-time Data Tracking", desc: "Live dashboards showing your key metrics and trends." },
            { name: "Industry Benchmarking", desc: "See how you stack up against your competitors." },
            { name: "Predictive Analytics", desc: "Forecast growth, churn, and revenue with ML models." },
            { name: "Consumer Trend Reports", desc: "Monthly reports on emerging trends in your market." },
        ]
    }
};

export const ServicePage = () => {
    const { id } = useParams();
    const pathname = window.location.pathname.split("/").pop();
    const serviceId = id || pathname || "development";
    const service = serviceData[serviceId] || serviceData["development"];

    return (
        <div className="flex flex-col min-h-screen bg-white">
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
                    "itemListElement": service.features.map((feature) => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": feature.name
                        }
                    }))
                }
            }} />

            {/* Hero */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            {service.title}
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            {service.desc}
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </Section>

            {/* Features Grid */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">What's included.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
                        {service.features.map((feature, i) => (
                            <FadeIn key={feature.name} delay={0.1 + (i * 0.1)}>
                                <div className="bg-zinc-50 rounded-2xl p-8 h-full hover:bg-zinc-100 transition-colors">
                                    <div className="w-9 h-9 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-5">
                                        <Check className="w-4.5 h-4.5 text-green-600" />
                                    </div>
                                    <h4 className="text-base font-semibold mb-2">{feature.name}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Testimonial */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <div className="bg-zinc-50 rounded-2xl p-12 md:p-16">
                            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-8 max-w-3xl">
                                "Buildify didn't just build our app — they became our technical co-founder. The quality of work is enterprise-grade at a fraction of the cost."
                            </p>
                            <p className="text-xs font-mono text-zinc-400">— Fred Cary, CEO @ IdeaPros</p>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to start?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">Let's discuss how {service.title} can transform your business.</p>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default ServicePage;
