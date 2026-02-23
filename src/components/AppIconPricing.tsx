import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface AppIconPricingProps {
    icon: LucideIcon;
    gradient: string; // kept for API compat but ignored — all use FB blue
    planName: string;
}

/* ── Real iOS App Store icon URLs (Apple CDN – mzstatic.com) ── */
const APP_ICONS = {
    instagram:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6e/8b/84/6e8b8474-3181-134b-aaed-32feb3f645fc/Prod-0-0-1x_U007epad-0-1-0-sRGB-85-220.png/120x120bb.jpg",
    spotify:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/1c/38/91/1c3891a1-9f3b-374e-c7a4-f2132560de4e/AppIcon-0-0-1x_U007epad-0-1-0-0-sRGB-85-220.png/120x120bb.jpg",
    whatsapp:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/08/3f/de083fa7-c179-9c25-7093-576eb965123e/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220.png/120x120bb.jpg",
    youtube:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/20/14/84/201484d6-6c37-d77e-f40c-6268aed942eb/logo_youtube_2024_q4_color-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/120x120bb.jpg",
    tiktok:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1f/c5/ca/1fc5ca5b-7bca-34ff-d5d5-f48292fc79f7/AppIcon_TikTok-0-0-1x_U007epad-0-1-0-0-85-220.png/120x120bb.jpg",
    snapchat:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/80/1a/fe/801afe49-b131-c1a3-8b1f-7dbcbfb825ea/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/120x120bb.jpg",
    gmail:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/73/44/c4/7344c404-8faa-41d7-b7e4-27375fb7371a/logo_gmail_2020q4_color-0-1x_U007emarketing-0-0-0-7-0-0-0-0-85-220-0.png/120x120bb.jpg",
    maps:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cd/0c/6c/cd0c6c9c-40fa-61e5-9a77-7384c4496251/maps-0-1x_U007epad-0-0-0-1-0-0-0-0-85-220-0.png/120x120bb.jpg",
    netflix:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ac/7f/d8/ac7fd8d3-3044-8e0d-339a-7c0f502c5be8/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-0-85-220.png/120x120bb.jpg",
    x: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/5c/2c/445c2cbe-2334-a8f7-4ebd-c733e653965b/ProductionAppIcon-0-0-1x_U007emarketing-0-8-0-0-0-85-220.png/120x120bb.jpg",
};

/* Grid & dock layout */
const GRID_ROW_1 = [
    { src: APP_ICONS.snapchat, label: "Snapchat" },
    { src: APP_ICONS.tiktok, label: "TikTok" },
    { src: APP_ICONS.netflix, label: "Netflix" },
    { src: APP_ICONS.gmail, label: "Gmail" },
];
const GRID_ROW_2 = [
    { src: APP_ICONS.x, label: "X" },
    { src: APP_ICONS.maps, label: "Maps" },
    // branded app goes here at render time
];
const DOCK_APPS = [
    { src: "/icons/ios-phone.png", label: "Phone" },
    { src: "/icons/ios-safari.png", label: "Chrome" },
    { src: "/icons/ios-messages.png", label: "Messages" },
    { src: "/icons/ios-music.png", label: "Music" },
];

/* ── Tiny helper: one iOS-style icon in the grid ── */
const GridIcon: React.FC<{
    src: string;
    label: string;
    size: number;
    delay?: number;
    isInView: boolean;
}> = ({ src, label, size, delay = 0, isInView }) => {
    const r = Math.round(size * 0.2237);
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
        >
            <img
                src={src}
                alt={label}
                width={size}
                height={size}
                className="shadow-lg"
                style={{ borderRadius: r }}
                loading="lazy"
            />
            <span className="text-[9px] font-medium text-white drop-shadow-md leading-tight truncate max-w-[52px] text-center">
                {label}
            </span>
        </motion.div>
    );
};

/**
 * A mini iOS home screen mockup with real app icons, a branded Buildify app,
 * frosted-glass dock, and scroll-triggered blur-in + notification animation.
 */
export const AppIconPricing: React.FC<AppIconPricingProps> = ({
    icon: Icon,
    planName,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const [count, setCount] = useState(0);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        if (!isInView) return;
        const startDelay = setTimeout(() => {
            let current = 0;
            const interval = setInterval(() => {
                current++;
                setCount(current);
                setIsPulsing(true);
                setTimeout(() => setIsPulsing(false), 250);
                if (current >= 10) clearInterval(interval);
            }, 350);
            return () => clearInterval(interval);
        }, 1200); // longer delay so blur-in finishes first
        return () => clearTimeout(startDelay);
    }, [isInView]);

    const badgeLabel = count >= 10 ? "9+" : count.toString();

    /* ── Sizing ── */
    const gridIconSize = 64; // default app icons (~35% larger)
    const brandedSize = 64; // branded icon – same row as others
    const brandedRadius = Math.round(brandedSize * 0.2237);

    return (
        <div
            ref={ref}
            className="relative w-full aspect-square overflow-hidden ring-1 ring-gray-200"
            style={{
                borderRadius: 10,
                boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.08), 0 10px 15px -3px rgba(0,0,0,0.08), 0 20px 25px -5px rgba(0,0,0,0.06)",
            }}
        >
            {/* Apple wallpaper background */}
            <img
                src="/apple-wallpaper.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ── App grid overlay ── */}
            <motion.div
                initial={{ filter: "blur(16px)", opacity: 0 }}
                animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-between px-4 pt-6 pb-3"
            >
                {/* ── Icon rows ── */}
                <div className="flex flex-col gap-5">
                    {/* Row 1 — 4 icons evenly spaced */}
                    <div className="grid grid-cols-4 gap-y-4" style={{ justifyItems: "center" }}>
                        {GRID_ROW_1.map((app, i) => (
                            <GridIcon
                                key={app.label}
                                {...app}
                                size={gridIconSize}
                                delay={0.15 + i * 0.06}
                                isInView={isInView}
                            />
                        ))}

                        {/* Row 2 — X, Maps + Branded app (left-aligned in same grid) */}
                        {GRID_ROW_2.filter((a) => a.src).map((app, i) => (
                            <GridIcon
                                key={app.label}
                                {...app}
                                size={gridIconSize}
                                delay={0.4 + i * 0.06}
                                isInView={isInView}
                            />
                        ))}

                        {/* Branded Buildify app (Facebook blue) */}
                        <motion.div
                            initial={{ filter: "blur(12px)", scale: 0.85, opacity: 0 }}
                            animate={
                                isInView
                                    ? { filter: "blur(0px)", scale: 1, opacity: 1 }
                                    : {}
                            }
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            className="relative flex flex-col items-center gap-1"
                        >
                            {/* Static gradient border wrapper */}
                            <div
                                className="relative p-[2px]"
                                style={{
                                    borderRadius: brandedRadius + 2,
                                    background: "rgba(255,255,255,0.85)",
                                }}
                            >
                                {/* Actual icon */}
                                <div
                                    className="relative flex items-center justify-center shadow-2xl"
                                    style={{
                                        width: brandedSize,
                                        height: brandedSize,
                                        borderRadius: brandedRadius,
                                        background:
                                            "linear-gradient(135deg, #FFB347 0%, #FF8C00 50%, #FF6200 100%)",
                                        boxShadow:
                                            "0 8px 30px rgba(255,140,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3)",
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            borderRadius: brandedRadius,
                                            background:
                                                "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)",
                                        }}
                                    />
                                    <Icon
                                        className="w-7 h-7 text-white drop-shadow-md relative z-10"
                                        strokeWidth={1.8}
                                    />

                                    {count > 0 && (
                                        <motion.div
                                            key={count}
                                            initial={{ scale: 0.6, opacity: 0 }}
                                            animate={{
                                                scale: isPulsing ? 1.3 : 1,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                scale: { type: "spring", stiffness: 500, damping: 15 },
                                                opacity: { duration: 0.15 },
                                            }}
                                            className="absolute -top-1.5 -right-1.5 min-w-[22px] h-[22px] bg-red-500 rounded-full flex items-center justify-center px-1 shadow-lg"
                                        >
                                            <span className="text-white text-[10px] font-bold leading-none">
                                                {badgeLabel}
                                            </span>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <motion.span
                                initial={{ opacity: 0, y: 4 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.9, duration: 0.3 }}
                                className="text-[10px] font-medium text-white drop-shadow-md text-center"
                            >
                                {planName}
                            </motion.span>
                        </motion.div>
                    </div>
                </div>

                {/* ── iOS Dock ── */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                    className="flex justify-around items-center px-2 py-2.5"
                    style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        borderRadius: 18,
                    }}
                >
                    {DOCK_APPS.map((app) => {
                        const r = Math.round(gridIconSize * 0.2237);
                        return (
                            <div key={app.label} className="flex flex-col items-center">
                                <img
                                    src={app.src}
                                    alt={app.label}
                                    width={gridIconSize}
                                    height={gridIconSize}
                                    className="shadow-lg"
                                    style={{ borderRadius: r }}
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};
