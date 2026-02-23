import { useState, useEffect } from "react";

interface CypherTextProps {
    text: string;
    duration?: number;
    delay?: number;
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export function CypherText({ text, duration = 2000, delay = 0, className }: CypherTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        const startAnimation = () => {
            setIsAnimating(true);
            const startTime = Date.now();
            const totalLength = text.length;

            interval = setInterval(() => {
                const now = Date.now();
                // Easing? Maybe linear is fine.
                const progress = Math.min((now - startTime) / duration, 1);

                // Calculate how many characters to show based on progress
                // We want to slightly overshoot 1 to ensure full reveal
                const visibleLength = Math.floor(progress * totalLength);

                if (progress >= 1) {
                    setDisplayText(text);
                    clearInterval(interval);
                    setIsAnimating(false);
                    return;
                }

                let result = "";
                // Build string up to visibleLength
                for (let i = 0; i <= visibleLength && i < totalLength; i++) {
                    // Current character to process
                    const char = text[i];

                    // Logic:
                    // If we are "deep" in the history (i.e. i < visibleLength - scrambleWindow), show correct char.
                    // If we are at the "tip" (i.e. i >= visibleLength - scrambleWindow), show random char.
                    // scrambleWindow controls how many chars at the end are scrambled.

                    const scrambleWindow = 2; // Adjust for effect

                    if (visibleLength - i > scrambleWindow) {
                        result += char;
                    } else {
                        // Tip is scrambling
                        if (char === " ") {
                            result += " ";
                        } else {
                            result += CHARS[Math.floor(Math.random() * CHARS.length)];
                        }
                    }
                }
                setDisplayText(result);
            }, 50); // frequency
        };

        timeout = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, duration, delay]);

    return (
        <span className={className}>
            {displayText || text /* Show text initially if needed or empty? better empty to fade in or similar? Or just static text and then it scrambles? Usually starts scrambled. */}
            {/* Logic above starts scrambling immediately after delay. Initial state is empty. Let's seed it with randoms immediately? */}
            {/* Simplified: just render displayText. */}
        </span>
    );
}
