import styles from "@/styles/WhoCan.module.scss";

export default function WhoCanUse() {
  return (
    <section className={styles.container}>
      <div className={styles.divider}>
        <div className={styles.oval} />
        <div className={styles.oval} />
        <div className={styles.oval} />
        <div className={styles.oval} />
      </div>
      <h2 className={styles.title}>
        Who Can <span className={styles.highlight}>Use IrenicBot</span>?
      </h2>

      <p className={styles.description}>
        Maximize the power of IrenicBot with a few smart strategies that make
        your experience seamless and efficient. Here&apos;s how you can get the
        most out of this intelligent assistant:
      </p>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.userGroup}>
            <h3>Students and Researchers:</h3>
            <p>
              Whether you&apos;re conducting research, studying for exams, or
              seeking explanations for complex concepts, IrenicBot is a valuable
              tool for acquiring knowledge and assistance on various subjects.
            </p>
          </div>

          <div className={styles.userGroup}>
            <h3>Professionals and Business Owners:</h3>
            <p>
              Enhance your productivity with quick answers to industry-specific
              questions, data analysis, or even market research. IrenicBot can
              streamline your workflow, allowing you to focus on your core
              responsibilities.
            </p>
          </div>

          <div className={styles.userGroup}>
            <h3>Content Creators:</h3>
            <p>
              Writers, artists, and content developers can use IrenicBot for
              brainstorming ideas, gathering information, and analyzing visual
              content, making it a handy companion in the creative process.
            </p>
          </div>
        </div>

        <div className={styles.centerColumn}>
          <div className={styles.illustration}>
            <img
              src="/Whocan/WhoCan.png"
              alt="Person sitting with question marks"
              className={styles.mainImage}
            />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.userGroup}>
            <h3>Tech Enthusiasts:</h3>
            <p>
              If you&apos;re passionate about technology, IrenicBot is perfect
              for exploring the latest trends, tools, and advancements, keeping
              you informed and engaged in the tech landscape.
            </p>
          </div>

          <div className={styles.userGroup}>
            <h3>Language Learners:</h3>
            <p>
              Those looking to learn or improve their language skills can engage
              with IrenicBot for conversational practice, vocabulary building,
              and grammar tips, making language acquisition interactive and fun.
            </p>
          </div>

          <div className={styles.userGroup}>
            <h3>Customer Service Representatives:</h3>
            <p>
              Use IrenicBot to assist in handling customer inquiries,
              troubleshooting issues, or providing product information,
              improving the overall customer service experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}