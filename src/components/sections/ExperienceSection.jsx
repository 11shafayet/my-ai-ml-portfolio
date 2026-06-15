import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../constants/animations';
import styles from '../../App.module.css';

function ExperienceSection() {
  return (
    <section className={styles.section} id="experiences">
      <motion.div className={styles.sectionHeader} {...fadeUp(0)}>
        <span className={styles.sectionLabel}>Experience</span>
        <h2>Engineering experience shaped by products and AI systems.</h2>
      </motion.div>

      <motion.div
        className={styles.experienceTimeline}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-80px' }}
      >
        {experiences.map((experience, index) => (
          <motion.article
            className={`${styles.experienceCard} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
            key={experience.role}
            {...fadeUp(index * 0.08)}
          >
            <div className={styles.experienceMarker}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div>
              <p className={styles.experiencePeriod}>{experience.period}</p>
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
              <ul className={styles.experienceList}>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default ExperienceSection;
