import React from "react";
import { SEO } from "@/components/SEO";

const Terms = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <SEO
                title="Terms of Service"
                description="Terms of Service for Buildify. Please read carefully before using our services."
                url="https://usebuildify.com/disclosures/terms"
            />

            <section className="pt-32 pb-24 max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Terms of Service</h1>
                <p className="text-zinc-500 mb-12">Last Updated: January 2026</p>

                <div className="space-y-12 text-zinc-600 leading-relaxed">

                    {/* 1. Contact */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">1. Contact Information</h2>
                        <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200 text-sm">
                            <p className="font-bold text-black">Buildify HQ</p>
                            <p>453 S. Spring Street, Suite 400</p>
                            <p>Los Angeles, CA 90013</p>
                            <p className="mt-2">📧 <a href="mailto:hey@BuildifyHQ.com" className="hover:text-black hover:underline">hey@BuildifyHQ.com</a></p>
                        </div>
                    </div>

                    {/* 2. Modifications */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">2. Modifications to These Terms</h2>
                        <p>Buildify reserves the exclusive right, at any time and in its sole discretion, to modify, update, or replace any part of this Agreement. Changes are effective immediately upon posting unless otherwise stated. Your continued use of the Services after changes constitutes binding acceptance of the revised Agreement.</p>
                    </div>

                    {/* 3. Eligibility */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">3. Eligibility & Account Responsibility</h2>
                        <p>By using the Services, you represent that you are at least 18 years old and have the authority to bind yourself or any entity you represent.</p>
                        <p>You are solely responsible for all activity under your account and maintaining the confidentiality of login credentials. Buildify is not responsible for unauthorized access caused by your failure to secure your credentials.</p>
                    </div>

                    {/* 4. Acceptable Use */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">4. Acceptable Use & Restrictions</h2>
                        <p>You agree not to, directly or indirectly:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Reverse engineer, decompile, or create derivative works of the Services</li>
                            <li>Resell or commercially exploit the Services without written consent</li>
                            <li>Use the Services for unlawful, misleading, or fraudulent purposes</li>
                            <li>Interfere with or bypass security measures</li>
                            <li>Send spam or phishing messages</li>
                            <li>Infringe intellectual property or privacy rights</li>
                        </ol>
                        <p>Violation of this section may result in immediate suspension or termination.</p>
                    </div>

                    {/* 5. IP Rights */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">5. Intellectual Property Rights</h2>
                        <p>All rights, title, and interest in the Services (software, code, designs, trademarks) are owned by Buildify (or its licensors) and protected by law. You are granted a limited, non-exclusive license to use the Services solely for your internal business use.</p>
                    </div>

                    {/* 6. UGC */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">6. User-Generated Content</h2>
                        <p>You retain ownership of content you submit. You grant Buildify a license to use such content solely to operate, improve, and promote the Services. You represent that you have all rights necessary to submit such content.</p>
                    </div>

                    {/* 7. AI Disclaimer */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">7. AI & Beta Disclaimer</h2>
                        <p>Some Services may include AI-powered or beta features. You acknowledge that outputs may be inaccurate or inappropriate and do not constitute professional advice. Use of such features is at your own risk.</p>
                    </div>

                    {/* 9. Fees */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">9. Fees & Payments</h2>
                        <p>Invoices are due as stated. Late fees may apply (5% per week up to 25%). All payments are non-refundable unless explicitly stated otherwise.</p>
                    </div>

                    {/* 11. Warranty Disclaimer */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">11. Disclaimer of Warranties</h2>
                        <p className="uppercase text-sm font-medium">The Services are provided “AS IS” and “AS AVAILABLE.” To the maximum extent permitted by law, Buildify disclaims all warranties, express or implied.</p>
                    </div>

                    {/* 12. Limitation of Liability */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">12. Limitation of Liability</h2>
                        <p className="uppercase text-sm font-medium">Buildify shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid by you in the three (3) months preceding the claim.</p>
                    </div>

                    {/* 14. Gov Law */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">14. Governing Law</h2>
                        <p>This Agreement is governed by the laws of the State of California. Any dispute shall be brought exclusively in Los Angeles County, California.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Terms;
