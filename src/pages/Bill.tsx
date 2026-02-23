import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, CreditCard, RotateCcw, PauseCircle, ChevronDown, MessageSquare, ExternalLink, Check, HelpCircle, FileText, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/ui/section";
import DottedGlowBackground from "@/components/DottedGlowBackground";

import { IconReveal } from "@/components/animations/IconReveal";
import { BiCreditCard } from "react-icons/bi";

const Bill: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    const billingPortalUrl = "https://billingportal.buildifyhq.com/p/login/3cs8ze7UffYRcEM5kk";

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Billing Support"
                description="Manage your Buildify subscription, update billing info, or inquire about charges from Buildify, Ozone, or Hidaku LLC."
                url="https://usebuildify.com/bill"
            />

            {/* 1. Hero Section */}
            <Section variant="default" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
                <DottedGlowBackground />
                <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent to-white" />
                <div className="max-w-layout mx-auto px-6 relative z-10">

                    <FadeIn delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05]">
                            Buildify{" "}
                            <IconReveal index={0}><span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-50"><BiCreditCard className="w-3.5 h-3.5 text-blue-500" /></span></IconReveal>
                            {" "}Billing
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="max-w-2xl text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed space-y-6">
                            <p>
                                Tagged expenses with <span className="font-bold text-black">"buildifyhq.com/bill"</span> or <span className="font-bold text-black">"Ozone Coverage"</span> are from us, Buildify, for your development invoice or subscription.
                            </p>
                            <p className="text-base text-zinc-400">
                                <strong>Note:</strong> You might've known us as Ozone, our former name. We are now fully Buildify! In some cases, charges might appear as <span className="text-zinc-500 font-medium">Hidaku LLC</span>, our legal entity.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <a
                            href={billingPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150"
                        >
                            Open Customer Portal <ExternalLink className="ml-2 w-5 h-5" />
                        </a>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. Icon Grid — Quick Actions */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">What you can do.</h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
                        {[
                            { title: "Update Card", desc: "Change your payment method or billing address through your portal.", icon: CreditCard, color: "text-blue-500" },
                            { title: "Pause Plan", desc: "Need a break? Pause without losing access to your data or settings.", icon: PauseCircle, color: "text-yellow-500" },
                            { title: "Cancel Anytime", desc: "Month-to-month. No contracts, no cancellation fees. No questions.", icon: RotateCcw, color: "text-red-500" },
                            { title: "View Invoices", desc: "Download past invoices and receipts for your accounting records.", icon: FileText, color: "text-green-500" },
                            { title: "Dispute Charge", desc: "See something unexpected? Contact us and we'll resolve it immediately.", icon: HelpCircle, color: "text-orange-500" },
                            { title: "Get Help", desc: "Real humans answer billing questions within 2 hours, every time.", icon: MessageSquare, color: "text-purple-500" },
                            { title: "Upgrade Plan", desc: "Ready for more? Upgrade your plan and unlock additional features.", icon: ArrowRight, color: "text-cyan-500" },
                            { title: "Data Security", desc: "Your payment data is encrypted with Stripe. We never see your card details.", icon: Shield, color: "text-pink-500" },
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={0.15 + (i * 0.1)}>
                                <div className="flex flex-col gap-3">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                    <h4 className="font-bold text-base tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. FAQ */}
            <Section variant="full" className="">
                <div className="max-w-layout mx-auto px-6 py-10 md:py-16">
                    <FadeIn>
                        <h2 className="text-section text-black max-w-xl">Frequently asked questions</h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-sm font-medium text-zinc-500 max-w-2xl mt-4 leading-relaxed">
                            Common questions about billing, charges, and subscriptions.
                        </p>
                    </FadeIn>

                    <div className="mt-16 divide-y divide-zinc-200">
                        {[
                            { q: "How do I cancel?", a: "All of our subscriptions are month-to-month, and you can cancel anytime — no hassle. You can manage your subscription and cancel directly through your customer portal." },
                            { q: "Can I pause my plan?", a: "Yes. If you need to take a break, you can pause your subscription without canceling. This way, you won't lose access to your data, settings, or progress." },
                            { q: "What is Ozone / Hidaku?", a: "Ozone was our former name. We are now Buildify. Hidaku LLC is our legal entity handling billing." },
                            { q: "How do I update my card?", a: "You can update your billing information by accessing your customer portal. The email where you receive our messages is your login." },
                            { q: "Why was I charged more than expected?", a: "If you upgraded your plan mid-cycle, your next invoice may include a prorated amount. Check your portal for a detailed invoice breakdown." },
                            { q: "Is my payment information secure?", a: "Yes. We use Stripe for all payment processing. We never store or see your credit card details. All data is encrypted with AES-256." },
                        ].map((faq, i) => (
                            <button
                                key={faq.q}
                                className="w-full text-left py-6 transition-colors group cursor-pointer focus:outline-none"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black flex-shrink-0 ml-4",
                                        openFaq === i ? "rotate-180 text-black" : ""
                                    )} />
                                </div>
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openFaq === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. CTA */}
            <Section variant="full" className="py-10 md:py-16 relative overflow-hidden bg-white">
                <DottedGlowBackground />
                <FadeIn fullWidth className="relative z-10">
                    <div className="max-w-layout mx-auto px-6 text-center">
                        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Still have questions?</h2>
                        <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">We reply within 2 hours. No bots, no ticket queues.</p>
                        <Link to="/contact">
                            <button className="inline-flex items-center text-sm font-semibold px-4 py-1.5 rounded-2xl bg-black text-white hover:bg-zinc-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150">
                                Contact Support <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};

export default Bill;
