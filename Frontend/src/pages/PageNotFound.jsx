import '../styles/PageNotFound.css';
import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';
import { PageNotFoundTextes } from '../utils/textes';
import { Link } from 'react-router-dom';

function PageNotFound() {
  const { lang } = useContext(ConfigContext);
  const textes = PageNotFoundTextes[lang];

  return (
    <div className="notfound-container">
      <div className="notfound-title">404</div>
      <div className="notfound-subtitle">{ textes.title }</div>
      <div className="notfound-text">{ textes.subtitle }</div>
      <Link to="/" className="notfound-link">{ textes.backToHome }</Link>
    </div>
  );
}

export default PageNotFound;