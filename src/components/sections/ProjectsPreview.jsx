import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../../constants/animations';
import { projects } from '../../data/portfolio';
import ProjectGrid from '../projects/ProjectGrid';
import styles from '../../App.module.css';

function ProjectsPreview({ onNavigate }) {
  return (
    <section className={styles.section} id="projects">
      <motion.div className={styles.sectionHeader} {...fadeUp(0)}>
        <span className={styles.sectionLabel}>Projects</span>
        <h2>Selected applied AI work.</h2>
      </motion.div>
      <ProjectGrid items={projects} />
      <motion.div className={styles.centerAction} {...fadeUp(0.12)}>
        <motion.button
          className={`${styles.primaryButton} ${styles.specialCtaButton}`}
          onClick={() => onNavigate('Projects')}
          whileHover={{ y: -4, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          View More
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default ProjectsPreview;
