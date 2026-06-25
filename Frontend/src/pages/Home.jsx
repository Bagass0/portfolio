import '../styles/Home.css';
import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import { HomeTextes } from '../utils/textes';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faCode,
  faCodeBranch,
  faGraduationCap,
  faUniversity,
  faChalkboardUser,
  faSchool
} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const iconMap = {
  faLaptopCode,
  faCode,
  faCodeBranch,
  faGraduationCap,
  faUniversity,
  faChalkboardUser,
  faSchool
};

const Home = () => {
  const { lang } = useContext(ConfigContext);
  const textes = HomeTextes[lang];

  // Ajoute dynamiquement les icônes aux expériences et formations
  const experiences = textes.experiences.map(exp => ({
    ...exp,
    logo: typeof exp.logo === "string" ? iconMap[exp.logo] : exp.logo,
    companyImg: exp.companyImg
      ? exp.companyImg.startsWith("/")
        ? exp.companyImg
        : `/images/entreprises/${exp.companyImg.replace(/^(\.\.\/)?images\/entreprises\//, "")}`
      : null
  }));

  const educations = textes.educations.map(edu => ({
    ...edu,
    logo: typeof edu.logo === "string" ? iconMap[edu.logo] : edu.logo,
    schoolImg: edu.schoolImg
      ? edu.schoolImg.startsWith("/")
        ? edu.schoolImg
        : `/images/ecoles/${edu.schoolImg.replace(/^(\.\.\/)?images\/ecoles\//, "")}`
      : null
  }));

  const heroContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <header className="home-header">
        <motion.div
          className="header-content"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            variants={heroItem}
            src="/banniere-header.png"
            alt="Logo"
            className="header-banniere"
          />
          <motion.h1 variants={heroItem} className="header-title">
            <span style={{ color: '#4fc3f7', fontWeight: 700 }}>
              <Typewriter
                words={textes.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </motion.h1>
          <motion.div variants={heroItem} className="header-socials">
            <a
              href="https://github.com/Bagass0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/hugo-barbosa-pereira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </motion.div>
        </motion.div>
        <div className="header-bg"></div>
      </header>
      <section className="timeline-section">
        <h2 className="timeline-title">{textes.experiencesTitle}</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              className={`timeline-item ${exp.type}`}
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: [0.4, 2, 0.6, 1] }}
            >
              <div className="timeline-icon">
                <FontAwesomeIcon icon={exp.logo} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {exp.companyImg && (
                    <img
                      src={exp.companyImg}
                      alt={exp.company}
                      className="timeline-company-img"
                    />
                  )}
                  <div>
                    <h3>{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-date">{exp.date}</span>
                  </div>
                </div>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="timeline-section">
        <h2 className="timeline-title">{textes.educationsTitle}</h2>
        <div className="timeline">
          {educations.map((edu, idx) => (
            <motion.div
              className={`timeline-item ${edu.type}`}
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.6, ease: [0.4, 2, 0.6, 1] }}
            >
              <div className="timeline-icon">
                <FontAwesomeIcon icon={edu.logo} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {edu.schoolImg && (
                    <img
                      src={edu.schoolImg}
                      alt={edu.school}
                      className="timeline-company-img"
                    />
                  )}
                  <div>
                    <h3>{edu.title}</h3>
                    <span className="timeline-company">{edu.school}</span>
                    <span className="timeline-date">{edu.date}</span>
                  </div>
                </div>
                <ul>
                  {edu.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;