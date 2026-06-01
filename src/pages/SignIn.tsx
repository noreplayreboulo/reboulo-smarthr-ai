import { useState, type FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { SEOHead } from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useLang } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export function SignIn() {
  const { signIn } = useAuth();
  const { t, isRTL } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname || '/app';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) { setError(error.message); return; }
    navigate(from, { replace: true });
  };

  return (
    <>
      <SEOHead title="Sign In" noindex />
      <div className={cn('min-h-screen grid md:grid-cols-2', isRTL && 'direction-rtl')}>
        {/* Left panel */}
        <div className="hidden md:flex flex-col gradient-hero px-12 py-10 justify-between">
          <Link to="/"><Logo /></Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4">HR Intelligence Suite</p>
            <h2 className="font-display text-4xl font-medium text-ink-950 leading-tight mb-4">
              A calmer, more intelligent way to run <em className="text-brand-600 not-italic">people operations.</em>
            </h2>
            <p className="text-ink-500 text-sm leading-relaxed">
              People, documents, compliance-aware workflows and branded executive reports — orchestrated by AI and reviewed by you.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs text-ink-400">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Multi-tenant by design · RLS-ready · Human review for sensitive actions
            </div>
          </div>
          <p className="text-xs text-ink-400">© 2026 REBOULO SmartHR AI™</p>
        </div>

        {/* Right panel */}
        <div className="flex flex-col items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-10">
              <div className="md:hidden"><Link to="/"><Logo size="sm" /></Link></div>
              <LanguageSwitcher />
            </div>

            <h1 className="font-display text-3xl font-medium text-ink-950 mb-1">{t('signin_title')}</h1>
            <p className="text-sm text-ink-500 mb-8">{t('signin_sub')}</p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signin_email')}</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com" className="input-field" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-ink-700">{t('signin_password')}</label>
                  <Link to="/forgot-password" className="text-xs text-brand-600 hover:text-brand-700">{t('signin_forgot')}</Link>
                </div>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••" className="input-field" />
              </div>
              <button type="submit" disabled={loading}
                className="btn-primary w-full py-3.5 rounded-xl text-base mt-2 disabled:opacity-60">
                {loading ? 'Signing in…' : t('signin_btn')}
              </button>
            </form>

            <p className="text-center text-sm text-ink-500 mt-6">
              {t('signin_noaccount')}{' '}
              <Link to="/signup" className="text-brand-600 font-medium hover:text-brand-700">{t('signin_create')}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
