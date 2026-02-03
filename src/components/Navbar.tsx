import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { mainRoutes } from "@/data/routes";
import { Logo } from "./Logo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200"
            )}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
                    <Logo className="w-8 h-8" />
                    Buildify
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Solutions Dropdown */}
                    <div className="relative group">
                        <button className="text-sm font-medium text-zinc-600 hover:text-black transition-colors py-2 flex items-center gap-1">
                            Solutions
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="w-64 bg-white border border-zinc-200 rounded-lg shadow-xl p-2 flex flex-col">
                                {mainRoutes
                                    .filter((r) => r.section === "Solutions")
                                    .map((route) => (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className="px-4 py-3 text-[13px] font-medium text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-md transition-colors"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Calculate Dropdown */}
                    <div className="relative group">
                        <button className="text-sm font-medium text-zinc-600 hover:text-black transition-colors py-2 flex items-center gap-1">
                            Calculate
                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="w-64 bg-white border border-zinc-200 rounded-lg shadow-xl p-2 flex flex-col">
                                {mainRoutes
                                    .filter((r) => r.section === "Calculate")
                                    .map((route) => (
                                        <Link
                                            key={route.path}
                                            to={route.path}
                                            className="px-4 py-3 text-[13px] font-medium text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-md transition-colors"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Creators Link */}
                    <Link to="/creators" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors py-2">
                        Creators
                    </Link>

                    {/* Business Link */}
                    <Link to="/business" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors py-2">
                        Business
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="https://billingportal.buildifyhq.com/p/login/3cs8ze7UffYRcEM5kk" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">Log in</Button>
                    </a>
                    <Link to="/contact">
                        <Button size="sm" className="bg-black text-white hover:bg-zinc-800 rounded-[4px]">Start Building</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 max-h-[calc(100vh-64px)] overflow-y-auto">
                    {[
                        { label: "Solutions", items: mainRoutes.filter(r => r.section === "Solutions") },
                        { label: "Calculate", items: mainRoutes.filter(r => r.section === "Calculate") },
                        { label: "Creators", path: "/creators" },
                        { label: "Business", path: "/business" },
                    ].map((item) => (
                        <div key={item.label} className="border-b border-zinc-100 last:border-0 pb-4">
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    className="text-lg font-medium text-zinc-800 py-2 block"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">{item.label}</span>
                                    <div className="grid grid-cols-1 gap-2">
                                        {item.items?.map((sub) => (
                                            <Link
                                                key={sub.path}
                                                to={sub.path}
                                                className="text-sm font-medium text-zinc-600 py-1"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    <div className="pt-4 flex flex-col gap-2">
                        <Button className="w-full bg-black text-white" size="lg">Start Building</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
