import { motion } from 'framer-motion';
import styles from '../../App.module.css';

const letters = 'Shafayetur Rahman';
const letterOrder = [8, 1, 12, 4, 10, 0, 14, 6, 2, 11, 5, 13, 3, 9, 7, 15, 16];

function PageLoader() {
  return (
    <motion.div
      className={styles.pageLoader}
      initial={{ clipPath: 'circle(141.4% at 0 0)' }}
      exit={{ clipPath: 'circle(0.5% at 0 0)', transition: { duration: 1, ease: 'easeInOut' } }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <h2 className={styles.loaderTitle}>
        {letters.split('').map((letter, index) => (
          <span
            className={styles.loaderLetter}
            style={{ '--letter-delay': `${letterOrder[index] * 0.1}s` }}
            key={`${letter}-${index}`}
          >
            {letter === ' ' ? '\u00a0' : letter}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}

export default PageLoader;
