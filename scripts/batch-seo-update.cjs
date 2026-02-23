// Batch SEO metadata update for all thin posts
// Replaces generic "business","tech" keywords with industry-specific long-tail terms
// Also updates SEO titles and descriptions for better CTR

const fs = require('fs');
const path = require('path');

const postsFile = path.join(process.cwd(), 'src', 'data', 'posts.ts');

const seoUpdates = {
    "data-privacy-and-security-considerations-for-strive-dental-studio-in-2026": {
        seoTitle: "Data Privacy & Security for Dental Practices in 2026 | Buildify",
        seoDescription: "How dental practices can protect patient data, stay HIPAA compliant, and prevent breaches. Practical security framework for small dental clinics.",
        keywords: ["dental data privacy", "dental practice security", "HIPAA compliance dental", "patient data protection dental", "dental clinic cybersecurity"]
    },
    "data-privacy-risks-marketing-agencies": {
        seoTitle: "Data Privacy Risks for Marketing Agencies: Protection Guide | Buildify",
        seoDescription: "Marketing agencies face unique data privacy risks. Learn to protect client data from ransomware, phishing, and unauthorized access.",
        keywords: ["marketing agency data privacy", "agency data protection", "client data security marketing", "marketing agency cybersecurity", "GDPR marketing agency"]
    },
    "revenue-recovery-orlando-auto-repair": {
        seoTitle: "Revenue Recovery for Auto Repair Shops: Stop Losing Repeat Customers | Buildify",
        seoDescription: "Auto repair shops lose thousands in repeat revenue every year. Learn how to recover lost customers with automated reminders and loyalty systems.",
        keywords: ["auto repair customer retention", "auto repair shop marketing", "auto repair loyalty program", "auto repair revenue recovery", "auto repair CRM", "mechanic shop marketing"]
    },
    "technical-barriers-food-truck-owners": {
        seoTitle: "Why Food Truck Owners Reject Software (And What Actually Works) | Buildify",
        seoDescription: "Food truck owners need mobile-first, low-friction tools. Learn why traditional software fails and what drives real ROI for mobile food businesses.",
        keywords: ["food truck software", "food truck app", "food truck loyalty program", "food truck marketing", "food truck POS alternative", "mobile food business tools"]
    },
    "home-daycare-strategy-2026-correction": {
        seoTitle: "Home Daycare Business Strategy: Surviving the 2026 Correction | Buildify",
        seoDescription: "Home daycare providers face rising costs and enrollment challenges. Practical strategies to maintain income and retain families.",
        keywords: ["home daycare business strategy", "daycare marketing", "home daycare enrollment", "daycare customer retention", "childcare business growth"]
    },
    "data-privacy-risks-boutique-law-firms": {
        seoTitle: "Data Privacy Risks for Small Law Firms: Protection Guide | Buildify",
        seoDescription: "Small and boutique law firms face unique data privacy challenges. Learn to protect client confidentiality and meet compliance standards.",
        keywords: ["law firm data privacy", "small law firm cybersecurity", "attorney client data protection", "law firm data breach prevention", "legal data security"]
    },
    "current-state-assessment": {
        seoTitle: "Small Business Technology Assessment: Where Most Businesses Fail | Buildify",
        seoDescription: "Most small businesses use fragmented tools that don't talk to each other. Assess your current state and find the gaps costing you revenue.",
        keywords: ["small business technology assessment", "business technology audit", "SMB digital transformation", "small business software evaluation", "business operations assessment"]
    },
    "the-friction-audit-technical-barriers-for-nail-salon-owners": {
        seoTitle: "Why Nail Salon Owners Reject Software: A Friction Audit | Buildify",
        seoDescription: "Nail salon owners face unique tech barriers. Learn why most salon software fails and what features actually drive bookings and retention.",
        keywords: ["nail salon software", "nail salon app", "nail salon booking system", "salon management software", "nail salon marketing", "salon customer retention"]
    },
    "the-friction-audit-technical-barriers-for-home-development-contractors": {
        seoTitle: "Why Contractors Reject Software: Technical Barriers Explained | Buildify",
        seoDescription: "Home contractors and developers struggle with complex software. Learn what tools actually work for construction and renovation businesses.",
        keywords: ["contractor software", "home contractor app", "construction business software", "contractor CRM", "home renovation business tools", "contractor customer management"]
    },
    "retention-strategy-nail-salons": {
        seoTitle: "Nail Salon Customer Retention: Proven Strategies for 2026 | Buildify",
        seoDescription: "Keep nail salon clients coming back. Digital loyalty programs, appointment reminders, and personalized marketing strategies that work.",
        keywords: ["nail salon customer retention", "salon loyalty program", "nail salon marketing strategy", "salon client retention", "beauty salon repeat customers"]
    },
    "technical-barriers-salon-owners": {
        seoTitle: "Why Salon Owners Struggle with Technology (And How to Fix It) | Buildify",
        seoDescription: "Salon owners need simple, effective tools — not complex dashboards. Understand the real barriers and find solutions that fit salon workflows.",
        keywords: ["salon technology barriers", "salon software problems", "beauty salon app", "salon management tools", "salon owner technology", "simple salon software"]
    },
    "data-security-levels-vape-shops": {
        seoTitle: "Data Security for Vape Shops: Protecting Customer Information | Buildify",
        seoDescription: "Vape shops collect age verification and purchase data that requires protection. Learn the security levels every vape retailer needs.",
        keywords: ["vape shop data security", "vape shop software", "vape shop POS security", "tobacco retailer data protection", "vape shop customer data"]
    },
    "why-modern-smb-systems-fail-to-scale": {
        seoTitle: "Why Small Business Software Fails to Scale (And What to Do About It) | Buildify",
        seoDescription: "SMB software tools promise growth but create bottlenecks. Learn why modern systems fail at scale and how to build infrastructure that grows with you.",
        keywords: ["small business software scaling", "SMB technology problems", "small business growth tools", "scalable business software", "small business tech stack"]
    },
    "technical-deterrents-salon-owners": {
        seoTitle: "What Stops Salon Owners from Adopting New Technology | Buildify",
        seoDescription: "Cost, complexity, and unclear ROI deter salon owners from new tools. Break down the real barriers and find solutions that convert.",
        keywords: ["salon technology adoption", "salon software barriers", "beauty salon digital tools", "salon owner tech resistance", "salon marketing automation"]
    },
    "data-security-dental-clinics": {
        seoTitle: "Data Security Best Practices for Dental Clinics | Buildify",
        seoDescription: "Dental clinics handle sensitive PHI that requires strong protection. Essential security practices for small dental practices in 2026.",
        keywords: ["dental clinic data security", "dental HIPAA compliance", "dental practice cybersecurity", "patient data security dental", "dental office data protection"]
    },
    "bloatware-audit-crm-fail": {
        seoTitle: "Why Your CRM Is Bloatware: The Small Business CRM Problem | Buildify",
        seoDescription: "Most CRMs are overbuilt for small businesses. Learn why 70% of SMBs abandon their CRM and what lightweight alternatives actually work.",
        keywords: ["small business CRM problems", "CRM bloatware", "simple CRM small business", "CRM alternative small business", "lightweight CRM", "best simple CRM"]
    },
    "auto-repair-strategy-2026-correction": {
        seoTitle: "Auto Repair Shop Strategy for the 2026 Economic Correction | Buildify",
        seoDescription: "Auto repair shops can thrive during economic downturns. Strategies for customer retention, revenue protection, and competitive positioning.",
        keywords: ["auto repair business strategy", "auto repair shop marketing", "auto repair customer retention", "mechanic shop growth", "auto repair business during recession"]
    },
    "streamlining-business-operations-with-custom-dashboards": {
        seoTitle: "Custom Dashboards for Small Business Operations | Buildify",
        seoDescription: "Replace scattered spreadsheets with a unified dashboard. How small businesses streamline operations with custom analytics and reporting.",
        keywords: ["small business dashboard", "custom business dashboard", "business operations dashboard", "SMB analytics dashboard", "business intelligence small business"]
    },
    "technical-barriers-for-local-retail-shop-owners": {
        seoTitle: "Why Local Retail Shops Struggle with Technology | Buildify",
        seoDescription: "Local retail shop owners face unique tech barriers. Learn what tools actually help independent retailers compete with big box stores.",
        keywords: ["local retail technology", "independent retail software", "retail shop app", "small retail store marketing", "retail customer loyalty", "independent retailer tools"]
    },
    "technical-barriers-for-small-solo-hvac-business-owners": {
        seoTitle: "HVAC Business Software: Why Solo Operators Reject Complex Tools | Buildify",
        seoDescription: "Solo HVAC business owners need simple tools, not enterprise software. Practical guide to technology that fits one-person HVAC operations.",
        keywords: ["HVAC business software", "HVAC CRM", "HVAC marketing", "solo HVAC business tools", "HVAC customer management", "HVAC scheduling software"]
    },
    "data-privacy-challenges-boutique-law-firms": {
        seoTitle: "Data Privacy Challenges for Small Law Firms in 2026 | Buildify",
        seoDescription: "Boutique law firms face growing data privacy regulations. Practical solutions for protecting client confidentiality and meeting compliance.",
        keywords: ["law firm data privacy challenges", "small law firm compliance", "legal data privacy", "attorney data security", "law firm GDPR compliance"]
    },
    "hvac-revenue-leakage-digital-solution": {
        seoTitle: "How HVAC Companies Lose Revenue (And the Digital Fix) | Buildify",
        seoDescription: "HVAC companies leak revenue through missed follow-ups and poor customer retention. Digital solutions that recover lost maintenance revenue.",
        keywords: ["HVAC revenue leakage", "HVAC customer retention", "HVAC marketing digital", "HVAC service reminders", "HVAC business growth", "HVAC loyalty program"]
    },
    "closing-the-security-gap-non-profits": {
        seoTitle: "Cybersecurity for Non-Profits: Closing the Security Gap | Buildify",
        seoDescription: "Non-profits are prime targets for cyberattacks. Low-cost strategies to protect donor data, volunteer records, and organizational assets.",
        keywords: ["non-profit cybersecurity", "non-profit data security", "nonprofit data protection", "non-profit IT security", "protecting donor data"]
    },
    "technical-barriers-for-pool-service-business-owners": {
        seoTitle: "Pool Service Business Software: What Actually Works | Buildify",
        seoDescription: "Pool service business owners need simple route management and customer retention tools. Cut through the noise and find what fits.",
        keywords: ["pool service software", "pool business app", "pool service CRM", "pool maintenance business tools", "pool service customer management"]
    },
    "3-ways-dental-practices-leak-patient-data": {
        seoTitle: "3 Ways Dental Practices Leak Patient Data (And How to Stop) | Buildify",
        seoDescription: "Dental practices unknowingly expose patient data through these 3 common vulnerabilities. Practical fixes that protect your practice.",
        keywords: ["dental data breach", "dental patient data leak", "dental practice HIPAA violations", "dental data security risks", "protecting dental patient records"]
    },
    "software-adoption-struggles-in-the-laundromat-industry": {
        seoTitle: "Why Laundromats Struggle with Software Adoption | Buildify",
        seoDescription: "Laundromat owners face unique challenges with modern software. Simple solutions for an industry built on cash and simplicity.",
        keywords: ["laundromat software", "laundromat business app", "laundromat customer loyalty", "laundromat marketing", "coin laundry business software"]
    },
    "technical-barriers-for-local-cafes": {
        seoTitle: "Technology Barriers for Local Cafes and Coffee Shops | Buildify",
        seoDescription: "Independent cafes need simple, affordable tech — not enterprise solutions. The right tools to boost loyalty and repeat visits.",
        keywords: ["cafe software", "coffee shop app", "cafe loyalty program", "coffee shop marketing tools", "independent cafe technology", "cafe customer retention"]
    },
    "data-privacy-risks-for-auto-repair-shops": {
        seoTitle: "Data Privacy Risks for Auto Repair Shops: What You Need to Know | Buildify",
        seoDescription: "Auto repair shops collect customer data that needs protection. Practical privacy guide for independent mechanics and shops.",
        keywords: ["auto repair data privacy", "mechanic shop customer data", "auto repair shop security", "auto shop data protection", "auto repair CCPA compliance"]
    },
    "technical-barriers-for-fitness-studio-gym-owners": {
        seoTitle: "Why Gym & Fitness Studio Owners Struggle with Software | Buildify",
        seoDescription: "Fitness studio owners need member retention tools, not complex management suites. Simple solutions for gyms and boutique studios.",
        keywords: ["gym software", "fitness studio app", "gym member retention", "fitness studio marketing", "gym loyalty program", "boutique fitness software"]
    },
    "operational-inefficiencies-in-modern-auto-repair-shops": {
        seoTitle: "Operational Inefficiencies Costing Auto Repair Shops Money | Buildify",
        seoDescription: "Auto repair shops lose thousands to operational inefficiencies. Identify the gaps and implement simple fixes for immediate ROI.",
        keywords: ["auto repair shop efficiency", "auto repair operations", "mechanic shop management", "auto repair business optimization", "auto shop workflow improvement"]
    },
    "technical-barriers-for-local-print-shop-owners": {
        seoTitle: "Technology Barriers for Local Print Shops | Buildify",
        seoDescription: "Print shop owners face unique challenges adopting digital tools. Practical solutions for independent print and copy businesses.",
        keywords: ["print shop software", "print shop marketing", "print business app", "print shop customer retention", "local print shop technology"]
    },
    "why-salons-reject-complexity": {
        seoTitle: "Why Beauty Salons Reject Complex Software | Buildify",
        seoDescription: "Salon owners don't need 50-feature dashboards. Understanding why simplicity wins in beauty business technology.",
        keywords: ["salon software complexity", "simple salon tools", "beauty salon technology", "salon booking simplicity", "salon owner frustration software"]
    },
    "technical-barriers-for-independent-tennis-coaches": {
        seoTitle: "Technology Tools for Independent Tennis Coaches | Buildify",
        seoDescription: "Independent tennis coaches need scheduling, client management, and engagement tools that fit their mobile lifestyle.",
        keywords: ["tennis coach software", "tennis coaching app", "independent sports coach tools", "tennis lesson booking", "private tennis coach management"]
    },
    "technical-barriers-for-barbershop-owners": {
        seoTitle: "Why Barbershop Owners Struggle with Software | Buildify",
        seoDescription: "Barbershops need simple booking and loyalty tools — not complex management platforms. Find what actually works for barbers.",
        keywords: ["barbershop software", "barber shop app", "barbershop booking system", "barber loyalty program", "barbershop marketing tools"]
    },
    "technical-barriers-for-cafe-boutique-owners": {
        seoTitle: "Technology Barriers for Boutique Cafe Owners | Buildify",
        seoDescription: "Boutique cafe owners want to focus on craft, not dashboards. Simple technology solutions for specialty coffee and food businesses.",
        keywords: ["boutique cafe software", "specialty coffee shop app", "cafe POS alternative", "boutique cafe marketing", "specialty cafe loyalty"]
    },
    "data-privacy-tips-for-dental-clinics": {
        seoTitle: "5 Data Privacy Tips Every Dental Clinic Needs in 2026 | Buildify",
        seoDescription: "Practical data privacy tips for dental clinics to protect patient information, ensure HIPAA compliance, and prevent costly breaches.",
        keywords: ["dental data privacy tips", "dental clinic HIPAA tips", "dental patient privacy", "dental office security tips", "dental data protection best practices"]
    },
    "3-ways-small-construction-companies-can-protect-client-data": {
        seoTitle: "3 Ways Construction Companies Can Protect Client Data | Buildify",
        seoDescription: "Construction companies handle sensitive project and financial data. Three practical strategies for protecting client information.",
        keywords: ["construction company data security", "contractor client data protection", "construction business cybersecurity", "small contractor data privacy"]
    },
    "technical-barriers-for-restaurant-owners-atlantic-city": {
        seoTitle: "Technology Barriers for Restaurant Owners in Atlantic City | Buildify",
        seoDescription: "Atlantic City restaurant owners face unique challenges with technology adoption. Local solutions for a competitive dining market.",
        keywords: ["Atlantic City restaurant technology", "restaurant software NJ", "Atlantic City restaurant marketing", "local restaurant app NJ", "restaurant loyalty Atlantic City"]
    },
    "technical-barriers-for-carpenter-home-renovation-owners": {
        seoTitle: "Software Barriers for Carpentry & Home Renovation Businesses | Buildify",
        seoDescription: "Carpenters and renovation contractors need simple client management. Why most software fails this industry and what works.",
        keywords: ["carpentry business software", "home renovation CRM", "carpenter marketing tools", "renovation business app", "contractor customer management"]
    },
    "technical-barriers-for-gas-stations-convenience-stores": {
        seoTitle: "Technology Challenges for Gas Stations & Convenience Stores | Buildify",
        seoDescription: "Gas stations and convenience stores can leverage technology for loyalty and repeat visits. Practical tools for a high-traffic industry.",
        keywords: ["gas station loyalty app", "convenience store software", "gas station marketing", "c-store customer retention", "convenience store loyalty program"]
    },
    "data-privacy-tips-for-personal-training-studios": {
        seoTitle: "Data Privacy Tips for Personal Training Studios | Buildify",
        seoDescription: "Personal trainers handle sensitive health and payment data. Essential privacy practices for fitness studios and private trainers.",
        keywords: ["personal trainer data privacy", "fitness studio data security", "personal training client data", "gym data protection", "fitness business privacy"]
    },
    "technical-barriers-for-gas-stations-liquor-stores": {
        seoTitle: "Technology Barriers for Liquor Stores & Gas Stations | Buildify",
        seoDescription: "Liquor stores and gas stations can use simple loyalty tools to drive repeat purchases without complex POS overhauls.",
        keywords: ["liquor store loyalty app", "liquor store marketing", "gas station rewards program", "liquor store customer retention", "alcohol retailer software"]
    },
    "data-privacy-tips-for-boutique-hotels": {
        seoTitle: "Data Privacy Best Practices for Boutique Hotels | Buildify",
        seoDescription: "Boutique hotels collect sensitive guest data. Essential privacy practices for small hotels and B&Bs to protect guests and stay compliant.",
        keywords: ["boutique hotel data privacy", "small hotel guest data security", "hotel data protection", "B&B data privacy", "hospitality data security"]
    },
    "technical-barriers-for-real-estate-agents": {
        seoTitle: "Technology Barriers for Independent Real Estate Agents | Buildify",
        seoDescription: "Real estate agents juggle multiple tools that don't integrate. Simple solutions for client management, follow-ups, and lead nurturing.",
        keywords: ["real estate agent software", "realtor CRM", "real estate marketing tools", "real estate agent app", "real estate client management"]
    },
    "metro-atlanta-beauty-business-2026": {
        seoTitle: "Metro Atlanta Beauty Business Landscape in 2026 | Buildify",
        seoDescription: "The metro Atlanta beauty industry is booming. How salon and spa owners can leverage technology to stand out in a competitive market.",
        keywords: ["Atlanta beauty business", "Atlanta salon marketing", "metro Atlanta spa technology", "Atlanta beauty industry 2026", "Georgia salon software"]
    },
    "vancouver-small-business-networking-resource-map": {
        seoTitle: "Vancouver Small Business Networking & Resources Guide | Buildify",
        seoDescription: "Essential networking groups, grants, and technology resources for small business owners in Vancouver. Your complete local resource map.",
        keywords: ["Vancouver small business resources", "Vancouver business networking", "Vancouver entrepreneur resources", "BC small business grants", "Vancouver startup resources"]
    },
    "3-data-privacy-tips-for-auto-shops": {
        seoTitle: "3 Data Privacy Tips Every Auto Shop Needs | Buildify",
        seoDescription: "Auto shops handle customer payment and vehicle data. Three practical tips to protect your shop and your customers' information.",
        keywords: ["auto shop data privacy", "auto repair data protection", "mechanic shop security tips", "auto shop customer data", "automotive data privacy"]
    },
    "3-data-privacy-tips-for-local-dental-clinics": {
        seoTitle: "3 Data Privacy Tips for Local Dental Clinics | Buildify",
        seoDescription: "Local dental clinics can protect patient data with these three straightforward privacy practices. HIPAA-friendly tips for small practices.",
        keywords: ["local dental clinic data privacy", "small dental practice HIPAA", "dental clinic security tips", "dental patient data tips", "dental office privacy"]
    },
    "vulnerability-audit-austin-coffee-roasters": {
        seoTitle: "Technology Vulnerability Audit for Austin Coffee Roasters | Buildify",
        seoDescription: "Austin coffee roasters face unique tech challenges. Vulnerability assessment and practical solutions for craft coffee businesses.",
        keywords: ["Austin coffee shop technology", "coffee roaster software", "Austin cafe marketing", "craft coffee business tools", "coffee shop loyalty Austin"]
    },
    "restaurant-roi-calculator-demo": {
        seoTitle: "Restaurant ROI Calculator: See Your Revenue Potential | Buildify",
        seoDescription: "Calculate how much revenue your restaurant is leaving on the table. Free ROI calculator for loyalty programs and direct ordering.",
        keywords: ["restaurant ROI calculator", "restaurant loyalty ROI", "restaurant marketing ROI", "restaurant revenue calculator", "restaurant app ROI"]
    },
    "technical-barriers-for-local-restaurant-owners": {
        seoTitle: "Technology Barriers for Local Restaurant Owners | Buildify",
        seoDescription: "Local restaurant owners face complex tech decisions. Simple solutions for ordering, loyalty, and customer engagement without the overhead.",
        keywords: ["local restaurant technology", "restaurant owner software barriers", "simple restaurant app", "restaurant technology problems", "restaurant digital tools"]
    },
    "loyalty-roi-calculator-auto-repair-shops": {
        seoTitle: "Auto Repair Loyalty ROI Calculator | Buildify",
        seoDescription: "Calculate the ROI of a loyalty program for your auto repair shop. See how many additional repeat visits and revenue you could generate.",
        keywords: ["auto repair loyalty ROI", "mechanic shop loyalty calculator", "auto repair customer retention ROI", "auto shop loyalty program value"]
    },
    "safeguarding-data-tips-for-healthcare-businesses-in-2026": {
        seoTitle: "Data Security Tips for Healthcare Businesses in 2026 | Buildify",
        seoDescription: "Healthcare businesses face growing cybersecurity threats. Practical data safeguarding tips for clinics, practices, and health businesses.",
        keywords: ["healthcare data security tips", "small healthcare cybersecurity", "medical practice data protection", "healthcare HIPAA compliance tips", "clinic data security"]
    },
    "revenue-leakage-in-physical-therapy-clinics": {
        seoTitle: "Revenue Leakage in Physical Therapy Clinics: Find the Gaps | Buildify",
        seoDescription: "Physical therapy clinics lose significant revenue through missed follow-ups and poor retention. Identify and fix your revenue leaks.",
        keywords: ["physical therapy clinic revenue", "PT clinic customer retention", "physical therapy marketing", "physical therapy business growth", "PT clinic patient retention"]
    },
    "hvac-companies-in-houston-market-analysis": {
        seoTitle: "Houston HVAC Market Analysis: Opportunities for Growth | Buildify",
        seoDescription: "The Houston HVAC market is highly competitive. Analysis of opportunities for independent HVAC companies to differentiate and grow.",
        keywords: ["Houston HVAC market", "Houston HVAC companies", "HVAC business Houston", "Houston HVAC marketing", "Texas HVAC industry analysis"]
    },
    "how-lawn-care-owners-in-houston-are-navigating-the-2026-correction": {
        seoTitle: "Houston Lawn Care Businesses: Navigating the 2026 Correction | Buildify",
        seoDescription: "Houston lawn care businesses face new challenges in 2026. Strategies for customer retention and revenue stability during economic shifts.",
        keywords: ["Houston lawn care business", "lawn care marketing Houston", "lawn service customer retention", "lawn care business strategy", "Houston landscaping business"]
    },
    "technical-barriers-for-local-law-enforcement": {
        seoTitle: "Technology Challenges for Local Law Enforcement Agencies | Buildify",
        seoDescription: "Local law enforcement agencies face budget and training barriers when adopting new technology. Practical solutions for community-facing tools.",
        keywords: ["law enforcement technology", "police department software", "local law enforcement tools", "community policing technology", "law enforcement digital tools"]
    }
};

// Read the file
let content = fs.readFileSync(postsFile, 'utf8');
let updated = 0;

for (const [slug, seo] of Object.entries(seoUpdates)) {
    // Find this post's SEO section
    const slugMarker = `"slug": "${slug}"`;
    const slugIdx = content.indexOf(slugMarker);
    if (slugIdx === -1) { console.log(`SKIP: ${slug} (not found)`); continue; }

    // Find the keywords array for this post (the FIRST one after this slug)
    const keywordsStart = content.indexOf('"keywords":', slugIdx);
    if (keywordsStart === -1 || keywordsStart - slugIdx > 5000) { console.log(`SKIP: ${slug} (no keywords found)`); continue; }

    // Find the closing bracket of keywords array
    const keywordsArrayStart = content.indexOf('[', keywordsStart);
    const keywordsArrayEnd = content.indexOf(']', keywordsArrayStart);

    const oldKeywords = content.substring(keywordsArrayStart, keywordsArrayEnd + 1);

    // Only replace if it's the generic keywords
    if (!oldKeywords.includes('"business"') || !oldKeywords.includes('"tech"')) {
        console.log(`SKIP: ${slug} (already has specific keywords)`);
        continue;
    }

    const newKeywords = JSON.stringify(seo.keywords);
    content = content.substring(0, keywordsArrayStart) + newKeywords + content.substring(keywordsArrayEnd + 1);

    // Update SEO title
    const seoTitleStart = content.indexOf('"title":', content.indexOf('"seo":', slugIdx));
    if (seoTitleStart !== -1 && seoTitleStart - slugIdx < 5000) {
        const titleValStart = content.indexOf('"', seoTitleStart + 8);
        const titleValEnd = content.indexOf('"', titleValStart + 1);
        // Handle escaped quotes
        let end = titleValStart + 1;
        while (end < content.length) {
            if (content[end] === '"' && content[end - 1] !== '\\') break;
            end++;
        }
        content = content.substring(0, titleValStart) + JSON.stringify(seo.seoTitle) + content.substring(end + 1);
    }

    // Update SEO description
    const seoDescStart = content.indexOf('"description":', content.indexOf('"seo":', slugIdx));
    if (seoDescStart !== -1 && seoDescStart - slugIdx < 5000) {
        const descValStart = content.indexOf('"', seoDescStart + 14);
        let end = descValStart + 1;
        while (end < content.length) {
            if (content[end] === '"' && content[end - 1] !== '\\') break;
            end++;
        }
        content = content.substring(0, descValStart) + JSON.stringify(seo.seoDescription) + content.substring(end + 1);
    }

    updated++;
    console.log(`UPDATED: ${slug} → ${seo.keywords.length} keywords`);
}

fs.writeFileSync(postsFile, content, 'utf8');
console.log(`\nDone! Updated ${updated} posts with industry-specific SEO metadata.`);
