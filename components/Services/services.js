import React, { useState } from "react";
import styles from "./services.module.css";

export default function Services() {
    const [activeTab, setActiveTab] = useState("Business Insurance");

    const tabs = [
        "Auto Insurance",
        "Travel Insurance", 
        "Home insurance",
        "Business Insurance"
    ];

    const plansData = {
        "Auto Insurance": [
            {
                id: 1,
                title: "Comprehensive Auto",
                description: "Full coverage for your vehicle including collision, theft, and natural disasters.",
                image: "/images/Small Business Plan.png"
            },
            {
                id: 2,
                title: "Third Party Auto", 
                description: "Essential coverage for third-party liability and property damage protection.",
                 image: "/images/Enterprise Plan.png"
            },
            {
                id: 3,
                title: "Classic Car",
                description: "Specialized coverage for vintage and classic vehicles with agreed value protection.",
                image: "/images/Contractor Plan.png"
            },
            {
                id: 4,
                title: "Commercial Vehicle",
                description: "Business vehicle insurance for fleets, delivery trucks, and commercial use.",
                 image: "/images/Equipment Cover.png"
            }
        ],
        "Travel Insurance": [
            {
                id: 1,
                title: "Single Trip",
                description: "One-time travel coverage for your vacation or business trip protection.",
                 image: "/images/Equipment Cover.png"
            },
            {
                id: 2,
                title: "Annual Multi-Trip", 
                description: "Year-round coverage for frequent travelers with multiple trip protection.",
                image: "/images/Contractor Plan.png"
            },
            {
                id: 3,
                title: "Family Travel",
                description: "Comprehensive family coverage for group travel and vacation protection.",
                 image: "/images/Enterprise Plan.png"
            },
            {
                id: 4,
                title: "Business Travel",
                description: "Professional travel insurance for business trips and corporate protection.",
                image: "/images/Small Business Plan.png"
            }
        ],
        "Home insurance": [
            {
                id: 1,
                title: "Homeowners",
                description: "Complete protection for your home, contents, and personal liability coverage.",
                image: "/images/Small Business Plan.png"
            },
            {
                id: 2,
                title: "Renters", 
                description: "Personal property and liability coverage for apartment and rental protection.",
                 image: "/images/Enterprise Plan.png"
            },
            {
                id: 3,
                title: "Condo",
                description: "Specialized coverage for condominium owners with building and contents protection.",
               image: "/images/Contractor Plan.png"
            },
            {
                id: 4,
                title: "Landlord",
                description: "Investment property insurance for rental property owners and landlords.",
                 image: "/images/Equipment Cover.png"
            }
        ],
        "Business Insurance": [
            {
                id: 1,
                title: "Small Business Plan",
                description: "Tailored insurance for SMEs and startups to protect assets, employees, and operations.",
                image: "/images/Small Business Plan.png"
            },
            {
                id: 2,
                title: "Enterprise Plan", 
                description: "Comprehensive coverage for large organizations, including property, liability, and workforce safety.",
                image: "/images/Enterprise Plan.png"
            },
            {
                id: 3,
                title: "Contractor Plan",
                description: "Specialized coverage for contractors against third-party claims, accidents, and project-related risks.",
                image: "/images/Contractor Plan.png"
            },
            {
                id: 4,
                title: "Equipment Cover",
                description: "Protects machinery, equipment, and ongoing projects from damage, theft, or unexpected disruptions.",
                image: "/images/Equipment Cover.png"
            }
        ]
    };

    const plans = plansData[activeTab] || plansData["Business Insurance"];

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.topSection}>
                    <div className={styles.leftText}>
                        <p>Insurance doesn't have to be complicated.<br />
                        We make protection clear, simple, and stress-free.</p>
                    </div>
                    
                    <div className={styles.rightHeader}>
                        <div className={styles.sectionLabel}>OUR SERVICES</div>
                        <h2 className={styles.sectionTitle}>Our Services,<br />Made Simple</h2>
                    </div>
                </div>

                <div className={styles.tabsSection}>
                    <div className={styles.tabsContainer}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                

                <div className={styles.plansGrid}>
                    {plans.map((plan) => (
                        <div key={plan.id} className={styles.planCard}>
                            <div className={styles.cardImage}>
                                <img src={plan.image} alt={plan.title} />
                            </div>
                            <h3 className={styles.cardTitle}>{plan.title}</h3>
                            <p className={styles.cardDescription}>{plan.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
