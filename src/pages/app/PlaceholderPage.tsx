import { type LucideIcon, Construction } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

interface Props {
  title: string;
  description?: string;
  icon?: LucideIcon;
  phase?: string;
}

export function PlaceholderPage({ title, description, icon: Icon, phase = 'Phase 1' }: Props) {
  return (
    <>
      <SEOHead title={title} noindex />
      <div className="max-w-2xl mx-auto py-16 text-center">
        <div className="h-16 w-16 rounded-2xl bg-ink-100 flex items-center justify-center mx-auto mb-6">
          {Icon ? <Icon className="h-8 w-8 text-ink-400" /> : <Construction className="h-8 w-8 text-ink-400" />}
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-2">{phase}</p>
        <h1 className="font-display text-3xl font-medium text-ink-950 mb-3">{title}</h1>
        <p className="text-ink-500 text-sm leading-relaxed max-w-md mx-auto">
          {description || `${title} is part of the REBOULO SmartHR AI platform. This section is being configured. Connect Supabase and complete setup to activate full functionality.`}
        </p>
        <div className="mt-8 inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-xl px-4 py-2 text-sm text-brand-700">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
          Module ready — awaiting backend configuration
        </div>
      </div>
    </>
  );
}
