import React from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, MessageSquare, PenTool, Hammer, Heart, ArrowRight, Wrench, Server, Shield, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Development = () => {
    const steps = [
        {
            title: "The Chat",
            description: "We talk about what you need and who your customers are.",
            icon: MessageSquare
        },
        {
            title: "The Drawing",
            description: "We show you a simple plan of how the app will look and work.",
            icon: PenTool
        },
        {
            title: "The Build",
            description: "We do the hard work in the background. You get a text every week with an update.",
            icon: Hammer
        },
        {
            title: "The Hand-off & Support",
            description: "We put your app online and stay by your side to manage it 24/7.",
            icon: Heart
        }
    ];

    const includedItems = [
        {
            title: "We fix bugs",
            text: "If it breaks, we fix it. Period.",
            icon: Wrench
        },
        {
            title: "We manage servers",
            text: "We make sure your site never goes down.",
            icon: Server
        },
        {
            title: "We secure data",
            text: "We keep your customer information safe and private.",
            icon: Shield
        },
        {
            title: "We are a text away",
            text: "Human support 9-5. No robots, no confusing tickets.",
            icon: Smartphone
        }
    ];

    const techStack = [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Node.js", "Python", "Go", "PostgreSQL",
        "AWS", "Vercel", "Docker", "Kubernetes"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Development"
                description="We handle the tech stuff. You run your business. Simple, reliable software development."
                url="https://usebuildify.com/development"
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 md:pt-32 pb-32 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-12">
                        <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-[4px] flex items-center justify-center mb-10">
                            <Terminal className="w-6 h-6 text-black" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-black leading-[1.05]">
                            We handle the tech stuff. <br className="hidden md:block" />
                            You run your business.
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                            Most people find software confusing. We make it simple. We build your tools, keep them running, and fix things before you even notice—so you never have to think about "code" ever again.
                        </p>
                    </div>
                    <Link to="/contact">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* How We Work (4 Steps) */}
            <section className="py-32 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">How We Work</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Simple by Design</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
                        {steps.map((step, index) => (
                            <div key={index} className="p-10 bg-white hover:bg-zinc-50 transition-colors group h-full flex flex-col">
                                <span className="font-mono text-[10px] text-zinc-400 mb-8 block">0{index + 1}</span>
                                <step.icon className="w-8 h-8 text-black mb-6" />
                                <h3 className="text-xl font-bold tracking-tight mb-4 text-black">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Everything Included */}
            <section className="py-32 bg-white border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">Everything Included</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9]">Peace of Mind</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200">
                        {includedItems.map((item, index) => (
                            <div key={index} className="p-10 bg-white hover:bg-zinc-50 transition-colors group flex flex-col border border-transparent">
                                <item.icon className="w-6 h-6 text-zinc-400 mb-6 group-hover:text-black transition-colors" />
                                <h3 className="font-bold tracking-tight mb-2 text-black">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-32 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-20">
                        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                            The Gold Standard
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-[0.9]">Built to Last.</h2>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed tracking-tight">
                            You don't need to know how the engine works to drive the car. We use the most reliable tools in the world to make sure your business stays online, stays fast, and stays secure.
                        </p>
                    </div>

                    <div className="border border-zinc-200 bg-white p-12">
                        <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                            {techStack.map((tech) => (
                                <span key={tech} className="text-lg md:text-xl font-bold tracking-tight text-zinc-400 hover:text-black cursor-default transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                        Get Started
                    </Badge>
                    <h2 className="text-6xl font-bold mb-8 tracking-tighter leading-[0.9]">Simple. Fast. Done.</h2>
                    <p className="text-xl text-zinc-500 mb-12 max-w-lg mx-auto leading-relaxed">
                        Ready to hand off the tech work? Let's talk.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="h-16 px-10 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800">
                            Let's Chat <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Development;
