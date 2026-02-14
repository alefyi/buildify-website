import React, { useState, useEffect, useRef } from 'react';
import { SEO } from "@/components/SEO";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Webhook URL provided by user
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
    // Simplified list for brevity, can expand if needed
];

const Contact = () => {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form Data State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        helpType: '',
        budget: '',
        description: ''
    });

    // Auto-focus ref
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    // Auto-focus on step change
    useEffect(() => {
        if (step > 0 && step < 7) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 300);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
    }, [step, formData]); // Dependency on step/formData to ensure valid check is fresh

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const checkValidity = () => {
        switch (step) {
            case 1: // Name
                return formData.name.trim().length > 0;
            case 2: // Email
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
            case 3: // Phone
                const digits = formData.phone.replace(/[^\d]/g, '');
                return formData.countryCode === '+1' ? digits.length === 10 : (digits.length >= 7 && digits.length <= 15);
            case 4: // Help Type
                return !!formData.helpType;
            case 5: // Budget (Optional)
                return true;
            case 6: // Description
                return formData.description.trim().length > 0;
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (checkValidity() && step < 7) {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (step > 0) {
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
            setStep(7); // Success Step
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalSteps = 8; // 0 to 7
    const progress = ((step + 1) / totalSteps) * 100;

    return (
        <div className="min-h-screen bg-white font-sans text-black flex flex-col relative pt-20">
            <SEO
                title="Contact Us"
                description="Let's build something great together. Tell us about your project."
                url="https://usebuildify.com/contact"
            />

            {/* Progress Bar (Hidden on Success) */}
            {step < 7 && (
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div
                        className="h-full bg-black transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}

            <main className="w-full max-w-3xl mx-auto p-6 md:p-12 lg:p-16 flex-1 flex flex-col justify-center min-h-[600px]">

                {/* Step 0: Welcome */}
                {step === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">Hey there! 👋</h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                            We're Buildify, and we're here to help you bring your app idea to life.
                            Before we jump on a call, we'd love to learn a bit about what you're working on.
                            This'll just take a minute.
                        </p>
                        <button
                            onClick={handleNext}
                            className="px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-zinc-800 transition-transform active:scale-[0.98] shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            Let's do it
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* Step 1: Name */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-6">What's your name?</label>
                        <input
                            ref={inputRef as any}
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="w-full p-4 text-lg border-2 border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:bg-white focus:border-black focus:shadow-lg transition-all duration-300 placeholder:text-gray-400"
                            placeholder="Your name"
                        />
                        <NavButtons onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                    </div>
                )}

                {/* Step 2: Email */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-6">What's your email?</label>
                        <input
                            ref={inputRef as any}
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="w-full p-4 text-lg border-2 border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:bg-white focus:border-black focus:shadow-lg transition-all duration-300 placeholder:text-gray-400"
                            placeholder="you@example.com"
                        />
                        <NavButtons onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                    </div>
                )}

                {/* Step 3: Phone */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-6">And your phone number?</label>
                        <div className="flex gap-2">
                            <select
                                value={formData.countryCode}
                                onChange={(e) => handleChange('countryCode', e.target.value)}
                                className="w-1/3 md:w-1/4 p-4 text-lg border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:bg-white focus:border-black transition-all cursor-pointer"
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
                                className="flex-1 w-full p-4 text-lg border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:bg-white focus:border-black focus:shadow-lg transition-all duration-300 placeholder:text-gray-400"
                                placeholder="(555) 123-4567"
                            />
                        </div>
                        <NavButtons onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                    </div>
                )}

                {/* Step 4: Help Type */}
                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-8">What do you need help with?</label>
                        <div className="flex flex-col gap-3">
                            {["Building a new app from scratch", "I have an app and need help", "I need my app maintained", "Adalo", "Flutterflow"].map(option => (
                                <label
                                    key={option}
                                    className={cn(
                                        "flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:translate-x-1 group",
                                        formData.helpType === option
                                            ? "border-black bg-gray-50"
                                            : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-400"
                                    )}
                                >
                                    <input
                                        type="radio"
                                        name="helpType"
                                        value={option}
                                        checked={formData.helpType === option}
                                        onChange={(e) => handleChange('helpType', e.target.value)}
                                        className="w-5 h-5 mr-3 accent-black"
                                    />
                                    <span className="text-lg text-gray-800 group-hover:text-black">{option}</span>
                                </label>
                            ))}
                        </div>
                        <NavButtons onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                    </div>
                )}

                {/* Step 5: Budget */}
                {step === 5 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-6">Do you have an estimated budget?</label>
                        <input
                            ref={inputRef as any}
                            type="text"
                            value={formData.budget}
                            onChange={(e) => handleChange('budget', e.target.value)}
                            className="w-full p-4 text-lg border-2 border-gray-200 rounded-sm bg-gray-50 focus:outline-none focus:bg-white focus:border-black focus:shadow-lg transition-all duration-300 placeholder:text-gray-400"
                            placeholder="e.g., $10k - $20k, or just leave blank"
                        />
                        <div className="mt-3 text-sm text-gray-500 italic">No worries if you don't have one yet - totally optional!</div>
                        <NavButtons onBack={handleBack} onNext={handleNext} isValid={checkValidity()} />
                    </div>
                )}

                {/* Step 6: Description */}
                {step === 6 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <label className="block text-xl md:text-2xl font-normal text-gray-700 mb-6">Tell us a bit about what you're building</label>
                        <textarea
                            ref={inputRef as any}
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:bg-white focus:border-black focus:shadow-lg transition-all duration-300 placeholder:text-gray-400 min-h-[160px] resize-y"
                            placeholder="Just a quick overview - what's the app about? What are you hoping to achieve?"
                        ></textarea>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                            <button
                                onClick={handleBack}
                                className="px-8 py-4 text-lg font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!checkValidity() || isSubmitting}
                                className="flex-1 px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-zinc-800 transition-transform active:scale-[0.98] shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Submitting... <Loader2 className="w-5 h-5 animate-spin" /></>
                                ) : (
                                    <>Submit <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 7: Success */}
                {step === 7 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8 shadow-xl mx-auto">
                            <Check className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-3xl font-semibold mb-6 text-black">Check your inbox! 📬</h1>

                        {/* Loom Video Embed */}
                        <div className="mb-6 rounded-lg overflow-hidden shadow-lg border border-gray-100 max-w-2xl mx-auto">
                            <div className="relative pb-[56.25%] h-0">
                                <iframe
                                    src="https://www.loom.com/embed/073f96ed1b644a618c5c8486451b0031"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            We just sent you a booking link to your email. <br />
                            Looking forward to chatting!
                        </p>
                    </div>
                )}

            </main>

            <footer className="p-6 text-center text-gray-300 text-sm">
                Buildify Questionnaire
            </footer>
        </div>
    );
};

const NavButtons = ({ onBack, onNext, isValid }: { onBack: () => void, onNext: () => void, isValid: boolean }) => (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <button
            onClick={onBack}
            className="px-8 py-4 text-lg font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
        >
            Back
        </button>
        <button
            onClick={onNext}
            disabled={!isValid}
            className="flex-1 px-8 py-4 text-lg font-medium text-white bg-black rounded-lg hover:bg-zinc-800 transition-transform active:scale-[0.98] shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Next
            <ArrowRight className="w-5 h-5" />
        </button>
    </div>
);

export default Contact;
