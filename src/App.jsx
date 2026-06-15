import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import NeuralBackdrop from './components/layout/NeuralBackdrop';
import PageLoader from './components/layout/PageLoader';
import ProgressBar from './components/layout/ProgressBar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { personal } from './data/portfolio';
import { getInitialTheme } from './utils/theme';
import styles from './App.module.css';

const pageMeta = {
  Home: {
    title: `${personal.name} | ${personal.title}`,
    description:
      'Portfolio of MD Shafayetur Rahman, AI/ML Engineer specializing in machine learning, deep learning, computer vision, NLP, generative AI, and modern web engineering.',
  },
  Projects: {
    title: `${personal.name} | AI/ML Projects`,
    description:
      'Explore AI/ML projects by MD Shafayetur Rahman, including computer vision, NLP, deep learning, churn prediction, PyTorch, and scikit-learn work.',
  },
  Contact: {
    title: `${personal.name} | Contact`,
    description:
      'Contact MD Shafayetur Rahman for AI/ML engineering, applied AI prototypes, machine learning projects, and full stack AI product collaboration.',
  },
};

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
};

const setLinkHref = (selector, href) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('href', href);
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [page, setPage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const metadata = pageMeta[page] || pageMeta.Home;
    const url = window.location.href;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
    setLinkHref('link[rel="canonical"]', url);
  }, [page]);

  useEffect(() => {
    const handleReady = () => {
      window.setTimeout(() => setLoading(false), 450);
    };

    if (document.readyState === 'complete') {
      handleReady();
      return undefined;
    }

    window.addEventListener('load', handleReady, { once: true });
    return () => window.removeEventListener('load', handleReady);
  }, []);

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
      <AnimatePresence>{loading && <PageLoader key="page-loader" />}</AnimatePresence>
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
