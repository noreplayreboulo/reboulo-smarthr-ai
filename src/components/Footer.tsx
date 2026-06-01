import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useLang } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Logo size="sm" className="[&_.text-ink-950]:text-white [&_.text-ink-400]:text-ink-300" />
          <p className="mt-4 text-sm text-ink-300 leading-relaxed">{t('footer_tagline')}</p>
          <p className="mt-3 text-xs text-ink-500">{t('footer_compliance')}</p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">{t('footer_product')}</h4>
          <ul className="space-y-2.5 text-sm text-ink-300">
            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/demo" className="hover:text-white transition-colors">Product Demo</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">{t('nav_pricing')}</Link></li>
            <li><Link to="/app" className="hover:text-white transition-colors">{t('nav_open')}</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">{t('footer_legal')}</h4>
          <ul className="space-y-2.5 text-sm text-ink-300">
            <li><Link to="/privacy" className="hover:text-white transition-colors">{t('footer_privacy')}</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">{t('footer_terms')}</Link></li>
            <li><Link to="/security" className="hover:text-white transition-colors">{t('footer_security')}</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-4">{t('footer_offices')}</h4>
          <div className="space-y-4 text-xs text-ink-400">
            <div>
              <p className="text-ink-300 font-medium text-sm mb-1">🇵🇹 Portugal HQ</p>
              <p className="flex items-start gap-1.5"><MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />Av. Emídio Navarro 27, 3500-126 Viseu</p>
              <p className="flex items-center gap-1.5 mt-1"><Phone className="h-3 w-3 flex-shrink-0" />+351 912 712 040</p>
              <p className="flex items-center gap-1.5 mt-1"><Mail className="h-3 w-3 flex-shrink-0" />phd.ghali@reboulo.com</p>
            </div>
            <div>
              <p className="text-ink-300 font-medium text-sm mb-1">🇦🇪 UAE</p>
              <p>REBOULO Smart Services</p>
              <p>Dubai, United Arab Emirates</p>
            </div>
            <div>
              <p className="text-ink-300 font-medium text-sm mb-1">🇪🇬 Egypt</p>
              <p>REBOULO Smart Services</p>
              <p>Cairo, Arab Republic of Egypt</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <p>{t('footer_rights')}</p>
          <p>NIF: 322723175 · UAE · Egypt · Portugal</p>
        </div>
      </div>
    </footer>
  );
}
