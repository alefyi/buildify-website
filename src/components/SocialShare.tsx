import React, { useState } from 'react';
import { Check, Copy, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialShareProps {
    title: string;
    url: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
    const [copied, setCopied] = useState(false);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareLinks = [
        {
            name: 'Twitter / X',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            color: 'hover:text-black'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: 'hover:text-[#0077b5]'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'hover:text-[#1877f2]'
        }
    ];

    return (
        <div className="flex items-center gap-2">
            <TooltipProvider delayDuration={100}>

                {/* Copy Link */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleCopy}
                            className="h-9 w-9 rounded-full border-zinc-200 bg-white text-zinc-500 transition-colors hover:border-zinc-300 hover:text-black hover:bg-zinc-50"
                        >
                            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                            <span className="sr-only">Copy link</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{copied ? 'Copied!' : 'Copy link'}</p>
                    </TooltipContent>
                </Tooltip>

                <div className="w-px h-4 bg-zinc-200 mx-1" />

                {/* Social Buttons */}
                {shareLinks.map((platform) => (
                    <Tooltip key={platform.name}>
                        <TooltipTrigger asChild>
                            <a
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center h-9 w-9 rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:border-zinc-300 hover:scale-105 hover:bg-zinc-50 ${platform.color}`}
                            >
                                <platform.icon className="h-4 w-4" />
                                <span className="sr-only">Share on {platform.name}</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Share on {platform.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}

                {/* Instagram (Custom Behavior) */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => window.open('https://instagram.com', '_blank')}
                            className="flex items-center justify-center h-9 w-9 rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:border-zinc-300 hover:scale-105 hover:text-[#E4405F] hover:bg-zinc-50"
                        >
                            <Instagram className="h-4 w-4" />
                            <span className="sr-only">Share on Instagram</span>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Open Instagram</p>
                    </TooltipContent>
                </Tooltip>

            </TooltipProvider>
        </div>
    );
};

export default SocialShare;
