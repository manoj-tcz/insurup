import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Let’s Connect</h2>
                    <p className={styles.subtitle}>
                        Fill out the form below and we’ll discuss about policies and
                        mend it accordingly to your needs.
                    </p>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Last Name</label>
                                <input placeholder="Enter your Last Name" />
                            </div>
                            <div className={styles.field}>
                                <label>First Name</label>
                                <input placeholder="Enter your First Name" />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your Email" />
                            </div>
                            <div className={styles.field}>
                                <label>Phone Number</label>
                                <div className={styles.phoneWrap}>
                                    <input className={styles.phoneInput} placeholder="Enter phone" />
                                    <div className={styles.countryCode}>
                                    <span className={styles.code}>+972</span>
                                        <img src="/images/israel.png" alt="Israel" className={styles.flag} />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Message</label>
                            <div className={styles.textareaContainer}>
                                <textarea placeholder="Your Message*" rows={5} />
                                <div className={styles.counter}>300/300</div>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.primaryBtn} type="submit">
                                
                                <div className={styles.arrowIcon}>
                                    <img src="/images/buttonArrow.png" alt="Arrow" />
                                </div>
                                Send Message
                            </button>
                            <p className={styles.consent}>
                                I understand and consent to my personal data being processed in accordance with
                                InsurUp <a href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </form>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageCard}>
                        <img src="/images/contact.png" alt="Consultation" />
                    </div>
                </div>
            </div>
        </section>
    );
}


