import { motion } from 'framer-motion';
import { fadeUp } from '../../constants/animations';
import styles from '../../App.module.css';

function AboutSection() {
  return (
    <section className={`${styles.section} ${styles.twoColumn}`} id="about">
      <motion.div {...fadeUp(0)}>
        <span className={styles.sectionLabel}>About</span>
        <h2>From full stack development to AI/ML engineering.</h2>
        <p>
          My path started with full stack development, where I learned how to ship useful products,
          design reliable APIs, and build clean user experiences. That foundation now supports my
          transition into AI/ML, where I focus on data-driven systems, model development, and deep
          learning applications.
        </p>
        <p>
          I am especially interested in machine learning, deep learning, computer vision, NLP, and
          generative AI. I enjoy turning research ideas and experiments into practical systems that
          people can understand, use, and trust.
        </p>
      </motion.div>
      <motion.div className={styles.portraitWrap} {...fadeUp(0.12)}>
        <img src="/assets/shafayet_3.jpeg" alt="MD Shafayetur Rahman" />
      </motion.div>
    </section>
  );
}

export default AboutSection;
