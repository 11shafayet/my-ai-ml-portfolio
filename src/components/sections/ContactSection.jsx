import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { fadeUp } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import ContactForm from './ContactForm';
import styles from '../../App.module.css';

function ContactSection({ expanded = false }) {
  return (
    <section className={`${styles.section} ${styles.contactLayout}`} id="contact">
      <motion.div {...fadeUp(0)}>
        <span className={styles.sectionLabel}>Contact</span>
        <h2>{expanded ? 'Let’s build something intelligent.' : 'Available for AI/ML opportunities.'}</h2>
        <p>
          Reach out for machine learning projects, applied AI prototypes, full stack AI products, or
          collaboration around deep learning and generative AI.
        </p>
        <div className={styles.contactLinks}>
          <motion.a href={`mailto:${personal.email}`} whileHover={{ x: 6 }} whileTap={{ scale: 0.98 }}>
            <Mail size={18} />
            {personal.email}
          </motion.a>
          <motion.a href={`https://wa.me/${personal.whatsapp.replace(/\D/g, '')}`} whileHover={{ x: 6 }} whileTap={{ scale: 0.98 }}>
            <MessageCircle size={18} />
            WhatsApp
          </motion.a>
          <motion.a href={personal.github} target="_blank" rel="noreferrer" whileHover={{ x: 6 }} whileTap={{ scale: 0.98 }}>
            <Github size={18} />
            GitHub
          </motion.a>
          <motion.a href={personal.linkedin} target="_blank" rel="noreferrer" whileHover={{ x: 6 }} whileTap={{ scale: 0.98 }}>
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
