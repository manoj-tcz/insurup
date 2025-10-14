import React from "react";
import styles from "./announcementBar.module.css";

const announcements = [
  " Announcements: New Car Insurance Add-Ons Launched! Get Zero Depreciation & Roadside Cover today.",
  "Exclusive Offer on Home Insurance! Save big while protecting your property.",
  "Travel Safe with InsurUp Insurance."
];

export default function AnnouncementBar() {
  return (
    <div className={styles.announcementWrapper}>
      <div className={styles.announcementScroll}>
        {announcements.map((text, index) => (
          <span key={index} className={styles.announcementText}>
            {text} &nbsp; &bull; &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
