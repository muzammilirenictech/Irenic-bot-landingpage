/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.divider}>
              <div className={styles.oval} />
              <div className={styles.oval} />
              <div className={styles.oval} />
              <div className={styles.oval} />
      
            </div>
            <h2 className={styles.title}>
              About <span className={styles.highlight}>IrenicBot</span>
            </h2>
          </div>

          <div className={styles.description}>
            <p>
              At IrenicBot, We&apos; re Redefining How People Interact With AI.
              Our Platform Combines Advanced Natural Language Processing And
              Image Recognition, Allowing You To Ask Questions Via Text Or
              Images And Receive Instant, Accurate Responses. Whether
              You&apos;re Seeking Quick Answers, Analyzing A Photo, Or Engaging
              In A Meaningful Conversation, IrenicBot Is Your AI-Powered
              Companion, Available 24/7.
            </p>
            <p>
              Driven By Innovation And Simplicity, Our Team Is Committed To
              Delivering An Intuitive, Future- Focused Experience That Enhances
              The Way You Explore Knowledge And Interact With AI.
            </p>
          </div>

          <div className={styles.cta}>
            <button className={styles.button}>
              Discover The Future Of AI With IrenicBot
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="/AboutUS/AboutUs.png" alt="IrenicBot AI Assistant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
