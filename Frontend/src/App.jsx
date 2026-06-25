import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './composants/Navbar';
import Footer from './composants/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' } },
};

const PageWrapper = ({ children }) => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div id="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><PageNotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;