import React, { useState, useEffect, useRef } from 'react';
import { Search, Loader2, ArrowRight, RefreshCcw, Sparkles, Check, TrendingUp, Users, BarChart3, Wallet, Phone, MessageSquare, Mail } from 'lucide-react';
import { cn } from "@/lib/utils";
import { getCalApi } from "@calcom/embed-react";

enum LoadingState {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

const EXAMPLES = [
    "Barbershop",
    "Bakery",
    "Dentist",
    "Gym",
    "Plumber"
];

const generateProjections = async (input: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) throw new Error("VITE_GEMINI_API_KEY is missing.");

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const modelId = "gemini-2.0-flash";

    const prompt = `Analyze growth potential for: "${input}". 
    Determine if this is a "Creator" (influencer, artist, linktree, personal brand) or a "Business" (service, shop, agency).
    
    Provide a JSON object with:
    - classification: "Creator" or "Business"
    - revenueGain: estimated annual revenue growth % (number only)
    - customersRetained: projected count of recurring customers/fans (integer only)
    - aovGrowth: projected % increase in Average Order Value / Fan LTV (number only)
    - costSavings: projected annual savings in dollars (integer only)
    - businessName: exact name used
    - businessType: specific category (e.g. "Med Spa" or "Lifestyle Influencer")
    
    Return ONLY JSON. Do not include markdown formatting.`;

    try {
        const response = await ai.models.generateContent({
            model: modelId,
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "";
        if (!text) throw new Error("No response from AI");

        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Could not parse AI response");

        return JSON.parse(jsonMatch[0].trim());
    } catch (error: any) {
        console.error("AI Generation Error:", error);
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
        (async function () {
            const cal = await getCalApi({ "namespace": "buildify-business" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });

            const calCreators = await getCalApi({ "namespace": "buildify-creators" });
            calCreators("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

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

    useEffect(() => {
        const examplesToUse = industryName ? [industryName] : EXAMPLES;
        const currentExample = examplesToUse[exampleIndex % examplesToUse.length];

        const handleTyping = () => {
            if (!isDeleting) {
                setPlaceholder(currentExample.substring(0, placeholder.length + 1));
                typingSpeed.current = 40;
                if (placeholder.length === currentExample.length) {
                    if (industryName) return;
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
            <div className="w-full relative group p-[2px] overflow-hidden rounded-full bg-zinc-200 transition-all duration-500">
                {/* Layer 1: The Underlying Glow (Blurred) */}
                <div className="absolute inset-[-200%] animate-border-glow glow-gradient glow-blur z-0" />

                {/* Layer 2: The Sharp Border (Rotating) */}
                <div className="absolute inset-[-200%] animate-border-glow glow-gradient z-0 opacity-100" />

                <div
                    className={cn(
                        "relative z-10 flex flex-row items-center bg-white transition-all duration-300",
                        "rounded-full w-full py-1.5 pr-2.5 pl-5 gap-4"
                    )}
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Search className="w-4 h-4 text-zinc-400 shrink-0 transition-colors group-focus-within:text-black" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder={`Try your ${placeholder}`}
                            className="flex-1 min-w-0 bg-transparent outline-none text-base font-medium tracking-tight text-black placeholder:text-zinc-300 py-2.5"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                        />
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={!input.trim() || loadingState === LoadingState.LOADING}
                        className={cn(
                            "w-auto px-5 py-2 font-medium text-sm rounded-full transition-all flex items-center justify-center gap-2 shrink-0",
                            loadingState === LoadingState.LOADING
                                ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                                : "bg-black text-white hover:bg-zinc-800"
                        )}
                    >
                        {loadingState === LoadingState.LOADING ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                See my results
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Results Display */}
            <div className={cn(
                "overflow-hidden transition-all duration-700",
                loadingState !== LoadingState.IDLE ? "max-h-[2500px] opacity-100 mt-8" : "max-h-0 opacity-0"
            )}>
                {loadingState === LoadingState.ERROR ? (
                    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl text-center space-y-4">
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
                    <div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-200 shadow-sm">
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
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.website ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.website && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.website ? "text-black" : "text-zinc-500")}>
                                    {data?.classification?.toLowerCase() === "creator" ? "Launch a Link-in-Bio App" : "Get an SEO packed website"}
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                                onClick={() => setChecklist(prev => ({ ...prev, loyalty: !prev.loyalty }))}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.loyalty ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.loyalty && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.loyalty ? "text-black" : "text-zinc-500")}>
                                    {data?.classification?.toLowerCase() === "creator" ? "Own your Fan Data" : "Integrate a loyalty app"}
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                                onClick={() => setChecklist(prev => ({ ...prev, automation: !prev.automation }))}
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.automation ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.automation && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.automation ? "text-black" : "text-zinc-500")}>
                                    {data?.classification?.toLowerCase() === "creator" ? "Monetize your Audience" : "Send an automated campaign"}
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
                                        <span className="text-[10px] font-bold uppercase tracking-widest">
                                            {data.classification?.toLowerCase() === "creator" ? "Creator Plan" : "Business Growth Plan"}
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black max-w-xl leading-tight">
                                            Launch your {data.businessType || 'App'} for <span className="underline decoration-green-300 decoration-4 underline-offset-4">{data.classification?.toLowerCase() === "creator" ? "$20/mo" : "$650/mo"}</span>.
                                        </h3>
                                        <p className="text-zinc-500 text-lg">
                                            No upfront fees. Month-to-month. Cancel anytime.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                                    {data.classification?.toLowerCase() !== "creator" ? (
                                        <button
                                            data-cal-namespace="buildify-business"
                                            data-cal-link="alefyi/buildify-business"
                                            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                            className="w-full md:w-auto px-8 py-4 bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        >
                                            Get Started <ArrowRight className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <button
                                            data-cal-namespace="buildify-creators"
                                            data-cal-link="alefyi/buildify-creators"
                                            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                            className="w-full md:w-auto px-8 py-4 bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        >
                                            Get Started <ArrowRight className="w-5 h-5" />
                                        </button>
                                    )}
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
                <div className="h-12 w-24 bg-zinc-100 animate-pulse rounded-lg" />
            ) : (
                <div className="text-5xl font-bold tracking-tighter text-black tabular-nums">{value}</div>
            )}
            <p className="text-zinc-500 text-sm">{sub}</p>
        </div>
    </div>
);

const ContactButton = ({ href, label, icon: Icon, primary, className }: any) => (
    <a
        href={href}
        className={cn(
            "flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-bold transition-all active:scale-95",
            primary
                ? "bg-black text-white hover:bg-zinc-800"
                : "bg-white border border-zinc-200 text-black hover:bg-zinc-50",
            className
        )}
    >
        <Icon className="w-4 h-4" />
        {label}
    </a>
);
