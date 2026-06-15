import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Code2, Download, Rocket, Sparkles } from 'lucide-react';
import { revealItem, staggerContainer } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import SocialLinks from '../common/SocialLinks';
import styles from '../../App.module.css';

function HeroSection({ onNavigate }) {
  const heroHighlights = [
    { icon: BrainCircuit, label: 'ML systems' },
    { icon: Code2, label: 'Full-stack AI' },
    { icon: Rocket, label: 'Production polish' },
  ];

  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={styles.heroAmbient} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
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
        <motion.div className={styles.heroHighlights} variants={revealItem}>
          {heroHighlights.map(({ icon: Icon, label }) => (
            <span key={label}>
              <Icon size={16} />
              {label}
            </span>
          ))}
        </motion.div>
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
        <motion.div
          className={styles.heroSignalBar}
          variants={revealItem}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>Experiment</span>
          <i />
          <span>Evaluate</span>
          <i />
          <span>Deploy</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
