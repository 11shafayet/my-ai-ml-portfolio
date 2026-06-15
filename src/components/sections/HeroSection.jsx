import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Code2, Download, Sparkles } from 'lucide-react';
import { revealItem, staggerContainer } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import SocialLinks from '../common/SocialLinks';
import styles from '../../App.module.css';

function HeroSection({ onNavigate }) {
  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <motion.div
        className={styles.heroContent}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, margin: '-80px' }}
      >
        <motion.span className={styles.eyebrow} variants={revealItem}>
          <Sparkles size={16} />
          Applied ML, deep learning, and intelligent web systems
        </motion.span>
        <motion.h1 variants={revealItem}>{personal.name}</motion.h1>
        <motion.p className={styles.heroTitle} variants={revealItem}>
          {personal.title}
        </motion.p>
        <motion.p className={styles.heroIntro} variants={revealItem}>
          I build practical AI systems that connect strong engineering foundations with modern machine
          learning workflows, from experimentation and evaluation to polished user-facing products.
        </motion.p>
        <motion.div className={styles.heroActions} variants={revealItem}>
          <motion.a
            className={`${styles.primaryButton} ${styles.specialCtaButton}`}
            href="/assets/MD_Shafayetur_Rahman_Junior_AI_Engineer.pdf"
            download="MD_Shafayetur_Rahman_Junior_AI_Engineer.pdf"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <Download size={18} />
            Resume
          </motion.a>
          <motion.button
            className={styles.secondaryButton}
            onClick={() => onNavigate('Projects')}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
        <SocialLinks />
      </motion.div>

      <motion.div
        className={styles.heroVisual}
        initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={styles.heroField}
          animate={{ y: [0, -10, 0], rotate: [0.4, -0.4, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className={styles.heroFieldGlow} />
          <div className={styles.heroFieldRingOne} />
          <div className={styles.heroFieldRingTwo} />
          <motion.div className={styles.heroFieldLineOne} animate={{ scaleX: [0.8, 1.05, 0.8] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className={styles.heroFieldLineTwo} animate={{ scaleX: [1, 0.86, 1] }} transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className={styles.heroFieldNoteOne} whileHover={{ y: -4, scale: 1.02 }}>
            <BrainCircuit size={18} />
            <span>Deep Learning</span>
          </motion.div>
          <motion.div className={styles.heroFieldNoteTwo} whileHover={{ y: -4, scale: 1.02 }}>
            <Sparkles size={18} />
            <span>Generative AI</span>
          </motion.div>
          <motion.div className={styles.heroFieldNoteThree} whileHover={{ y: -4, scale: 1.02 }}>
            <Code2 size={18} />
            <span>Full Stack to AI</span>
          </motion.div>
        </motion.div>
        <motion.div
          className={`${styles.heroChip} ${styles.chipOne}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.6, duration: 0.4 },
            x: { delay: 0.6, duration: 0.45 },
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <BrainCircuit size={18} />
          <span>Deep Learning</span>
        </motion.div>
        <motion.div
          className={`${styles.heroChip} ${styles.chipTwo}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 0.75, duration: 0.4 },
            x: { delay: 0.75, duration: 0.45 },
            y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Sparkles size={18} />
          <span>Generative AI</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
