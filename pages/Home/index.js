import React from "react";
import AnnouncementBar from "../../components/AnnouncementBar/announcementBar";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import AutoCover from "../../components/AutoCover/autoCover";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div className={styles.homeWrapper}>
      <AnnouncementBar />
      <Header />
      <Hero />
      <AutoCover />
    </div>
  );
}
