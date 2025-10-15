import React, { useState } from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeButton, setActiveButton] = useState("next");

  const testimonials = [
    {
      id: 1,
      name: "Yosef Ben-David",
      role: "Business Owner | Legacy Customer",
      rating: 4,
      text: "InsurUp's digital-first service saves us valuable time and lets us focus on growing our business with complete peace of mind. When we moved from a traditional way of handling finances to a modern approach, we needed a partner who could adapt with us. InsurUp was the perfect fit.",
      image: "/images/Contractor Plan.png"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Family Manager | Premium Customer",
      rating: 5,
      text: "The team at InsurUp made our insurance journey seamless. Their personalized approach and transparent communication gave us confidence in our coverage decisions. We couldn't be happier with the service.",
      image: "/images/Equipment Cover.png"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Entrepreneur | Business Customer",
      rating: 5,
      text: "As a business owner, I need insurance that grows with my company. InsurUp's flexible policies and expert guidance have been invaluable. They truly understand the needs of modern businesses.",
      image: "/images/man4.png"
    }
  ];

  const currentTestimonialData = testimonials[currentTestimonial];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setActiveButton("next");
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setActiveButton("prev");
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.kicker}>TESTIMONIALS</div>
          <h2 className={styles.title}>
            Hear from Our Trusted Clients
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.clientImage}>
              <img 
                src={currentTestimonialData.image} 
                alt={currentTestimonialData.name}
              />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>
                {renderStars(currentTestimonialData.rating)}
              </div>
              
              <div className={styles.testimonialText}>
                "{currentTestimonialData.text}"
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.navigation}>
                  <button 
                    className={`${styles.navButton} ${activeButton === "prev" ? styles.navButtonActive : ""}`}
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button 
                    className={`${styles.navButton} ${activeButton === "next" ? styles.navButtonActive : ""}`}
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>

                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{currentTestimonialData.name}</div>
                  <div className={styles.authorRole}>{currentTestimonialData.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.quoteMarks} aria-hidden="true"></div>
        <div className={styles.quoteMarkRight} aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Testimonials;
