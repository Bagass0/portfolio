import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ConfigContext } from '../context/ConfigContext';
import { NavbarTextes } from '../utils/textes';
import '../styles/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useContext(ConfigContext);
  const location = useLocation();
  const textes = NavbarTextes[lang];

  const navOptions = [
    { path: '/', label: textes.home },
    { path: '/projects', label: textes.projects },
    { path: '/about', label: textes.about },
    { path: '/contact', label: textes.contact },
  ];

  return (
    <nav className="navbar">
      <div >
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {navOptions.map(option => (
          <Link
            key={option.path}
            to={option.path}
            className={location.pathname === option.path ? 'active' : ''}
            onClick={() => setOpen(false)}
            style={{ position: 'relative' }}
          >
            {option.label}
            {location.pathname === option.path && (
              <motion.span
                className="nav-indicator"
                layoutId="nav-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
      <div className="navbar-lang">
        <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
        <span className="lang-sep"> | </span>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
      <button
        className={`navbar-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;