import "../styles/Projects.css";
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigContext } from "../context/ConfigContext";
import { ProjectsTextes } from "../utils/textes";

const techs = [
  { name: "ReactJS", type: "framework", image: "/images/techs/react.svg", category: "framework" },
  { name: "Vite", type: "framework", image: "/images/techs/vite.svg", category: "framework" },
  { name: "React Native", type: "framework", image: "/images/techs/react.svg", category: "framework" },
  { name: "EXPO", type: "framework", image: "/images/techs/expo.png", category: "framework" },
  { name: "NodeJS", type: "framework", image: "/images/techs/nodejs.svg", category: "framework" },
  { name: "Express", type: "framework", image: "/images/techs/express.svg", category: "framework" },
  { name: "Symfony", type: "framework", image: "/images/techs/symfony.png", category: "framework" },

  { name: "PHP", type: "language", image: "/images/techs/php.svg", category: "language" },
  { name: "JavaScript", type: "language", image: "/images/techs/javascript.svg", category: "language" },
  { name: "SQL", type: "language", image: "/images/techs/sql.svg", category: "language" },
  { name: "Python", type: "language", image: "/images/techs/python.svg", category: "language" },
  { name: "HTML5", type: "language", image: "/images/techs/html5.svg", category: "language" },
  { name: "CSS3", type: "language", image: "/images/techs/css3.svg", category: "language" },

  { name: "MySQL", type: "sgbd", image: "/images/techs/mysql.svg", category: "sgbd" },
  { name: "PostgreSQL", type: "sgbd", image: "/images/techs/postgresql.svg", category: "sgbd" },
  { name: "MongoDB", type: "sgbd", image: "/images/techs/mongodb.svg", category: "sgbd" },

  { name: "Linux", type: "tool", image: "/images/techs/linux.svg", category: "tool" },
  { name: "Git", type: "tool", image: "/images/techs/git.svg", category: "tool" },
  { name: "GitHub Actions", type: "tool", image: "/images/techs/github.svg", category: "tool" },
  { name: "GitLab CI/CD", type: "tool", image: "/images/techs/gitlab.svg", category: "tool" },
  { name: "Cypress", type: "tool", image: "/images/techs/cypress.svg", category: "tool" },
  { name: "vitest", type: "tool", image: "/images/techs/vitest.svg", category: "tool" },
  { name: "Docker", type: "tool", image: "/images/techs/docker.svg", category: "tool" },
];

const Projects = () => {
  const { lang } = useContext(ConfigContext);
  const textes = ProjectsTextes[lang];
  const [selected, setSelected] = useState([]);

  // Utilise les projets traduits depuis ProjectsTextes
  const projects = textes.projects;

  const toggleTech = (name) => {
    setSelected(selected.includes(name)
      ? selected.filter(t => t !== name)
      : [...selected, name]);
  };

  const filteredProjects = selected.length === 0
    ? projects
    : projects.filter(p =>
      selected.every(sel => p.techs.includes(sel))
    );

  return (
    <div className="projects-page">
      <h2 className="projects-title">{textes.title}</h2>
      <p className="project-intro">{textes.subtitle}</p>
      <div className="tech-filters-fixed">
        <div className="tech-grid">
          {techs.map(tech => (
            <button
              key={tech.name}
              className={`tech-btn ${tech.category} ${selected.includes(tech.name) ? "selected" : ""}`}
              onClick={() => toggleTech(tech.name)}
            >
              <img src={tech.image} alt={tech.name} className="tech-icon" />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="projects-list"
          key={selected.join(',')}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {filteredProjects.length === 0 && (
            <motion.div
              className="no-project"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {lang === "fr" ? "Aucun projet ne correspond à ce filtre." : "No project matches this filter."}
            </motion.div>
          )}
          {filteredProjects.map(proj => (
            <motion.div
              className="project-card"
              key={proj.title}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
            >
              <div className="project-banner">
                <img
                  src={proj.image ? proj.image : "/images/projects/default.png"}
                  alt={`Aperçu de ${proj.title}`}
                  className="project-preview-banner"
                />
                {proj.tag && (
                  <span className={`project-type-tag project-type-${proj.tag.toLowerCase()}`}>
                    {proj.tag}
                  </span>
                )}
              </div>
              <h3>{proj.title}</h3>
              <p>
                {proj.description}
              </p>
              <div className="project-techs">
                {proj.techs.slice(0, 4).map(t => {
                  const tech = techs.find(tech => tech.name === t);
                  const category = tech ? tech.category : "";
                  return (
                    <span
                      className={`project-tech project-tech-${category}`}
                      key={t}
                    >
                      {t}
                    </span>
                  );
                })}
                {proj.techs.length > 4 && (
                  <span className="project-tech project-tech-more">
                    +{proj.techs.length - 4}
                  </span>
                )}
              </div>
              {proj.site && (
                <a
                  href={proj.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-site-btn"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7.293 14.707a1 1 0 0 1 0-1.414L12.586 8H9a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9.414l-5.293 5.293a1 1 0 0 1-1.414 0z" /></svg>
                  {proj.more}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;