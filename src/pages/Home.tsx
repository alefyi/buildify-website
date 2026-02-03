import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Globe, Smartphone, Database, AlertCircle, Check, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GrowthTool } from "@/components/GrowthTool";

import { OrganizationSchema } from "@/components/Schema";
import { SEO } from "@/components/SEO";
import DottedGlowBackground from "@/components/DottedGlowBackground";
import amcham from "@/assets/partners/amcham.png";
import foundersFirst from "@/assets/partners/founders_first.png";
import co100 from "@/assets/partners/co100.png";
import chamber from "@/assets/partners/chamber.png";

const Home = () => {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="High-Performance Business Tech"
                description="We build, brand, maintain, and support the tools your business runs on. Scalable web apps, mobile apps, and enterprise software."
                url="https://usebuildify.com"
            />
            <OrganizationSchema />
            {/* 1. The Hook (Hero) */}
            <section className="pt-20 md:pt-32 pb-32 border-b border-zinc-200 bg-white relative overflow-hidden">
                <DottedGlowBackground />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                        <svg width="125" height="41" viewBox="0 0 125 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto opacity-90">
                            <path d="M120.325 1H4.5C2.567 1 1 2.567 1 4.5V36.5C1 38.433 2.567 40 4.5 40H120.325C122.258 40 123.825 38.433 123.825 36.5V4.5C123.825 2.567 122.258 1 120.325 1Z" fill="#F3F4F5" />
                            <path d="M120.325 1H4.5C2.567 1 1 2.567 1 4.5V36.5C1 38.433 2.567 40 4.5 40H120.325C122.258 40 123.825 38.433 123.825 36.5V4.5C123.825 2.567 122.258 1 120.325 1Z" stroke="#0B0E2D" />
                            <path d="M18.4968 23.6709L27.6892 14.4785L29.1034 15.8927L18.4968 26.4993L12.1328 20.1354L13.547 18.7212L18.4968 23.6709Z" fill="#A05A25" />
                            <path d="M65.3191 12.9844V14.1986H57.0625V12.9844H65.3191Z" fill="#0B0E2D" />
                            <path d="M51.6272 9.50016C56.7645 9.46029 56.7677 17.4769 51.6272 17.4362C46.4882 17.4777 46.4894 9.45868 51.6272 9.50016ZM51.6272 16.114C54.8541 16.1192 54.8549 10.8167 51.6272 10.8224C48.3991 10.8171 48.401 16.1196 51.6272 16.114Z" fill="#0B0E2D" />
                            <path d="M44.4394 16.1141C43.0183 16.1141 41.9505 14.9345 41.9505 13.4685C41.8588 11.1427 44.7399 9.9357 46.255 11.6155L47.1843 10.6018C44.9058 8.20109 40.2828 10.0178 40.508 13.4685C40.282 16.9172 44.9073 18.7388 47.1835 16.3336L46.255 15.3207C45.7765 15.8246 45.1232 16.1101 44.4394 16.1141Z" fill="#0B0E2D" />
                            <path d="M68.5427 17.4998L65.4297 9.7998H66.9587L69.0597 15.0578L71.1717 9.7998H72.7007L69.5877 17.4998H68.5427ZM78.747 11.1198H75.612V12.7148H77.977V14.0348H75.612V16.1798H78.857V17.4998H74.127V9.7998H78.747V11.1198ZM82.6389 14.0898H82.0999V17.4998H80.6149V9.7998H83.4199C84.2119 9.7998 84.7179 10.0198 85.1029 10.3718C85.5209 10.7678 85.7849 11.3288 85.7849 11.9448C85.7849 12.5608 85.5209 13.1218 85.1029 13.5178C84.8939 13.7158 84.6409 13.8698 84.3329 13.9688L87.2149 17.4998H85.3779L82.6389 14.0898ZM82.0999 12.7698H83.3319C83.7609 12.7698 83.9479 12.6818 84.0799 12.5388C84.2119 12.3958 84.2999 12.1758 84.2999 11.9558C84.2999 11.7248 84.2119 11.5048 84.0799 11.3618C83.9479 11.2188 83.7609 11.1198 83.3319 11.1198H82.0999V12.7698ZM88.424 17.4998V9.7998H89.909V17.4998H88.424ZM96.7281 11.1198H93.5931V12.7148H95.9581V14.0348H93.5931V17.4998H92.1081V9.7998H96.7281V11.1198ZM98.263 17.4998V9.7998H99.7477V17.4998H98.263ZM106.567 11.1198H103.432V12.7148H105.797V14.0348H103.432V16.1798H106.677V17.4998H101.947V9.7998H106.567V11.1198ZM113.55 13.6498C113.55 13.0118 113.341 12.4178 112.989 11.9778C112.56 11.4388 111.933 11.1198 111.02 11.1198H109.92V16.1798H111.02C111.933 16.1798 112.56 15.8608 112.989 15.3218C113.341 14.8818 113.55 14.2878 113.55 13.6498ZM108.435 9.7998H110.855C112.076 9.7998 112.879 10.0638 113.506 10.5258C114.452 11.2298 115.035 12.3738 115.035 13.6498C115.035 14.9258 114.452 16.0698 113.506 16.7738C112.879 17.2358 112.076 17.4998 110.855 17.4998H108.435V9.7998Z" fill="#0B0E2D" />
                            <path d="M41.6172 21.6996H44.9492C46.0552 21.6996 46.6712 21.9656 47.1472 22.3856C47.6932 22.8616 48.0572 23.5616 48.0572 24.3596C48.0572 25.0036 47.7492 25.6616 47.4272 25.9976C48.2952 26.4316 48.8972 27.4116 48.8972 28.5036C48.8972 29.3296 48.5472 30.0856 48.0012 30.6176C47.4552 31.1636 46.6992 31.4996 45.4392 31.4996H41.6172V21.6996ZM43.5072 23.3796V25.4796H44.8372C45.4252 25.4796 45.6912 25.3396 45.8872 25.1296C46.0552 24.9476 46.1672 24.6956 46.1672 24.4296C46.1672 24.1636 46.0552 23.9116 45.8872 23.7296C45.6912 23.5196 45.4252 23.3796 44.8372 23.3796H43.5072ZM43.5072 29.8196H45.3972C46.0552 29.8196 46.4192 29.6516 46.6572 29.3856C46.8812 29.1476 47.0072 28.8396 47.0072 28.4896C47.0072 28.1396 46.8812 27.8316 46.6572 27.5936C46.4192 27.3276 46.0552 27.1596 45.3972 27.1596H43.5072V29.8196ZM55.8972 31.6396C54.7912 31.6396 53.7132 31.3036 52.9572 30.6316C52.1452 29.9036 51.6972 28.8676 51.6972 27.3696V21.6996H53.5872V27.5096C53.5872 28.4056 53.8252 28.9516 54.2312 29.3296C54.6512 29.7356 55.2392 29.9596 55.8972 29.9596C56.5552 29.9596 57.1432 29.7356 57.5632 29.3296C57.9692 28.9516 58.2072 28.4056 58.2072 27.5096V21.6996H60.0972V27.3696C60.0972 28.8676 59.6492 29.9036 58.8372 30.6316C58.0812 31.3036 57.0032 31.6396 55.8972 31.6396ZM62.6872 30.1696L63.9192 28.8816C64.4792 29.4976 65.3332 29.9596 66.2292 29.9596C67.0692 29.9596 67.6572 29.4416 67.6572 28.7276C67.6572 27.4676 65.8372 27.3136 64.5212 26.5436C63.7512 26.0956 63.1352 25.4236 63.1352 24.3176C63.1352 22.5676 64.7452 21.5596 66.3692 21.5596C67.3632 21.5596 68.2872 21.7976 69.2112 22.4836L68.2312 23.8836C67.8392 23.5196 67.1812 23.2396 66.5372 23.2396C65.8232 23.2396 65.0252 23.5476 65.0252 24.3036C65.0252 25.8856 69.5472 25.3956 69.5472 28.6996C69.5472 30.4356 67.9932 31.6396 66.2292 31.6396C64.9132 31.6396 63.6952 31.0936 62.6872 30.1696ZM72.5594 31.4996V21.6996H74.4494V31.4996H72.5594ZM78.0883 31.4996V21.6996H79.4183L84.8783 28.0836V21.6996H86.7683V31.4996H85.4383L79.9783 25.1156V31.4996H78.0883ZM96.2921 23.3796H92.3021V25.4096H95.3121V27.0896H92.3021V29.8196H96.4321V31.4996H90.4121V21.6996H96.2921V23.3796ZM98.7345 30.1696L99.9662 28.8816C100.526 29.4976 101.38 29.9596 102.276 29.9596C103.116 29.9596 103.704 29.4416 103.704 28.7276C103.704 27.4676 101.884 27.3136 100.568 26.5436C99.7982 26.0956 99.1825 25.4236 99.1825 24.3176C99.1825 22.5676 100.792 21.5596 102.416 21.5596C103.41 21.5596 104.334 21.7976 105.258 22.4836L104.278 23.8836C103.886 23.5196 103.228 23.2396 102.584 23.2396C101.87 23.2396 101.072 24.3036 101.072 24.3036C101.072 25.8856 105.594 25.3956 105.594 28.6996C105.594 30.4356 104.04 31.6396 102.276 31.6396C100.96 31.6396 99.7422 31.0936 98.7345 30.1696ZM107.421 30.1696L108.653 28.8816C109.213 29.4976 110.067 29.9596 110.963 29.9596C111.803 29.9596 112.391 29.4416 112.391 28.7276C112.391 27.4676 110.571 27.3136 109.255 26.5436C108.485 26.0956 107.869 25.4236 107.869 24.3176C107.869 22.5676 109.479 21.5596 111.103 21.5596C112.097 21.5596 113.021 21.7976 113.945 22.4836L112.965 23.8836C112.573 23.5196 111.915 23.2396 111.271 23.2396C110.557 23.2396 109.759 24.3036 109.759 24.3036C109.759 25.8856 114.281 25.3956 114.281 28.6996C114.281 30.4356 112.727 31.6396 110.963 31.6396C109.647 31.6396 108.429 31.0936 107.421 30.1696Z" fill="#0B0E2D" />
                        </svg>
                        <svg width="114" height="40" viewBox="0 0 114 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto opacity-90">
                            <path d="M110.712 0H3.28843C1.47228 0 0 1.79086 0 4V36C0 38.2091 1.47228 40 3.28843 40H110.712C112.528 40 114 38.2091 114 36V4C114 1.79086 112.528 0 110.712 0Z" fill="url(#paint0_linear_1591_78)" />
                            <mask id="mask0_1591_78" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="34" y="9" width="47" height="8">
                                <path d="M80.6642 9H34.6641V16.936H80.6642V9Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1591_78)">
                                <path d="M59.491 12.4844V13.6986H51.2344V12.4844H59.491Z" fill="#F3F4F5" />
                                <path d="M60.7109 10.2415L62.5117 9.14844H63.5179V16.7997H62.0879V10.8537L60.7109 11.6406V10.2415Z" fill="#462F12" />
                                <path d="M68.4522 9.03809C70.74 9.03809 72.3184 10.7977 72.3184 12.9729C72.3184 15.1481 70.74 16.9077 68.4522 16.9077C66.1643 16.9077 64.5859 15.1481 64.5859 12.9729C64.5859 10.7977 66.1643 9.03809 68.4522 9.03809ZM68.4522 15.5959C69.8502 15.5959 70.8884 14.4155 70.8884 12.9729C70.8884 11.5302 69.8502 10.3498 68.4522 10.3498C67.0541 10.3498 66.016 11.5302 66.016 12.9729C66.016 14.4155 67.0541 15.5959 68.4522 15.5959Z" fill="#462F12" />
                                <path d="M76.7959 9.03809C79.0838 9.03809 80.6621 10.7977 80.6621 12.9729C80.6621 15.1481 79.0838 16.9077 76.7959 16.9077C74.508 16.9077 72.9297 15.1481 72.9297 12.9729C72.9297 10.7977 74.508 9.03809 76.7959 9.03809ZM76.7959 15.5959C78.1939 15.5959 79.2321 14.4155 79.2321 12.9729C79.2321 11.5302 78.1939 10.3498 76.7959 10.3498C75.3979 10.3498 74.3597 11.5302 74.3597 12.9729C74.3597 14.4155 75.3979 15.5959 76.7959 15.5959Z" fill="#462F12" />
                                <path d="M45.7991 9.00016C50.9365 8.96029 50.9396 16.9769 45.7991 16.9362C40.6601 16.9777 40.6613 8.95868 45.7991 9.00016ZM45.7991 15.614C49.026 15.6192 49.0268 10.3167 45.7991 10.3224C42.571 10.3171 42.5729 15.6196 45.7991 15.614Z" fill="#F3F4F5" />
                                <path d="M38.6035 15.6141C37.1825 15.6141 36.1145 14.4345 36.1145 12.9685C36.0228 10.6427 38.9039 9.4357 40.419 11.1155L41.3484 10.1018C39.0699 7.70109 34.4469 9.51785 34.6721 12.9685C34.4461 16.4172 39.0715 18.2388 41.3476 15.8336L40.419 14.8207C39.9405 15.3246 39.2873 15.6101 38.6035 15.6141Z" fill="#F3F4F5" />
                            </g>
                            <path d="M42.5713 30.9996V26.5896H37.6713V30.9996H35.7812V21.1996H37.6713V24.9096H42.5713V21.1996H44.4613V30.9996H42.5713ZM47.8952 26.0996C47.8952 27.9476 49.2672 29.4596 51.1152 29.4596C52.9632 29.4596 54.3352 27.9476 54.3352 26.0996C54.3352 24.2516 52.9632 22.7396 51.1152 22.7396C49.2672 22.7396 47.8952 24.2516 47.8952 26.0996ZM46.0051 26.0996C46.0051 23.3136 48.0912 21.0596 51.1152 21.0596C54.1392 21.0596 56.2252 23.3136 56.2252 26.0996C56.2252 28.8856 54.1392 31.1396 51.1152 31.1396C48.0912 31.1396 46.0051 28.8856 46.0051 26.0996ZM57.7657 30.9996V21.1996H59.0957L64.5557 27.5836V21.1996H66.4457V30.9996H65.1157L59.6557 24.6156V30.9996H57.7657ZM69.8795 26.0996C69.8795 27.9476 71.2515 29.4596 73.0995 29.4596C74.9475 29.4596 76.3195 27.9476 76.3195 26.0996C76.3195 24.2516 74.9475 22.7396 73.0995 22.7396C71.2515 22.7396 69.8795 24.2516 69.8795 26.0996ZM67.9895 26.0996C67.9895 23.3136 70.0755 21.0596 73.0995 21.0596C76.1235 21.0596 78.2095 23.3136 78.2095 26.0996C78.2095 28.8856 76.1235 31.1396 73.0995 31.1396C70.0755 31.1396 67.9895 28.8856 67.9895 26.0996ZM82.3261 26.6596H81.64V30.9996H79.75V21.1996H83.32C84.328 21.1996 84.9721 21.4796 85.4621 21.9276C85.9941 22.4316 86.3301 23.1456 86.3301 23.9296C86.3301 24.7136 85.9941 25.4276 85.4621 25.9316C85.1961 26.1836 84.8741 26.3796 84.4821 26.5056L88.1501 30.9996H85.8121L82.3261 26.6596ZM81.64 24.9796H83.208C83.754 24.9796 83.9921 24.8676 84.1601 24.6856C84.3281 24.5036 84.4401 24.2236 84.4401 23.9436C84.4401 23.6496 84.3281 23.3696 84.1601 23.1876C83.9921 23.0056 83.754 22.8796 83.208 22.8796H81.64V24.9796ZM95.009 22.8796H91.019V24.9096H94.0289V26.5896H91.019V29.3196H95.149V30.9996H89.1289V21.1996H95.009V22.8796ZM102.706 22.8796H98.7163V24.9096H101.726V26.5896H98.7163V29.3196H102.846V30.9996H96.8263V21.1996H102.706V22.8796Z" fill="white" />
                            <path d="M16.5 8L19.3064 16.6373H28.3882L21.0409 21.9754L23.8473 30.6127L16.5 25.2746L9.15268 30.6127L11.9591 21.9754L4.61179 16.6373H13.6936L16.5 8Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_1591_78" x1="-3.5" y1="49" x2="78" y2="7.50001" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A46632" />
                                    <stop offset="1" stopColor="#D2925C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.05]">
                        We're what your competitors use.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-12 leading-relaxed">
                        We build, brand, maintain, and support the tools your business runs on. All in one place to keep customers coming back.
                    </p>

                    <div className="mt-16">
                        <GrowthTool />
                    </div>
                </div>
            </section>

            {/* 2. The Grid Mesh (Services & Problem) */}
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-[4px]">
                                <AlertCircle className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">The Problem</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                Most agencies over-promise and under-deliver. Freelancers ghost. In-house teams get bogged down.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Status: FAILED</p>
                        </div>
                    </div>

                    {[
                        { title: "Transparency", desc: "No black boxes. You see every commit, every decision.", icon: Terminal },
                        { title: "Speed", desc: "MVP in weeks. We leverage battle-tested boilerplate.", icon: ArrowUpRight },
                        { title: "Ownership", desc: "Code quality that survives due diligence.", icon: Database },
                        { title: "Scale", desc: "Infrastructure ready for 1M+ users from Day 1.", icon: Globe }
                    ].map((item) => (
                        <div key={item.title} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors mb-4" />
                            <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* 2.5. Our Partners */}
            <section className="max-w-[1200px] mx-auto border-x border-b border-zinc-200 bg-white">

                <div className="py-10 border-b border-zinc-200 bg-white text-center">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Recognized By</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 bg-white">
                    {[amcham, foundersFirst, co100, chamber].map((logo, i) => (
                        <div key={i} className="flex items-center justify-center p-10 h-40">
                            <img src={logo} alt="Partner" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </section>
            <section className="border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-zinc-200 border-x border-zinc-200">
                    <div className="p-10 lg:p-16 flex flex-col justify-between h-full bg-white lg:row-span-2">
                        <div>
                            <div className="w-10 h-10 border border-zinc-200 bg-white flex items-center justify-center mb-6 rounded-[4px]">
                                <Smartphone className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4">Our Expertise</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                Full-stack capabilities for every stage of growth. From day one to IPO.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-zinc-200">
                            <Link to="/development">
                                <Button variant="outline" className="w-full rounded-[4px] border-zinc-200">View Process</Button>
                            </Link>
                        </div>
                    </div>

                    {[
                        { title: "Web Apps", desc: "Scalable, high-performance web applications built with Next.js.", tech: "Next.js" },
                        { title: "Mobile Apps", desc: "Native-quality iOS and Android apps using React Native.", tech: "React Native" },
                        { title: "Enterprise", desc: "Robust backend systems designed for massive scale.", tech: "Cloud" },
                        { title: "Product Design", desc: "UI/UX that converts. Beautiful, functional, and user-centric.", tech: "Figma" },
                    ].map((service) => (
                        <div key={service.title} className="p-10 bg-white hover:bg-zinc-50 transition-colors group">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                                <Badge variant="outline" className="font-mono text-[10px] rounded-[2px] bg-zinc-100 border-zinc-200 text-zinc-500 uppercase">
                                    {service.tech}
                                </Badge>
                            </div>
                            <p className="text-zinc-500 mb-8 text-sm leading-relaxed">{service.desc}</p>
                            <Link to="/development" className="text-sm font-medium flex items-center text-zinc-900 group-hover:underline underline-offset-4">
                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Social Proof (Testimonials) */}
            <section className="max-w-[1200px] mx-auto border-x border-b border-zinc-200 bg-zinc-200">
                <div className="bg-white p-10 border-b border-zinc-200">
                    <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Trusted By Founders</h2>
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-black">Don't take our word for it.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px]">
                    {[
                        { text: "Buildify shipped our MVP in 3 weeks. We raised seed funding a month later.", author: "Alex Chen, Founder @ Nexus" },
                        { text: "The code quality is insane. It's rare to find an agency that cares this much.", author: "Sarah Jones, CTO @ Flowstate" },
                        { text: "They don't just build, they think. Strategic partners in every sense.", author: "Mike Ross, CEO @ Syntax" }
                    ].map((t) => (
                        <div key={t.author} className="p-10 bg-white hover:bg-zinc-50 transition-colors">
                            <p className="text-lg text-zinc-900 mb-6 leading-relaxed">"{t.text}"</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">- {t.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Blog (List View) */}
            <section className="py-32 w-full border-x border-zinc-200 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-16">
                        <div className="space-y-4">
                            <Badge variant="outline" className="px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                                Research
                            </Badge>
                            <h2 className="text-4xl font-bold tracking-tight">Latest Insights</h2>
                        </div>
                        <Link to="/posts">
                            <Button variant="outline" size="sm" className="rounded-[4px] text-xs font-mono px-6">VIEW_ALL</Button>
                        </Link>
                    </div>

                    <div className="w-full border-t border-zinc-200">
                        {[
                            { slug: "how-to-make-an-app", date: "OCT 12", title: "How to build an app in 2024" },
                            { slug: "tech-stack-guide", date: "NOV 01", title: "Choosing the right tech stack" },
                            { slug: "hiring-developers", date: "NOV 15", title: "How much does it cost to hire an engineer?" },
                        ].map((post) => (
                            <Link key={post.slug} to={`/post/${post.slug}`} className="group block">
                                <div className="flex items-center justify-between py-10 border-b border-zinc-200 hover:bg-zinc-50 transition-colors px-6 -mx-6">
                                    <div className="flex items-center gap-12">
                                        <span className="text-xs font-mono text-zinc-400 w-20">{post.date}</span>
                                        <h3 className="text-xl font-medium text-zinc-900 group-hover:text-black tracking-tight">{post.title}</h3>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-black transition-all group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ (Accordion Style) */}
            <section className="max-w-[1200px] mx-auto border-x border-zinc-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 border-t border-zinc-200">
                    <div className="p-10 bg-zinc-50">
                        <h3 className="text-2xl font-bold tracking-tight mb-4">FAQ</h3>
                        <p className="text-zinc-500">Common questions about working with us.</p>
                    </div>
                    <div className="lg:col-span-2 divide-y divide-zinc-200">
                        {[
                            { q: "How fast can you build?", a: "We typically ship MVPs in 2-4 weeks using our pre-built core." },
                            { q: "Do I own the code?", a: "100%. You get the GitHub repo and all IP rights upon handover." },
                            { q: "What is the cost structure?", a: "We work on a fixed-project basis. No hourly billing surprises." },
                            { q: "Do you provide support?", a: "Yes, we offer monthly maintenance packages for updates and uptime." }
                        ].map((faq, i) => (
                            <div
                                key={faq.q}
                                className="p-10 hover:bg-zinc-50 transition-colors group cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center transition-colors">
                                    <h4 className="font-bold text-lg">{faq.q}</h4>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-zinc-300 transition-transform duration-300 group-hover:text-black",
                                        openFaq === i ? "rotate-180 text-black" : ""
                                    )} />
                                </div>
                                <div className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openFaq === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-zinc-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Final CTA */}
            <section className="py-32 border-t border-zinc-200 bg-zinc-50">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono font-normal tracking-wide border-zinc-200 text-zinc-600 rounded-[4px] uppercase">
                        Get Started
                    </Badge>
                    <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-[0.9]">Ready to scale?</h2>
                    <p className="text-zinc-500 text-xl mb-12 max-w-lg mx-auto leading-relaxed">We handle the tech so you can focus on the business.</p>
                    <Link to="/contact">
                        <Button size="lg" className="h-16 px-12 text-lg rounded-[4px] bg-black text-white hover:bg-zinc-800 shadow-none">
                            Talk To Our Founders <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
