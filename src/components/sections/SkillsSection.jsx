import { motion } from 'framer-motion';
import { Blocks, Code2, Orbit, Rocket, WandSparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../constants/animations';
import { skills } from '../../data/portfolio';
import styles from '../../App.module.css';

const skillIcons = [Orbit, WandSparkles, Rocket, Blocks];

function SkillsSection() {
  return (
    <section className={styles.section} id="skills">
      <motion.div className={styles.sectionHeader} {...fadeUp(0)}>
        <span className={styles.sectionLabel}>Skills</span>
        <h2>Tools and practices for building ML products.</h2>
      </motion.div>
      <motion.div
        className={styles.cardGrid}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-80px' }}
      >
        {skills.map((group, index) => (
          <motion.article
            className={`${styles.skillPanel} ${styles[group.color]}`}
            key={group.title}
            variants={{
              initial: { opacity: 0, y: 34, scale: 0.96 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            whileHover={{ y: -10, scale: 1.015 }}
          >
            <div className={styles.skillPanelRail}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i>{group.title}</i>
            </div>

            <div className={styles.skillPanelBody}>
              <div className={styles.skillPanelHeader}>
                <span className={styles.skillIcon}>
                  {(() => {
                    const Icon = skillIcons[index] || Code2;
                    return <Icon size={24} />;
                  })()}
                </span>
                <span className={styles.skillHighlight}>{group.highlight}</span>
              </div>

              <h3>{group.title}</h3>
              <p>{group.summary}</p>

              <div className={styles.skillStack}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.skillGhostIcon} aria-hidden="true">
              {(() => {
                const Icon = skillIcons[index] || Code2;
                return <Icon size={118} />;
              })()}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default SkillsSection;
