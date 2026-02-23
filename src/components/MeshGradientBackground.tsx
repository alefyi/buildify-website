import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MeshGradientBackgroundProps {
    className?: string;
    /** Speed of the blob animation (lower = slower). Default: 0.4 */
    speed?: number;
    /** Overall opacity of the gradient layer. Default: 0.55 */
    opacity?: number;
    /** Array of gradient colors. Provide 3-5 hex or rgba colors. */
    colors?: string[];
}

/**
 * Animated mesh-gradient background with soft, drifting color blobs.
 * Inspired by Stripe/Linear's hero gradient aesthetic.
 * Renders entirely with CSS — no canvas, no JS animation loops.
 */
export function MeshGradientBackground({
    className,
    speed = 0.4,
    opacity = 0.55,
    colors = [
        "rgba(59, 130, 246, 0.5)",   // blue-500
        "rgba(139, 92, 246, 0.45)",   // violet-500
        "rgba(236, 72, 153, 0.4)",    // pink-500
        "rgba(6, 182, 212, 0.35)",    // cyan-500
    ],
}: MeshGradientBackgroundProps) {
    const duration = `${Math.round(12 / speed)}s`;

    return (
        <div
            className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", className)}
            style={{ opacity }}
        >
            {/* Base gradient wash */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${colors[0]}, transparent 70%)`,
                }}
            />

            {/* Blob 1 — top-left, drifts right */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "45%",
                    height: "55%",
                    top: "-10%",
                    left: "-5%",
                    background: `radial-gradient(circle, ${colors[0]}, transparent 70%)`,
                    filter: "blur(80px)",
                    animation: `meshBlob1 ${duration} ease-in-out infinite alternate`,
                }}
            />

            {/* Blob 2 — top-right, drifts down-left */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "50%",
                    height: "50%",
                    top: "-15%",
                    right: "-10%",
                    background: `radial-gradient(circle, ${colors[1]}, transparent 70%)`,
                    filter: "blur(90px)",
                    animation: `meshBlob2 ${duration} ease-in-out infinite alternate`,
                }}
            />

            {/* Blob 3 — center, hovers */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "40%",
                    height: "40%",
                    top: "20%",
                    left: "30%",
                    background: `radial-gradient(circle, ${colors[2]}, transparent 70%)`,
                    filter: "blur(100px)",
                    animation: `meshBlob3 ${duration} ease-in-out infinite alternate`,
                }}
            />

            {/* Blob 4 — bottom, subtle accent */}
            {colors[3] && (
                <div
                    className="absolute rounded-full"
                    style={{
                        width: "55%",
                        height: "45%",
                        bottom: "-20%",
                        left: "10%",
                        background: `radial-gradient(circle, ${colors[3]}, transparent 70%)`,
                        filter: "blur(100px)",
                        animation: `meshBlob4 ${duration} ease-in-out infinite alternate`,
                    }}
                />
            )}

            {/* Inline keyframes — CSS-only, no JS loop needed */}
            <style>{`
                @keyframes meshBlob1 {
                    0% { transform: translate(0%, 0%) scale(1); }
                    100% { transform: translate(15%, 10%) scale(1.15); }
                }
                @keyframes meshBlob2 {
                    0% { transform: translate(0%, 0%) scale(1.1); }
                    100% { transform: translate(-12%, 18%) scale(0.95); }
                }
                @keyframes meshBlob3 {
                    0% { transform: translate(0%, 0%) scale(1); }
                    100% { transform: translate(-8%, -12%) scale(1.2); }
                }
                @keyframes meshBlob4 {
                    0% { transform: translate(0%, 0%) scale(1); }
                    100% { transform: translate(10%, -8%) scale(1.1); }
                }
            `}</style>
        </div>
    );
}
