import React, { useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SmartInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    iconClassName?: string;
    icon?: React.ElementType;
}

export const SmartInput = React.forwardRef<HTMLInputElement, SmartInputProps>(
    ({ className, containerClassName, iconClassName, icon: Icon = Search, ...props }, ref) => {
        const localRef = useRef<HTMLInputElement>(null);
        const targetRef = (ref as React.RefObject<HTMLInputElement>) || localRef;

        return (
            <div className={cn("relative group p-[2px] overflow-hidden rounded-[4px] bg-zinc-200 transition-all duration-500", containerClassName)}>
                {/* Layer 1: The Underlying Glow (Blurred) */}
                <div className="absolute inset-[-200%] animate-border-glow glow-gradient glow-blur z-0" />

                {/* Layer 2: The Sharp Border (Rotating) */}
                <div className="absolute inset-[-200%] animate-border-glow glow-gradient z-0 opacity-100" />

                <div
                    className="relative z-10 flex items-center px-4 py-3 bg-white rounded-[3px] transition-all duration-300 h-full"
                    onClick={() => targetRef.current?.focus()}
                >
                    <Icon className={cn("w-5 h-5 text-zinc-400 mr-3 shrink-0 transition-colors group-focus-within:text-black", iconClassName)} />
                    <input
                        ref={targetRef}
                        className={cn(
                            "flex-1 bg-transparent outline-none text-base text-black placeholder:text-zinc-400",
                            className
                        )}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

SmartInput.displayName = 'SmartInput';
