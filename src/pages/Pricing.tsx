import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { useLang } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Starter', price: '49', billing: '/month',
    desc: 'For lean HR teams centralising people operations.',
    highlight: false,
    features: [
      'Up to 25 employees', 'Smart Employee Import™ (Excel/CSV)',
      'Company Identity Engine™', 'Employee directory & profiles',
      'HR document generation (10/month)', 'Notification Inbox™',
      'Launch Readiness Score™', 'Email support',
    ],
    cta: 'Start 7-day free trial', ctaLink: '/signup',
  },
  {
    name: 'Growth', price: '149', billing: '/month',
    desc: 'For scaling companies needing full HR intelligence.',
    highlight: true,
    features: [
      'Up to 150 employees', 'All Starter features',
      'AI HR Console™ (OpenAI-powered)', 'Branded Report Studio™',
      'AI Report Courier™', 'Project Cost Centers™ (5 included)',
      'Multi-branch & multi-language', 'Arabic RTL full support',
      'Audit Center™', 'Priority support',
    ],
    cta: 'Start 7-day free trial', ctaLink: '/signup',
  },
  {
    name: 'Enterprise', price: null, billing: '',
    desc: 'For global organisations with complex workforce needs.',
    highlight: false,
    features: [
      'Unlimited employees', 'Up to 3 company workspaces',
      'All Growth features', 'SSO & advanced role management',
      'Custom AI workflows & prompts', 'White-label documents',
      'Dedicated Customer Success Manager', '99.99% uptime SLA',
      'Custom data retention policy', 'Priority security review',
    ],
    cta: 'Talk to sales', ctaLink: '/contact',
  },
];

const addons = [
  { name: 'Extra Project', price: '€15', billing: '/project/month', desc: 'Each company includes 5 projects. Add more as needed.' },
  { name: 'Extra Document Pack', price: '€29', billing: '/month', desc: '500 additional AI-generated HR documents per month.' },
  { name: 'Priority Onboarding', price: '€299', billing: 'one-time', desc: 'Dedicated 4-hour onboarding session with a REBOULO specialist.' },
];

export function Pricing() {
  const { t } = useLang();
  return (
    <>
      <SEOHead
        title="Pricing — Plans that scale with you"
        description="Transparent pricing for REBOULO SmartHR AI. Start with a 7-day free trial. Monthly and annual plans available. No credit card required."
        canonical="https://reboulo-uae.com/pricing"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-6 text-center gradient-hero">
          <div className="section-label mx-auto">Pricing</div>
          <h1 className="section-title mt-2 mb-4">{t('pricing_title')}</h1>
          <p className="section-subtitle mx-auto text-center">{t('pricing_sub')}</p>
          <p className="text-xs text-ink-400 mt-4">All prices in EUR · 7-day free trial on all plans · No credit card required</p>
        </section>

        {/* Plans */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
            {plans.map(plan => (
              <div key={plan.name} className={cn('card relative', plan.highlight && 'border-brand-300 shadow-premium ring-1 ring-brand-200')}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most popular</span>
                  </div>
                )}
                <p className="font-semibold text-ink-900 text-xl">{plan.name}</p>
                <p className="text-sm text-ink-500 mt-1 mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  {plan.price ? (
                    <><span className="font-display text-5xl font-medium text-ink-950">€{plan.price}</span><span className="text-ink-400">{plan.billing}</span></>
                  ) : (
                    <span className="font-display text-4xl font-medium text-ink-950">Custom</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
                <Link to={plan.ctaLink} className={cn('block w-full text-center py-3.5 rounded-xl text-sm font-medium transition-all', plan.highlight ? 'btn-primary' : 'btn-secondary')}>
                  {plan.cta} <ArrowRight className="inline h-3.5 w-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 px-6 bg-ink-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-2">Add-ons</h2>
            <p className="text-ink-500 mb-10">Extend your plan with optional modules.</p>
            <div className="grid md:grid-cols-3 gap-5">
              {addons.map(a => (
                <div key={a.name} className="card">
                  <p className="font-semibold text-ink-900 mb-1">{a.name}</p>
                  <p className="text-sm text-ink-500 mb-3">{a.desc}</p>
                  <p className="font-display text-2xl font-medium text-ink-950">{a.price}<span className="text-sm text-ink-400 font-sans"> {a.billing}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-10 text-center">Frequently asked</h2>
            {[
              { q: 'What happens after the 7-day trial?', a: 'Your workspace and all data remain safe. You can choose a plan to continue or export your data. We never auto-charge without your explicit authorisation.' },
              { q: 'Is there a limit on employee imports?', a: 'No import limit. The employee count limit applies to active employees in your directory.' },
              { q: 'Is OpenAI required for the AI Console?', a: 'Yes. You provide your own OpenAI API key, stored securely in our backend. We never expose keys to the frontend.' },
              { q: 'Can I manage multiple companies?', a: 'Yes. One account can manage up to 3 separate company workspaces. Each has isolated data, branding, employees, and billing.' },
              { q: 'Is HR employee data secure and private?', a: 'Yes. Every company\'s HR data is fully isolated using Row-Level Security. Private document storage with signed URLs. No permanent public links to employee records or HR documents. We take HR data privacy seriously by design.' },
            ].map(f => (
              <details key={f.q} className="border-b border-ink-100 py-4 group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-ink-900 list-none">
                  {f.q}
                  <ArrowRight className="h-4 w-4 text-ink-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
