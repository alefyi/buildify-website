export type Route = {
    path: string;
    label: string;
    section?: string;
};

export const mainRoutes: Route[] = [
    // Solutions Dropdown
    { path: "/development", label: "Development", section: "Solutions" },
    { path: "/market-analysis", label: "Market Analysis", section: "Solutions" },
    { path: "/branding-identity", label: "Branding & Identity", section: "Solutions" },
    { path: "/wireframes-blueprints", label: "Wireframes & Blueprints", section: "Solutions" },
    { path: "/next-versions", label: "Next Versions Post-Launch", section: "Solutions" },

    // Insights (Direct Link or Dropdown)
    { path: "/insights", label: "Insights", section: "Insights" },
    { path: "/for/restaurant", label: "Restaurants", section: "Insights" },
    { path: "/for/gym", label: "Gyms", section: "Insights" },

    // Calculate Dropdown
    { path: "/app-calculator/for-business", label: "Calculator for Business", section: "Calculate" },
    { path: "/app-calculator/for-startups", label: "Calculator for Startups", section: "Calculate" },

    // Enterprise Link
    { path: "/enterprise", label: "Enterprise", section: "Enterprise" },

    // Business Link
    { path: "/business", label: "Business", section: "Pricing" },
];

export const footerRoutes = [
    {
        title: "Services",
        links: [
            { label: "Development", href: "/development" },
            { label: "Market Analysis", href: "/market-analysis" },
            { label: "Branding & Identity", href: "/branding-identity" },
            { label: "Wireframes & Blueprints", href: "/wireframes-blueprints" },
            { label: "Next Versions", href: "/next-versions" },
            { label: "Adalo Development", href: "/adalo" },
        ]
    },
    {
        title: "Industries",
        links: [
            { label: "For Business", href: "/business" },
            { label: "For Enterprise", href: "/enterprise" },
            { label: "For Creators", href: "/creators" },
            { label: "For Faith", href: "/faith" },
            { label: "For Restaurants", href: "/for/restaurant" },
            { label: "For Gyms", href: "/for/gym" },
            { label: "Use Cases", href: "/use-cases" },
        ]
    },
    {
        title: "Tools",
        links: [
            { label: "App Calculator", href: "/app-calculator/for-business" },
            { label: "Startup Calculator", href: "/app-calculator/for-startups" },
            { label: "Billing", href: "/bill" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "Insights (Blog)", href: "/insights" },
            { label: "Discovery Call", href: "/discovery" },
            { label: "Contact", href: "/contact" },
            { label: "Referral Program", href: "/referral" },
            { label: "USCC Grant", href: "/uscc-grant" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/disclosures/privacy" },
            { label: "Terms of Service", href: "/disclosures/terms" },
            { label: "Acceptable Use", href: "/disclosures/acceptable-use" },
            { label: "NDA", href: "/disclosures/nda" },
        ]
    },
];
