import Image from "next/image";
import styles from "@/styles/Guide.module.scss";

export default function Guide() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.divider}>
          <div className={styles.oval} />
          <div className={styles.oval} />
          <div className={styles.oval} />
          <div className={styles.oval} />
        </div>

        <h1 className={styles.heading}>
          The Smart Way to{" "}
          <span className={styles.highlight}>Use IrenicBot</span>
        </h1>

        <p className={styles.description}>
          Maximize the power of IrenicBot with a few smart strategies that make
          your experience seamless and efficient. Here&apos;s how you can get
          the most out of this intelligent assistant:
        </p>

        <div className={styles.illustration}>
          <Image
            src="/Guide/Bulb.png"
            alt="Hand holding a lightbulb"
            width={400}
            height={400}
            className={styles.illustrationImage}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h2 className={styles.cardTitle}>Ask Clear, Direct Questions</h2>
            <p className={styles.cardText}>
              To get the best results, write simple and direct prompts. Whether
              you need help with research or a quick answer, IrenicBot will
              provide fast, accurate responses that are easy to understand.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h2 className={styles.cardTitle}>Dive Deeper into Topics</h2>
            <p className={styles.cardText}>
              IrenicBot isn&apos;t just for quick answers. Ask follow-up
              questions to explore topics in-depth and get more detailed
              responses.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardInner}>
            <h2 className={styles.cardTitle}>Leverage Image Recognition</h2>
            <p className={styles.cardText}>
              Don&apos;t just stop at text queries—upload images to let
              IrenicBot analyze them for you. It&apos;s perfect for identifying
              objects, gaining insights, or exploring new visual information
              quickly and accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
