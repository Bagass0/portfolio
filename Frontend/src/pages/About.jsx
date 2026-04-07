import '../styles/About.css';

const About = () => {
  return (
    <div className="projects-page">
      <div className="about-hosting-section">
        <h2>À propos de ce portfolio</h2>
        <p>
          Ce portfolio est un projet personnel hébergé sur un <b>serveur Ubuntu</b> (Raspberry Pi) afin d’apprendre et expérimenter :
        </p>
        <ul>
          <li>Flash et configuration d’un <b>Ubuntu Server</b> sur Raspberry Pi</li>
          <li>Mise en place de la <b>sécurité</b> (firewall, SSH, Jails...)</li>
          <li>Création d’un pipeline <b>CI/CD</b> pour déploiement automatique</li>
          <li>Développement Frontend avec <b>ReactJS</b> & <b>Vite</b></li>
        </ul>
        <p>
          L’objectif est de maîtriser le cycle complet : du développement à la mise en production, en passant par l’automatisation et la sécurisation d’un serveur Linux.
        </p>
      </div>
    </div>
  );
}

export default About;