
import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Database, Smartphone, CheckCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

import { OrganizationSchema, FAQSchema } from '@/components/Schema';

const FAQS = [
    {
        q: "Why is my Adalo app listing loading so slowly?",
        a: "Slow lists usually happen when you filter data on the \"Client Side\" rather than the database level. If you have 1,000 users and filter for \"Status = Active\", Adalo might download all 1,000 records before hiding the inactive ones. We fix this by moving logic to backend queries or externalizing heavy data to Xano."
    },
    {
        q: "Can I publish to the Apple App Store and Google Play?",
        a: "Yes. Adalo supports native publishing, but the compliance process can be tricky. We handle the entire submission lifecycle, including Apple's strict 'Design Guidelines' and Google's recent '20 Tester' requirement for personal accounts."
    },
    {
        q: "Can I export my Adalo code to React Native?",
        a: "Adalo does not allow direct code export. However, Buildify specializes in \"Rebuilding to Scale.\" We map your exact Adalo database structure and rebuild the frontend in React Native in rapid sprints, preserving your user data while unlocking 10x performance."
    },
    {
        q: "How do I accept payments other than Stripe?",
        a: "Native Adalo only supports Stripe. To use PayPal, Razorpay, or others, we build a \"Custom Component\" or use a Webview bridge securely connected to the API. We have implemented this for clients in 12+ unsupported countries."
    },
    {
        q: "Does Adalo support Push Notifications?",
        a: "Yes, but advanced triggers (like 'Notify user when X happens') require custom setup via OneSignal or Make.com automation. We configure complex notification workflows that drive user retention."
    },
    {
        q: "Is my user data secure?",
        a: "We audit Adalo permissions to ensure users can only read their own data. For medical (HIPAA) or fintech apps, we architect a 'Split Stack' solution where sensitive data lives in Xano (compliant backend) and Adalo just serves as the visual interface."
    },
    {
        q: "My app crashes when too many users join. Why?",
        a: "This is often a \"Relationship Loop\" issue. If User A is linked to all \"Posts\" and the system tries to load User A's profile, it might try to load all associated Posts simultaneously. We optimize your database relationships to \"Lazy Load\" data only when needed."
    },
    {
        q: "Can you build a marketplace on Adalo?",
        a: "Absolutely. We have built 2-sided marketplaces (like Uber or Airbnb clones) on Adalo using advanced filtering and multi-user permissions. The key is in the database structure to keep buyer and seller data distinct."
    }
];

const Adalo = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Adalo Experts & Rescue"
                description="Fix performance issues, build custom components, and scale your Adalo app with certified experts. We save projects others give up on."
                url="https://usebuildify.com/adalo"
            />
            <OrganizationSchema />
            <FAQSchema items={FAQS} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-zinc-200">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FF4F00]"></span> {/* Adalo Brand Color */}
                        <span className="text-xs font-medium text-black uppercase tracking-wide">Top 3 Adalo Expert Agency</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-6 max-w-4xl">
                        We push Adalo <br className="hidden md:block" />
                        <span className="text-zinc-400">beyond the limit.</span>
                    </h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
                        Most agencies complain about Adalo's limitations. We engineer around them.
                        From complex databases to high-performance logic, we build what others can't.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="h-12 px-8 text-base bg-black hover:bg-zinc-800 text-white rounded-[4px] shadow-none">
                                Audit My Adalo App
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white hover:bg-zinc-50 text-black border-zinc-200 rounded-[4px] shadow-none">
                                Migrate to Code
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Rescue Grid (Pain Points) */}
            <section className="py-24 border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-black mb-4">Adalo Rescue Kit</h2>
                        <p className="text-zinc-500 max-w-xl">We specialize in fixing the "unfixable" performance issues that plague scaling Adalo apps.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Speed Optimization */}
                        <div className="p-8 bg-white border border-zinc-200 rounded-[4px]">
                            <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-[4px] flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">Performance Tuning</h3>
                            <p className="text-sm text-zinc-500 mb-4">Slow lists? Laggy buttons? We optimize collections and relationship logic to cut load times by 70%.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> Collection Caching
                                </li>
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> External Collections
                                </li>
                            </ul>
                        </div>

                        {/* Database Logic */}
                        <div className="p-8 bg-white border border-zinc-200 rounded-[4px]">
                            <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-[4px] flex items-center justify-center mb-6">
                                <Database className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">Database Architecture</h3>
                            <p className="text-sm text-zinc-500 mb-4">We restructure messy schemas that cause crashes, ensuring your data relationships scale with your users.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> Xano Integration
                                </li>
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> Schema Normalization
                                </li>
                            </ul>
                        </div>

                        {/* UX/UI Polish */}
                        <div className="p-8 bg-white border border-zinc-200 rounded-[4px]">
                            <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-[4px] flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">Native Feel</h3>
                            <p className="text-sm text-zinc-500 mb-4">We use advanced CSS tricks and custom components to make Adalo look and feel like true code.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> Custom Actions
                                </li>
                                <li className="flex items-center text-xs text-black font-medium">
                                    <CheckCircle className="w-4 h-4 mr-2 text-zinc-400" /> Responsive Fixes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* AEO Forum FAQ Strategy - Vercel Design Standard */}
            <section className="max-w-[1200px] mx-auto border-x border-zinc-200 bg-white border-b border-zinc-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
                    <div className="p-10 bg-zinc-50 border-t border-zinc-200">
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-white border border-zinc-200 rounded-[4px] mb-4">
                            <HelpCircle className="w-4 h-4 text-zinc-500" />
                            <span className="text-xs font-mono font-medium text-zinc-900">ADALO FORUM SOLUTIONS</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-black mb-6">
                            Common Issues <br /> We Solve
                        </h2>
                        <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                            Questions we answer daily for frustrated founders on the forum.
                        </p>
                        <Link to="/contact">
                            <Button className="w-full md:w-auto h-12 bg-black hover:bg-zinc-800 text-white rounded-[4px] shadow-none">
                                Fix My Issue <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="lg:col-span-2 divide-y divide-zinc-200 border-t border-zinc-200">
                        {FAQS.map((faq, i) => (
                            <div
                                key={faq.q}
                                className="p-10 hover:bg-zinc-50 transition-colors group cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg text-black">{faq.q}</h4>
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
                                        <p className="text-zinc-500 leading-relaxed text-base">{faq.a}</p>
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

export default Adalo;


