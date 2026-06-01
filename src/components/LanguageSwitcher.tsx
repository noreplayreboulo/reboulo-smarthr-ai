import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLang, LANGUAGES } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export function LanguageSwitcher({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = LANGUAGES.find(l => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={cn(
          'flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors',
          variant === 'light'
            ? 'text-ink-600 hover:text-ink-900 hover:bg-ink-100'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        )}
      >
        <Globe className="h-4 w-4" />
        <span>{current?.label}</span>
      </button>
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-ink-100 rounded-xl shadow-soft py-1 min-w-[160px] z-50 animate-fade-in">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={cn(
                'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left',
                l.code === lang ? 'text-brand-700 bg-brand-50 font-medium' : 'text-ink-700 hover:bg-ink-50'
              )}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
