import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Header() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // the sections only exist on the home page
  const isHome = pathname === '/';

  const navLinks = [
    { hash: '#about', labelKey: 'nav.about' },
    { hash: '#services', labelKey: 'nav.services' },
    { hash: '#projects', labelKey: 'nav.projects' },
    { hash: '#contact', labelKey: 'nav.contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();

    const go = () => {
      if (!isHome) {
        // route home and let Index scroll to the hash on arrival
        navigate(`/${hash}`);
        return;
      }
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (isMobileMenuOpen) {
      // Close menu first, then scroll after animation completes
      setIsMobileMenuOpen(false);
      setTimeout(go, 300);
    } else {
      go();
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="container-narrow flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label={t('about.name')}>
          <img
            src="/abakus-wordmark.png"
            alt={t('about.name')}
            className={cn(
              'h-7 md:h-9 w-auto transition-[filter] duration-500',
              // the mark is black ink on transparency — invert it over the dark hero
              !isScrolled && 'invert'
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <a
                  href={isHome ? link.hash : `/${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className={cn(
                    'text-sm tracking-wide transition-colors hover:opacity-70',
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  )}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher variant={isScrolled ? 'dark' : 'light'} />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher variant={isScrolled ? 'dark' : 'light'} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'p-2 transition-colors',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="container-narrow py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.hash}>
                  <a
                    href={isHome ? link.hash : `/${link.hash}`}
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className="block text-lg text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
