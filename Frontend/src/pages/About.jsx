import '../styles/About.css';
import { motion } from 'framer-motion';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div className="projects-page">
      <motion.div
        className="about-hosting-section"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2>À propos de ce portfolio</h2>
        <p>
          Ce portfolio est un projet personnel hébergé sur un <b>serveur Ubuntu</b> (Raspberry Pi) afin d&apos;apprendre et expérimenter :
        </p>
        <motion.ul variants={listVariants} initial="hidden" animate="visible">
          <motion.li variants={listItemVariants}>Flash et configuration d&apos;un <b>Ubuntu Server</b> sur Raspberry Pi</motion.li>
          <motion.li variants={listItemVariants}>Mise en place de la <b>sécurité</b> (firewall, SSH, Jails...)</motion.li>
          <motion.li variants={listItemVariants}>Création d&apos;un pipeline <b>CI/CD</b> pour déploiement automatique</motion.li>
          <motion.li variants={listItemVariants}>Développement Frontend avec <b>ReactJS</b> &amp; <b>Vite</b></motion.li>
        </motion.ul>
        <p>
          L&apos;objectif est de maîtriser le cycle complet : du développement à la mise en production, en passant par l&apos;automatisation et la sécurisation d&apos;un serveur Linux.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
