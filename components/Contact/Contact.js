import React, { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [selectedCountry, setSelectedCountry] = useState("+972");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const countries = [
        { code: "+972", name: "Israel", flag: "🇮🇱" },
        { code: "+1", name: "United States", flag: "🇺🇸" },
        { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
        { code: "+49", name: "Germany", flag: "🇩🇪" },
        { code: "+33", name: "France", flag: "🇫🇷" },
        { code: "+39", name: "Italy", flag: "🇮🇹" },
        { code: "+34", name: "Spain", flag: "🇪🇸" },
        { code: "+31", name: "Netherlands", flag: "🇳🇱" },
        { code: "+41", name: "Switzerland", flag: "🇨🇭" },
        { code: "+43", name: "Austria", flag: "🇦🇹" },
        { code: "+46", name: "Sweden", flag: "🇸🇪" },
        { code: "+47", name: "Norway", flag: "🇳🇴" },
        { code: "+45", name: "Denmark", flag: "🇩🇰" },
        { code: "+358", name: "Finland", flag: "🇫🇮" },
        { code: "+32", name: "Belgium", flag: "🇧🇪" },
        { code: "+351", name: "Portugal", flag: "🇵🇹" },
        { code: "+30", name: "Greece", flag: "🇬🇷" },
        { code: "+48", name: "Poland", flag: "🇵🇱" },
        { code: "+420", name: "Czech Republic", flag: "🇨🇿" },
        { code: "+36", name: "Hungary", flag: "🇭🇺" },
        { code: "+40", name: "Romania", flag: "🇷🇴" },
        { code: "+359", name: "Bulgaria", flag: "🇧🇬" },
        { code: "+385", name: "Croatia", flag: "🇭🇷" },
        { code: "+386", name: "Slovenia", flag: "🇸🇮" },
        { code: "+421", name: "Slovakia", flag: "🇸🇰" },
        { code: "+370", name: "Lithuania", flag: "🇱🇹" },
        { code: "+371", name: "Latvia", flag: "🇱🇻" },
        { code: "+372", name: "Estonia", flag: "🇪🇪" },
        { code: "+353", name: "Ireland", flag: "🇮🇪" },
        { code: "+352", name: "Luxembourg", flag: "🇱🇺" },
        { code: "+356", name: "Malta", flag: "🇲🇹" },
        { code: "+357", name: "Cyprus", flag: "🇨🇾" },
        { code: "+90", name: "Turkey", flag: "🇹🇷" },
        { code: "+7", name: "Russia", flag: "🇷🇺" },
        { code: "+380", name: "Ukraine", flag: "🇺🇦" },
        { code: "+375", name: "Belarus", flag: "🇧🇾" },
        { code: "+81", name: "Japan", flag: "🇯🇵" },
        { code: "+82", name: "South Korea", flag: "🇰🇷" },
        { code: "+86", name: "China", flag: "🇨🇳" },
        { code: "+91", name: "India", flag: "🇮🇳" },
        { code: "+61", name: "Australia", flag: "🇦🇺" },
        { code: "+64", name: "New Zealand", flag: "🇳🇿" },
        { code: "+55", name: "Brazil", flag: "🇧🇷" },
        { code: "+54", name: "Argentina", flag: "🇦🇷" },
        { code: "+56", name: "Chile", flag: "🇨🇱" },
        { code: "+57", name: "Colombia", flag: "🇨🇴" },
        { code: "+52", name: "Mexico", flag: "🇲🇽" },
        { code: "+1", name: "Canada", flag: "🇨🇦" },
        { code: "+27", name: "South Africa", flag: "🇿🇦" },
        { code: "+20", name: "Egypt", flag: "🇪🇬" },
        { code: "+971", name: "UAE", flag: "🇦🇪" },
        { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
        { code: "+965", name: "Kuwait", flag: "🇰🇼" },
        { code: "+974", name: "Qatar", flag: "🇶🇦" },
        { code: "+973", name: "Bahrain", flag: "🇧🇭" },
        { code: "+968", name: "Oman", flag: "🇴🇲" },
        { code: "+962", name: "Jordan", flag: "🇯🇴" },
        { code: "+961", name: "Lebanon", flag: "🇱🇧" },
        { code: "+963", name: "Syria", flag: "🇸🇾" },
        { code: "+964", name: "Iraq", flag: "🇮🇶" },
        { code: "+98", name: "Iran", flag: "🇮🇷" },
        { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
        { code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
        { code: "+996", name: "Kyrgyzstan", flag: "🇰🇬" },
        { code: "+992", name: "Tajikistan", flag: "🇹🇯" },
        { code: "+993", name: "Turkmenistan", flag: "🇹🇲" },
        { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },
        { code: "+374", name: "Armenia", flag: "🇦🇲" },
        { code: "+995", name: "Georgia", flag: "🇬🇪" }
    ];

    const selectedCountryData = countries.find(country => country.code === selectedCountry);

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
                                    <div className={styles.countrySelector} ref={dropdownRef}>
                                        <button 
                                            type="button"
                                            className={styles.countryButton}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            <span className={styles.code}>{selectedCountry}</span>
                                            <span className={styles.arrow}>▼</span>
                                        </button>
                                        {isDropdownOpen && (
                                            <div className={styles.dropdown}>
                                                {countries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        className={styles.dropdownItem}
                                                        onClick={() => {
                                                            setSelectedCountry(country.code);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        <span className={styles.flag}>{country.flag}</span>
                                                        <span className={styles.code}>{country.code}</span>
                                                        <span className={styles.name}>{country.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
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


