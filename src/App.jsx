import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import CursorEffect from './components/layout/CursorEffect';
import NeuralBackdrop from './components/layout/NeuralBackdrop';
import ProgressBar from './components/layout/ProgressBar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { personal } from './data/portfolio';
import { getInitialTheme } from './utils/theme';
import styles from './App.module.css';

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [page, setPage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.title = `${personal.name} | ${page === 'Home' ? personal.title : page}`;
  }, [page]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [page]);

  const goToPage = (nextPage) => {
    if (nextPage === 'Experiences') {
      setPage('Home');
      setMenuOpen(false);
      window.setTimeout(() => {
        document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return;
    }

    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.appShell}>
      <CursorEffect />
      <NeuralBackdrop />
      <ProgressBar progress={scrollProgress} />
      <Header
        page={page}
        theme={theme}
        menuOpen={menuOpen}
        onNavigate={goToPage}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <AnimatePresence mode="wait">
          {page === 'Home' && <HomePage key="home" onNavigate={goToPage} />}
          {page === 'Projects' && <ProjectsPage key="projects" />}
          {page === 'Contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
