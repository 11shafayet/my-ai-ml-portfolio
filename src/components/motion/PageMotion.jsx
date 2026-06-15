import { motion } from 'framer-motion';
import { pageVariants } from '../../constants/animations';

function PageMotion({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default PageMotion;
