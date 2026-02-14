import React from 'react';
import { Check, X, ArrowRight, AlertTriangle, TrendingUp, ShieldCheck, RefreshCcw, Sparkles } from 'lucide-react';

export interface RichUseCaseData {
    slug: string;
    competitorComparison: {
        title: string;
        columns: [string, string];
        rows: {
            feature: string;
            oldWay: string;
            buildifyWay: string;
        }[];
    };
    strategicPlaybook: {
        title: string;
        subtitle: string;
        cards: {
            title: string;
            icon: any; // Lucide icon
            content: React.ReactNode;
        }[];
    };
    deepContext: {
        title: string;
        content: React.ReactNode;
    };
}

import { FormattedUseCase } from '../hooks/useUseCases';

export const manualRichUseCases: Record<string, RichUseCaseData> = {
    "accounting-firm": {
        slug: "accounting-firm",
        competitorComparison: {
            title: "Stop Selling Time. Start Selling Access.",
            columns: ["The Old Way (Hourly/Project)", "The Buildify Way (Retainer)"],
            rows: [
                {
                    feature: "Revenue Model",
                    oldWay: "Unpredictable. 60% of revenue comes in Q1 (Tax Season).",
                    buildifyWay: "Stable. Monthly subscriptions blend tax prep into a year-round retainer."
                },
                {
                    feature: "Client Communication",
                    oldWay: "Email chaos. 'Did you get my W2?' sent to 3 different staff members.",
                    buildifyWay: "Centralized Portal. Secure doc upload, chat, and status tracking in one app."
                },
                {
                    feature: "Value Perception",
                    oldWay: "Transactional. Clients dread the bill.",
                    buildifyWay: "Relationship. Clients pay for 'Peace of Mind' access, not just forms."
                },
                {
                    feature: "Tooling",
                    oldWay: "Excel + QuickBooks Online + Gmail + Calendly (Fragmented).",
                    buildifyWay: "One Branded App. Scheduling, Payments, Docs, and Chat integrated."
                }
            ]
        },
        strategicPlaybook: {
            title: "The Modern Firm Playbook",
            subtitle: "How to transition from a tax factory to a high-margin advisory firm.",
            cards: [
                {
                    title: "The 'Peace of Mind' Retainer",
                    icon: ShieldCheck,
                    content: (
                        <>
                            <p className="mb-4">
                                Most firms bill for the <strong>work</strong> (e.g., "Tax Return - $800").
                                This commoditizes you. If a competitor charges $750, you lose.
                            </p>
                            <p>
                                <strong>The Shift:</strong> Bill for <strong>access</strong>.
                                Package tax prep, quarterly check-ins, and priority email support into a
                                <strong>$250/mo subscription</strong>. Clients prefer smaller monthly
                                payments, and you get predictable cash flow.
                            </p>
                        </>
                    )
                },
                {
                    title: "Escaping 'Email Jail'",
                    icon: AlertTriangle,
                    content: (
                        <>
                            <p className="mb-4">
                                Answering "What's the status of my return?" via email costs your firm
                                thousands in unbillable hours.
                            </p>
                            <p>
                                <strong>The Fix:</strong> Force all communication into your branded portal.
                                Push notifications ("Your return is ready for review") cut inbound calls by 70%.
                                Status bars visualize progress so clients stop asking.
                            </p>
                        </>
                    )
                },
                {
                    title: "The 'Advisory' Upsell",
                    icon: TrendingUp,
                    content: (
                        <>
                            <p className="mb-4">
                                Once you have a retainer relationship, upsells become natural.
                                You aren't "selling"; you're advising.
                            </p>
                            <p>
                                <strong>The Strategy:</strong> Use the app to prompt specific opportunities.
                                <em>"It looks like you're hiring. Shall we set up payroll?"</em>
                                Send a push notification with a "One-Click Approve" for a new service add-on.
                            </p>
                        </>
                    )
                }
            ]
        },
        deepContext: {
            title: "Why Traditional Firms are Dying",
            content: (
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        The "Tax Season" boom-and-bust cycle is a relic. Modern business owners expect
                        real-time financials, not a shoebox of receipts handed over in April.
                    </p>
                    <p>
                        Tools like <strong>QuickBooks Live</strong> and AI-driven bookkeeping are driving
                        compliance prices to zero. If your only value is "filling out forms correctly,"
                        you are in a race to the bottom.
                    </p>
                    <p>
                        <strong>Buildify</strong> gives you the digital infrastructure to offer a
                        premium, high-touch experience that software alone can't replicate.
                        It wraps your expertise in a modern interface that justifies higher fees.
                    </p>
                </div>
            )
        }
    },
    "hvac-company": {
        slug: "hvac-company",
        competitorComparison: {
            title: "Stop Chasing Emergencies. Start Building Contracts.",
            columns: ["The Old Way (Break-Fix)", "The Buildify Way (Maintenance)"],
            rows: [
                {
                    feature: "Revenue Source",
                    oldWay: "Unpredictable. Dependent on extreme weather and breakdowns.",
                    buildifyWay: "Predictable. Annual Maintenance Contracts cover overhead year-round."
                },
                {
                    feature: "Customer Loyalty",
                    oldWay: "None. They call the first number on Google when the AC breaks.",
                    buildifyWay: "Locked In. They have a membership capability on their phone."
                },
                {
                    feature: "Scheduling",
                    oldWay: "Feast or Famine. Overworked in July, dead in October.",
                    buildifyWay: "Optimized. Maintenance visits fill the shoulder seasons."
                },
                {
                    feature: "Marketing Cost",
                    oldWay: "High. Paying for clicks every time you need work.",
                    buildifyWay: "Zero. Push notifications to your existing base act as free ads."
                }
            ]
        },
        strategicPlaybook: {
            title: "The HVAC Growth Playbook",
            subtitle: "Turn one-time repairs into lifetime service agreements.",
            cards: [
                {
                    title: "The 'Comfort Club' Membership",
                    icon: ShieldCheck,
                    content: (
                        <>
                            <p className="mb-4">
                                Stop selling "tune-ups" for $99. Sell a <strong>Comfort Club</strong> membership for $19/mo.
                                This includes 2 visits/year and priority scheduling.
                            </p>
                            <p>
                                <strong>Why it wins:</strong> You get paid monthly. You visit the home twice a year
                                (perfect for spotting replacement needs). The customer feels "covered."
                            </p>
                        </>
                    )
                },
                {
                    title: "Shoulder Season Filling",
                    icon: TrendingUp,
                    content: (
                        <>
                            <p className="mb-4">
                                October and April kill cash flow. Use Buildify to automate "Tune-Up" reminders
                                specifically during these slow months.
                            </p>
                            <p>
                                <strong>The Tactic:</strong> Send a push notification: <em>"Early Bird Special: Beat the
                                    summer rush. Schedule your AC prep this week for 20% off."</em> Book 50 jobs instantly.
                            </p>
                        </>
                    )
                },
                {
                    title: "The Review Generator",
                    icon: Check,
                    content: (
                        <>
                            <p className="mb-4">
                                Techs forget to ask for reviews. Automate it.
                                Trigger a "How was your service?" prompt the moment the invoice is paid.
                            </p>
                            <p>
                                <strong>Result:</strong> 5-star reviews flood in automatically, boosting your
                                Google Local Services ranking without lifting a finger.
                            </p>
                        </>
                    )
                }
            ]
        },
        deepContext: {
            title: "Seasonality is the Enemy",
            content: (
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        Every HVAC owner knows the pain of "Feast or Famine." You can't find enough techs in July,
                        and you're laying them off in October.
                    </p>
                    <p>
                        The only way to break this cycle is with a robust <strong>Service Agreement</strong> base.
                        If 500 homes pay you $20/mo, that's $10k/mo coming in rain or shine. That covers your fixed costs.
                    </p>
                    <p>
                        <strong>Buildify</strong> automates the billing, renewing, and scheduling of these agreements,
                        turning a manual headache into a passive income machine.
                    </p>
                </div>
            )
        }
    },
    "restaurant": {
        slug: "restaurant",
        competitorComparison: {
            title: "Own Your Audience. Kill the Commission.",
            columns: ["The Old Way (3rd Party Apps)", "The Buildify Way (Direct Ordering)"],
            rows: [
                {
                    feature: "Cost Per Order",
                    oldWay: "Expensive. UberEats/DoorDash take 15-30%.",
                    buildifyWay: "Profitable. 0% commission on direct orders."
                },
                {
                    feature: "Customer Data",
                    oldWay: "Black Box. You don't own the email or phone number.",
                    buildifyWay: "Owned Asset. You build a list to market to forever."
                },
                {
                    feature: "Brand Loyalty",
                    oldWay: "Zero. They are loyal to the app, not your food.",
                    buildifyWay: "High. They have YOUR icon on their home screen."
                },
                {
                    feature: "Re-Marketing",
                    oldWay: "Impossible. You can't message them.",
                    buildifyWay: "Instant. Send a push notification for 'Taco Tuesday' in seconds."
                }
            ]
        },
        strategicPlaybook: {
            title: "The Direct-to-Consumer Restaurant",
            subtitle: "Reclaim your margins from the delivery giants.",
            cards: [
                {
                    title: "The 'First Order' Hook",
                    icon: ArrowRight,
                    content: (
                        <>
                            <p className="mb-4">
                                Use 3rd party apps for <strong>acquisition only</strong>.
                                Put a flyer in the bag: <em>"Get $5 off your next order if you download our app."</em>
                            </p>
                            <p>
                                <strong>The Math:</strong> Spending $5 to move a customer from a 30% commission channel
                                to a 0% channel pays for itself in 1.5 orders.
                            </p>
                        </>
                    )
                },
                {
                    title: "Filling Slow Nights",
                    icon: TrendingUp,
                    content: (
                        <>
                            <p className="mb-4">
                                Is Tuesday night dead? Don't just hope for walk-ins.
                                Broadcast a digital coupon: <em>"2-for-1 Appetizers tonight only!"</em>
                            </p>
                            <p>
                                <strong>Why it works:</strong> It creates urgency. Buildify lets you send this to
                                5,000 local phones instantly. You control the faucet.
                            </p>
                        </>
                    )
                },
                {
                    title: "QR Code Table Ordering",
                    icon: Check,
                    content: (
                        <>
                            <p className="mb-4">
                                Short staffed? Let guests order from the table.
                                It increases average ticket size by 15% (people order more drinks/sides visually).
                            </p>
                            <p>
                                <strong>Bonus:</strong> Every order captures their data for future marketing.
                                No more anonymous cash transaction.
                            </p>
                        </>
                    )
                }
            ]
        },
        deepContext: {
            title: "The Margin Squeeze is Real",
            content: (
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        Restaurants operate on thin margins (10-15%). Giving up 30% to a delivery app is mathematical suicide.
                        You are essentially working for the delivery platform.
                    </p>
                    <p>
                        Review sites like Yelp extort you for ads. Delivery apps tax your revenue.
                        The only defense is <strong>Direct-to-Consumer</strong>.
                    </p>
                    <p>
                        <strong>Buildify</strong> gives you the tech stack of a Dominos or Starbucks (Mobile Ordering, Loyalty, Push Promos)
                        at a fraction of the cost, putting you back in control of your profit.
                    </p>
                </div>
            )
        }
    },
    "dental-office": {
        slug: "dental-office",
        competitorComparison: {
            title: "Fill The Chair. Automate The Recall.",
            columns: ["The Old Way (Postcards/Phone)", "The Buildify Way (Automated SMS)"],
            rows: [
                {
                    feature: "Recall Method",
                    oldWay: "Snail Mail. Postcards that get thrown in the trash.",
                    buildifyWay: "Direct. SMS and Push Notifications that get read instantly."
                },
                {
                    feature: "No-Show Rate",
                    oldWay: "High (15%). People forget appointments.",
                    buildifyWay: "Low (<5%). Automated 24h and 1h reminders confirm attendance."
                },
                {
                    feature: "Cosmetic Case Acceptance",
                    oldWay: "Passive. Waiting for patient to ask.",
                    buildifyWay: "Proactive. Educational campaigns sent to likely candidates."
                },
                {
                    feature: "Review Volume",
                    oldWay: "Low. 'Please review us on Yelp' at the front desk.",
                    buildifyWay: "High. Automated text request sent 1 hour after appointment."
                }
            ]
        },
        strategicPlaybook: {
            title: "The High-Production Practice",
            subtitle: "Maximize the value of every patient file.",
            cards: [
                {
                    title: "Hygiene Reactivation",
                    icon: RefreshCcw, // Assuming you import RefreshCcw or similar
                    content: (
                        <>
                            <p className="mb-4">
                                You have thousands of dollars sitting in "Unscheduled Treatment."
                                Run a campaign: <em>"Use your benefits before they expire."</em>
                            </p>
                            <p>
                                <strong>The Impact:</strong> Filling just 2 hygiene openings a week adds $20k+
                                to your annual revenue. Automation does this while you sleep.
                            </p>
                        </>
                    )
                },
                {
                    title: "The Cosmetic Upsell",
                    icon: Sparkles, // Assuming Sparkles is imported
                    content: (
                        <>
                            <p className="mb-4">
                                Whitening and Invisalign are high-margin.
                                Segment your list (e.g., specific age groups) and send a subtle promo.
                            </p>
                            <p>
                                <strong>Soft Sell:</strong> <em>"Get a brighter smile for your wedding/graduation."</em>
                                Buildify handles the segmentation and delivery.
                            </p>
                        </>
                    )
                },
                {
                    title: "New Patient Onboarding",
                    icon: Check,
                    content: (
                        <>
                            <p className="mb-4">
                                The first impression matters. Automate the intake forms so patients
                                don't spend 20 mins in the waiting room with a clipboard.
                            </p>
                            <p>
                                <strong>Experience:</strong> They arrive, you take them back immediately.
                                That's a 5-star experience that generates referrals.
                            </p>
                        </>
                    )
                }
            ]
        },
        deepContext: {
            title: "Retention is the New Acquisition",
            content: (
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        Acquiring a new dental patient costs $200-$300 in marketing.
                        Losing them simply because you didn't remind them to book a cleaning is a tragedy.
                    </p>
                    <p>
                        Corporate DSO chains are winning because they have sophisticated recall systems.
                        Independent practices rely on "Sheila at the front desk" making calls.
                    </p>
                    <p>
                        <strong>Buildify</strong> gives the private practice enterprise-grade automation tools.
                        Keep your chairs full, your hygiene schedule packed, and your practice independent.
                    </p>
                </div>
            )
        }
    },
    "real-estate-agency": {
        slug: "real-estate-agency",
        competitorComparison: {
            title: "Stay Top of Mind for 7 Years.",
            columns: ["The Old Way (Transaction)", "The Buildify Way (Relationship)"],
            rows: [
                {
                    feature: "Post-Close Contact",
                    oldWay: "Radio Silence. Maybe a holiday card.",
                    buildifyWay: "Constant Value. Monthly market updates and home value reports."
                },
                {
                    feature: "Referral Rate",
                    oldWay: "Low. They forget your name after 2 years.",
                    buildifyWay: "High. You are the 'Home Concierge' in their pocket."
                },
                {
                    feature: "Vendor Network",
                    oldWay: "Messy. Handing out business cards for plumbers.",
                    buildifyWay: "Digital Rolodex. A curated list of trusted pros in the app."
                },
                {
                    feature: "Lead Gen",
                    oldWay: "Buying leads from Zillow.",
                    buildifyWay: "Organic. Past clients share your app with friends."
                }
            ]
        },
        strategicPlaybook: {
            title: "The Agent-for-Life Model",
            subtitle: "Bridge the 7-year gap between transactions.",
            cards: [
                {
                    title: "The 'Home Concierge' App",
                    icon: ShieldCheck,
                    content: (
                        <>
                            <p className="mb-4">
                                Don't just be a Realtor. Be the "House Manager."
                                Give clients an app where they can find your trusted plumber, roofer,
                                and painter.
                            </p>
                            <p>
                                <strong>The Win:</strong> They open your app every time something breaks.
                                Your face is right there. You stay top-of-mind.
                            </p>
                        </>
                    )
                },
                {
                    title: "Automated Anniversary Gifts",
                    icon: TrendingUp, // Could be Gift if available
                    content: (
                        <>
                            <p className="mb-4">
                                The "Houseversary" is powerful. Automate a message:
                                <em>"Happy 3 years in your home! Value has likely up X%."</em>
                            </p>
                            <p>
                                <strong>The Data:</strong> Use Buildify to track these dates.
                                It sparks a conversation about refinancing or upsizing.
                            </p>
                        </>
                    )
                },
                {
                    title: "Local Market Updates",
                    icon: TrendingUp,
                    content: (
                        <>
                            <p className="mb-4">
                                Don't send generic newsletters. Send hyper-local sold data.
                                <em>"Your neighbor just sold for $50k over asking."</em>
                            </p>
                            <p>
                                <strong>Actionable:</strong> This drives curiosity and prompts the
                                "What's my home worth?" conversation that leads to listings.
                            </p>
                        </>
                    )
                }
            ]
        },
        deepContext: {
            title: "The Zillow Threat",
            content: (
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        The portals (Zillow, Redfin) are trying to disintermediate you. They want to turn agents
                        into Uber drivers.
                    </p>
                    <p>
                        Your only defense is your <strong>Sphere of Influence (SOI)</strong>. But if your SOI
                        is just a spreadsheet, it's leaking value every day.
                    </p>
                    <p>
                        <strong>Buildify</strong> turns your sphere into an interactive community.
                        Be the digital mayor of your market. Provide value between transactions, and you
                        will own the listing when the time comes.
                    </p>
                </div>
            )
        }
    }
};

export const getRichUseCase = (slug: string, fallbackData: FormattedUseCase | null): RichUseCaseData | null => {
    // 1. Try manual override
    if (manualRichUseCases[slug]) {
        return manualRichUseCases[slug];
    }

    // 2. Fallback to CSV generation
    if (fallbackData) {
        // Clean up text for "Old Way" / "Buildify Way" to prevent massive text blobs in the table
        const cleanOldWay = fallbackData.problem.text.length > 80
            ? fallbackData.problem.text.substring(0, 80) + "..."
            : fallbackData.problem.text;

        const cleanNewWay = fallbackData.solution.text.length > 80
            ? fallbackData.solution.text.substring(0, 80) + "..."
            : fallbackData.solution.text;

        return {
            slug: slug,
            competitorComparison: {
                title: "Upgrade from Manual to Automated.",
                columns: ["The Old Way", "The Buildify Way"],
                rows: [
                    {
                        feature: "Core Problem",
                        oldWay: cleanOldWay,
                        buildifyWay: cleanNewWay
                    },
                    {
                        feature: "Growth Model",
                        oldWay: "Transactional / One-off interactions",
                        buildifyWay: "Recurring / Membership-based"
                    },
                    {
                        feature: "Customer Retention",
                        oldWay: "Manual follow-ups (or none)",
                        buildifyWay: "Automated loyalty loops"
                    }
                ]
            },
            strategicPlaybook: {
                title: `${fallbackData.name} Growth Strategy`,
                subtitle: "Three steps to dominate your local market.",
                cards: [
                    {
                        title: "Automate Retention",
                        icon: ShieldCheck,
                        content: <p>{fallbackData.benefits[0] || "Secure recurring revenue by automating customer follow-ups."}</p>
                    },
                    {
                        title: "Increase Frequency",
                        icon: TrendingUp,
                        content: <p>{fallbackData.benefits[1] || "Turn one-time visitors into loyal, monthly members."}</p>
                    },
                    {
                        title: "Own the Relationship",
                        icon: Check,
                        content: <p>{fallbackData.benefits[2] || "Stop relying on third-party platforms. Build your own database."}</p>
                    }
                ]
            },
            deepContext: {
                title: "Why this matters now",
                content: (
                    <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                        <p>{fallbackData.solution.valueProp}</p>
                        <p>
                            The {fallbackData.name} industry is shifting. Customers expect a seamless, digital experience.
                            Those who adapt will capture the market; those who stick to manual methods will be left behind.
                        </p>
                        <p>
                            <strong>Buildify</strong> provides the infrastructure to modernize your {fallbackData.name} business overnight.
                        </p>
                    </div>
                )
            }
        };
    }

    return null;
}
