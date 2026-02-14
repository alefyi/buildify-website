import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => (
        <div className="relative inline-flex items-center justify-center align-top mr-2">
            <input
                type="checkbox"
                ref={ref}
                className={cn(
                    "peer h-4 w-4 shrink-0 rounded-sm border border-zinc-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none checked:bg-zinc-900 checked:border-zinc-900 transition-colors cursor-pointer",
                    className
                )}
                {...props}
            />
            <Check className="h-3 w-3 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
    )
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
