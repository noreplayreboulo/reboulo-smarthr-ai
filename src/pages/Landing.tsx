import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Globe2, Users, FileText, BarChart3, Brain, Sparkles, ChevronRight } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { cn } from '../lib/utils';

const features = [
  { icon: Users,     title: 'People Records',          desc: 'A calm, single source of truth for your entire workforce — directories, profiles, documents, and history.' },
  { icon: FileText,  title: 'Branded HR Documents',    desc: 'Generate offer letters, employment certificates, payslips and NDAs — branded with your company identity.' },
  { icon: Brain,     title: 'AI HR Console',           desc: 'HR guidance, draft generation, and report intelligence — scoped to your platform and HR context.' },
  { icon: BarChart3, title: 'Project Cost Centers',    desc: 'Allocate employees to projects, calculate workforce costs, and track budget vs. actuals in real time.' },
  { icon: Shield,    title: 'Compliance-Aware',        desc: 'UAE PDPL, GDPR-ready architecture, RLS-enforced multi-tenant isolation, and private document storage.' },
  { icon: Globe2,    title: 'Multilingual & RTL',      desc: 'Full support for Arabic (RTL), English, French, Portuguese, and Spanish with no mixed-language screens.' },
];

const stats = [
  { value: '5+',    label: 'Countries' },
  { value: '98%',   label: 'Uptime SLA' },
  { value: '< 1s',  label: 'Response time' },
  { value: 'SOC2',  label: 'Ready architecture' },
];

const plans = [
  {
    nameKey: 'plan_starter', price: '49', currency: '€',
    descKey: 'plan_starter_desc', popular: false,
    features: ['Up to 25 employees', 'Employee directory & profiles', 'Smart Import™ (Excel/CSV)', 'HR document generation', 'Company Identity Engine™', 'Email support'],
  },
  {
    nameKey: 'plan_growth', price: '149', currency: '€',
    descKey: 'plan_growth_desc', popular: true,
    features: ['Up to 150 employees', 'AI HR Console™', 'Branded Report Studio™', 'Project Cost Centers™', 'Multi-branch support', 'Priority support', 'Arabic RTL included'],
  },
  {
    nameKey: 'plan_enterprise', price: null, currency: '€',
    descKey: 'plan_enterprise_desc', popular: false,
    features: ['Unlimited employees', 'Multi-company (3 workspaces)', 'SSO & advanced roles', 'Custom AI workflows', 'Dedicated CSM', '99.99% SLA'],
  },
];

const studioModules = [
  { icon: '📊', title: 'HR Intelligence Studio™',    desc: 'AI-drafted HR reports reviewed by your team, not auto-published.' },
  { icon: '🎨', title: 'Branded Report Studio™',     desc: 'Reports carry your company logo, letterhead, signature and footer — every time.' },
  { icon: '📬', title: 'AI Report Courier™',         desc: 'Route drafted reports through human review queues before distribution.' },
  { icon: '🔍', title: 'Brand Intelligence Check™',  desc: 'Audit your brand kit completeness before generating documents.' },
];

export function Landing() {
  const { t, isRTL } = useLang();

  return (
    <>
      <SEOHead
        title="The HR Intelligence Ecosystem"
        description="REBOULO SmartHR AI unifies your people, documents and compliance-aware workflows into a single calm workspace — with branded executive reports prepared by AI and reviewed by you."
        canonical="https://reboulo-uae.com/"
      />

      {/* HERO */}
      <section className="gradient-hero min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="section-label mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            {t('hero_badge')}
          </div>

          <h1 className={cn('font-display text-5xl md:text-6xl lg:text-7xl font-medium text-ink-950 leading-[1.1] mt-4 mb-6 text-balance', isRTL && 'text-right')}>
            {t('hero_title_1')}{' '}
            <em className="text-brand-600 not-italic">{t('hero_title_2')}</em>{' '}
            {t('hero_title_3')}
          </h1>

          <p className={cn('section-subtitle mx-auto mb-10 text-base md:text-lg', isRTL && 'text-right')}>
            {t('hero_sub')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup" className="btn-primary text-base px-8 py-4 rounded-full">
              {t('hero_cta1')} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/app" className="btn-secondary text-base px-8 py-4 rounded-full">
              {t('hero_cta2')}
            </Link>
          </div>

          <p className="mt-5 text-xs text-ink-400">{t('trial_note')}</p>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 max-w-5xl mx-auto w-full animate-fade-in">
          <div className="bg-white rounded-3xl shadow-premium border border-ink-100 overflow-hidden">
            <div className="bg-ink-950 px-6 py-4 flex items-center gap-2">
              <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
              <div className="flex-1 text-center text-xs text-ink-400">REBOULO SmartHR AI — Dashboard</div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Workforce', value: '248', sub: '+12 this month', color: 'brand' },
                { label: 'Documents Ready', value: '06', sub: 'Awaiting review', color: 'blue' },
                { label: 'Active Projects', value: '04', sub: '2 on budget', color: 'purple' },
                { label: 'AI Queue', value: '03', sub: 'Reports drafted', color: 'amber' },
              ].map(card => (
                <div key={card.label} className="bg-ink-50 rounded-2xl p-4">
                  <p className="text-xs text-ink-400 uppercase tracking-wide mb-2">{card.label}</p>
                  <p className="font-display text-3xl font-medium text-ink-900">{card.value}</p>
                  <p className="text-xs text-ink-400 mt-1">{card.sub}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-1">AI HR Assistant — Draft Ready</p>
                  <p className="text-sm text-ink-700">Monthly executive summary drafted and awaiting your review. 6 contracts require renewal in the next 30 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-medium text-white">{s.value}</p>
              <p className="text-sm text-ink-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section id="platform" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Platform</div>
            <h2 className="section-title mb-4">Built for serious HR teams.</h2>
            <p className="section-subtitle mx-auto text-center">
              Every module is designed for executives, recruiters, managers, and employees — with the calm precision of an enterprise suite.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="card group hover:shadow-soft hover:border-brand-200 transition-all duration-200">
                <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <f.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">{f.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE STUDIO */}
      <section id="studio" className="py-24 px-6 bg-ink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Intelligence Studio</div>
            <h2 className="section-title mb-4">AI that works with you, not instead of you.</h2>
            <p className="section-subtitle mx-auto text-center">
              Every AI output goes through human review. No auto-published documents. No fake compliance claims.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {studioModules.map(m => (
              <div key={m.title} className="card flex gap-4">
                <div className="text-3xl flex-shrink-0">{m.icon}</div>
                <div>
                  <h3 className="font-semibold text-ink-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/features" className="btn-secondary inline-flex">
              See all features <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Pricing</div>
            <h2 className="section-title mb-4">{t('pricing_title')}</h2>
            <p className="section-subtitle mx-auto text-center">{t('pricing_sub')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map(plan => (
              <div key={plan.nameKey} className={cn(
                'card relative',
                plan.popular && 'border-brand-300 shadow-premium ring-1 ring-brand-200'
              )}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">Most popular</span>
                  </div>
                )}
                <p className="font-semibold text-ink-900 text-lg">{t(plan.nameKey)}</p>
                <p className="text-sm text-ink-500 mt-1 mb-6">{t(plan.descKey)}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  {plan.price ? (
                    <>
                      <span className="font-display text-4xl font-medium text-ink-950">{plan.currency}{plan.price}</span>
                      <span className="text-ink-400 text-sm">{t('plan_mo')}</span>
                    </>
                  ) : (
                    <span className="font-display text-4xl font-medium text-ink-950">{t('plan_custom')}</span>
                  )}
                </div>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.price ? (
                  <Link to="/signup" className={cn('block w-full text-center py-3 rounded-full text-sm font-medium transition-all', plan.popular ? 'btn-primary' : 'btn-secondary')}>
                    {t('plan_trial')}
                  </Link>
                ) : (
                  <Link to="/contact" className="btn-secondary block w-full text-center py-3 rounded-full text-sm font-medium">
                    {t('plan_sales')}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-ink-400 mt-8">
            All plans include 7-day free trial · Extra projects: €15/project after 5 included · Prices in EUR
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 bg-ink-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
            A calmer, more intelligent way to run HR.
          </h2>
          <p className="text-ink-300 mb-8">{t('trial_note')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup" className="btn-primary px-8 py-4 rounded-full text-base">
              Start your workspace <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/app" className="btn-secondary px-8 py-4 rounded-full text-base border-ink-600 text-ink-300 hover:border-ink-400 hover:text-white hover:bg-ink-800">
              Open live workspace
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
