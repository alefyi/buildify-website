import React, { useState, useEffect, useRef } from 'react';
import { SEO } from "@/components/SEO";
import { Check, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// User needs to replace this with their new Formspree ID or Make Webhook
const ENDPOINT = 'https://formspree.io/f/xaqeqdzz';

const ScopeEstimate = () => {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Section 1: Core Value
        problemStatement: '',
        targetAudience: '',
        successMetric: '',

        // Section 2: Functional
        mustHaves: '',
        userPersonas: '',
        featureList: {
            auth: false,
            socialLogin: false,
            biometrics: false,
            notifications: false,
            payments: false,
            media: false
        },
        userJourney: '',

        // Section 3: Technical
        platformPreference: '', // Native, Cross, PWA
        integrations: '',
        dataStorage: '',

        // Section 4: UX
        designAssets: '',
        inspiration: '',

        // Section 5: Admin
        adminDashboard: '',
        monetization: '',
        compliance: '',

        // Section 6: Timeline
        mvpScope: '',
        deadlines: '',
        budgetRange: '',

        // Section 7: Contact
        name: '',
        email: '',
        phone: ''
    });

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    // Auto-scroll and focus
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => inputRef.current?.focus(), 300);
    }, [step]);

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFeatureToggle = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            featureList: {
                ...prev.featureList,
                // @ts-ignore
                [feature]: !prev.featureList[feature]
            }
        }));
    };

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: "New Scope Estimate Request",
                    _replyto: formData.email,
                    _email_to: "betsy@buildifyhq.com" // Hint for backend if supported
                })
            });
            setStep(8);
        } catch (error) {
            alert("Error sending form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderNav = () => (
        <div className="flex gap-4 mt-8 pt-6 border-t border-zinc-100">
            {step > 0 && (
                <button
                    onClick={handleBack}
                    className="px-6 py-3 text-zinc-500 bg-zinc-100 hover:bg-zinc-200 rounded-[4px] font-medium transition-colors"
                >
                    Back
                </button>
            )}
            <button
                onClick={step === 7 ? handleSubmit : handleNext}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 bg-black text-white hover:bg-zinc-800 rounded-[4px] font-medium transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : (step === 7 ? "Submit Request" : "Next Step")}
                {!isSubmitting && step !== 7 && <ArrowRight className="w-4 h-4" />}
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col pt-24 font-sans text-zinc-900">
            <SEO
                title="Project Scope Estimate"
                description="Get a detailed scope and cost estimate for your custom software project. Tell us about your vision, and we'll handle the tech."
                url="https://usebuildify.com/form/scope-estimate"
            />

            <div className="max-w-2xl mx-auto w-full px-6 pb-20">
                {/* Progress */}
                {step < 8 && (
                    <div className="mb-10">
                        <div className="h-1 bg-zinc-100 w-full rounded-full overflow-hidden">
                            <div
                                className="h-full bg-black transition-all duration-500 ease-out"
                                style={{ width: `${((step) / 7) * 100}%` }}
                            />
                        </div>
                        <div className="mt-2 text-xs text-zinc-400 font-mono uppercase tracking-widest">
                            Step {step} of 7
                        </div>
                    </div>
                )}

                {/* Step 0: Intro */}
                {step === 0 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h1 className="text-4xl font-bold tracking-tight mb-6">Let's scope your project.</h1>
                        <p className="text-xl text-zinc-500 mb-8 leading-relaxed">
                            This questionnaire helps us understand your vision, technical needs, and business goals.
                            The more detail you provide, the more accurate our estimation will be.
                        </p>
                        <button
                            onClick={handleNext}
                            className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-medium rounded-[4px] hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                        >
                            Start Estimation <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {/* Step 1: Core Value */}
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">1. Core Value Proposition</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">Problem Statement</label>
                            <p className="text-xs text-zinc-500 mb-2">What specific pain point does this app address?</p>
                            <textarea
                                ref={inputRef as any}
                                value={formData.problemStatement}
                                onChange={e => handleChange('problemStatement', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none min-h-[100px]"
                                placeholder="e.g., Dog owners struggle to find safe walking routes..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Target Audience</label>
                            <p className="text-xs text-zinc-500 mb-2">Who is the ideal user? (Age, profession, location).</p>
                            <input
                                type="text"
                                value={formData.targetAudience}
                                onChange={e => handleChange('targetAudience', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., Urban professionals, age 25-40..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Success Metric</label>
                            <p className="text-xs text-zinc-500 mb-2">How do you define a "win"?</p>
                            <input
                                type="text"
                                value={formData.successMetric}
                                onChange={e => handleChange('successMetric', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., 1000 active monthly users..."
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 2: Functional */}
                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">2. Functional Requirements</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">User Personas</label>
                            <textarea
                                ref={inputRef as any}
                                value={formData.userPersonas}
                                onChange={e => handleChange('userPersonas', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., Customer vs. Service Provider..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-4">Core Features Required</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 'auth', label: 'Email Login' },
                                    { id: 'socialLogin', label: 'Social Login' },
                                    { id: 'biometrics', label: 'FaceID / Biometrics' },
                                    { id: 'notifications', label: 'Push Notifications' },
                                    { id: 'payments', label: 'Payments / Stripe' },
                                    { id: 'media', label: 'Photo/Video Upload' },
                                ].map(f => (
                                    <div
                                        key={f.id}
                                        onClick={() => handleFeatureToggle(f.id)}
                                        className={cn(
                                            "p-4 border rounded-[4px] cursor-pointer transition-all flex items-center gap-3",
                                            // @ts-ignore
                                            formData.featureList[f.id] ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                        )}
                                    >
                                        <div className={cn("w-5 h-5 border rounded flex items-center justify-center",
                                            // @ts-ignore
                                            formData.featureList[f.id] ? "bg-black border-black" : "border-zinc-300")}>
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-sm font-medium">{f.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">User Journey / Must-Haves</label>
                            <textarea
                                value={formData.mustHaves}
                                onChange={e => handleChange('mustHaves', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none min-h-[120px]"
                                placeholder="Describe the main flows (e.g., User logs in -> Browses list -> Books item)..."
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 3: Technical */}
                {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">3. Technical Strategy</h2>

                        <div>
                            <label className="block text-sm font-bold mb-4">Platform Preference</label>
                            <div className="grid grid-cols-1 gap-3">
                                {['Native (iOS & Android) - Performance', 'Cross-Platform (React Native) - Speed', 'PWA (Web Based) - Accessibility'].map(p => (
                                    <div
                                        key={p}
                                        onClick={() => handleChange('platformPreference', p)}
                                        className={cn(
                                            "p-4 border rounded-[4px] cursor-pointer transition-all",
                                            formData.platformPreference === p ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                        )}
                                    >
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Integrations (APIs)</label>
                            <input
                                ref={inputRef as any}
                                type="text"
                                value={formData.integrations}
                                onChange={e => handleChange('integrations', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., Google Maps, OpenAI, Twilio..."
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 4: UX */}
                {step === 4 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">4. UX & Design</h2>

                        <div>
                            <label className="block text-sm font-bold mb-4">Design Assets</label>
                            <div className="grid grid-cols-1 gap-3">
                                {['Yes - I have full branding', 'Partial - Valid logo/colors', 'None - I need design help'].map(opt => (
                                    <div
                                        key={opt}
                                        onClick={() => handleChange('designAssets', opt)}
                                        className={cn(
                                            "p-4 border rounded-[4px] cursor-pointer transition-all",
                                            formData.designAssets === opt ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                        )}
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Inspiration</label>
                            <p className="text-xs text-zinc-500 mb-2">List 2-3 apps you like the "feel" of.</p>
                            <input
                                type="text"
                                value={formData.inspiration}
                                onChange={e => handleChange('inspiration', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., Airbnb for the map, Instagram for the feed..."
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 5: Admin */}
                {step === 5 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">5. Admin & Business</h2>

                        <div>
                            <label className="block text-sm font-bold mb-4">Admin Dashboard Needs</label>
                            <div className="grid grid-cols-1 gap-3">
                                {['Yes - Need to manage users/content', 'No - Just the app is fine', 'Not Sure'].map(opt => (
                                    <div
                                        key={opt}
                                        onClick={() => handleChange('adminDashboard', opt)}
                                        className={cn(
                                            "p-4 border rounded-[4px] cursor-pointer transition-all",
                                            formData.adminDashboard === opt ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                        )}
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-4">Monetization Model</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['Free', 'One-time Purchase', 'Subscription', 'Ads', 'Commission', 'Other'].map(opt => (
                                    <div
                                        key={opt}
                                        onClick={() => handleChange('monetization', opt)}
                                        className={cn(
                                            "p-4 border rounded-[4px] cursor-pointer transition-all text-center",
                                            formData.monetization === opt ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                        )}
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Compliance (Optional)</label>
                            <input
                                type="text"
                                value={formData.compliance}
                                onChange={e => handleChange('compliance', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="e.g., HIPAA, GDPR, PCI (Leave blank if unsure)"
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 6: Timeline */}
                {step === 6 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">6. Timeline & Budget</h2>

                        <div>
                            <label className="block text-sm font-bold mb-2">MVP Scope</label>
                            <p className="text-xs text-zinc-500 mb-2">What is the absolute smallest version required for launch?</p>
                            <textarea
                                value={formData.mvpScope}
                                onChange={e => handleChange('mvpScope', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none min-h-[100px]"
                                placeholder="e.g., Just user login and payment..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-4">Deadlines</label>
                                <div className="flex flex-col gap-3">
                                    {['ASAP (Urgent)', '1-2 Months', '3-6 Months', 'Flexible'].map(opt => (
                                        <div
                                            key={opt}
                                            onClick={() => handleChange('deadlines', opt)}
                                            className={cn(
                                                "p-3 border rounded-[4px] cursor-pointer transition-all",
                                                formData.deadlines === opt ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                            )}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-4">Budget Range</label>
                                <div className="flex flex-col gap-3">
                                    {['Under $10k', '$10k - $25k', '$25k - $50k', '$50k+', 'Not Sure'].map(opt => (
                                        <div
                                            key={opt}
                                            onClick={() => handleChange('budgetRange', opt)}
                                            className={cn(
                                                "p-3 border rounded-[4px] cursor-pointer transition-all",
                                                formData.budgetRange === opt ? "border-black bg-zinc-50 ring-1 ring-black" : "border-zinc-200 hover:border-zinc-400"
                                            )}
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 7: Contact */}
                {step === 7 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-2xl font-bold">Final Step: Contact Info</h2>
                        <p className="text-zinc-500">Where should we send the estimate?</p>

                        <div className="space-y-4">
                            <input
                                ref={inputRef as any}
                                type="text"
                                value={formData.name}
                                onChange={e => handleChange('name', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={e => handleChange('email', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="Your Email"
                            />
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={e => handleChange('phone', e.target.value)}
                                className="w-full p-4 border border-zinc-200 rounded-[4px] focus:ring-1 focus:ring-black outline-none"
                                placeholder="Phone (Optional)"
                            />
                        </div>
                        {renderNav()}
                    </div>
                )}

                {/* Step 8: Success */}
                {step === 8 && (
                    <div className="text-center animate-in fade-in zoom-in-50 duration-500 py-20">
                        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">
                            Thank you for detailing your scope. We have sent a confirmation to <strong>{formData.email}</strong>.
                            Our team will review your requirements and get back to you within 24 hours.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScopeEstimate;
