import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import {
    Search,
    Phone,
    MessageSquare,
    Mail,
    TrendingUp,
    Users,
    BarChart3,
    Wallet,
    Sparkles,
    ArrowRight,
    Loader2,
    RefreshCcw,
    Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const EXAMPLES = [
    "Med Spa",
    "Skate Shop",
    "Italian Kitchen",
    "Tech Startup",
    "Florist",
    "Coffee Shop",
    "Yoga Studio",
    "Gym",
    "Bakery",
    "Real Estate Agency"
];

// ... (keep middle lines same if they are not shown, but I need to target the placeholder line too)
// Actually I can't target non-contiguous lines easily without multi-replace.
// I will just use multi-replace or two replace calls.
// Let's use replace_file_content for the const, and another for the line 173.

const LoadingState = { IDLE: 'IDLE', LOADING: 'LOADING', SUCCESS: 'SUCCESS', ERROR: 'ERROR' };

const generateProjections = async (input: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) throw new Error("VITE_GEMINI_API_KEY is missing.");

    const ai = new GoogleGenAI({ apiKey });

    // We'll try gemini-2.0-flash if available, or fallback to 1.5-flash
    const modelId = "gemini-2.0-flash";

    const prompt = `Analyze growth potential for: "${input}". 
    Provide realistic 12-month projections as a JSON object with:
    - revenueGain: estimated annual revenue growth % (number only)
    - customersRetained: projected count of recurring customers (integer only)
    - aovGrowth: projected % increase in Average Order Value (number only)
    - costSavings: projected annual savings in dollars (integer only, e.g. 50000)
    - businessName: exact name used
    - businessType: plural category (e.g. "Med Spas")
    
    Return ONLY JSON. Do not include markdown formatting.`;

    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "";
        if (!text) throw new Error("No response from AI");

        // Advanced JSON extraction
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Could not parse AI response");

        return JSON.parse(jsonMatch[0].trim());
    } catch (error: any) {
        console.error("AI Generation Error:", error);
        // If 2.0 fails, try 1.5
        if (modelId === "gemini-2.0-flash") {
            const fallbackResponse = await ai.models.generateContent({
                model: "gemini-1.5-flash",
                contents: [{ role: "user", parts: [{ text: prompt }] }]
            });
            const text = fallbackResponse.candidates?.[0]?.content?.parts?.[0]?.text || "";
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) throw new Error("Fallback AI response failed");
            return JSON.parse(jsonMatch[0].trim());
        }
        throw error;
    }
};

export const GrowthTool = ({ industryName }: { industryName?: string }) => {
    const [input, setInput] = useState('');
    const [loadingState, setLoadingState] = useState(LoadingState.IDLE);
    const [data, setData] = useState<any>(null);
    const [placeholder, setPlaceholder] = useState('');
    const [exampleIndex, setExampleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = useRef(40);
    const inputRef = useRef<HTMLInputElement>(null);
    const [checklist, setChecklist] = useState({ website: false, loyalty: false, automation: false });
    const [showStats, setShowStats] = useState(false);

    useEffect(() => {
        if (loadingState === LoadingState.SUCCESS) {
            const t1 = setTimeout(() => setChecklist(prev => ({ ...prev, website: true })), 500);
            const t2 = setTimeout(() => setChecklist(prev => ({ ...prev, loyalty: true })), 1000);
            const t3 = setTimeout(() => setChecklist(prev => ({ ...prev, automation: true })), 1500);
            const t4 = setTimeout(() => setShowStats(true), 2000);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
        } else if (loadingState === LoadingState.LOADING) {
            setChecklist({ website: false, loyalty: false, automation: false });
            setShowStats(false);
        }
    }, [loadingState]);

    // Placeholder animation
    useEffect(() => {
        const examplesToUse = industryName ? [industryName] : EXAMPLES;
        const currentExample = examplesToUse[exampleIndex % examplesToUse.length];

        const handleTyping = () => {
            if (!isDeleting) {
                setPlaceholder(currentExample.substring(0, placeholder.length + 1));
                typingSpeed.current = 40;
                if (placeholder.length === currentExample.length) {
                    if (industryName) return; // Stop if specific industry provided
                    setIsDeleting(true);
                    typingSpeed.current = 2000;
                }
            } else {
                setPlaceholder(currentExample.substring(0, placeholder.length - 1));
                typingSpeed.current = 20;
                if (placeholder.length === 0) {
                    setIsDeleting(false);
                    setExampleIndex((prev) => (prev + 1) % examplesToUse.length);
                    typingSpeed.current = 500;
                }
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed.current);
        return () => clearTimeout(timer);
    }, [placeholder, isDeleting, exampleIndex, industryName]);

    const handleGenerate = async () => {
        if (!input.trim() || loadingState === LoadingState.LOADING) return;
        setLoadingState(LoadingState.LOADING);
        setData(null);
        try {
            const result = await generateProjections(input);
            setData(result);
            setLoadingState(LoadingState.SUCCESS);
        }
        catch (error) {
            console.error("Buildify API Error:", error);
            setLoadingState(LoadingState.ERROR);
        }
    };

    return (
        <div className="w-full space-y-6">
            {/* Search Input Area */}
            <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div className="w-full md:flex-1 relative group p-[2px] overflow-hidden rounded-[4px] bg-zinc-200 h-20 transition-all duration-500">
                    {/* Layer 1: The Underlying Glow (Blurred) */}
                    <div className="absolute inset-[-200%] animate-border-glow glow-gradient glow-blur z-0" />

                    {/* Layer 2: The Sharp Border (Rotating) */}
                    <div className="absolute inset-[-200%] animate-border-glow glow-gradient z-0 opacity-100" />

                    <div
                        className={cn(
                            "relative z-10 flex items-center px-6 bg-white transition-all duration-300",
                            "rounded-[3px] w-full h-full"
                        )}
                        onClick={() => inputRef.current?.focus()}
                    >
                        <Search className="w-6 h-6 text-zinc-400 mr-4 shrink-0 transition-colors group-focus-within:text-black" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder={`Try your ${placeholder}`}
                            className="flex-1 bg-transparent outline-none text-xl md:text-2xl font-semibold tracking-tight text-black placeholder:text-zinc-300 py-4"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                        />
                    </div>
                </div>
                <button
                    onClick={handleGenerate}
                    disabled={!input.trim() || loadingState === LoadingState.LOADING}
                    className={cn(
                        "w-full md:w-auto px-10 h-20 font-bold text-xl md:text-2xl rounded-[4px] transition-all flex items-center justify-center gap-3 relative z-10",
                        loadingState === LoadingState.LOADING
                            ? "bg-zinc-100 text-zinc-400 border border-zinc-200 cursor-not-allowed"
                            : "bg-black text-white hover:bg-zinc-800"
                    )}
                >
                    {loadingState === LoadingState.LOADING ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                        <>
                            See my results
                            <ArrowRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>

            {/* Results Display */}
            <div className={cn(
                "overflow-hidden transition-all duration-700",
                loadingState !== LoadingState.IDLE ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"
            )}>
                {loadingState === LoadingState.ERROR ? (
                    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-[4px] text-center space-y-4">
                        <div className="flex justify-center">
                            <RefreshCcw className="w-8 h-8 text-zinc-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-black">AI Generation Failed</p>
                            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                                We couldn't analyze the growth potential. Ensure your API key is correct or try a different business name.
                            </p>
                        </div>
                        <button
                            onClick={handleGenerate}
                            className="text-sm font-bold underline hover:no-underline text-black"
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    <div className="bg-white border border-zinc-200 rounded-[4px] divide-y divide-zinc-200 shadow-sm">
                        {/* Methodology Checkboxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200 bg-zinc-50/50">
                            <div className="p-10 flex flex-col justify-center space-y-1">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-black" />
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500">Methodology</h4>
                                </div>
                                <p className="font-semibold text-lg tracking-tight">Your Integration Plan</p>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                                onClick={() => setChecklist(prev => ({ ...prev, website: !prev.website }))}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.website ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.website && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.website ? "text-black" : "text-zinc-500")}>
                                    Get an SEO packed website
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                                onClick={() => setChecklist(prev => ({ ...prev, loyalty: !prev.loyalty }))}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.loyalty ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.loyalty && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.loyalty ? "text-black" : "text-zinc-500")}>
                                    Integrate a loyalty app
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                                onClick={() => setChecklist(prev => ({ ...prev, automation: !prev.automation }))}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.automation ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.automation && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.automation ? "text-black" : "text-zinc-500")}>
                                    Send an automated campaign
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className={cn(
                            "grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-200 transition-all duration-700 ease-out",
                            showStats ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
                        )}>
                            <StatCard
                                label="Revenue Gain"
                                value={data ? (checklist.website ? `+${data.revenueGain}%` : "0%") : "---"}
                                sub="Annual Increase"
                                icon={TrendingUp}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="Retention"
                                value={data ? (checklist.loyalty ? data.customersRetained.toLocaleString() : "0") : "---"}
                                sub="Loyal Customers"
                                icon={Users}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="AOV Growth"
                                value={data ? (checklist.automation ? `+${data.aovGrowth}%` : "0%") : "---"}
                                sub="Order Value"
                                icon={BarChart3}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="Cost Savings"
                                value={data ? (checklist.website ? `$${(data.costSavings / 1000).toFixed(0)}k` : "$0") : "---"}
                                sub="Annual Savings"
                                icon={Wallet}
                                loading={loadingState === LoadingState.LOADING}
                            />
                        </div>

                        {/* Footer Card */}
                        {data && (
                            <div className={cn(
                                "p-10 flex flex-col md:flex-row md:items-center justify-between gap-10 bg-zinc-50/30 transition-all duration-700 ease-out delay-100",
                                showStats ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
                            )}>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Growth Recommendation</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black max-w-xl leading-tight">
                                        Buildify is the #1 tool for {data.businessType || 'businesses'} to gain and keep customers.
                                    </h3>
                                    <p className="text-zinc-500 text-lg">Get this process live by next Monday.</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <ContactButton
                                        href="tel:9093455543"
                                        label="Call"
                                        icon={Phone}
                                    />
                                    <ContactButton
                                        href="sms:3238077736"
                                        label="Text"
                                        icon={MessageSquare}
                                    />
                                    <ContactButton
                                        href="mailto:betsy@buildifyhq.com"
                                        label="Email"
                                        icon={Mail}
                                        primary
                                    />
                                </div>
                            </div>
                        )}

                        {loadingState === LoadingState.LOADING && (
                            <div className="p-12 flex flex-col items-center justify-center space-y-4">
                                <Loader2 className="w-8 h-8 text-zinc-300 animate-spin" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 animate-pulse">
                                    Analyzing Growth Vectors
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const StatCard = ({ label, value, sub, icon: Icon, loading }: any) => (
    <div className="p-10 space-y-6 group">
        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-black transition-colors">
            <Icon className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
        </div>
        <div className="space-y-1">
            {loading ? (
                <div className="h-12 w-24 bg-zinc-100 animate-pulse rounded-[2px]" />
            ) : (
                <div className="text-5xl font-bold tracking-tighter text-black tabular-nums">{value}</div>
            )}
            <p className="text-zinc-500 text-sm">{sub}</p>
        </div>
    </div>
);

const ContactButton = ({ href, label, icon: Icon, primary }: any) => (
    <a
        href={href}
        className={cn(
            "flex items-center gap-2 px-6 py-4 rounded-[4px] text-sm font-bold transition-all active:scale-95",
            primary
                ? "bg-black text-white hover:bg-zinc-800"
                : "bg-white border border-zinc-200 text-black hover:bg-zinc-50"
        )}
    >
        <Icon className="w-4 h-4" />
        {label}
    </a>
);
