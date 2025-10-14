import React, { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [isPoliciesOpen, setPoliciesOpen] = useState(false);

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerInner}>

                {/* Chatbot Button */}
                <div className={styles.leftGroup}>
                    <button className={`${styles.ctaButton} ${styles.chatbotButton}`}>
                        <img src="/images/Chatbot.png" alt="Chatbot" />
                    </button>

                    <button className={styles.ctaButton}>Schedule Service</button>
                </div>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <div
                        className={styles.navItemWrapper} // wrapper for Policies + dropdown
                        onMouseEnter={() => setPoliciesOpen(true)}
                        onMouseLeave={() => setPoliciesOpen(false)}
                    >
                        <div
                            className={styles.navItem}
                            onClick={() => setPoliciesOpen(!isPoliciesOpen)} // toggle for mobile
                        >
                            <span className={styles.navText}>Policies</span>
                            <span className={`${styles.arrow} ${isPoliciesOpen ? styles.open : ""}`}>
                                <img src="/images/arrow.png" alt="arrow" />
                            </span>
                        </div>

                        {isPoliciesOpen && (
                            <div className={styles.dropdown}>
                                <a href="#">Car Insurance</a>
                                <a href="#">Home Insurance</a>
                                <a href="#">Travel Insurance</a>
                            </div>
                        )}
                    </div>

                    <a className={styles.navItem} href="#">About Us</a>
                    <a className={styles.navItem} href="#">Contact Us</a>
                    <a className={styles.navItem} href="#">Blogs</a>
                </nav>


                {/* Logo */}
                <div className={styles.logo}>
                    <img src="/images/icons/image 269786.svg" alt="InsurUp Logo" />
                </div>
            </div>
        </header>
    );
}
