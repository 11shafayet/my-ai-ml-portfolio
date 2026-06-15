import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { revealItem } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import styles from '../../App.module.css';

function SocialLinks() {
  return (
    <motion.div className={styles.socialLinks} variants={revealItem}>
      <motion.a
        href={personal.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        whileHover={{ y: -5, rotate: -6 }}
        whileTap={{ scale: 0.92 }}
      >
        <Github size={20} />
      </motion.a>
      <motion.a
        href={personal.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        whileHover={{ y: -5, rotate: 6 }}
        whileTap={{ scale: 0.92 }}
      >
        <Linkedin size={20} />
      </motion.a>
    </motion.div>
  );
}

export default SocialLinks;
