import React, { useState, useEffect, useRef } from 'react';
import { SmartInput } from "@/components/ui/smart-input";
import {
    Search,
    TrendingUp,
    Users,
    BarChart3,
    Wallet,
    Sparkles,
    ArrowRight,
    Loader2,
    RefreshCcw,
    Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LoadingState = { IDLE: 'IDLE', LOADING: 'LOADING', SUCCESS: 'SUCCESS', ERROR: 'ERROR' };

export const BusinessAuditTool = () => {
    const [input, setInput] = useState('');
    const [loadingState, setLoadingState] = useState(LoadingState.IDLE);
    const [showStats, setShowStats] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [checklist, setChecklist] = useState({ mobileApp: false, loyalty: false, notifications: false });

    useEffect(() => {
        if (loadingState === LoadingState.SUCCESS) {
            const t1 = setTimeout(() => setChecklist(prev => ({ ...prev, mobileApp: true })), 500);
            const t2 = setTimeout(() => setChecklist(prev => ({ ...prev, loyalty: true })), 1000);
            const t3 = setTimeout(() => setChecklist(prev => ({ ...prev, notifications: true })), 1500);
            const t4 = setTimeout(() => setShowStats(true), 2000);
            return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
        } else if (loadingState === LoadingState.LOADING) {
            setChecklist({ mobileApp: false, loyalty: false, notifications: false });
            setShowStats(false);
        }
    }, [loadingState]);

    const handleAudit = async () => {
        if (!input.trim() || loadingState === LoadingState.LOADING) return;
        setLoadingState(LoadingState.LOADING);
        setTimeout(() => {
            setLoadingState(LoadingState.SUCCESS);
        }, 1500);
    };

    return (
        <div className="w-full space-y-6">
            {/* Search Input Area */}
            <SmartInput
                ref={inputRef}
                type="text"
                placeholder="yourbusiness.com"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAudit()}
                className="text-base font-medium tracking-tight placeholder:text-zinc-300 py-2.5"
            >
                <button
                    onClick={handleAudit}
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
                            Check My Biz
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>
            </SmartInput>

            {/* Results Display */}
            <div className={cn(
                "overflow-hidden transition-all duration-700",
                loadingState !== LoadingState.IDLE ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"
            )}>
                {loadingState === LoadingState.ERROR ? (
                    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-xl text-center space-y-4">
                        <div className="flex justify-center">
                            <RefreshCcw className="w-8 h-8 text-zinc-400" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-black">Audit Failed</p>
                            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                                We couldn't analyze your business. Please try again.
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
                    <div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-200 shadow-sm">
                        {/* Methodology Checkboxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200 bg-zinc-50/50">
                            <div className="p-10 flex flex-col justify-center space-y-1">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-black" />
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-500">Growth Plan</h4>
                                </div>
                                <p className="font-semibold text-lg tracking-tight">Your Custom App Stack</p>
                            </div>
                            <div className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors">
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.mobileApp ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.mobileApp && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.mobileApp ? "text-black" : "text-zinc-500")}>
                                    Branded Mobile App (iOS & Android)
                                </span>
                            </div>
                            <div className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors">
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.loyalty ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.loyalty && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.loyalty ? "text-black" : "text-zinc-500")}>
                                    Rewards & Loyalty Program
                                </span>
                            </div>
                            <div className="p-10 flex items-center gap-3 cursor-pointer group select-none hover:bg-zinc-50/80 transition-colors">
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0",
                                    checklist.notifications ? "bg-green-500 border-green-500 text-white" : "bg-white border-zinc-300 group-hover:border-zinc-400"
                                )}>
                                    {checklist.notifications && <Check className="w-3 h-3" />}
                                </div>
                                <span className={cn("font-medium text-sm transition-colors", checklist.notifications ? "text-black" : "text-zinc-500")}>
                                    Unlimited Push Notifications
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className={cn(
                            "grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-200 transition-all duration-700 ease-out",
                            showStats ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-sm translate-y-4"
                        )}>
                            <StatCard label="Repeat Customers" value={checklist.mobileApp ? "+40%" : "0%"} sub="With Loyalty Enabled" icon={TrendingUp} loading={loadingState === LoadingState.LOADING} />
                            <StatCard label="Customer Reach" value={checklist.notifications ? "5x" : "1x"} sub="vs. Email Open Rates" icon={Users} loading={loadingState === LoadingState.LOADING} />
                            <StatCard label="Revenue Recaptured" value={checklist.loyalty ? "+23%" : "0%"} sub="From Repeat Orders" icon={BarChart3} loading={loadingState === LoadingState.LOADING} />
                            <StatCard label="Agency Savings" value={checklist.mobileApp ? "$50k" : "$0"} sub="vs. Traditional Build" icon={Wallet} loading={loadingState === LoadingState.LOADING} />
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
                                    Your customers are waiting.<br />Give them a reason to come back.
                                </h3>
                                <p className="text-zinc-500 text-lg">$650/mo. Everything included. Launch in 7 days.</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    data-cal-namespace="buildify-creators"
                                    data-cal-link="alefyi/buildify-creators"
                                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                    className="px-8 py-4 bg-black text-white hover:bg-zinc-800 rounded-lg font-bold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {loadingState === LoadingState.LOADING && (
                            <div className="p-12 flex flex-col items-center justify-center space-y-4">
                                <Loader2 className="w-8 h-8 text-zinc-300 animate-spin" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 animate-pulse">
                                    Analyzing Your Business
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
                <div className="h-12 w-24 bg-zinc-100 animate-pulse rounded-md" />
            ) : (
                <div className="text-5xl font-bold tracking-tighter text-black tabular-nums">{value}</div>
            )}
            <p className="text-zinc-500 text-sm">{sub}</p>
        </div>
    </div>
);

