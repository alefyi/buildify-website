import React from "react";
import { Link } from "react-router-dom";
import { footerRoutes } from "@/data/routes";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 pt-32 pb-16">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-20">
                    <div className="lg:col-span-2">
                        <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-4">
                            <Logo className="w-8 h-8" />
                            Buildify
                        </Link>
                        <p className="text-zinc-500 text-sm max-w-sm mb-6">
                            We build the tech your business runs on. From startups to enterprise scale, we deliver premium software solutions.
                        </p>
                        <div className="flex gap-2">
                            {/* Social icons placeholder */}
                        </div>
                    </div>

                    {footerRoutes.map((column) => (
                        <div key={column.title} className="col-span-1">
                            <h4 className="font-semibold text-zinc-900 mb-4">{column.title}</h4>
                            <ul className="flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link.href}>
                                        <Link to={link.href} className="text-sm text-zinc-500 hover:text-black transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-400">
                        © {new Date().getFullYear()} Buildify. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/disclosures/privacy" className="text-xs text-zinc-400 hover:text-black">Privacy Policy</Link>
                        <Link to="/disclosures/terms" className="text-xs text-zinc-400 hover:text-black">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
