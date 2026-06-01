import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { SEOHead } from '../components/SEOHead';
import { useAuth } from '../contexts/AuthContext';
import { useLang } from '../contexts/LanguageContext';

export function SignUp() {
  const { signUp } = useAuth();
  const { t } = useLang();

  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    setLoading(true);
    const { error } = await signUp(form.email, form.password, {
      first_name: form.firstName, last_name: form.lastName, company_name: form.company,
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-md text-center">
          <div className="h-16 w-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-brand-600" />
          </div>
          <h1 className="font-display text-3xl font-medium text-ink-950 mb-3">Check your inbox</h1>
          <p className="text-ink-500 mb-6">We sent a confirmation link to <strong className="text-ink-900">{form.email}</strong>. Click it to activate your workspace and start your 7-day free trial.</p>
          <Link to="/signin" className="btn-primary">Back to sign in</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead title="Create Workspace" noindex />
      <div className="min-h-screen grid md:grid-cols-2">
        {/* Left */}
        <div className="hidden md:flex flex-col gradient-hero px-12 py-10 justify-between">
          <Link to="/"><Logo /></Link>
          <div>
            <h2 className="font-display text-4xl font-medium text-ink-950 leading-tight mb-4">
              Start your 7-day free trial.<br />
              <em className="text-brand-600 not-italic">No credit card required.</em>
            </h2>
            <ul className="space-y-2.5 text-sm text-ink-600">
              {['Full platform access for 7 days', 'Bring your team — up to 25 employees', 'Company Identity Engine™ setup', 'AI HR Console (with your OpenAI key)', 'Cancel anytime. No commitment.'].map(f => (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-ink-400">© 2026 REBOULO SmartHR AI™</p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-sm">
            <div className="flex justify-between items-center mb-10">
              <div className="md:hidden"><Link to="/"><Logo size="sm" /></Link></div>
              <LanguageSwitcher />
            </div>

            <h1 className="font-display text-3xl font-medium text-ink-950 mb-1">{t('signup_title')}</h1>
            <p className="text-sm text-ink-500 mb-8">{t('signup_sub')}</p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />{error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signup_first')}</label>
                  <input type="text" required value={form.firstName} onChange={set('firstName')} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signup_last')}</label>
                  <input type="text" required value={form.lastName} onChange={set('lastName')} className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signup_company')}</label>
                <input type="text" required value={form.company} onChange={set('company')} placeholder="Acme Corp" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signup_email')}</label>
                <input type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">{t('signup_password')}</label>
                <input type="password" required minLength={8} value={form.password} onChange={set('password')} placeholder="At least 8 characters" className="input-field" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 rounded-xl text-base mt-2 disabled:opacity-60">
                {loading ? 'Creating workspace…' : t('signup_btn')}
              </button>
            </form>

            <p className="text-center text-sm text-ink-500 mt-6">
              {t('signup_hasaccount')}{' '}
              <Link to="/signin" className="text-brand-600 font-medium hover:text-brand-700">{t('signup_login')}</Link>
            </p>
            <p className="text-center text-xs text-ink-400 mt-3">
              By creating a workspace, you agree to our{' '}
              <Link to="/terms" className="underline hover:text-ink-600">Terms</Link> and{' '}
              <Link to="/privacy" className="underline hover:text-ink-600">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
