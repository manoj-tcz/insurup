import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Left Section - Links */}
                <div className={styles.leftSection}>
                    <div className={styles.linksGrid}>
                        {/* Quick Links */}
                        <div className={styles.column}>
                            <h3 className={styles.sectionTitle}>Quick Links</h3>
                            <ul className={styles.linksList}>
                                <li><a href="#" className={styles.link}>Terms of Service</a></li>
                                <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                                <li><a href="#" className={styles.link}>About Us</a></li>
                            </ul>
                        </div>

                        {/* Customer Support */}
                        <div className={styles.column}>
                            <h3 className={styles.sectionTitle}>Customer Support</h3>
                            <ul className={styles.linksList}>
                                <li><a href="#" className={styles.link}>Claims</a></li>
                                <li><a href="#" className={styles.link}>Accessibility</a></li>
                            </ul>
                        </div>

                        {/* Our Policies */}
                        <div className={styles.column}>
                            <h3 className={styles.sectionTitle}>Our Policies</h3>
                            <ul className={styles.linksList}>
                                <li><a href="#" className={styles.link}>Home Policy</a></li>
                                <li><a href="#" className={styles.link}>Travel Policy</a></li>
                                <li><a href="#" className={styles.link}>Business Policy</a></li>
                                <li><a href="#" className={styles.link}>Auto Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section - Branding and CTA */}
                <div className={styles.rightSection}>
                    <div className={styles.branding}>
                        <div className={styles.logo}>
                            <img src="/images/icons/logoFooter.svg" alt="InsurUp Logo" className={styles.logoIcon} />

                        </div>
                        <p className={styles.description}>
                            InsurUp simplifies insurance with trusted plans for health, life, motor, travel, and property.
                            We are committed to be the best for you and your family.
                        </p>
                    </div>



                    <div className={styles.ctaButtons}>
                        <button className={styles.getQuoteBtn}>
                            <img src="/images/buttonColorArrow.png" alt="Arrow" className={styles.btnArrow} />
                            Get a Quote
                        </button>

                        <div className={styles.callSection}>
                            <p className={styles.callText}>Let's Insure together</p>

                            <div className={styles.callButton}>
                                <div className={styles.socialMedia}>
                                    <img src="/images/instagram.png" alt="instagram" />
                                    <div className={styles.socialSeparator}></div>
                                    <img src="/images/facebook.png" alt="facebook" />
                                </div>
                                <span className={styles.callLabel}>Call InsurUp</span>
                                <button className={styles.callBtn}>
                                    <img src="/images/Frame 2121457554.png" alt="Arrow" className={styles.btnArrow} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>




            </div>


            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className={styles.bottomContainer}>
                    <div className={styles.copyright}>
                        <p>© 2025 InsurUp. All rights reserved. Insurance products and services are subject to terms and conditions.</p>
                    </div>

                    <div className={styles.location}>
                        <p>InsurUp is a service based Insurance company based in</p>
                        <img src="/images/israel.png" alt="israel Flag" />
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
