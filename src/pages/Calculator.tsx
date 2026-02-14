import React, { useState, useMemo } from "react";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Check, ArrowRight, RefreshCcw, DollarSign, Calculator as CalculatorIcon, Zap } from "lucide-react";

type Option = {
    id: string;
    label: string;
    cost: number;
    description?: string;
};

type Question = {
    id: string;
    title: string;
    options: Option[];
};

// Startup: "Tactical, Non-Technical"
const questionsStartup: Question[] = [
    {
        id: "platform",
        title: "Where should your app live?",
        options: [
            { id: "mobile", label: "On the iPhone App Store", cost: 12000, description: "I want a downloadable mobile app." },
            { id: "web", label: "On the Web (Website)", cost: 8000, description: "I want a site like Airbnb or Facebook." },
            { id: "both", label: "Both Web & Mobile", cost: 18000, description: "I need to be everywhere." },
        ]
    },
    {
        id: "users",
        title: "Will people need to log in?",
        options: [
            { id: "no", label: "No, it's public info", cost: 1000, description: "Like a blog or portfolio site." },
            { id: "yes", label: "Yes, User Profiles", cost: 4000, description: "Users can sign up, save data, etc." },
        ]
    },
    {
        id: "money",
        title: "Will you charge money?",
        options: [
            { id: "free", label: "No, it's free", cost: 0, description: "I will monetize later (ads/sponsors)." },
            { id: "payments", label: "Yes, taking payments", cost: 3000, description: "Credit cards, Subscriptions (Stripe)." },
        ]
    },
    {
        id: "features",
        title: "Does it need 'fancy' features?",
        options: [
            { id: "simple", label: "Just showing info", cost: 1000, description: "Text, images, videos." },
            { id: "complex", label: "Maps, Messaging, Dating", cost: 8000, description: "Advanced features like Uber/Tinder." },
            { id: "ai", label: "Artificial Intelligence", cost: 10000, description: "Chatbots, generated content, etc." },
        ]
    },
    {
        id: "design",
        title: "Do you have a Logo?",
        options: [
            { id: "yes", label: "Yes, I have branding", cost: 500, description: "I have logo files ready." },
            { id: "no", label: "No, I need a brand", cost: 4000, description: "I need a logo, colors, and vibe." },
        ]
    },
    {
        id: "timeline",
        title: "When do you need it?",
        options: [
            { id: "fast", label: "Yesterday (ASAP)", cost: 5000, description: "Rush service." },
            { id: "normal", label: "1-2 Months", cost: 0, description: "Standard timeline." },
        ]
    }
];

// Business: "Automation, Efficiency"
const questionsBusiness: Question[] = [
    {
        id: "manual",
        title: "How do you do this task now?",
        options: [
            { id: "paper", label: "Pen & Paper", cost: 6000, description: "We write everything down manually." },
            { id: "excel", label: "Spreadsheets (Excel)", cost: 4000, description: "We have heavy, slow Excel sheets." },
            { id: "software", label: "Old Software", cost: 8000, description: "We use a slow, outdated system." },
        ]
    },
    {
        id: "access",
        title: "Who needs access?",
        options: [
            { id: "internal", label: "Just my team (Internal)", cost: 3000, description: "Employee portal only." },
            { id: "clients", label: "My Clients too", cost: 6000, description: "Clients can log in and see status." },
        ]
    },
    {
        id: "data",
        title: "Do you need to connect to other tools?",
        options: [
            { id: "no", label: "No, standalone", cost: 0, description: "It works by itself." },
            { id: "yes", label: "Yes (QuickBooks, CRM)", cost: 5000, description: "Connect to accounting or email software." },
        ]
    },
    {
        id: "reporting",
        title: "Do you need reports?",
        options: [
            { id: "basic", label: "Basic Lists", cost: 1000, description: "Simple tables of data." },
            { id: "charts", label: "Visual Dashboard", cost: 4000, description: "Graphs, charts, and PDF exports." },
        ]
    },
    {
        id: "security",
        title: "Is data privacy critical?",
        options: [
            { id: "standard", label: "Standard Secure", cost: 2000, description: "Password protected, encrypted." },
            { id: "hipaa", label: "Strict (HIPAA/Legal)", cost: 8000, description: "Medical or sensitive legal data." },
        ]
    }
];

const Calculator = () => {
    const location = useLocation();
    const isStartup = location.pathname.includes("startup");

    // Select questions based on the route
    const questions = isStartup ? questionsStartup : questionsBusiness;

    const [selections, setSelections] = useState<Record<string, number>>({});
    const [currentStep, setCurrentStep] = useState(0);

    const handleSelect = (questionId: string, cost: number) => {
        setSelections(prev => ({ ...prev, [questionId]: cost }));
        // Instant advance
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 150); // Small 150ms delay for visual feedback
        }
    };

    const totalCost = Object.values(selections).reduce((a, b) => a + b, 0);
    const isComplete = Object.keys(selections).length === questions.length;

    const reset = () => {
        setSelections({});
        setCurrentStep(0);
    };

    return (
        // Change: Using flex-1 to fill the Layout main container exactly
        <div className="flex flex-col flex-1 bg-white">
            <SEO
                title={isStartup ? "Startup MVP Calculator" : "Business Efficiency Calculator"}
                description="See how much you save with Buildify compared to traditional dev agencies."
                url="https://usebuildify.com/app-calculator"
            />

            <section className="bg-white pt-20 md:pt-32 pb-32 px-6 border-b border-zinc-200 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-layout mx-auto relative z-10">
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 rounded-md flex items-center justify-center mb-10">
                        <CalculatorIcon className="w-5 h-5 text-black" />
                    </div>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
                            {isStartup ? "Startup Comparison Tool" : "Efficiency ROI Calculator"}
                        </h1>
                        <p className="text-xl text-zinc-500 leading-relaxed mb-12">
                            See what a {isStartup ? "traditional agency" : "custom software firm"} would charge vs. Buildify.
                        </p>
                    </div>
                </div>
            </section>

            {/* Added flex-1 to expand this section to fill remaining space */}
            <div className="bg-zinc-50 flex-1">
                <div className="max-w-layout mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Questions */}
                        <div className="order-2 lg:order-1">
                            <div className="mb-4 text-sm font-mono text-zinc-400 uppercase tracking-widest">
                                Question {currentStep + 1} of {questions.length}
                            </div>
                            <h2 className="text-3xl font-bold mb-8 text-black">{questions[currentStep].title}</h2>

                            <div className="space-y-4">
                                {questions[currentStep].options.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleSelect(questions[currentStep].id, option.cost)}
                                        className={`w-full text-left p-6 rounded-lg transition-all duration-200 group relative overflow-hidden ${selections[questions[currentStep].id] === option.cost
                                            ? "bg-black text-white ring-2 ring-black"
                                            : "bg-white border-2 border-zinc-200 hover:border-black hover:shadow-md"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-1 relative z-10">
                                            <span className="font-bold text-lg">{option.label}</span>
                                            {selections[questions[currentStep].id] === option.cost && (
                                                <Check className="w-5 h-5 text-white" />
                                            )}
                                        </div>
                                        <p className={`relative z-10 font-normal ${selections[questions[currentStep].id] === option.cost ? "text-zinc-300" : "text-zinc-500"}`}>
                                            {option.description}
                                        </p>
                                    </button>
                                ))}
                            </div>

                            {/* Navigation Dots */}
                            <div className="flex gap-2 mt-8">
                                {questions.map((q, idx) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentStep(idx)}
                                        className={`h-1.5 rounded-full transition-all ${idx === currentStep ? "w-8 bg-black" :
                                            selections[q.id] !== undefined ? "w-2 bg-zinc-800" : "w-1.5 bg-zinc-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right: Summary / Comparison */}
                        <div className="lg:pl-12 order-1 lg:order-2 mb-10 lg:mb-0">
                            <div className="sticky top-32">

                                {/* Comparison Card */}
                                <div className="bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden">

                                    {/* Competitor Section (Top) - Symmetric padding */}
                                    <div className="p-8 pb-12 bg-zinc-50 border-b border-zinc-100 relative">
                                        <div className="absolute top-4 right-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                                            Competitor Avg
                                        </div>
                                        <h3 className="text-zinc-500 font-medium mb-1">Traditional Agency Estimate</h3>
                                        <div className="text-4xl text-zinc-400 font-bold decoration-zinc-300 line-through decoration-2">
                                            ${totalCost.toLocaleString()}
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-2">
                                            Upfront cost + 20% maintenance fees
                                        </p>
                                    </div>

                                    {/* VS Divider */}
                                    <div className="relative h-0 flex items-center justify-center -mt-6 z-10">
                                        <div className="w-12 h-12 rounded-full bg-white border-4 border-white shadow-sm flex items-center justify-center font-black text-xs text-zinc-300">
                                            VS
                                        </div>
                                    </div>

                                    {/* Buildify Section (Bottom) - Symmetric padding */}
                                    <div className="p-8 pt-12 bg-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <Zap className="w-3 h-3 text-green-600 fill-current" />
                                            </div>
                                            <h3 className="text-green-600 font-bold uppercase tracking-wide text-sm">Buildify Pricing</h3>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <div className="text-5xl md:text-6xl font-bold tracking-tighter text-black">
                                                $650<span className="text-2xl text-zinc-400 font-medium tracking-normal">/mo</span>
                                            </div>
                                        </div>
                                        <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                                            No massive upfront fees. Cancel anytime. <br />
                                            Save <span className="text-black font-bold">${(Math.max(0, totalCost - 650)).toLocaleString()}</span> today.
                                        </p>

                                        {isComplete ? (
                                            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                <Link to="/contact">
                                                    <Button className="w-full h-14 text-lg bg-black text-white hover:bg-zinc-800 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                                                        Let's Chat
                                                    </Button>
                                                </Link>
                                                <div className="text-center text-xs text-zinc-400 pt-2">
                                                    Includes Design, Dev, & Support.
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                                                <p className="text-sm text-zinc-400 mb-2">Finish the quiz to unlock report</p>
                                                <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                                                    <div
                                                        className="bg-black h-full transition-all duration-500"
                                                        style={{ width: `${(Object.keys(selections).length / questions.length) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
