import { motion } from 'framer-motion';
import { revealItem } from '../../constants/animations';
import styles from '../../App.module.css';

function GlassCard({ children, color = 'mint', delay = 0 }) {
  return (
    <motion.article
      className={`${styles.glassCard} ${styles[color]}`}
      variants={revealItem}
      initial="initial"
      whileInView="animate"
      whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: -2 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

export default GlassCard;
