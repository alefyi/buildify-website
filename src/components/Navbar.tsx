import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Briefcase, Church, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { getCalApi } from "@calcom/embed-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Initialize Cal.com
        (async function () {
            const cal = await getCalApi({ "namespace": "discovery" });
            cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleStartBuilding = async () => {
        const cal = await getCalApi({ "namespace": "discovery" });
        cal("modal", { calLink: "alefyi/discovery" });
    };

    const navLinks = [
        { label: "Business", to: "/business", icon: Briefcase },
        { label: "Faith", to: "/faith", icon: Church },
        { label: "Creators", to: "/creators", icon: Palette },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-lg">
            <div className="max-w-layout mx-auto px-6">
                {/* Desktop: 5-column grid like UserJot */}
                <div className="hidden md:grid grid-cols-5 items-center h-16">
                    {/* Logo — left */}
                    <div className="col-span-1 flex items-center">
                        <Link
                            to="/"
                            className="font-semibold text-gray-900 flex items-center gap-2 group"
                        >
                            <Logo className="w-7 h-7" />
                            <span className="transition-colors duration-300">
                                Buildify
                            </span>
                        </Link>
                    </div>

                    {/* Nav links — centered */}
                    <div className="col-span-3 flex items-center justify-center gap-2">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={cn(
                                        "text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5",
                                        location.pathname === link.to
                                            ? "text-black bg-zinc-100"
                                            : "text-gray-900 hover:bg-zinc-50"
                                    )}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA — right */}
                    <div className="col-span-1 flex items-center justify-end gap-3">
                        <button
                            onClick={handleStartBuilding}
                            className="group text-sm font-semibold text-white bg-black px-4 py-1.5 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-zinc-800 active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150 cursor-pointer flex items-center gap-0 hover:gap-1.5"
                        >
                            Get Started
                            <ArrowRight className="w-0 h-3.5 opacity-0 group-hover:w-3.5 group-hover:opacity-100 transition-all duration-200" />
                        </button>
                    </div>
                </div>

                {/* Mobile: flex row */}
                <div className="md:hidden flex items-center justify-between h-14">
                    <Link
                        to="/"
                        className="font-semibold text-gray-900 flex items-center gap-2"
                    >
                        <Logo className="w-7 h-7" />
                        <span>Buildify</span>
                    </Link>

                    <button
                        className="p-2 text-gray-600 hover:bg-black/5 rounded-xl transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu — full overlay like UserJot */}
            {isOpen && (
                <>
                    <div
                        className="md:hidden fixed inset-0 top-14 bg-black/20 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="md:hidden absolute top-14 left-0 w-full bg-white z-50 border-t border-zinc-100 shadow-lg">
                        <div className="max-w-layout mx-auto px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={cn(
                                        "text-base font-semibold px-4 py-3 rounded-xl transition-colors",
                                        location.pathname === link.to
                                            ? "text-black bg-black/5"
                                            : "text-gray-900 hover:bg-black/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-3 pt-3 border-t border-zinc-100">
                                <button
                                    onClick={handleStartBuilding}
                                    className="w-full text-sm font-semibold text-white bg-black px-4 py-2.5 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-zinc-800 active:shadow-[inset_0_1px_0_0_rgba(0,0,0,0.08)] transition-all duration-150"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
