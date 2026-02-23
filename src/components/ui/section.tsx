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
        boxed: "max-w-layout mx-auto bg-white",
        full: "w-full bg-white",
        grid: "bg-zinc-50"
    };

    const styles = cn(variants[variant], className);

    return (
        <section className={styles} {...props}>
            {container ? (
                <div className="max-w-layout mx-auto">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
