import React, { useState, useEffect, useRef } from 'react';
import { SmartInput } from "@/components/ui/smart-input";
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
    Check,
    Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const LoadingState = { IDLE: 'IDLE', LOADING: 'LOADING', SUCCESS: 'SUCCESS', ERROR: 'ERROR' };

export const BioAuditTool = () => {
    const [input, setInput] = useState('');
    const [loadingState, setLoadingState] = useState(LoadingState.IDLE);
    const [showStats, setShowStats] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [checklist, setChecklist] = useState({ customDomain: false, seo: false, speed: false });

    // Mock flow for "Audit"
    useEffect(() => {
        if (loadingState === LoadingState.SUCCESS) {
            const t1 = setTimeout(() => setChecklist(prev => ({ ...prev, customDomain: true })), 500);
            const t2 = setTimeout(() => setChecklist(prev => ({ ...prev, seo: true })), 1000);
            const t3 = setTimeout(() => setChecklist(prev => ({ ...prev, speed: true })), 1500);
            const t4 = setTimeout(() => setShowStats(true), 2000);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
        } else if (loadingState === LoadingState.LOADING) {
            setChecklist({ customDomain: false, seo: false, speed: false });
            setShowStats(false);
        }
    }, [loadingState]);

    const handleAudit = async () => {
        if (!input.trim() || loadingState === LoadingState.LOADING) return;
        setLoadingState(LoadingState.LOADING);

        // Simulate API call/processing time
        setTimeout(() => {
            setLoadingState(LoadingState.SUCCESS);
        }, 1500);
    };

    return (
        <div className="w-full space-y-6">
            {/* Search Input Area */}
            <div className="flex flex-col md:flex-row items-stretch gap-4">
                <div className="w-full md:flex-1 h-20">
                    <SmartInput
                        ref={inputRef}
                        type="text"
                        placeholder="linktr.ee/yourname"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAudit()}
                        className="text-xl md:text-2xl font-semibold placeholder:text-zinc-300 py-4"
                        containerClassName="h-full"
                        iconClassName="w-6 h-6 mr-4"
                    // SmartInput uses Search icon default. I need to override it?
                    // SmartInput implementation: <Search ... />
                    // It does NOT accept an Icon component prop currently.
                    // I need to UPDATE SmartInput to accept an Icon prop if I want to use LinkIcon.
                    />
                </div>
                <button
                    onClick={handleAudit}
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
                            Audit My Link
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
                            <p className="font-bold text-black">Audit Failed</p>
                            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                                We couldn't analyze the link. Please try again.
                            </p>
                        </div>
                        <button
                            onClick={handleAudit}
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
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500">Upgrade Plan</h4>
                                </div>
                                <p className="font-semibold text-lg tracking-tight">Your Custom Stack</p>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.customDomain ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.customDomain && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.customDomain ? "text-black" : "text-zinc-500")}>
                                    Own your domain (you.com)
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.seo ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.seo && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.seo ? "text-black" : "text-zinc-500")}>
                                    Rank on Perplexity & OpenAI
                                </span>
                            </div>
                            <div
                                className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors"
                            >
                                <div className={cn(
                                    "w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all shrink-0",
                                    checklist.speed ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.speed && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.speed ? "text-black" : "text-zinc-500")}>
                                    Sub-100ms Load Times
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className={cn(
                            "grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-200 transition-all duration-700 ease-out",
                            showStats ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
                        )}>
                            <StatCard
                                label="Conversion Rate"
                                value={checklist.customDomain ? "+45%" : "0%"}
                                sub="More Actions Taken"
                                icon={TrendingUp}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="Search Traffic"
                                value={checklist.seo ? "3.5x" : "1x"}
                                sub="Indexed by AI"
                                icon={Users}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="Brand Equity"
                                value={checklist.customDomain ? "+100%" : "0%"}
                                sub="Owned Asset Value"
                                icon={BarChart3}
                                loading={loadingState === LoadingState.LOADING}
                            />
                            <StatCard
                                label="Engagement"
                                value={checklist.speed ? "+6.4k" : "0"}
                                sub="Monthly Impressions"
                                icon={Wallet}
                                loading={loadingState === LoadingState.LOADING}
                            />
                        </div>

                        {/* Footer Card */}
                        <div className={cn(
                            "p-10 flex flex-col md:flex-row md:items-center justify-between gap-10 bg-zinc-50/30 transition-all duration-700 ease-out delay-100",
                            showStats ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
                        )}>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Recommendation</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black max-w-xl leading-tight">
                                    Your audience belongs to you.<br />Not some link company.
                                </h3>
                                <p className="text-zinc-500 text-lg">Let's build your custom domain property this week.</p>
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

                        {loadingState === LoadingState.LOADING && (
                            <div className="p-12 flex flex-col items-center justify-center space-y-4">
                                <Loader2 className="w-8 h-8 text-zinc-300 animate-spin" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 animate-pulse">
                                    Analyzing Link Structure
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
