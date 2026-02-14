import React from "react";
import { SEO } from "@/components/SEO";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <SEO
                title="Privacy Policy"
                description="Buildify Privacy Policy regarding collection, use, and disclosure of personal information."
                url="https://usebuildify.com/disclosures/privacy"
            />

            <section className="pt-32 pb-24 max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">Privacy Policy</h1>

                <div className="space-y-12 text-zinc-600 leading-relaxed">

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Contact Information</h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, you may contact us at:
                        </p>
                        <div className="bg-zinc-50 p-6 rounded-sm border border-zinc-200 text-sm">
                            <p className="font-bold text-black">Buildify HQ</p>
                            <p>453 S. Spring Street, Suite 400</p>
                            <p>Los Angeles, CA 90013</p>
                            <p className="mt-2">📧 <a href="mailto:hey@BuildifyHQ.com" className="hover:text-black hover:underline">hey@BuildifyHQ.com</a></p>
                        </div>
                    </div>

                    {/* Scope */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Scope of This Privacy Policy</h2>
                        <p>This Privacy Policy applies to personal information collected by Buildify through:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Our website located at BuildifyHQ.com (and usebuildify.com)</li>
                            <li>Any web-based, mobile, or downloadable applications operated by Buildify</li>
                            <li>SaaS tools, AI-powered services, beta products, and subscription offerings</li>
                            <li>Marketing, promotional, sales, onboarding, or customer support communications</li>
                            <li>Interactions with our social media accounts, advertisements, or authorized partners</li>
                        </ul>
                        <p>This Privacy Policy does not apply to third-party websites, applications, integrations, or services that may link to or be accessible from our Services. Buildify does not control and is not responsible for the privacy practices of third parties. We encourage you to review their privacy policies before providing any information.</p>
                    </div>

                    {/* Definitions */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Definitions of Personal Information</h2>
                        <p>For purposes of this Privacy Policy, “Personal Information” has the meaning given under applicable law and includes any information that identifies, relates to, describes, or could reasonably be linked to an identifiable individual, including but not limited to:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Identifiers", desc: "Name, email address, phone number, mailing address, IP address, device identifiers, account usernames, unique IDs, or similar identifiers." },
                                { title: "Commercial Information", desc: "Records of products or services purchased, obtained, considered, or usage histories." },
                                { title: "Internet or Network Activity", desc: "Browsing history, search history, interaction data, logs, analytics, and usage metrics relating to our Services." },
                                { title: "Geolocation Data", desc: "Approximate or precise location derived from IP address, GPS, or device settings." },
                                { title: "User-Provided Content", desc: "Text, images, videos, audio, files, prompts, or other content voluntarily submitted through the Services." },
                                { title: "Professional Information", desc: "Company name, job title, role, industry, or professional affiliations." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-zinc-200 p-4 rounded-sm">
                                    <h3 className="font-bold text-black text-sm mb-2">{item.title}</h3>
                                    <p className="text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Collection */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">How We Collect Personal Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Directly from you when you register, subscribe, submit forms, or communicate with us</li>
                            <li>Automatically through cookies, pixels, log files, analytics tools, and similar technologies</li>
                            <li>From service providers and integrations used to operate our Services</li>
                            <li>From authorized partners or affiliates acting on our behalf</li>
                        </ul>
                    </div>

                    {/* Use */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">How We Use Personal Information</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Provide, operate, maintain, and improve the Services</li>
                            <li>Process transactions and manage subscriptions</li>
                            <li>Communicate with you regarding updates, support, or service-related notices</li>
                            <li>Conduct analytics, research, and internal development</li>
                            <li>Detect, prevent, and respond to fraud, abuse, or security incidents</li>
                            <li>Enforce our Terms of Service and other agreements</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>
                    </div>

                    {/* Disclosure */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Disclosure of Personal Information</h2>
                        <p>We may disclose personal information to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Service providers and vendors performing services on our behalf</li>
                            <li>Analytics, hosting, payment processing, security, and infrastructure partners</li>
                            <li>Legal authorities when required by law or to protect rights, safety, or property</li>
                            <li>Affiliates or successors in connection with a merger, acquisition, or asset sale</li>
                        </ul>
                        <p className="font-medium text-black">We do not sell personal information as defined under CCPA/CPRA.</p>
                    </div>

                    {/* Rights */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Your California Privacy Rights</h2>
                        <p>If you are a California resident, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Right to Know what personal information we collect, use, and disclose</li>
                            <li>Right to Access specific pieces of personal information</li>
                            <li>Right to Delete personal information, subject to legal exceptions</li>
                            <li>Right to Correct inaccurate personal information</li>
                            <li>Right to Opt-Out of any future sale or sharing (if applicable)</li>
                            <li>Right to Limit Use of Sensitive Personal Information</li>
                            <li>Right to Non-Discrimination for exercising your rights</li>
                        </ul>
                        <div className="mt-6 bg-zinc-900 text-zinc-400 p-6 rounded-sm">
                            <h3 className="text-white font-bold mb-2">How to Exercise Your Rights</h3>
                            <p className="mb-4">Email <span className="text-white">hey@BuildifyHQ.com</span> with the subject line:</p>
                            <code className="bg-black px-2 py-1 rounded text-white block w-fit">“California Privacy Request”</code>
                        </div>
                    </div>

                    {/* Retention & Security */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black tracking-tight">Data Retention & Security</h2>
                        <p>We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy. We implement reasonable administrative, technical, and physical safeguards designed to protect personal information.</p>
                    </div>

                    {/* Updates */}
                    <div className="space-y-4 border-t border-zinc-200 pt-8">
                        <p className="text-sm text-zinc-400">
                            Last Updated: January 2026<br />
                            We may update this Privacy Policy at any time. Updates will be posted on our website.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Privacy;
