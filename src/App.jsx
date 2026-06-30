import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from './components/layout/Header';
import NeuralBackdrop from './components/layout/NeuralBackdrop';
import PageLoader from './components/layout/PageLoader';
import ProgressBar from './components/layout/ProgressBar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MonitorPage from './pages/MonitorPage';
import ProjectsPage from './pages/ProjectsPage';
import { personal } from './data/portfolio';
import { trackPageVisit } from './utils/monitoring';
import { getInitialTheme } from './utils/theme';
import styles from './App.module.css';

const pagePaths = {
  Home: '/',
  Projects: '/projects',
  Contact: '/contact',
  Monitor: '/monitor',
};

const getPageFromPath = (pathname) => {
  const match = Object.entries(pagePaths).find(([, path]) => path === pathname);
  return match ? match[0] : 'Home';
};

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
  Monitor: {
    title: `${personal.name} | Monitor`,
    description: 'Public visitor activity monitor for the portfolio.',
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
  const [page, setPage] = useState(() => getPageFromPath(window.location.pathname));
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

  useEffect(() => trackPageVisit(page), [page]);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname));
      setMenuOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goToPage = (nextPage) => {
    if (nextPage === 'About' || nextPage === 'Skills') {
      const sectionId = nextPage.toLowerCase();
      setPage('Home');
      setMenuOpen(false);
      window.history.pushState(null, '', `/#${sectionId}`);
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return;
    }

    setPage(nextPage);
    setMenuOpen(false);
    window.history.pushState(null, '', pagePaths[nextPage] || '/');
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
        onCloseMenu={() => setMenuOpen(false)}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <AnimatePresence mode="wait">
          {page === 'Home' && <HomePage key="home" onNavigate={goToPage} />}
          {page === 'Projects' && <ProjectsPage key="projects" />}
          {page === 'Contact' && <ContactPage key="contact" />}
          {page === 'Monitor' && <MonitorPage key="monitor" />}
        </AnimatePresence>
      </main>
      <footer className={styles.footer}>
        <p>Copyright 2026 MD Shafayetur Rahman. All rights reserved.</p>
      </footer>
      <button
        className={`${styles.backToTop} ${scrollProgress > 8 ? styles.backToTopVisible : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
