import React, { useState } from "react";
import styles from "./howItWorks.module.css";

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState("Business");

    const tabs = ["Home", "Travel", "Vehicle", "Business"];

    const stepsByTab = {
        Home: [
            { id: 1, title: "Enter Your Information", description: "Tell us about your home location and property type." },
            { id: 2, title: "Add Property Details", description: "Sum insured, construction type, safety features, and more." },
            { id: 3, title: "Choose Your Coverage", description: "Pick building, contents, or combined cover with add‑ons." },
            { id: 4, title: "Complete & Relax", description: "Pay securely and download your policy instantly." }
        ],
        Travel: [
            { id: 1, title: "Trip Basics", description: "Select destination, dates, and traveler details." },
            { id: 2, title: "Customize Protection", description: "Medical, baggage, trip cancellation, and more." },
            { id: 3, title: "Compare & Choose", description: "Review plans tailored to your journey." },
            { id: 4, title: "Get Covered", description: "Instant policy issued to your email." }
        ],
        Vehicle: [
            { id: 1, title: "Vehicle Details", description: "Enter make, model, year, and registration info." },
            { id: 2, title: "Driver Information", description: "Add drivers and driving history if required." },
            { id: 3, title: "Pick Your Plan", description: "Third‑party, comprehensive, and optional add‑ons." },
            { id: 4, title: "Checkout", description: "Secure payment and instant digital policy." }
        ],
        Business: [
            { id: 1, title: "Enter Your Information", description: "Provide your basic details to get started with a personalized insurance quote." },
            { id: 2, title: "Business Details", description: "Share your industry, size, locations, and risk profile." },
            { id: 3, title: "Choose Your Coverage", description: "Select liability, property, equipment, and employee covers." },
            { id: 4, title: "Complete & Relax", description: "Make your payment securely and get your policy instantly—coverage begins right away." }
        ]
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftSection}>
                    <div className={styles.header}>
                        <div className={styles.sectionLabel}>EASY STEPS</div>
                        <h2 className={styles.sectionTitle}>
                            How <span className={styles.brandHighlight}>InsurUp</span> Works
                        </h2>
                    </div>

                    <p className={styles.description}>
                        We've made insurance simple, transparent, and hassle-free. Just follow these four easy steps to compare, choose, and secure the right plan for you and your loved ones.
                    </p>

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

            </div>
            <div className={styles.stepsImageContainer}>
                <div className={styles.stepsContainer}>
                        {stepsByTab[activeTab].map((step, index) => (
                            <div key={step.id} className={styles.step}>
                                <div className={`${styles.stepNumber} ${index === 0 ? styles.stepNumberActive : ''}`}>{step.id}</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                                {index < stepsByTab[activeTab].length - 1 && <div className={styles.stepConnector} />}
                        </div>
                    ))}

                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/Enterprise Plan.png" alt="Insurance consultation meeting" />
                </div>

            </div>


        </section>

    );
}
