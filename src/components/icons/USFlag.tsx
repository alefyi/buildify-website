import React from "react";

export const USFlag = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className={className}
    >
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.6h640M0 350.4h640M0 424.2h640" />
        <path fill="#192f5d" d="M0 0h247v258.5H0" />
    </svg>
);
