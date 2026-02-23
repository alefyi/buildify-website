import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Section } from "@/components/ui/section";
import { SEO } from "@/components/SEO";
import { Check, Copy, ArrowRight, Star, Zap, Shield, Heart, ChevronRight, ExternalLink, Info, AlertTriangle, CheckCircle, X } from "lucide-react";

/* ─── Helpers ─── */
const Swatch = ({ color, label, value }: { color: string; label: string; value: string }) => (
    <div className="group flex flex-col gap-2">
        <div className={`h-14 w-full rounded-lg border border-zinc-200/60 transition-transform group-hover:scale-105 ${color}`} />
        <p className="text-xs font-semibold text-zinc-900 tracking-tight">{label}</p>
        <p className="text-[11px] font-mono text-zinc-400">{value}</p>
    </div>
);

const TokenRow = ({ token, value, preview }: { token: string; value: string; preview?: React.ReactNode }) => (
    <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
        <div className="flex items-center gap-3">
            {preview && <div className="shrink-0">{preview}</div>}
            <code className="text-xs font-mono bg-zinc-50 px-2 py-1 rounded text-zinc-700">{token}</code>
        </div>
        <span className="text-xs text-zinc-400 font-mono">{value}</span>
    </div>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode; id: string }) => (
    <div className="flex items-center gap-3 pb-3 border-b border-zinc-200 mb-8" id={id}>
        <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 font-mono">{children}</h2>
    </div>
);

/* ─── Nav ─── */
const sections = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing", label: "Spacing" },
    { id: "buttons", label: "Buttons" },
    { id: "badges", label: "Badges" },
    { id: "cards", label: "Cards" },
    { id: "forms", label: "Forms" },
    { id: "sections", label: "Sections" },
    { id: "patterns", label: "Patterns" },
];

const StyleGuide = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToken = (token: string) => {
        navigator.clipboard.writeText(token);
        setCopied(token);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO title="Style Guide" description="Internal design system reference." noIndex={true} />

            {/* ─── Sticky Side Nav (Desktop) ─── */}
            <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-52 border-r border-zinc-100 bg-white/80 backdrop-blur-sm z-50 pt-24 px-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-4 px-2">Design System</p>
                <nav className="space-y-0.5">
                    {sections.map(s => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="block text-[13px] text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md px-2 py-1.5 transition-colors"
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>
                <div className="absolute bottom-6 left-4 right-4">
                    <p className="text-[10px] font-mono text-zinc-300">Buildify DS v2.0</p>
                </div>
            </div>

            {/* ─── Main Content ─── */}
            <div className="lg:pl-52">
                <div className="max-w-4xl mx-auto px-6 pt-28 pb-32">

                    {/* Header */}
                    <div className="mb-20">
                        <div className="flex items-center gap-2 mb-5">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 font-mono rounded-md uppercase text-[10px] tracking-widest">Internal</Badge>
                            <span className="text-[10px] font-mono text-zinc-300 tracking-wider">NOT INDEXED</span>
                        </div>
                        <h1 className="text-[36px] font-bold tracking-[-0.04em] text-zinc-900 leading-[1.1] mb-3">
                            Design System
                        </h1>
                        <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
                            Component primitives, tokens, and patterns powering usebuildify.com.
                            Inter + Zinc, shadow-free, tight letter-spacing.
                        </p>
                        <p className="text-xs text-zinc-300 mt-3">
                            Design inspired by <a href="https://userjot.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 underline underline-offset-2 hover:text-zinc-600 transition-colors">userjot.com</a>
                        </p>
                    </div>

                    {/* ▬▬▬▬▬▬▬▬ COLORS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="colors">Colors</SectionTitle>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Core Palette</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                            <Swatch color="bg-white" label="Background" value="--background" />
                            <Swatch color="bg-zinc-950" label="Foreground" value="--foreground" />
                            <Swatch color="bg-zinc-100" label="Muted / Secondary" value="--muted" />
                            <Swatch color="bg-zinc-200" label="Border" value="--border" />
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Semantic</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                            <Swatch color="bg-zinc-900" label="Primary" value="hsl(240 5.9% 10%)" />
                            <Swatch color="bg-zinc-50" label="Primary Foreground" value="hsl(0 0% 98%)" />
                            <Swatch color="bg-red-500" label="Destructive" value="hsl(0 84.2% 60.2%)" />
                            <Swatch color="bg-zinc-100" label="Accent" value="hsl(240 4.8% 95.9%)" />
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Brand Accents</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            <Swatch color="bg-green-500" label="Green" value="#22c55e" />
                            <Swatch color="bg-orange-500" label="Orange" value="#f97316" />
                            <Swatch color="bg-purple-500" label="Purple" value="#a855f7" />
                            <Swatch color="bg-blue-600" label="Blue" value="#2563eb" />
                            <Swatch color="bg-pink-500" label="Pink" value="#ec4899" />
                        </div>

                        <div className="mt-8 rounded-lg border border-zinc-100 p-4 bg-zinc-50/50">
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                <span className="font-semibold text-zinc-700">Note:</span> All semantic colors are defined as HSL CSS custom properties in <code className="bg-zinc-100 px-1 rounded text-[11px]">index.css</code>.
                                Tailwind references them via <code className="bg-zinc-100 px-1 rounded text-[11px]">hsl(var(--token))</code>.
                                Dark mode variants exist but are currently unused.
                            </p>
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ TYPOGRAPHY ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="typography">Typography</SectionTitle>

                        <div className="space-y-8 mb-10">
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <h1 className="text-hero shrink-0">Hero / H1</h1>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-hero</code>
                                    <span className="text-[10px] font-mono text-zinc-300">30px / 36px / -0.75px / 600</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <h2 className="text-section shrink-0">Section / H2</h2>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-section</code>
                                    <span className="text-[10px] font-mono text-zinc-300">30px / 36px / -0.75px / 600</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <h3 className="text-card-title shrink-0">Card Title / H3</h3>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-card-title</code>
                                    <span className="text-[10px] font-mono text-zinc-300">20px / 28px / 600</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <h4 className="text-card-title-sm shrink-0">Card Title Sm / H4</h4>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-card-title-sm</code>
                                    <span className="text-[10px] font-mono text-zinc-300">18px / 28px / 600</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <p className="text-body-lg text-zinc-600 shrink-0">Body Large — The quick brown fox jumps over the lazy dog.</p>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-body-lg</code>
                                    <span className="text-[10px] font-mono text-zinc-300">16px / 26px / 500</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <p className="text-body text-zinc-600 shrink-0">Body — The quick brown fox jumps over the lazy dog.</p>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-body</code>
                                    <span className="text-[10px] font-mono text-zinc-300">14px / 22.75px / 400</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 pb-6 border-b border-zinc-50">
                                <p className="text-label shrink-0">Label Text</p>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-label</code>
                                    <span className="text-[10px] font-mono text-zinc-300">14px / 20px / 600</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6">
                                <p className="text-caption text-zinc-500 shrink-0">Caption text for metadata and hints</p>
                                <div className="flex flex-wrap gap-2">
                                    <code className="text-[10px] font-mono bg-zinc-50 px-2 py-0.5 rounded text-zinc-400">text-caption</code>
                                    <span className="text-[10px] font-mono text-zinc-300">12px / 20px / 400</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Font Families</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-zinc-100 rounded-lg p-5">
                                <p className="font-sans text-lg font-semibold mb-1">Inter</p>
                                <p className="font-sans text-sm text-zinc-500">Primary typeface for all UI text</p>
                                <p className="font-sans text-xs text-zinc-300 mt-2 font-mono">font-sans</p>
                            </div>
                            <div className="border border-zinc-100 rounded-lg p-5">
                                <p className="font-mono text-lg font-medium mb-1">JetBrains Mono</p>
                                <p className="font-mono text-sm text-zinc-500">Code, data, tokens</p>
                                <p className="font-mono text-xs text-zinc-300 mt-2">font-mono</p>
                            </div>
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ SPACING ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="spacing">Spacing &amp; Layout</SectionTitle>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Max Widths</h3>
                        <div className="space-y-0">
                            <TokenRow token="max-w-layout" value="900px" preview={<div className="w-12 h-2 bg-zinc-900 rounded-full" />} />
                            <TokenRow token="max-w-container-xs" value="320px" preview={<div className="w-4 h-2 bg-zinc-300 rounded-full" />} />
                            <TokenRow token="max-w-container-sm" value="384px" preview={<div className="w-5 h-2 bg-zinc-300 rounded-full" />} />
                            <TokenRow token="max-w-container-md" value="448px" preview={<div className="w-6 h-2 bg-zinc-300 rounded-full" />} />
                            <TokenRow token="max-w-container-lg" value="512px" preview={<div className="w-7 h-2 bg-zinc-400 rounded-full" />} />
                            <TokenRow token="max-w-container-xl" value="576px" preview={<div className="w-8 h-2 bg-zinc-400 rounded-full" />} />
                            <TokenRow token="max-w-container-2xl" value="672px" preview={<div className="w-9 h-2 bg-zinc-500 rounded-full" />} />
                            <TokenRow token="max-w-container-3xl" value="768px" preview={<div className="w-10 h-2 bg-zinc-500 rounded-full" />} />
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 mt-10 tracking-tight">Border Radius</h3>
                        <div className="flex flex-wrap gap-6 items-end">
                            {[
                                { label: "sm", value: "4px", size: "rounded-sm" },
                                { label: "md", value: "6px", size: "rounded-md" },
                                { label: "lg", value: "8px", size: "rounded-lg" },
                                { label: "2xl", value: "16px", size: "rounded-2xl" },
                                { label: "full", value: "9999px", size: "rounded-full" },
                            ].map(r => (
                                <div key={r.label} className="flex flex-col items-center gap-2">
                                    <div className={`w-14 h-14 bg-zinc-900 ${r.size}`} />
                                    <code className="text-[10px] font-mono text-zinc-400">{r.label}</code>
                                    <span className="text-[10px] font-mono text-zinc-300">{r.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ BUTTONS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="buttons">Buttons</SectionTitle>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Variants</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                            {([
                                { variant: "default" as const, label: "Default" },
                                { variant: "secondary" as const, label: "Secondary" },
                                { variant: "outline" as const, label: "Outline" },
                                { variant: "ghost" as const, label: "Ghost" },
                                { variant: "destructive" as const, label: "Destructive" },
                                { variant: "link" as const, label: "Link" },
                            ] as const).map(b => (
                                <div key={b.label} className="flex flex-col items-start gap-2 p-4 rounded-lg border border-zinc-100 bg-zinc-50/30">
                                    <Button variant={b.variant}>{b.label}</Button>
                                    <code className="text-[10px] font-mono text-zinc-400">variant="{b.variant}"</code>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Sizes</h3>
                        <div className="flex flex-wrap gap-4 items-end mb-10">
                            <div className="flex flex-col items-start gap-2">
                                <Button size="sm">Small</Button>
                                <code className="text-[10px] font-mono text-zinc-400">size="sm" — h-9</code>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Button size="default">Default</Button>
                                <code className="text-[10px] font-mono text-zinc-400">size="default" — h-10</code>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Button size="lg">Large</Button>
                                <code className="text-[10px] font-mono text-zinc-400">size="lg" — h-11</code>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Button size="icon"><Star className="h-4 w-4" /></Button>
                                <code className="text-[10px] font-mono text-zinc-400">size="icon" — 40×40</code>
                            </div>
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">With Icons</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button>Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
                            <Button variant="outline"><Zap className="mr-2 h-4 w-4" /> Quick Action</Button>
                            <Button variant="secondary"><Shield className="mr-2 h-4 w-4" /> Secure</Button>
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 mt-10 tracking-tight">States</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button disabled>Disabled</Button>
                            <Button variant="outline" disabled>Disabled Outline</Button>
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ BADGES ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="badges">Badges</SectionTitle>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>

                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Usage Examples</h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 font-mono rounded-md uppercase text-[10px] tracking-widest">System</Badge>
                            <Badge variant="secondary" className="rounded-md text-[11px]">New</Badge>
                            <Badge className="bg-green-500 text-white border-green-500 rounded-md text-[11px]">Active</Badge>
                            <Badge className="bg-orange-500 text-white border-orange-500 rounded-md text-[11px]">Pending</Badge>
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ CARDS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="cards">Cards</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <Card className="shadow-none">
                                <CardHeader>
                                    <CardTitle>Standard Card</CardTitle>
                                    <CardDescription>Default styling — 1px border, no shadow, 4px radius.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-600">Content area with default padding. Clean and flat, following the Buildify design language.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" size="sm" className="w-full">Action</Button>
                                </CardFooter>
                            </Card>

                            <Card className="shadow-none bg-zinc-50">
                                <CardHeader>
                                    <CardTitle>Muted Card</CardTitle>
                                    <CardDescription>Uses bg-zinc-50 for subtle elevation.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-600">Secondary content that needs visual separation without shadow or stronger borders.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-none border-zinc-900">
                                <CardHeader>
                                    <CardTitle>Emphasized Card</CardTitle>
                                    <CardDescription>Dark border for primary emphasis.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-600">Used for featured items or primary selections. The dark border draws attention.</p>
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <Button size="sm" className="flex-1">Select</Button>
                                    <Button variant="outline" size="sm">Learn More</Button>
                                </CardFooter>
                            </Card>

                            <Card className="shadow-none">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary" className="rounded-md text-[11px] mb-2">Popular</Badge>
                                        <span className="text-xs text-zinc-400 font-mono">$99/mo</span>
                                    </div>
                                    <CardTitle>Feature Card</CardTitle>
                                    <CardDescription>Card with badge, price tag, and icon list.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {["Unlimited projects", "Priority support", "Custom domain"].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                                                <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ FORMS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="forms">Form Elements</SectionTitle>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {/* Input */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-semibold text-zinc-900 tracking-tight">Input</h3>
                                <div className="space-y-2">
                                    <Label htmlFor="demo-input">Email address</Label>
                                    <Input id="demo-input" type="email" placeholder="hello@buildify.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="demo-disabled">Disabled</Label>
                                    <Input id="demo-disabled" placeholder="Cannot edit" disabled />
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-semibold text-zinc-900 tracking-tight">Textarea</h3>
                                <div className="space-y-2">
                                    <Label htmlFor="demo-textarea">Message</Label>
                                    <Textarea id="demo-textarea" placeholder="Tell us about your project..." />
                                </div>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Checkbox</h3>
                        <div className="space-y-3 mb-10">
                            <label className="flex items-center text-sm cursor-pointer">
                                <Checkbox defaultChecked />
                                <span>Checked by default</span>
                            </label>
                            <label className="flex items-center text-sm cursor-pointer">
                                <Checkbox />
                                <span>Unchecked</span>
                            </label>
                            <label className="flex items-center text-sm text-zinc-400 cursor-not-allowed">
                                <Checkbox disabled />
                                <span>Disabled</span>
                            </label>
                        </div>

                        {/* Tooltip */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Tooltip</h3>
                        <TooltipProvider>
                            <div className="flex gap-3">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm"><Info className="mr-2 h-3.5 w-3.5" /> Hover me</Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>This is a tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon"><Info className="h-4 w-4" /></Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Icon-only tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ SECTIONS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="sections">Section Component</SectionTitle>
                        <p className="text-sm text-zinc-500 mb-6">The <code className="text-[11px] bg-zinc-50 px-1.5 py-0.5 rounded">Section</code> component supports 4 variants for page structure.</p>
                        <div className="space-y-4">
                            {([
                                { variant: "default" as const, desc: "White background, no constraints" },
                                { variant: "boxed" as const, desc: "max-w-layout (900px) + auto margins" },
                                { variant: "full" as const, desc: "Full width, white background" },
                                { variant: "grid" as const, desc: "bg-zinc-50 for grid/data sections" },
                            ]).map(s => (
                                <div key={s.variant} className="border border-zinc-100 rounded-lg overflow-hidden">
                                    <Section variant={s.variant} className="p-4 !bg-opacity-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <code className="text-xs font-mono font-semibold text-zinc-700">variant="{s.variant}"</code>
                                                <p className="text-xs text-zinc-400 mt-0.5">{s.desc}</p>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-zinc-300" />
                                        </div>
                                    </Section>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ▬▬▬▬▬▬▬▬ PATTERNS ▬▬▬▬▬▬▬▬ */}
                    <section className="mb-20">
                        <SectionTitle id="patterns">Patterns &amp; Compositions</SectionTitle>

                        {/* Alert Banners */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Alert Banners</h3>
                        <div className="space-y-3 mb-10">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                                <Info className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-blue-800">Informational message — used for neutral notices.</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-green-800">Success message — action completed successfully.</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-100">
                                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-amber-800">Warning message — proceed with caution.</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-100">
                                <X className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                                <p className="text-sm text-red-800">Error message — something went wrong.</p>
                            </div>
                        </div>

                        {/* Icon + Text Pattern */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">Feature List Pattern</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                            {[
                                { icon: <Zap className="h-5 w-5 text-orange-500" />, title: "3× Faster Launches", desc: "Get to market in weeks while competitors wait months" },
                                { icon: <Shield className="h-5 w-5 text-blue-600" />, title: "24/7 Support", desc: "Real engineers, not ticket bots. Always available" },
                                { icon: <Heart className="h-5 w-5 text-pink-500" />, title: "97% Retention", desc: "Clients stay because we treat their product like our own" },
                                { icon: <Star className="h-5 w-5 text-amber-500" />, title: "Full Team, One Price", desc: "Design, dev, branding, and support without the overhead" },
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 mt-0.5">{f.icon}</div>
                                    <div>
                                        <h4 className="text-card-title-sm mb-1">{f.title}</h4>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Block Pattern */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 tracking-tight">CTA Block</h3>
                        <div className="border border-zinc-200 rounded-lg p-8 text-center">
                            <h3 className="text-section mb-3">Ready to build something great?</h3>
                            <p className="text-body-lg text-zinc-500 max-w-md mx-auto mb-6">
                                Let's talk about what you need and turn it into something real.
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <Button>Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                <Button variant="outline">Learn More <ExternalLink className="ml-2 h-3.5 w-3.5" /></Button>
                            </div>
                        </div>

                        {/* Copy Token Helper */}
                        <h3 className="text-xs font-semibold text-zinc-900 mb-4 mt-10 tracking-tight">Quick Copy Tokens</h3>
                        <div className="flex flex-wrap gap-2">
                            {["max-w-layout", "rounded-2xl", "text-hero", "text-section", "text-body", "text-caption", "font-mono", "bg-zinc-50", "border-zinc-200"].map(token => (
                                <button
                                    key={token}
                                    onClick={() => copyToken(token)}
                                    className="group flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-100 transition-colors text-xs font-mono text-zinc-600"
                                >
                                    {token}
                                    {copied === token ? (
                                        <Check className="h-3 w-3 text-green-500" />
                                    ) : (
                                        <Copy className="h-3 w-3 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="border-t border-zinc-100 pt-8 mt-20 flex items-center justify-between">
                        <p className="text-xs text-zinc-300 font-mono">Buildify Design System v2.0</p>
                        <p className="text-xs text-zinc-300 font-mono">Not for distribution</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StyleGuide;
