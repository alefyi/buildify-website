import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Mail, X } from "lucide-react";

const contactOptions = [
    {
        label: "Call",
        href: "tel:9093455543",
        icon: Phone,
        detail: "(909) 345-5543",
    },
    {
        label: "Text",
        href: "sms:3238077736",
        icon: MessageSquare,
        detail: "(323) 807-7736",
    },
    {
        label: "Email",
        href: "mailto:betsy@usebuildify.com",
        icon: Mail,
        detail: "betsy@usebuildify.com",
    },
];

const getOfficeStatus = (): "office" | "closing" | "closed" => {
    const now = new Date();
    const pacificTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const hour = pacificTime.getHours();
    const day = pacificTime.getDay(); // 0=Sun, 6=Sat
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) return "office";
    if (hour >= 17 && hour < 21) return "closing";
    return "closed";
};

export const ContactFAB = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(getOfficeStatus);
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setStatus(getOfficeStatus()), 60_000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowLabel(false), 10_000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Popup menu */}
            {open && (
                <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 min-w-[220px]">
                    {contactOptions.map((opt, i) => {
                        const Icon = opt.icon;
                        return (
                            <a
                                key={opt.label}
                                href={opt.href}
                                className={`flex items-center gap-3 px-5 py-3.5 hover:bg-zinc-50 transition-colors ${i < contactOptions.length - 1 ? "border-b border-zinc-100" : ""
                                    }`}
                            >
                                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-zinc-900">{opt.label}</p>
                                    <p className="text-xs text-zinc-400">{opt.detail}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}

            {/* FAB button */}
            <button
                onClick={() => setOpen(!open)}
                className={`h-14 bg-black text-white shadow-lg hover:bg-zinc-800 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-500 flex items-center justify-center cursor-pointer ${!open && showLabel && status !== "closed" ? "rounded-full px-5 gap-2.5" : "w-14 rounded-full px-0"
                    }`}
                aria-label="Contact us"
            >
                {open ? (
                    <X className="w-5 h-5 shrink-0" />
                ) : (
                    <>
                        <Phone className="w-5 h-5 shrink-0" />
                        {showLabel && status === "office" && (
                            <span className="text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                We're in office!
                            </span>
                        )}
                        {showLabel && status === "closing" && (
                            <span className="text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                Back at 9 AM PST!
                            </span>
                        )}
                    </>
                )}
            </button>
        </div>
    );
};
