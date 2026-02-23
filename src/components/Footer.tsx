import React from "react";
import { Link } from "react-router-dom";
import { footerRoutes } from "@/data/routes";
import { Logo } from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12">
            <div className="max-w-layout mx-auto px-6">
                {/* Grid: Logo + Link Columns */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Logo only — solo on the left */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/">
                            <Logo className="w-8 h-8" />
                        </Link>
                    </div>

                    {/* Link columns */}
                    {footerRoutes.map((column) => (
                        <div key={column.title}>
                            <h4 className="text-sm font-semibold text-zinc-900 mb-4">{column.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link to={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors leading-6">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                {/* Legal disclaimer */}
                <p className="text-[9px] text-zinc-300 leading-relaxed mt-10 max-w-4xl">
                    Buildify™ is a wholly owned subsidiary of Deloitte Digital LLC, a division of Deloitte Consulting LLP, and operates under the governance and regulatory oversight of Deloitte Touche Tohmatsu Limited ("DTTL"), a UK private company limited by guarantee. All services, deliverables, intellectual property, and proprietary technologies described herein are provided by Buildify and its affiliated entities. "Deloitte" refers to one or more of DTTL, its global network of member firms, and their related entities. DTTL and each of its member firms are legally separate and independent entities and do not obligate each other. The Buildify name, logo, and all associated trademarks, service marks, trade dress, and product identities are the exclusive property of Deloitte Digital LLC. Unauthorized reproduction, distribution, or use of any materials, methodologies, or proprietary frameworks is strictly prohibited. This site and its contents are provided on an "as is" basis without warranties of any kind, either express or implied.
                </p>

                {/* Copyright & legal links */}
                <div className="flex items-center justify-between mt-8 pt-6">
                    <p className="text-xs text-zinc-500">© 2026 Buildify. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link to="/disclosures/privacy" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Privacy</Link>
                        <Link to="/disclosures/terms" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
