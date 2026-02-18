import { useState, useEffect } from "react";

interface CypherTextProps {
    text: string;
    duration?: number;
    delay?: number;
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export function CypherText({ text, duration = 2000, delay = 0, className }: CypherTextProps) {
    const [displayText, setDisplayText] = useState(() => {
        return text.split('').map(char => char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
    });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        const startAnimation = () => {
            setIsAnimating(true);
            const startTime = Date.now();
            const totalSteps = text.length;
            const timePerStep = duration / totalSteps;

            interval = setInterval(() => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const stepsRevealed = Math.floor(progress * totalSteps);

                if (progress >= 1) {
                    setDisplayText(text);
                    clearInterval(interval);
                    setIsAnimating(false);
                    return;
                }

                let result = "";
                for (let i = 0; i < text.length; i++) {
                    if (i < stepsRevealed) {
                        result += text[i];
                    } else {
                        // Random cypher character
                        const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                        // Preserve spaces mostly, but sometimes cypher them for effect? 
                        // Playbooks usually keeps structure. Let's keep spaces as spaces.
                        if (text[i] === " ") {
                            result += " ";
                        } else {
                            result += randomChar;
                        }
                    }
                }
                setDisplayText(result);
            }, 50); // Frame rate
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
