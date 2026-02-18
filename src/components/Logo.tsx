import React from "react";

export const Logo = ({ className = "w-auto h-8", isActive = false }: { className?: string, isActive?: boolean }) => {
    return (
        <svg
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-all duration-300`}
        >
            <defs>
                <linearGradient id="logo-rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" /> {/* red-500 */}
                    <stop offset="20%" stopColor="#f97316" /> {/* orange-500 */}
                    <stop offset="40%" stopColor="#22c55e" /> {/* green-500 */}
                    <stop offset="60%" stopColor="#3b82f6" /> {/* blue-500 */}
                    <stop offset="80%" stopColor="#a855f7" /> {/* purple-500 */}
                    <stop offset="100%" stopColor="#ec4899" /> {/* pink-500 */}
                </linearGradient>
                <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                </filter>
            </defs>

            {/* Layer 0: Subtle Colored Glow (Fades in) */}
            <rect
                x="20" y="20" width="960" height="960" rx="120" ry="120"
                fill="none"
                stroke="url(#logo-rainbow)"
                strokeWidth="40"
                filter="url(#logo-glow)"
                style={{
                    opacity: isActive ? 0.4 : 0,
                    transition: "opacity 0.7s ease-in-out"
                }}
            />

            {/* Layer 0.5: Inner Dots Glow (Fades in) - Colored Rainbow Version */}
            <g transform="translate(198, 197)"
                filter="url(#logo-glow)"
                style={{
                    opacity: isActive ? 0.4 : 0,
                    transition: "opacity 0.7s ease-in-out"
                }}
            >
                <circle cx="67.315" cy="189.715" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="67.315" cy="418.965" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="181.946" cy="304.34" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="302.397" cy="187.774" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="185.831" cy="71.1998" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="418.965" cy="67.315" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="535.538" cy="420.907" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="537.479" cy="185.831" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="417.022" cy="539.422" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="185.831" cy="537.479" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="300.456" cy="422.85" r="67.315" fill="url(#logo-rainbow)" />
                <circle cx="420.907" cy="306.282" r="67.315" fill="url(#logo-rainbow)" />
            </g>

            {/* Layer 1: Sharp Rainbow Gradient (Always rendered, covered by black) */}
            <rect
                x="20" y="20" width="960" height="960" rx="120" ry="120"
                fill="none"
                stroke="url(#logo-rainbow)"
                strokeWidth="40"
            />

            {/* Layer 2: Black Overlay (Fades out) */}
            <rect
                x="20" y="20" width="960" height="960" rx="120" ry="120"
                fill="none"
                stroke="black"
                strokeWidth="40"
                style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.7s ease-in-out"
                }}
            />

            {/* Inner Content - Black Dots (Fixed) */}
            <g transform="translate(198, 197)">
                <circle cx="67.315" cy="189.715" r="67.315" fill="black" />
                <circle cx="67.315" cy="418.965" r="67.315" fill="black" />
                <circle cx="181.946" cy="304.34" r="67.315" fill="black" />
                <circle cx="302.397" cy="187.774" r="67.315" fill="black" />
                <circle cx="185.831" cy="71.1998" r="67.315" fill="black" />
                <circle cx="418.965" cy="67.315" r="67.315" fill="black" />
                <circle cx="535.538" cy="420.907" r="67.315" fill="black" />
                <circle cx="537.479" cy="185.831" r="67.315" fill="black" />
                <circle cx="417.022" cy="539.422" r="67.315" fill="black" />
                <circle cx="185.831" cy="537.479" r="67.315" fill="black" />
                <circle cx="300.456" cy="422.85" r="67.315" fill="black" />
                <circle cx="420.907" cy="306.282" r="67.315" fill="black" />
            </g>
        </svg>
    );
};
