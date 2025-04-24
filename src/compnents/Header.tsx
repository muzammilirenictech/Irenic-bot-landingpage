'use client';
import Image from "next/image";
import styles from "@/styles/Header.module.scss";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.textContent}>
          <h1 className={styles.mainHeading}>
            Unlock Limitless Knowledge With IrenicBot:
          </h1>
          <div className={styles.speechBubble}>
            <p className={styles.subHeading}>
              Ask anything, anytime, anywhere – with words or images.
            </p>
          </div>
          {!isSmallScreen && (
            <div className={styles.ctaButtons}>
              <button className={styles.btnSecondary}>
                Explore More
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button className={styles.btnPrimary}>
                Get The App Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneWrapper}>
            <Image
              src="/mobile/header-mobile.png"
              alt="IrenicBot Mobile App"
              width={320}
              height={650}
              className={styles.phoneImage}
            />
            <div
              className={`${styles.notificationBubbleOne} ${styles.notificationTop}`}
            >
              <p>Already added task to reach your goal.</p>
              <svg
                className={styles.heartIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div
              className={`${styles.innerNotificationBubbleTwo} ${styles.notificationMiddle}`}
            >
              <div className={styles.notificationIcon}>
                <Image
                  src="/Icons/mobile-icon.png"
                  alt=" Mobile icon"
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.notificationBubbleTwo}>
                <p>Already added task to reach your goal.</p>
              </div>
            </div>
          </div>
          
          
</div>
          {isSmallScreen && (
            <div className={styles.ctaButtons}>
              <button className={styles.btnSecondary}>
                Explore More
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button className={styles.btnPrimary}>
                Get The App Now
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          )}
       
      </div>
    </div>
  );
}

export default Header;
