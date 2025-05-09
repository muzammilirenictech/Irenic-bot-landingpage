import styles from "@/styles/Benefits.module.scss"

export default function Benefits() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          How IrenicBot <span className={styles.highlight}>Benefits You?</span>
        </h1>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card1}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>01</span>
                <h2 className={styles.cardTitle}>Supports Decision-Making</h2>
              </div>
              <p className={styles.cardText}>
                Need help to choose between two products or deciding on a course of action? IrenicBot can analyze data,
                provide comparisons, and offer recommendations, helping you make smarter, well-informed decisions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.cardleft2}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>02</span>
                <h2 className={styles.cardTitle}>Secure And Private Conversations</h2>
              </div>
              <p className={styles.cardText}>
                With IrenicBot, your data and conversations are kept safe. We prioritize security, ensuring that your
                queries and images remain confidential.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card3}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>03</span>
                <h2 className={styles.cardTitle}>Save Favorite Responses</h2>
              </div>
              <p className={styles.cardText}>
                If you receive an answer that you find particularly helpful, take a note or save it for future
                reference. This way, you can quickly access important information without having to ask the same
                question again.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.cardleft4}>
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.cardId}>04</span>
                <h2 className={styles.cardTitle}>Multitasking Made Easy</h2>
              </div>
              <p className={styles.cardText}>
                IrenicBot can handle multiple queries at once, whether you're looking up facts, analyzing images, or
                having a conversation. This allows you to juggle different tasks without losing focus, making it the
                perfect companion for busy days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
