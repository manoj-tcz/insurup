import React, { useState } from "react";
import styles from "./policies.module.css";

export default function Policies() {
    const [activePolicy, setActivePolicy] = useState("");

    const policies = [
        {
            id: 1,
            title: "Home Insurance",
            description: "Comprehensive protection for your home and belongings against damage, theft, and liability. Our home insurance covers your property, personal possessions, and provides liability protection for accidents on your property.",
            savings: "20% Savings",
            isActive: false
        },
        {
            id: 2,
            title: "Business Insurance",
            description: "Business insurance is designed to safeguard your company's people, property, and operations. Here are some of the most common types of coverage tailored for businesses.",
            savings: "25% Savings",
            isActive: true
        },
        {
            id: 3,
            title: "Travel Insurance",
            description: "Protect your trips with comprehensive travel insurance covering medical emergencies, trip cancellations, lost luggage, and travel delays. Enjoy peace of mind wherever your adventures take you.",
            savings: "15% Savings",
            isActive: false
        },
        {
            id: 4,
            title: "Car Insurance",
            description: "Complete auto coverage for your vehicle including collision, comprehensive, liability, and personal injury protection. Get the best rates with our competitive car insurance plans.",
            savings: "30% Savings",
            isActive: false
        }
    ];

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftSection}>
                    <div className={styles.leftText}>
                        <p>Choose from a range of insurance plans designed to protect your home, health, travel, and car — all with clear terms and complete peace of mind.</p>
                    </div>
                    <div className={styles.leftImage}>
                        <img src="/images/our policy.png" alt="Business meeting" />
                    </div>
                </div>

                <div className={styles.rightSection}>
                    <div className={styles.rightHeader}>
                        <div className={styles.sectionLabel}>OUR POLICIES</div>
                        <h2 className={styles.sectionTitle}>Solutions Tailored <br />for You</h2>
                    </div>

                    <div className={styles.policiesGrid}>
                        {policies.map((policy) => {
                            const isActive = activePolicy === policy.title;
                            return (
                                <div 
                                    key={policy.id} 
                                    className={`${styles.policyCard} ${isActive ? styles.active : ''}`}
                                    onClick={() => setActivePolicy(isActive ? "" : policy.title)}
                                >
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>{policy.title}</h3>
                                        {isActive && (
                                            <div className={styles.savings}>{policy.savings}</div>
                                        )}
                                    </div>
                                    
                                    {isActive && (
                                        <>
                                            <p className={styles.cardDescription}>{policy.description}</p>
                                            <button className={styles.learnMoreBtn}>
                                                <span className={styles.btnIcon}>→</span>
                                                <span>Learn More</span>
                                            </button>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
