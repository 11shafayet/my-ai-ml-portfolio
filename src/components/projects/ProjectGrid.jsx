import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../constants/animations';
import GlassCard from '../common/GlassCard';
import styles from '../../App.module.css';

const projectColors = [
  'projectBlue',
  'projectRose',
  'projectAmber',
  'projectViolet',
  'projectCyan',
  'projectLime',
  'projectOrange',
  'projectSlate',
];

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
        <GlassCard key={project.title} color={projectColors[index % projectColors.length]} delay={index * 0.08}>
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
          <a className={styles.projectGithubButton} href={project.githubLink} target="_blank" rel="noreferrer">
            <Github size={17} />
            View on GitHub
          </a>
        </GlassCard>
      ))}
    </motion.div>
  );
}

export default ProjectGrid;
