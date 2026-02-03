import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, CreditCard, RotateCcw, PauseCircle, ChevronDown, MessageSquare, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const Bill: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    const billingPortalUrl = "https://billingportal.buildifyhq.com/p/login/3cs8ze7UffYRcEM5kk";

    return (
        <div className="flex flex-col">
            <SEO
                title="Billing Support"
                description="Manage your Buildify subscription, update billing info, or inquire about charges from Buildify, Ozone, or Hidaku LLC."
                url="https://usebuildify.com/bill"
            />

            {/* 1. Hero Section */}
            <section className="pt-20 md:pt-32 pb-24 border-b border-zinc-200 bg-white overflow-hidden relative">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-10 bg-zinc-100 rounded-[4px] flex items-center justify-center border border-zinc-200">
                            <CreditCard className="w-5 h-5 text-black" />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05]">
                        Buildify Billing
                    </h1>

                    <div className="max-w-2xl text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed space-y-6">
                        <p>
                            Tagged expenses with <span className="font-bold text-black">"buildifyhq.com/bill"</span> or <span className="font-bold text-black">"Ozone Coverage"</span> are from us, Buildify, for your development invoice or subscription.
                        </p>
                        <p className="text-base text-zinc-400">
                            <strong>Note:</strong> You might've known us as Ozone, our former name. We are now fully Buildify! In some cases, charges might appear as <span className="text-zinc-500 font-medium">Hidaku LLC</span>, our legal entity.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={billingPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-12 px-8 bg-black text-white font-medium rounded-sm hover:bg-zinc-800 transition-colors"
                        >
                            Open Customer Portal <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Mesh Gradient Background */}
                <div className="absolute top-0 right-0 -z-10 opacity-40 translate-x-1/4">
                    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="300" cy="300" r="300" fill="url(#paint0_radial_bill)" />
                        <defs>
                            <radialGradient id="paint0_radial_bill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
                                <stop stopColor="#E4E4E7" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </section>

            {/* 2. Action Grid */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <a href={billingPortalUrl} target="_blank" rel="noopener noreferrer" className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                        <CreditCard className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                        <h4 className="font-bold text-lg mb-2">Update Billing Info</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Access your customer portal to update your payment method or billing address.
                        </p>
                    </a>
                    <a href={billingPortalUrl} target="_blank" rel="noopener noreferrer" className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                        <PauseCircle className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                        <h4 className="font-bold text-lg mb-2">Manage Subscription</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Need a break? You can pause your subscription without losing access to your data.
                        </p>
                    </a>
                    <a href={billingPortalUrl} target="_blank" rel="noopener noreferrer" className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                        <RotateCcw className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                        <h4 className="font-bold text-lg mb-2">Cancel Service</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            All subscriptions are month-to-month. Cancel anytime with no hassle.
                        </p>
                    </a>
                </div>
            </section>

            {/* 3. FAQ Section */}
            <section className="max-w-[1200px] mx-auto border-x border-zinc-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                            <p className="text-zinc-500 mb-6">Common questions about billing.</p>
                            <Link to="/contact" className="text-sm font-bold underline decoration-zinc-300 underline-offset-4 hover:decoration-black transition-all">
                                Need more help? Contact us &rarr;
                            </Link>
                        </div>
                        <div className="mt-8">
                            <div className="flex gap-2 items-center text-zinc-400 text-sm">
                                <MessageSquare className="w-4 h-4" />
                                <span>We reply within 2 hours.</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
                        {[
                            { q: "How do I cancel?", a: "All of our subscriptions are month-to-month, and you can cancel anytime—no hassle. You can manage your subscription and cancel directly through your customer portal." },
                            { q: "Can I pause my plan?", a: "Yes. If you need to take a break, you can pause your subscription without canceling. This way, you won’t lose access to your data, settings, or progress." },
                            { q: "What is Ozone / Hidaku?", a: "Ozone was our former name. We are now Buildify. Hidaku LLC is our legal entity handling billing." },
                            { q: "How do I update my card?", a: "You can update your billing information by accessing your customer portal. The email where you receive our messages is your login." }
                        ].map((faq, i) => (
                            <div
                                key={faq.q}
                                className="p-10 hover:bg-zinc-50 transition-colors group cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
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
                                        <p className="text-zinc-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bill;
