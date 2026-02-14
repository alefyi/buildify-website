import React from "react";
import { cn } from "@/lib/utils";

interface BuildifyIconProps {
    className?: string;
    gradient?: boolean;
    color?: string; // Fallback if gradient is false
}

export const BuildifyIcon: React.FC<BuildifyIconProps> = ({ className = "w-8 h-8", gradient = false, color = "currentColor" }) => {
    const gradientId = "buildify-glow-gradient";

    return (
        <svg
            width="780"
            height="780"
            viewBox="0 0 780 780"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {gradient && (
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" /> {/* green */}
                        <stop offset="33%" stopColor="#f97316" /> {/* orange */}
                        <stop offset="66%" stopColor="#a855f7" /> {/* purple */}
                        <stop offset="100%" stopColor="#ec4899" /> {/* pink */}
                    </linearGradient>
                </defs>
            )}
            <path
                d="M485.102 53.4398C528.547 18.3055 586.673 -19.1313 633.681 11.0704C686.857 45.2354 732.407 90.2387 767.21 142.961C798.713 190.682 759.44 250.471 723.22 294.719C701.683 321.029 688.761 354.664 688.761 391.317C688.761 428.068 701.751 461.784 723.391 488.124C759.689 532.308 799.067 592.027 767.649 639.803C734.219 690.639 690.811 734.328 640.211 768.084C591.955 800.277 531.215 759.628 486.562 722.599C460.143 700.691 426.216 687.522 389.213 687.521C352.311 687.521 318.47 700.619 292.082 722.419C247.36 759.366 186.544 799.901 138.346 767.619C87.9536 733.867 44.7252 690.25 11.4243 639.532C-19.9112 591.807 19.3338 532.197 55.5536 488.064C77.1638 461.733 90.1348 428.04 90.1348 391.317C90.1348 354.692 77.2321 321.08 55.7243 294.779C19.582 250.582 -19.557 190.904 11.8619 143.233C46.5375 90.6221 91.9083 45.6838 144.879 11.514C191.832 -18.7737 250.028 18.5575 293.537 53.6135C319.708 74.7006 352.986 87.3232 389.213 87.3232C425.539 87.3232 458.899 74.6312 485.102 53.4398ZM389.626 197.142C282.166 197.142 195.053 284.254 195.053 391.714C195.053 499.174 282.166 586.287 389.626 586.287C497.086 586.287 584.199 499.174 584.199 391.714C584.199 284.254 497.086 197.142 389.626 197.142Z"
                fill={gradient ? `url(#${gradientId})` : color}
            />
        </svg>
    );
};
