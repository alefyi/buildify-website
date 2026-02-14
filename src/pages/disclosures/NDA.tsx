import React from "react";
import { SEO } from "@/components/SEO";

const NDA = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <SEO
                title="Non-Disclosure Agreement"
                description="Mutual Non-Disclosure Agreement for Buildify engagements."
                url="https://usebuildify.com/disclosures/nda"
            />

            <section className="pt-32 pb-24 max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Non-Disclosure Agreement</h1>
                <p className="text-zinc-500 mb-12">Mutual Confidentiality Obligations</p>

                <div className="space-y-12 text-zinc-600 leading-relaxed">

                    {/* Definitions */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">1. Confidential Information</h2>
                        <p>“Confidential Information” means all non-public information disclosed by a Party, including Trade Secrets, Business Information (pricing, customers), Project Information (designs, code), and Technical Information (APIs, architecture).</p>
                        <p className="italic">Exclusions: Information lawfully known prior to disclosure, publicly available, or independently developed.</p>
                    </div>

                    {/* Obligations */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">2. Obligations of the Recipient</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Confidentiality:</strong> Maintain strict confidence and do not disclose to third parties.</li>
                            <li><strong>Permitted Use:</strong> Use solely for evaluating or performing the business relationship.</li>
                            <li><strong>Standard of Care:</strong> Protect with at least commercially reasonable care.</li>
                            <li><strong>Access Limitation:</strong> Restrict access to employees with a need to know.</li>
                        </ul>
                    </div>

                    {/* Ownership */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">3. Ownership & Return</h2>
                        <p>All information remains property of the Disclosing Party. Upon termination, Recipient shall return or destroy all Confidential Information.</p>
                    </div>

                    {/* Remedies */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">4. Remedies</h2>
                        <p>Unauthorized disclosure causes irreparable harm. Disclosing Party is entitled to immediate injunctive relief.</p>
                    </div>

                    {/* Non-Solicit */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">6. Non-Solicitation</h2>
                        <p>For sixty (60) months following termination, Recipient shall not solicit or hire Buildify employees or contractors known through the engagement.</p>
                    </div>

                    {/* Term */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">8. Term & Survival</h2>
                        <p>Confidentiality obligations survive for sixty (60) months. Trade secret obligations survive as long as the information remains a trade secret.</p>
                    </div>

                    {/* Gov Law */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">10. Governing Law</h2>
                        <p>Governed by the laws of California.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NDA;
