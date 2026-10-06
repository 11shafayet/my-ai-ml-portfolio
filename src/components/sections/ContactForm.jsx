import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../../constants/animations';
import { personal } from '../../data/portfolio';
import styles from '../../App.module.css';

function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = form.current;
    const formData = new FormData(formElement);
    const name = String(formData.get('name') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (name.length < 2 || message.length < 10) {
      setStatus({ type: 'error', message: 'Please enter a name and a message of at least 10 characters.' });
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_portfolio',
        'template_qqk8uw4',
        formElement,
        'N_oSFhAKombL0yKE1',
      );
      formElement.reset();
      setStatus({ type: 'success', message: 'Your message has been sent. Thanks for reaching out!' });
    } catch (error) {
      console.error('EmailJS rejected the contact form submission.', error);
      const reason = typeof error?.text === 'string'
        ? error.text
        : error instanceof Error
          ? error.message
          : 'EmailJS returned an unknown error.';
      setStatus({
        type: 'error',
        message: `EmailJS error: ${reason}. Please email ${personal.email} directly.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.form ref={form} className={styles.contactForm} onSubmit={handleSubmit} {...fadeUp(0.1)}>
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
      <motion.button className={`${styles.primaryButton} ${styles.specialCtaButton}`} type="submit" disabled={isSending} whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.96 }}>
        <Send size={18} />
        {isSending ? 'Sending…' : 'Send Message'}
      </motion.button>
      {status && (
        <p
          className={`${styles.formStatus} ${status.type === 'error' ? styles.formStatusError : styles.formStatusSuccess}`}
          role={status.type === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </motion.form>
  );
}

export default ContactForm;
