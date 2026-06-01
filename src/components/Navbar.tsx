import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLang } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export function Navbar() {
  const { t, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: t('nav_platform'),  href: '/#platform' },
    { label: t('nav_studio'),    href: '/#studio' },
    { label: t('nav_pricing'),   href: '/pricing' },
    { label: t('nav_open'),      href: '/app' },
  ];

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-ink-100 shadow-sm' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0"><Logo size="sm" /></Link>

        {/* Desktop nav */}
        <ul className={cn('hidden md:flex items-center gap-1', isRTL && 'flex-row-reverse')}>
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={cn('hidden md:flex items-center gap-2', isRTL && 'flex-row-reverse')}>
          <LanguageSwitcher />
          <Link to="/signin" className="btn-ghost text-sm">{t('nav_signin')}</Link>
          <Link to="/signup" className="btn-primary text-sm">{t('nav_start')}</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden btn-ghost" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 px-6 py-4 space-y-1 animate-fade-in">
          {navLinks.map(link => (
            <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-50 rounded-lg">
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-ink-100 mt-3">
            <LanguageSwitcher />
            <Link to="/signin" className="btn-secondary w-full justify-center" onClick={() => setMobileOpen(false)}>{t('nav_signin')}</Link>
            <Link to="/signup" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>{t('nav_start')}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
