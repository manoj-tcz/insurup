import React from "react";
import styles from "./autoCover.module.css";

export default function AutoCover() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.leftVisual}>
                   
                    <img className={styles.carImage1} src="/images/Rectangle 34625286.png" alt="Car" />
                    <img className={styles.carImage2} src="/images/Rectangle 34625287.png" alt="Car" />
                    <img className={styles.carImage3} src="/images/Car.png" alt="Car" />
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.topRow}>
                        <img className={styles.brand} src="/images/icons/image 269786.svg" alt="InsurUp" />
                    </div>
                    <div className={styles.subtitle}>Insure your Vehicle with the help of</div>
                    <h2 className={styles.title}>COMPLETE AUTO COVER</h2>

                    <div className={styles.ctaRow}>
                        <button className={styles.primaryCta} Property1="Static">
                            <span className={styles.ctaIcon}>→</span>
                            <span>Explore Now</span>
                        </button>
                    </div>

                    <p className={styles.description}>
                        Get all-round protection for your car with <strong>Complete Auto Cover</strong> — from
                        accidents to theft, ensuring reliable claims and total peace of mind.
                    </p>
                </div>
            </div>
        </section>
    );
}


