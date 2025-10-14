import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroInner}>
                <div className={styles.leftCol}>
                    <div className={styles.mainImage}>
                        <img src="/images/insuranceFamily.png" alt="Happy insured family" />
                    </div>

                    <div className={styles.bottomCards}>
                        <div className={styles.appCard}>
                            <div className={styles.phoneImage}>
                                <img src="/images/Phone.png" alt="Phone preview" />
                            </div>
                            <div className={styles.appRight}>
                                <div className={styles.appCardHeader}>Download App</div>
                                <div className={styles.appStores}>
                                    <div className={styles.storeIcon}>
                                        <img src="/images/playStore.png" alt="Google Play" />
                                    </div>
                                    <div className={styles.storeIcon}>
                                        <img src="/images/appleLogo.png" alt="App Store" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.reviewsCard}>
                            <div className={styles.reviewUsers}>
                                <div className={styles.avatar}>
                                    <img src="/images/man5.png" alt="Client 1" />
                                </div>
                                <div className={styles.avatar}>
                                    <img src="/images/man22.png" alt="Client 2" />
                                </div>
                                <div className={styles.avatar}>
                                    <img src="/images/man24.png" alt="Client 3" />
                                </div>
                                <div className={styles.avatar}>
                                    <img src="/images/man22.png" alt="Client 2" />
                                </div>
                                <div className={styles.avatar}>
                                    <img src="/images/man24.png" alt="Client 3" />
                                </div>
                            </div>
                            <div className={styles.reviewsText}>Authentic Reviews from clients who trust us</div>
                            <div className={styles.kpi}>200K+</div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.brandLabel}>INSURUP</div>
                    <h1 className={styles.title}>Insurance Made<br />Secure and Reliable</h1>
                    <p className={styles.subtitle}>
                        Protecting your future with transparent policies, reliable support, and complete peace of mind.
                    </p>

                    <div className={styles.ctaRow}>
                        <button className={styles.primaryCta}>
                            <span>Enquire Now</span>
                            <span className={styles.ctaIcon}>→</span>
                        </button>
                    </div>

                    <div className={styles.kpiRow}>
                        <div className={styles.kpiItem}>
                            <div className={styles.kpiValue}>99%</div>
                            <div className={styles.kpiLabel}>Claim Success Rate</div>
                        </div>
                        <div className={styles.kpiDivider} />
                        <div className={styles.kpiItem}>
                            <div className={styles.kpiValue}>25+</div>
                            <div className={styles.kpiLabel}>Industry Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


