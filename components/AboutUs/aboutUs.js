import React from "react";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
    const stats = [
        {
            number: "900k+",
            label: "Satisfied Clients",
            icon: "👥"
        },
        {
            number: "4.9/5",
            label: "Positive Reviews",
            icon: "⭐"
        }
    ];

    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftColumn}>
                    <div className={styles.leftStats}>
                        <div className={styles.statItem}>
                            <div className={`${styles.statNumber} ${styles.largeStatNumber}`}>
                                286<span className={styles.plusSymbol}>+</span>
                            </div>
                            <div className={styles.statLabel}>Trusted Partners</div>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img 
                            src="/images/insuranceFamily.png" 
                            alt="Family meeting with insurance agent" 
                            className={styles.familyImage}
                        />
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.content}>
                        <div className={styles.sectionLabel}>ABOUT US</div>
                        <h2 className={styles.sectionTitle}>
                            Trusted by Millions of Clients
                        </h2>
                        <p className={styles.description}>
                            Over the years, millions have trusted us to safeguard their health, life, and assets. 
                            Our promise is simple—affordable plans, honest guidance, and dependable support when you need it the most.
                        </p>

                        <div className={styles.profilePictures}>
                            <div className={styles.profilePic}> <img src="/images/man5.png" alt="Client 1" /></div>
                            <div className={styles.profilePic}><img src="/images/man22.png" alt="Client 2" /></div>
                            <div className={styles.profilePic}> <img src="/images/man24.png" alt="Client 3" /></div>
                            <div className={styles.profilePic}> <img src="/images/man5.png" alt="Client 4" /></div>
                        </div>

                        <div className={styles.statsContainer}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statItem}>
                                    <div className={styles.statNumber}>{stat.number}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
