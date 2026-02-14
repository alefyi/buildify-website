import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, DollarSign, Users, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Referral = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        referrer_name: "",
        referrer_email: "",
        referral_name: "",
        referral_business: "",
        referral_contact: "",
        notes: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xaqeqdzz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    referrer_name: "",
                    referrer_email: "",
                    referral_name: "",
                    referral_business: "",
                    referral_contact: "",
                    notes: ""
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending referral. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <div className="flex flex-col min-h-screen font-sans bg-white pb-20">
                <SEO
                    title="Partner Program"
                    description="Earn $650 for every referral that becomes a Buildify client. Simple, transparent, and unlimited."
                    url="https://usebuildify.com/referral"
                />
                <div className="flex-1 flex flex-col items-center justify-center pt-20 md:pt-32 pb-20 text-center px-6">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-black">Referral Received!</h1>
                    <p className="text-zinc-500 max-w-lg mx-auto mb-8 text-lg">
                        Thanks for sending this lead our way. We'll contact them shortly and keep you posted on the status.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="h-12 px-8">
                        Send Another Referral
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <SEO
                title="Partner Program"
                description="Earn $650 for every referral that becomes a Buildify client. Simple, transparent, and unlimited."
                url="https://usebuildify.com/referral"
            />

            {/* 1. Hero Section (Glow Effect on Money) */}
            <section className="pt-20 md:pt-32 pb-20 border-b border-zinc-200 bg-white">
                <div className="max-w-layout mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase bg-zinc-50">
                        Partner Program
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.05] max-w-4xl mx-auto">
                        Refer a founder. <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                            Earn $650.
                            {/* Glow Underline/Blur */}
                            <span className="absolute inset-0 bg-green-400 blur-2xl opacity-20 -z-10"></span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Know a business that needs a tech upgrade? Send them our way. If they sign up, you get paid. Simple.
                    </p>

                    <div className="flex justify-center">
                        <Link to="#submit-lead" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('submit-lead')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <Button size="lg" className="h-16 px-10 text-lg font-bold bg-black text-white hover:bg-zinc-800 rounded-sm shadow-none flex items-center justify-center gap-2">
                                Submit a Lead <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. How it Works (3-Step Process) */}
            <section className="py-24 bg-zinc-50 border-b border-zinc-200">
                <div className="max-w-layout mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Submit a Lead",
                                desc: "Fill out the simple form below with your contact info and the business you're referring.",
                                icon: Mail
                            },
                            {
                                step: "02",
                                title: "We Close the Deal",
                                desc: "Our sales team contacts them. We demo the product and sign them up.",
                                icon: Users
                            },
                            {
                                step: "03",
                                title: "You Get Paid",
                                desc: "Once their first month is paid, we send you $650 via Bank Transfer or PayPal.",
                                icon: DollarSign
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-zinc-200 rounded-sm relative overflow-hidden group">
                                <span className="text-[120px] font-bold text-zinc-50 absolute -right-6 -bottom-10 select-none group-hover:text-zinc-100 transition-colors">
                                    {item.step}
                                </span>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-zinc-100 rounded-sm flex items-center justify-center mb-6">
                                        <item.icon className="w-5 h-5 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight mb-4">{item.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Lead Submission Form */}
            <section id="submit-lead" className="py-24 bg-white border-b border-zinc-200">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <CertificateIcon className="w-12 h-12 mx-auto mb-6 text-black" />
                        <h2 className="text-4xl font-bold tracking-tight mb-4">Submit a Referral</h2>
                        <p className="text-zinc-500">We'll handle the rest. You'll hear from us within 24 hours.</p>
                    </div>

                    <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200 rounded-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-900">Your Name</label>
                                    <input
                                        required
                                        name="referrer_name"
                                        type="text"
                                        value={formData.referrer_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-900">Your Email</label>
                                    <input
                                        required
                                        name="referrer_email"
                                        type="email"
                                        value={formData.referrer_email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-zinc-200 my-6 pt-6"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-900">Referral Name (Business Owner)</label>
                                    <input
                                        required
                                        name="referral_name"
                                        type="text"
                                        value={formData.referral_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-900">Referral Business Name</label>
                                    <input
                                        required
                                        name="referral_business"
                                        type="text"
                                        value={formData.referral_business}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                        placeholder="Jane's Coffee Shop"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-900">Referral Contact Info (Email or Phone)</label>
                                <input
                                    required
                                    name="referral_contact"
                                    type="text"
                                    value={formData.referral_contact}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm"
                                    placeholder="jane@coffee.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-900">Notes (Optional)</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-black text-sm min-h-[100px]"
                                    placeholder="They are looking for a mobile app..."
                                ></textarea>
                            </div>

                            <Button disabled={isSubmitting} size="lg" className="w-full h-14 text-lg font-bold bg-black text-white hover:bg-zinc-800 rounded-sm shadow-none mt-4">
                                {isSubmitting ? "Submitting..." : "Submit Referral"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 4. FAQ (Partner Specific) */}
            <section className="max-w-[800px] mx-auto px-6 py-24">
                <h3 className="text-2xl font-bold tracking-tight mb-8 text-center">Partner FAQ</h3>
                <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
                    {[
                        { q: "Is there a limit to how much I can earn?", a: "No. Unlimited. Refer 10 clients, earn $6,500." },
                        { q: "When do I get paid?", a: "Payouts are issued 30 days after the client pays their first month's invoice." },
                        { q: "How do I track my referrals?", a: "We'll send you email updates at every stage: Received, Contacted, Closed." },
                        { q: "Does the client pay more?", a: "Nope! The referral fee comes out of our pocket, not theirs." }
                    ].map((faq, i) => (
                        <div
                            key={faq.q}
                            className="py-6 hover:bg-zinc-50 transition-colors group cursor-pointer px-4 -mx-4 rounded-sm"
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                            <div className="flex justify-between items-center transition-colors">
                                <h4 className="font-bold text-base">{faq.q}</h4>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black",
                                    openFaq === i ? "rotate-180 text-black" : ""
                                )} />
                            </div>
                            <div className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                openFaq === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                            )}>
                                <div className="overflow-hidden">
                                    <p className="text-zinc-500 leading-relaxed text-sm">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// Simple Icon for form header
const CertificateIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
)

export default Referral;
