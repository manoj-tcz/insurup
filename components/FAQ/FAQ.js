import React, { useState } from "react";
import styles from "./FAQ.module.css";

const CATEGORIES = ["Auto Insurance", "Travel Insurance", "Home insurance", "Business Insurance"];

const QUESTIONS = {
    "Auto Insurance": [
        { id: 1, q: "test types of insurance plans does InsurUp offer?", a: "InsurUp provides Health, Life, Motor, Travel, and Property insurance plans — each designed to fit different stages of life and protection needs." },
        { id: 2, q: "How can I file a claim with InsurUp?", a: "Go to Claims, upload required documents, and our team will guide you through the process." },
        { id: 3, q: "Can I manage my policies online through the portal or app?", a: "Yes, you can manage all your policies from the dashboard on web or mobile." },
        { id: 4, q: "What documents are required to buy an insurance policy?", a: "Basic identity, address documents and policy-specific documents if needed." },
        { id: 5, q: "Does InsurUp offer 24/7 customer support?", a: "Yes, our support team is available 24/7 via chat and email." },
        { id: 6, q: "Can I switch plans after purchase?", a: "You can switch plans during renewal or within the cooling‑off period where applicable." },
        { id: 7, q: "Do you offer no-claim bonus?", a: "Yes, safe drivers can earn discounts at renewal with our NCB program." },
        { id: 8, q: "Is roadside assistance included?", a: "Roadside assistance is available as an optional add‑on in most regions." },
        { id: 9, q: "How fast are claims settled?", a: "Simple claims are often settled within 72 hours after document verification." },
        { id: 10, q: "Are modifications covered?", a: "Factory-fitted accessories are covered; custom mods may require add‑on cover." }
    ],
    "Travel Insurance": [
        { id: 1, q: "What types of insurance plans does InsurUp offer?", a: "InsurUp provides Health, Life, Motor, Travel, and Property insurance plans — each designed to fit different stages of life and protection needs." },
        { id: 2, q: "How can I file a claim with InsurUp?", a: "Start a travel claim from your trip details and follow the guided steps." },
        { id: 3, q: "Can I manage my policies online through the portal or app?", a: "Yes, all your trips and policies are visible in your account." },
        { id: 4, q: "What documents are required to buy an insurance policy?", a: "Passport and trip details are typically required for travel insurance." },
        { id: 5, q: "Does InsurUp offer 24/7 customer support?", a: "Yes, 24/7 assistance is available worldwide." },
        { id: 6, q: "Are pre‑existing conditions covered?", a: "Coverage depends on plan; some offer optional riders for pre‑existing conditions." },
        { id: 7, q: "Does the policy cover lost baggage?", a: "Yes, baggage loss and delay benefits are included in most plans." },
        { id: 8, q: "Can I buy after starting my trip?", a: "Policies must be purchased before departure in most cases." },
        { id: 9, q: "Do you cover adventure sports?", a: "Certain plans include adventure sports with additional limits and exclusions." },
        { id: 10, q: "How do I extend my policy?", a: "You can extend your policy online if your trip gets extended unexpectedly." }
    ],
    "Home insurance": [
        { id: 1, q: "What types of insurance plans does InsurUp offer?", a: "InsurUp provides Health, Life, Motor, Travel, and Property insurance plans — each designed to fit different stages of life and protection needs." },
        { id: 2, q: "How can I file a claim with InsurUp?", a: "File a property claim with photos and a brief description of the event." },
        { id: 3, q: "Can I manage my policies online through the portal or app?", a: "Yes, policy management and renewals are online." },
        { id: 4, q: "What documents are required to buy an insurance policy?", a: "Property details and ID documents are required." },
        { id: 5, q: "Does InsurUp offer 24/7 customer support?", a: "Yes, round-the-clock support is available." },
        { id: 6, q: "Is accidental damage to contents covered?", a: "Comprehensive plans include accidental damage to contents with limits." },
        { id: 7, q: "Do you cover natural disasters?", a: "Yes, perils like fire, storm, flood and earthquake are covered as per policy terms." },
        { id: 8, q: "Can I insure valuables separately?", a: "High‑value items like jewelry can be scheduled for additional cover." },
        { id: 9, q: "Is tenant liability included?", a: "Optional tenant liability cover is available in select plans." },
        { id: 10, q: "What about temporary accommodation?", a: "Loss of use/additional living expense is included in many policies." }
    ],
    "Business Insurance": [
        { id: 1, q: "What types of insurance plans does InsurUp offer?", a: "InsurUp provides Health, Life, Motor, Travel, and Property insurance plans — each designed to fit different stages of life and protection needs." },
        { id: 2, q: "How can I file a claim with InsurUp?", a: "Submit an incident report from your business dashboard to begin the claim." },
        { id: 3, q: "Can I manage my policies online through the portal or app?", a: "Yes, admins can manage multiple locations and policies online." },
        { id: 4, q: "What documents are required to buy an insurance policy?", a: "Business registration and risk details are required." },
        { id: 5, q: "Does InsurUp offer 24/7 customer support?", a: "Yes, priority support is available for business customers." },
        { id: 6, q: "Do you offer cyber liability insurance?", a: "Yes, cyber liability and data breach covers are available as add‑ons." },
        { id: 7, q: "Is business interruption covered?", a: "Business interruption can be included to cover lost income due to covered events." },
        { id: 8, q: "Can contractors be added as insureds?", a: "You can add additional insureds and certificate holders from the dashboard." },
        { id: 9, q: "Are employee injuries covered?", a: "Workers' compensation or employer's liability is available where required." },
        { id: 10, q: "How are premiums calculated?", a: "Premiums depend on industry, payroll/revenue, locations, and prior losses." }
    ]
};

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[3]);
    const [openId, setOpenId] = useState(QUESTIONS[activeCategory][0].id);

    const items = QUESTIONS[activeCategory];

    return (
        <section className={styles.section}>
            <div className={styles.headerGroup}>
                <div className={styles.kicker}>FREQUENTLY ASKED QUESTIONS</div>
                <h2 className={styles.title}>Everything you need to know</h2>
                <div className={styles.tabs}>
                    {CATEGORIES.map((c) => (
                        <button
                            key={c}
                            className={`${styles.tab} ${activeCategory === c ? styles.active : ''}`}
                            onClick={() => {
                                setActiveCategory(c);
                                const first = QUESTIONS[c][0]?.id;
                                if (first) setOpenId(first);
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.grid}>
                <div className={styles.col}>
                    {items.slice(0, 5).map(({ id, q, a }, idx) => (
                        <div key={id} className={`${styles.card} ${openId === id ? styles.cardOpen : styles.cardClosed}`}>
                            <button className={styles.question} onClick={() => setOpenId(openId === id ? -1 : id)}>
                                <img
                                    className={styles.icon}
                                    src={openId === id ? "/images/arrow2.png" : "/images/arrow1.png"}
                                    alt={openId === id ? "Collapse" : "Expand"}
                                />
                                <span className={styles.q}>{q}</span>
                                <span className={styles.num}>{String(id).padStart(2, '0')}</span>
                            </button>
                            {openId === id && <div className={styles.answer}>{a}</div>}
                        </div>
                    ))}
                </div>
                <div className={styles.col}>
                    {items.slice(5, 10).map(({ id, q, a }) => (
                        <div key={id} className={`${styles.card} ${openId === id ? styles.cardOpen : styles.cardClosed}`}>
                            <button className={styles.question} onClick={() => setOpenId(openId === id ? -1 : id)}>
                                <img
                                    className={styles.icon}
                                    src={openId === id ? "/images/arrow2.png" : "/images/arrow1.png"}
                                    alt={openId === id ? "Collapse" : "Expand"}
                                />
                                <span className={styles.q}>{q}</span>
                                <span className={styles.num}>{String(id).padStart(2, '0')}</span>
                            </button>
                            {openId === id && <div className={styles.answer}>{a}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


