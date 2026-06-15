import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { fadeUp } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import styles from '../../App.module.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('Your email client is opening with the message ready to send.');
    event.currentTarget.reset();
  };

  return (
    <motion.form className={styles.contactForm} onSubmit={handleSubmit} {...fadeUp(0.1)}>
      <label>
        Name
        <input name="name" type="text" minLength="2" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" minLength="10" required placeholder="Tell me about your project" />
      </label>
      <motion.button className={`${styles.primaryButton} ${styles.specialCtaButton}`} type="submit" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.96 }}>
        <Send size={18} />
        Send Message
      </motion.button>
      {status && <p className={styles.formStatus}>{status}</p>}
    </motion.form>
  );
}

export default ContactForm;
