"use client";

import type React from "react";
import styles from "@/styles/Download.module.scss";

const Download: React.FC = () => {
  return (
    <div className={styles.downloadContainer} id="downloads">
      <div className={styles.downloadContent}>
        <h1>Get IrenicBot on Your Device</h1>
        <p>
          Your AI assistant is just a tap away. Download IrenicBot today and
          experience the future of AI-powered conversations and image insights.
        </p>
        <h1>Available on All Platforms</h1>
        <p>
          Access IrenicBot from anywhere, at any time. Whether you&apos;re an iOS or
          Android user, our app is optimized to bring you instant answers and
          seamless interactions on the go.
        </p>
        <div className={styles.downloadButtonContainer}>
          <p>Get the App now</p>
          <div className={styles.downloadButtons}>
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.irenictech.alkitaab&pcampaignid=web_share",
                  "_blank"
                )
              }
              className={styles.android}
              aria-label="Download on Google Play"
            ></button>
            <button
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/al-kitaab-quran-and-peace/id6480166878",
                  "_blank"
                )
              }
              className={styles.ios}
              aria-label="Download on App Store"
            ></button>
          </div>
        </div>
      </div>
      <div className={styles.downloadImage}></div>
    </div>
  );
};

export default Download;