import React, { useState, useEffect, useRef } from 'react';
import { SEO } from "@/components/SEO";
import { Check, Loader2, ArrowRight, Globe, Clock, Target, Lightbulb, DollarSign, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import { FadeIn } from "@/components/animations/FadeIn";

// Webhook URL
const WEBHOOK_URL = 'https://hook.us1.make.com/mr14arr8pp6gndfm3iwsrpk8b1krpp23';

const countryCodes = [
    { code: "+1", name: "US (+1)" },
    { code: "+1", name: "CA (+1)" },
    { code: "+44", name: "UK (+44)" },
    { code: "+61", name: "AU (+61)" },
    { code: "+49", name: "DE (+49)" },
    { code: "+33", name: "FR (+33)" },
    { code: "+91", name: "IN (+91)" },
    { code: "+86", name: "CN (+86)" },
    { code: "+81", name: "JP (+81)" },
    { code: "+39", name: "IT (+39)" },
    { code: "+7", name: "RU (+7)" },
    { code: "+55", name: "BR (+55)" },
    { code: "+34", name: "ES (+34)" },
    { code: "+31", name: "NL (+31)" },
    { code: "+46", name: "SE (+46)" },
    { code: "+41", name: "CH (+41)" },
    { code: "+52", name: "MX (+52)" },
    { code: "+971", name: "AE (+971)" },
    { code: "+65", name: "SG (+65)" },
    { code: "+966", name: "SA (+966)" },
];

const benefits = [
    { icon: Target, title: "Understand your vision", desc: "We listen first, build second" },
    { icon: Lightbulb, title: "Technical game plan", desc: "A clear roadmap for your project" },
    { icon: DollarSign, title: "Transparent pricing", desc: "No surprises, no hidden fees" },
    { icon: Rocket, title: "Fast turnaround", desc: "Weeks, not months" },
];

const Contact = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        helpType: '',
        budget: '',
        description: ''
    });

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        if (step >= 1 && step <= 5) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 300);
        }
    }, [step]);

    // Handle Enter Key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLButtonElement) return;
                e.preventDefault();
                handleNext();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [step, formData]);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const checkValidity = () => {
        switch (step) {
            case 1: // Name + Email
                return formData.name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
            case 2: // Phone
                const digits = formData.phone.replace(/[^\d]/g, '');
                return formData.countryCode === '+1' ? digits.length === 10 : (digits.length >= 7 && digits.length <= 15);
            case 3: // Help Type
                return !!formData.helpType;
            case 4: // Budget + Description
                return formData.description.trim().length > 0;
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (checkValidity() && step < 5) {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (!checkValidity() || isSubmitting) return;
        setIsSubmitting(true);

        const payload = {
            ...formData,
            fullPhone: `${formData.countryCode} ${formData.phone}`
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            setStep(5);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalSteps = 5;
    const progress = step >= 5 ? 100 : (step / (totalSteps - 1)) * 100;

    return (
        <div className="bg-white font-sans text-black flex flex-col relative overflow-hidden">
            <DottedGlowBackground />
            <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white" />
            <SEO
                title="Contact Us"
                description="Let's build something great together. Tell us about your project."
                url="https://usebuildify.com/contact"
            />

            <main className="relative z-10 px-4 sm:px-6 pt-28 md:pt-36 pb-16">
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* ───── Left Column: Value Proposition ───── */}
                    <div className="lg:sticky lg:top-32">
                        <FadeIn delay={0.1}>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-black leading-[1.1]">
                                Let's build something{' '}
                                <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">great together.</span>
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-lg">
                                No commitment. No sales pitch. Just a conversation about your project and how we can help bring it to life.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.25}>
                            <p className="flex items-center gap-2 text-xs text-zinc-400 mb-10">
                                <span className="inline-flex items-center gap-1"><Globe className="w-3 h-3" />Team in North America</span>
                                <span className="text-zinc-300">·</span>
                                <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />9–5 Mon–Fri</span>
                            </p>
                        </FadeIn>

                        {/* Benefit Grid */}
                        <FadeIn delay={0.3}>
                            <p className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wider">On your call, we'll cover</p>
                            <div className="grid grid-cols-2 gap-3">
                                {benefits.map((b, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl border border-zinc-100 bg-zinc-50/60 hover:bg-white hover:border-zinc-200 transition-all duration-200"
                                    >
                                        <b.icon className="w-5 h-5 text-zinc-700 mb-2.5" />
                                        <p className="text-sm font-semibold text-zinc-900 leading-snug">{b.title}</p>
                                        <p className="text-xs text-zinc-500 mt-1">{b.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Testimonial */}
                        <FadeIn delay={0.4}>
                            <div className="mt-8 p-5 rounded-xl border border-zinc-100 bg-zinc-50/60">
                                <p className="text-sm text-zinc-600 italic leading-relaxed">
                                    "Buildify understood our vision from day one. They turned our rough idea into a polished product in weeks — not months."
                                </p>
                                <p className="text-xs text-zinc-400 mt-3 font-medium">— Happy Client</p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* ───── Right Column: Form Card ───── */}
                    <FadeIn delay={0.2}>
                        <div className="bg-white rounded-2xl border border-zinc-200 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
                            {/* Card Progress Bar */}
                            {step < 5 && (
                                <div className="h-1 bg-zinc-100">
                                    <div
                                        className="h-full bg-black transition-all duration-500 ease-out rounded-r-full"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            )}

                            <div className="p-6 md:p-8">
                                {/* Card Header */}
                                {step < 5 && (
                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold text-black">Tell us about your project</h2>
                                        <p className="text-sm text-zinc-400 mt-1">Step {step} of 4 · Takes about a minute</p>
                                    </div>
                                )}

                                {/* ── Step 1: Name + Email ── */}
                                {step === 1 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Your name</label>
                                            <input
                                                ref={inputRef as any}
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleChange('name', e.target.value)}
                                                className="w-full px-4 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200 placeholder:text-zinc-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                className="w-full px-4 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200 placeholder:text-zinc-400"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        <FormNav onNext={handleNext} isValid={checkValidity()} />
                                    </div>
                                )}

                                {/* ── Step 2: Phone ── */}
                                {step === 2 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Phone number</label>
                                            <div className="flex gap-2">
                                                <select
                                                    value={formData.countryCode}
                                                    onChange={(e) => handleChange('countryCode', e.target.value)}
                                                    className="w-28 px-3 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black transition-all cursor-pointer"
                                                >
                                                    {countryCodes.map(c => (
                                                        <option key={`${c.code}-${c.name}`} value={c.code}>{c.name}</option>
                                                    ))}
                                                </select>
                                                <input
                                                    ref={inputRef as any}
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange('phone', e.target.value)}
                                                    className="flex-1 px-4 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200 placeholder:text-zinc-400"
                                                    placeholder="(555) 123-4567"
                                                />
                                            </div>
                                        </div>
                                        <FormNav onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                                    </div>
                                )}

                                {/* ── Step 3: Help Type ── */}
                                {step === 3 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                                        <label className="block text-sm font-medium text-zinc-700 mb-1">What do you need help with?</label>
                                        <div className="flex flex-col gap-2">
                                            {["Building a new app from scratch", "I have an app and need help", "I need my app maintained", "Adalo", "Flutterflow"].map(option => (
                                                <label
                                                    key={option}
                                                    className={cn(
                                                        "flex items-center px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 group text-sm",
                                                        formData.helpType === option
                                                            ? "border-black bg-zinc-50 ring-1 ring-black/5"
                                                            : "border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300"
                                                    )}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="helpType"
                                                        value={option}
                                                        checked={formData.helpType === option}
                                                        onChange={(e) => handleChange('helpType', e.target.value)}
                                                        className="w-4 h-4 mr-3 accent-black"
                                                    />
                                                    <span className="text-zinc-700 group-hover:text-black">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <FormNav onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                                    </div>
                                )}

                                {/* ── Step 4: Budget + Description ── */}
                                {step === 4 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                                                Estimated budget <span className="text-zinc-400 font-normal">(optional)</span>
                                            </label>
                                            <input
                                                ref={inputRef as any}
                                                type="text"
                                                value={formData.budget}
                                                onChange={(e) => handleChange('budget', e.target.value)}
                                                className="w-full px-4 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200 placeholder:text-zinc-400"
                                                placeholder="e.g., $10k – $20k"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-700 mb-1.5">Tell us about your project</label>
                                            <textarea
                                                value={formData.description}
                                                onChange={(e) => handleChange('description', e.target.value)}
                                                className="w-full px-4 py-3 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black/5 transition-all duration-200 placeholder:text-zinc-400 min-h-[120px] resize-y"
                                                placeholder="What's the app about? What are you hoping to achieve?"
                                            />
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <button
                                                onClick={handleBack}
                                                className="px-5 py-2.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={handleSubmit}
                                                disabled={!checkValidity() || isSubmitting}
                                                className="flex-1 px-5 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>Submitting... <Loader2 className="w-4 h-4 animate-spin" /></>
                                                ) : (
                                                    <>Submit <ArrowRight className="w-4 h-4" /></>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* ── Step 5: Success ── */}
                                {step === 5 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
                                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-xl mx-auto">
                                            <Check className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-semibold mb-4 text-black">Check your inbox! 📬</h2>

                                        {/* Loom Video Embed */}
                                        <div className="mb-5 rounded-lg overflow-hidden shadow-md border border-zinc-100">
                                            <div className="relative pb-[56.25%] h-0">
                                                <iframe
                                                    src="https://www.loom.com/embed/073f96ed1b644a618c5c8486451b0031"
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    className="absolute top-0 left-0 w-full h-full"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-base text-zinc-500 leading-relaxed">
                                            We just sent you a booking link to your email.<br />
                                            Looking forward to chatting!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </main>
        </div>
    );
};

/* ── Navigation Buttons ── */
const FormNav = ({ onBack, onNext, isValid }: { onBack?: () => void, onNext: () => void, isValid: boolean }) => (
    <div className="flex gap-3 pt-2">
        {onBack && (
            <button
                onClick={onBack}
                className="px-5 py-2.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
            >
                Back
            </button>
        )}
        <button
            onClick={onNext}
            disabled={!isValid}
            className="flex-1 px-5 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Next
            <ArrowRight className="w-4 h-4" />
        </button>
    </div>
);

export default Contact;
