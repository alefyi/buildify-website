import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { SEO } from "@/components/SEO";

const StyleGuide = () => {
    return (
        <div className="min-h-screen bg-white pt-24 pb-24 px-6 md:px-12">
            <SEO title="Style Guide" description="Internal design system." noIndex={true} />
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="pb-8 border-b border-zinc-200">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-zinc-500 border-zinc-200 font-mono rounded-[4px] uppercase text-xs">System</Badge>
                        <span className="text-xs font-mono text-zinc-400">VERCEL_INTER_MESH</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter mb-2">Style Guide</h1>
                    <p className="text-zinc-500 text-lg">Component primitives for the new design system.</p>
                </div>

                {/* Typography */}
                <section className="space-y-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono mb-8 border-b border-zinc-100 pb-2">Typography (Inter)</h2>
                    <div className="space-y-4">
                        <h1 className="text-6xl font-bold tracking-tighter">Heading 1 (6xl)</h1>
                        <h2 className="text-5xl font-bold tracking-tighter">Heading 2 (5xl)</h2>
                        <h3 className="text-4xl font-bold tracking-tight">Heading 3 (4xl)</h3>
                        <h4 className="text-2xl font-bold tracking-tight">Heading 4 (2xl)</h4>
                        <p className="text-base text-zinc-600 max-w-2xl leading-relaxed">
                            Body text (Base). The quick brown fox jumps over the lazy dog.
                            Clean, legible, and optimized for reading with relaxed line height.
                        </p>
                        <p className="text-sm text-zinc-500 font-mono">
                            Mono text (Sm). Used for code, data, and technical accents.
                        </p>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono mb-8 border-b border-zinc-100 pb-2">Buttons</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button>Default Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button size="sm">Small</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </section>

                {/* Cards */}
                <section className="space-y-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono mb-8 border-b border-zinc-100 pb-2">Cards (Grid Mesh)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="rounded-[4px] shadow-none">
                            <CardHeader>
                                <CardTitle>Standard Card</CardTitle>
                                <CardDescription>No shadow, 1px border.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-600">Content goes here. Clean and flat.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" className="w-full">Action</Button>
                            </CardFooter>
                        </Card>
                        <Card className="rounded-[4px] shadow-none bg-zinc-50">
                            <CardHeader>
                                <CardTitle>Secondary Card</CardTitle>
                                <CardDescription>Using bg-zinc-50.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-600">Subtle background contrast.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Colors */}
                <section className="space-y-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 font-mono mb-8 border-b border-zinc-100 pb-2">Palette (Monochrome)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="h-16 w-full bg-white border border-zinc-200 rounded-[4px]"></div>
                            <p className="text-xs font-mono">White / Zinc-200</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 w-full bg-zinc-50 border border-zinc-200 rounded-[4px]"></div>
                            <p className="text-xs font-mono">Zinc-50</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 w-full bg-zinc-900 rounded-[4px]"></div>
                            <p className="text-xs font-mono">Zinc-900 (Black)</p>
                        </div>
                        <div className="space-y-2">
                            <div className="h-16 w-full bg-blue-600 rounded-[4px]"></div>
                            <p className="text-xs font-mono">Accent Blue</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default StyleGuide;
