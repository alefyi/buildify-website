import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "boxed" | "full" | "grid";
    container?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ variant = "default", container = false, className, children, ...props }: SectionProps) => {
    const variants = {
        default: "bg-white",
        boxed: "max-w-[1200px] mx-auto border-x border-zinc-200 bg-white",
        full: "w-full bg-white",
        grid: "border-b border-zinc-200 bg-zinc-50"
    };

    const styles = cn(variants[variant], className);

    return (
        <section className={styles} {...props}>
            {container ? (
                <div className="max-w-[1200px] mx-auto">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
