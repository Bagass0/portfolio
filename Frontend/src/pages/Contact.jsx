import '../styles/Contact.css';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ConfigContext } from '../context/ConfigContext';
import { ContactTextes } from '../utils/textes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Contact = () => {
  const { lang } = useContext(ConfigContext);
  const textes = ContactTextes[lang];

  return (
    <div className="contact-page">
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {textes.title}
      </motion.h2>
      <motion.p
        className="contact-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {textes.subtitle}
      </motion.p>
      <div className="contact-grid">
        <motion.a
          href="mailto:hugo.b_pereira@outlook.com"
          className="contact-card"
          aria-label="Mail"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(33,150,243,0.22)' }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-type">Email</div>
          <div className="contact-value">hugo.b_pereira@outlook.com</div>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/hugo-barbosa-pereira"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          aria-label="LinkedIn"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(33,150,243,0.22)' }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <div className="contact-type">LinkedIn</div>
          <div className="contact-value">BARBOSA Hugo</div>
        </motion.a>
      </div>
    </div>
  )
};

export default Contact;