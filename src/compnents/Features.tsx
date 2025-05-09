import styles from "@/styles/Features.module.scss"

const Features = () => {
  const features = [
    {
      id: "01",
      title: "AI-Powered Conversations:",
      description:
        "Experience seamless, intelligent conversations powered by cutting-edge AI. Whether you have a simple question or need complex information, IrenicBot delivers answers with speed and precision.",
    },
    {
      id: "02",
      title: "Image Understanding",
      description:
        "Upload images to get more than just words. IrenicBot's advanced image recognition technology lets you ask questions about what you see—whether it's identifying objects, analyzing data.",
    },
    {
      id: "03",
      title: "24/7 Availability",
      description:
        "IrenicBot never sleeps. Whether it's late at night or early morning, our AI is always ready to assist with your queries, ensuring knowledge is just a message away.",
    },
    {
      id: "04",
      title: "Instant, Reliable Answers",
      description:
        "Get responses in real-time, anytime. IrenicBot is designed to provide accurate, up-to-date answers across a wide range of topics, available whenever you need it.",
    },
  ]

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featureCards}>
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`${(index === 0 || index== 2) ? styles.card : ''} ${(index === 1 || index== 3) ? styles.cardleft : ''} `}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardId} ${(index === 1 || index === 1) ? styles.highlightedId : ""}`}>{feature.id}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.whyChoose}>
        <div className={styles.divider}>
              <div className={styles.oval} />
              <div className={styles.oval} />
              <div className={styles.oval} />
              <div className={styles.oval} />
            </div>
          <h2 className={styles.title}>
            Why Choose <span className={styles.highlight}>IrenicBot</span>?
          </h2>
          <p className={styles.description}>
            IrenicBot Isn&apos;t Just Another AI Chat Application. It&apos;s Your Intelligent Assistant, Designed To
            Make Conversations More Intuitive And Answers More Accessible. Whether You&apos;re Asking A Question Or
            Analyzing An Image, IrenicBot Combines The Latest In AI Technology With A User-Friendly Interface To Bring
            You Real-Time, Accurate Results That Help You Navigate Your World With Ease. Discover Why So Many Users
            Trust IrenicBot To Simplify Their Search For Knowledge And Enhance Their Daily Lives.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features