import React from "react";
import AnnouncementBar from "../../components/AnnouncementBar/announcementBar";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import AutoCover from "../../components/AutoCover/autoCover";
import Services from "../../components/Services/services";
import Policies from "../../components/Policies/policies";
import HowItWorks from "../../components/HowItWorks/howItWorks";
import styles from "./style.module.css";
import AboutUs from "@/components/AboutUs/aboutUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.homeWrapper}>
      <AnnouncementBar />
      <Header />
      <Hero />
      <AutoCover />
      <Services />
      <Policies />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
