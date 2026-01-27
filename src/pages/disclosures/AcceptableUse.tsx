import React from "react";
import { SEO } from "@/components/SEO";

const AcceptableUse = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <SEO
                title="Acceptable Use Policy"
                description="Acceptable Use Policy, including Confidentiality and Non-Circumvention."
                url="https://usebuildify.com/disclosures/acceptable-use"
            />

            <section className="pt-32 pb-24 max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Acceptable Use Policy</h1>
                <p className="text-zinc-500 mb-12">Including Confidentiality, Non-Circumvention, and No-Refund Terms</p>

                <div className="space-y-12 text-zinc-600 leading-relaxed">

                    {/* 1. Scope */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">1. Scope and Applicability</h2>
                        <p>This Policy applies to all Buildify offerings (Products) and to any person or entity who uses them. If a signed MSA exists, it controls for conflicts, but this Policy applies as a baseline for acceptable use and confidentiality.</p>
                    </div>

                    {/* 2. Confidentiality */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">2. Confidentiality & Non-Circumvention</h2>
                        <h3 className="font-bold text-black">2.1 Confidential Information</h3>
                        <p>Includes pricing, roadmaps, code samples, designs, and methodologies shared by Buildify.</p>

                        <h3 className="font-bold text-black">2.2 Strict Confidentiality</h3>
                        <p>You must keep Confidential Information strictly confidential and not share it with third parties.</p>

                        <h3 className="font-bold text-black">2.3 Non-Circumvention</h3>
                        <p>You may not solicit, recruit, or hire Buildify’s employees or contractors for one (1) year after your engagement.</p>

                        <h3 className="font-bold text-black">2.4 Non-Disclosure of Know-How</h3>
                        <p>You may not reverse engineer or replicate our workflows or methodologies.</p>
                    </div>

                    {/* 3. Fair Use */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">3. Fair Use</h2>
                        <p>Products are for lawful business use. Excessive usage that upgrades performance or creates risk may result in throttling or termination.</p>
                    </div>

                    {/* 4. Prohibited Conduct */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">4. Prohibited Conduct</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Intellectual Property Infringement</li>
                            <li>Spam / Unlawful Outreach</li>
                            <li>Malicious Activity (Malware/Exploits)</li>
                            <li>Unauthorized Access / Penetration Testing</li>
                            <li>Harassment or Abuse</li>
                            <li>Data Scraping</li>
                        </ul>
                    </div>

                    {/* 5. Payment & No Refund */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">5. Payment Terms & No-Refund Policy</h2>
                        <div className="bg-zinc-50 p-6 border border-zinc-200 rounded-sm">
                            <h3 className="font-bold text-black mb-2">5.2 No Refunds Once Paid</h3>
                            <p className="mb-4">All payments are final and non-refundable once made, including deposits, milestone payments, and subscription fees.</p>

                            <h3 className="font-bold text-black mb-2">5.4 Nullification of Guarantees</h3>
                            <p>Any initial-sprint guarantee is automatically revoked upon your approval of any subsequent milestone.</p>
                        </div>
                        <p>Late payments are subject to a 1.5% monthly fee or reasonable late fees.</p>
                    </div>

                    {/* 6. Termination */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">6. Suspension & Modification</h2>
                        <p>Buildify may modify or terminate access at any time to enforce this policy. Suspension does not entitle you to a refund.</p>
                    </div>

                    {/* 8. Acknowledgment */}
                    <div className="space-y-4 border-t border-zinc-200 pt-8">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Acknowledgment</h2>
                        <p>By using any Product or paying any invoice, you agree to be bound by this Policy.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AcceptableUse;
