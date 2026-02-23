import React from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, PenTool, Hammer, Heart, ArrowRight, Wrench, Server, Shield, Smartphone, Globe, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IconReveal } from "@/components/animations/IconReveal";
import { BiSolidTerminal, BiBriefcase } from "react-icons/bi";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/FadeIn";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { HeroPattern } from "@/components/HeroPattern";

const Development = () => {
    const steps = [
        {
            title: "The Chat",
            description: "We talk about what you need and who your customers are.",
            icon: MessageSquare,
            color: "text-blue-500"
        },
        {
            title: "The Drawing",
            description: "We show you a simple plan of how the app will look and work.",
            icon: PenTool,
            color: "text-purple-500"
        },
        {
            title: "The Build",
            description: "We do the hard work in the background. You get a text every week with an update.",
            icon: Hammer,
            color: "text-orange-500"
        },
        {
            title: "The Hand-off & Support",
            description: "We put your app online and stay by your side to manage it 24/7.",
            icon: Heart,
            color: "text-pink-500"
        }
    ];

    const includedItems = [
        {
            title: "We fix bugs",
            text: "If it breaks, we fix it. Period.",
            icon: Wrench,
            color: "text-red-500"
        },
        {
            title: "We manage servers",
            text: "We make sure your site never goes down.",
            icon: Server,
            color: "text-green-500"
        },
        {
            title: "We secure data",
            text: "We keep your customer information safe and private.",
            icon: Shield,
            color: "text-cyan-500"
        },
        {
            title: "We are a text away",
            text: "Human support 9-5. No robots, no confusing tickets.",
            icon: Smartphone,
            color: "text-yellow-500"
        }
    ];

    const techStack = [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Node.js", "Python", "Go", "PostgreSQL",
        "AWS", "Vercel", "Docker", "Kubernetes"
    ];

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Development"
                description="We handle the tech stuff. You run your business. Simple, reliable software development."
                url="https://usebuildify.com/development"
            />

            {/* Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">
                    <HeroPattern />
                    <div className="mb-12">
                        <FadeIn delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                                We handle the{" "}
                                <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiSolidTerminal className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                                {" "}tech stuff. <br className="hidden md:block" />
                                You run your{" "}
                                <IconReveal index={1}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50"><BiBriefcase className="w-3.5 h-3.5 text-emerald-500" /></span></IconReveal>
                                {" "}business.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-base text-zinc-500 max-w-2xl leading-relaxed mb-12">
                                Most people find software confusing. We make it simple. We build your tools, keep them running, and fix things before you even notice—so you never have to think about "code" ever again.
                            </p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.3}>
                        <Link to="/contact">
                            <Button size="sm" className="text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <p className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                            <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />Team in North America</span>
                            <span className="text-zinc-300">·</span>
                            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />9–5 Mon–Fri</span>
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* How We Work (4 Steps) */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Simple by Design</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Four steps from idea to launch. No jargon, no surprises.</p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={0.15 + (index * 0.1)}>
                                <div className="flex flex-col gap-3">
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                    <h4 className="font-bold text-base tracking-tight">{step.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Everything Included */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Peace of Mind</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">Everything included, nothing extra. We handle the full stack so you can focus on growth.</p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {includedItems.map((item, index) => (
                            <FadeIn key={index} delay={0.15 + (index * 0.1)}>
                                <div className="flex flex-col gap-3">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                    <h4 className="font-bold text-base tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Tech Stack */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                            The Gold Standard
                        </Badge>
                        <h2 className="text-section text-black max-w-xl">Built to Last.</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            You don't need to know how the engine works to drive the car. We use the most reliable tools in the world to make sure your business stays online, stays fast, and stays secure.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap gap-x-12 gap-y-8 mt-16">
                            {techStack.map((tech) => (
                                <span key={tech} className="text-lg md:text-xl font-bold tracking-tight text-zinc-400 hover:text-black cursor-default transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white to-transparent" />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-section mb-8">Simple. Fast. Done.</h2>
                        <p className="text-body-lg text-zinc-500 mb-12 max-w-lg mx-auto">Ready to hand off the tech work? Let's talk.</p>
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

export default Development;
