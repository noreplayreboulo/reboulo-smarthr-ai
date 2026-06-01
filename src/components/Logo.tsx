import { cn } from '../lib/utils';

export function Logo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-7 w-7', md: 'h-9 w-9', lg: 'h-12 w-12' };
  const textSizes = { sm: 'text-base', md: 'text-xl', lg: 'text-2xl' };
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className={cn('relative rounded-xl gradient-ink flex items-center justify-center shadow-soft flex-shrink-0', sizes[size])}>
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12M3 7l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-white" />
      </div>
      <div className="leading-tight">
        <div className={cn('font-display font-medium tracking-tight text-ink-950', textSizes[size])}>
          REBOULO <span className="text-brand-600">·</span> SmartHR
        </div>
        <div className="text-[9px] uppercase tracking-[0.28em] text-ink-400 mt-0.5">HR Intelligence Suite</div>
      </div>
    </div>
  );
}
