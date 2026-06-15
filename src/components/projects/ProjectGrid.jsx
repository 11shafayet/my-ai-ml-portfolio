import { motion } from 'framer-motion';
import { staggerContainer } from '../../constants/animations';
import GlassCard from '../common/GlassCard';
import styles from '../../App.module.css';

function ProjectGrid({ items }) {
  return (
    <motion.div
      className={styles.projectGrid}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, margin: '-80px' }}
    >
      {items.map((project, index) => (
        <GlassCard key={project.title} color={project.color} delay={index * 0.08}>
          <div className={styles.projectTopline}>
            <span>{project.metric}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className={styles.skillList}>
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </GlassCard>
      ))}
    </motion.div>
  );
}

export default ProjectGrid;
