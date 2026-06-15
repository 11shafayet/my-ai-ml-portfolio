import { Menu, Moon, Sun, X } from 'lucide-react';
import { navItems } from '../../constants/navigation';
import styles from '../../App.module.css';

function Header({ page, theme, menuOpen, onNavigate, onToggleMenu, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <button className={styles.brand} onClick={() => onNavigate('Home')} aria-label="Go to home">
        <img
          src={theme === 'dark' ? '/assets/logo_dark.png' : '/assets/logo_light.png'}
          alt="Shafayetur Rahman"
          className={`!p-4 !max-w-[50px] !h-auto`}
        />
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={page === item ? styles.activeNav : ''}
            onClick={() => onNavigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className={styles.headerActions}>
        <button className={styles.iconButton} onClick={onToggleTheme} aria-label="Toggle color theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className={styles.menuButton} onClick={onToggleMenu} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
