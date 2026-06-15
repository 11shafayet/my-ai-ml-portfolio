import { motion } from 'framer-motion';
import styles from '../../App.module.css';

function PageLoader() {
  return (
    <motion.div
      className={styles.pageLoader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className={styles.loaderMark}>
        <span />
        <span />
        <span />
      </div>
      <p>Loading</p>
    </motion.div>
  );
}

export default PageLoader;
