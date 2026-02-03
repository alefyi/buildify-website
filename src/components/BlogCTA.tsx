import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlogCTAProps {
    tags: string[];
}

const BlogCTA: React.FC<BlogCTAProps> = ({ tags }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    // Determine content based on tags
    const isCreator = tags.includes('Creators');
    const isBusiness = tags.includes('Business') || !isCreator; // Default to Business if not explicitly Creator

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down a bit (e.g., 300px)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isDismissed) return null;

    const content = isCreator ? {
        title: "Launch your brand",
        text: "Launch a high-performance, multi-page site on your own custom domain in under 48 hours for just $20/mo.",
        buttonText: "Start Building",
        link: "/creators"
    } : {
        title: "Get a loyalty app",
        text: "You can get a loyalty app next week for just $650/mo. No revenue cuts or fees. Simple & easy.",
        buttonText: "Let's Start",
        link: "/business"
    };

    return (
        <>
            {/* Desktop Sticky Sidebar */}
            <div className="hidden lg:block sticky top-32 self-start w-full max-w-xs ml-8">
                <div className="bg-white border border-zinc-200 rounded-[4px] p-6 shadow-sm">
                    {/* Icon - Neutral/Monochrome */}
                    <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 rounded-[4px] flex items-center justify-center mb-5">
                        <Megaphone className="w-5 h-5 text-black" />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-black mb-3 leading-tight">
                        {content.title}
                    </h3>

                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        {content.text}
                    </p>

                    <Link to={content.link} className="block w-full">
                        <Button className="w-full h-10 bg-black text-white hover:bg-zinc-800 rounded-[4px] text-sm font-medium shadow-none transition-colors">
                            {content.buttonText}
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Bottom Sticky Bar - Aligned to system */}
            <div className={cn(
                "lg:hidden fixed bottom-4 left-4 right-4 bg-white border border-zinc-200 p-4 z-50 transition-all duration-500 rounded-[4px] shadow-lg flex items-center gap-4",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"
            )}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute -top-2 -right-2 p-1 bg-white border border-zinc-200 rounded-full text-zinc-400 hover:text-black shadow-sm"
                >
                    <X className="w-3 h-3" />
                </button>

                <div className="w-8 h-8 bg-zinc-100 border border-zinc-200 rounded-[4px] flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-4 h-4 text-black" />
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-black text-sm font-bold leading-tight truncate">
                        {isCreator ? 'Launch your brand' : 'Get a loyalty app'}
                    </p>
                    <p className="text-zinc-500 text-[10px] truncate">
                        {isCreator ? 'Custom site, $20/mo' : '$650/mo. No fees.'}
                    </p>
                </div>

                <Link to={content.link}>
                    <Button size="sm" className="bg-black text-white hover:bg-zinc-800 rounded-[4px] px-4 h-8 text-xs font-medium shadow-none">
                        Start
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default BlogCTA;
