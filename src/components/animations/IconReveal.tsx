import { motion } from "framer-motion";
import React from "react";

interface IconRevealProps {
    /** Position in the sequence (0, 1, 2…) */
    index: number;
    /** Delay before the first icon starts (seconds) */
    baseDelay?: number;
    /** Delay between each successive icon (seconds) */
    stagger?: number;
    /** The icon content to reveal */
    children: React.ReactNode;
}

/**
 * Wraps an inline icon so it starts at zero width and scales up,
 * pushing the surrounding text apart. Each successive `index`
 * fires later, creating a cascading reveal across the headline.
 */
export function IconReveal({
    index,
    baseDelay = 0.5,
    stagger = 0.35,
    children,
}: IconRevealProps) {
    const delay = baseDelay + index * stagger;

    return (
        <motion.span
            className="inline-flex items-center align-middle overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{
                width: {
                    delay,
                    duration: 0.45,
                    ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
                },
                opacity: {
                    delay,
                    duration: 0.3,
                    ease: "easeOut",
                },
            }}
        >
            <motion.span
                className="inline-flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    scale: {
                        delay: delay + 0.05,
                        duration: 0.4,
                        ease: [0.34, 1.56, 0.64, 1],
                    },
                    opacity: {
                        delay: delay + 0.05,
                        duration: 0.25,
                        ease: "easeOut",
                    },
                }}
            >
                {children}
            </motion.span>
        </motion.span>
    );
}
