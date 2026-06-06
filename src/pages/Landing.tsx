import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Shield, Users, FileText,
  BarChart3, Brain, Sparkles, Search, Radar,
  Heart, Scale, BookOpen, TrendingUp, Award, Briefcase,
  MessageSquare, Star, Newspaper, Globe2,
} from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { cn } from '../lib/utils';

// ── 14 AI Tools — HR department services only ───────────────────────────────
const aiTools = [
  {
    icon: Brain,         color: 'brand',
    title: 'AI Recruitment Suite™',
    desc:  'CV scoring, job-candidate matching, interview question generation, offer letter drafting — with human-review required on every hiring decision.',
    href:  '/app/recruitment', badge: 'Core',
  },
  {
    icon: FileText,      color: 'blue',
    title: 'HR Document Generator™',
    desc:  'Employment contracts, offer letters, warning letters, salary certificates, probation reviews, termination notices — branded, bilingual, professionally formatted.',
    href:  '/app/studio', badge: 'Core',
  },
  {
    icon: Radar,         color: 'purple',
    title: 'Workforce Intelligence Radar™',
    desc:  'Attrition risk, burnout signals, absenteeism trends, department health scores — predict HR problems before they become crises.',
    href:  '/app/workforce-radar', badge: 'Core',
  },
  {
    icon: Scale,         color: 'amber',
    title: 'HR Policy & Audit Guardian™',
    desc:  'Leave policy compliance, probation tracking, employment contract audit, HR policy gap detector, audit readiness report — internal HR compliance only.',
    href:  '/app/compliance', badge: 'Core',
  },
  {
    icon: BarChart3,     color: 'teal',
    title: 'Executive HR Briefing Room™',
    desc:  'Monthly HR summary, workforce health score, top HR risks, hiring bottlenecks, employee mood — board-ready PDF export.',
    href:  '/app/executive-briefing', badge: 'Core',
  },
  {
    icon: Heart,         color: 'rose',
    title: 'Pulse Survey & Sentiment Engine™',
    desc:  'Anonymous employee pulse, department mood score, burnout alerts, manager trust score — AI-generated HR action plan.',
    href:  '/app/pulse-surveys', badge: 'Core',
  },
  {
    icon: Star,          color: 'gold',
    title: 'Employer Brand Studio™',
    desc:  'Employer Value Proposition generator, job-ad tone analyser, candidate attraction score, brand weakness detection, recruitment messaging.',
    href:  '/app/employer-brand', badge: 'Premium',
  },
  {
    icon: BookOpen,      color: 'brand',
    title: 'Onboarding Journey AI™',
    desc:  '7/30/60/90-day onboarding plans, role-specific checklists, manager guides, employee welcome packs, culture introduction, probation checkpoints.',
    href:  '/app/onboarding', badge: 'Premium',
  },
  {
    icon: MessageSquare, color: 'blue',
    title: 'Culture & Leadership Copilot™',
    desc:  'Conflict handling scripts, low-morale intervention plans, performance conversation guides, burnout support — HR-guided, not AI-decided.',
    href:  '/app/culture-copilot', badge: 'Premium',
  },
  {
    icon: TrendingUp,    color: 'amber',
    title: 'Benefits & Compensation Intelligence™',
    desc:  'Salary band builder, benefits comparison, pay-transparency readiness, compensation communication generator, equity and fairness alerts.',
    href:  '/app/compensation', badge: 'Premium',
  },
  {
    icon: Search,        color: 'teal',
    title: 'HR Intelligence Center™',
    desc:  'AI search for HR questions, topic library covering recruitment, onboarding, performance, leave, culture, compensation — practical HR guidance.',
    href:  '/app/intelligence-center', badge: 'Growth',
  },
  {
    icon: Award,         color: 'rose',
    title: 'HR Academy & Competency Builder™',
    desc:  'Training pathways, role-based competency matrices, skills gap reports, 30/60/90-day learning plans, HR team capability frameworks.',
    href:  '/app/hr-academy', badge: 'Growth',
  },
  {
    icon: Briefcase,     color: 'gold',
    title: 'Exit & Retention Intelligence™',
    desc:  'Exit interview analyser, resignation reason clustering, retention risk score, replacement cost estimate, stay-interview generator.',
    href:  '/app/exit-retention', badge: 'Growth',
  },
  {
    icon: Newspaper,     color: 'brand',
    title: 'AI HR Newsroom™',
    desc:  'Daily HR digest, weekly executive briefing, AI summaries of HR trends — filters for recruitment, performance, culture, benefits, leadership.',
    href:  '/app/hr-newsroom', badge: 'Growth',
  },
];

const colorMap: Record<string, string> = {
  brand:  'bg-brand-50 border-brand-100 text-brand-600',
  blue:   'bg-blue-50 border-blue-100 text-blue-600',
  purple: 'bg-purple-50 border-purple-100 text-purple-600',
  amber:  'bg-amber-50 border-amber-100 text-amber-600',
  teal:   'bg-teal-50 border-teal-100 text-teal-600',
  rose:   'bg-rose-50 border-rose-100 text-rose-600',
  gold:   'bg-yellow-50 border-yellow-100 text-yellow-600',
};

const badgeColor: Record<string, string> = {
  'Core':    'bg-brand-100 text-brand-700',
  'Premium': 'bg-blue-100 text-blue-700',
  'Growth':  'bg-ink-100 text-ink-600',
};

const stats = [
  { value: '14+', label: 'AI-Powered HR Tools' },
  { value: '5',   label: 'Languages incl. Arabic RTL' },
  { value: '7',   label: 'Days Free Trial' },
  { value: '100%',label: 'Human Review on Critical HR Actions' },
];

// ── For who ──────────────────────────────────────────────────────────────────
const forWho = [
  { icon: '🏢', title: 'HR Departments',        desc: 'Complete HR operations: employees, recruitment, documents, performance, onboarding, and reporting.' },
  { icon: '👔', title: 'HR Directors',           desc: 'Strategic workforce intelligence, executive briefings, compliance audits, and board-ready HR reports.' },
  { icon: '🔍', title: 'Recruitment Teams',      desc: 'AI-powered hiring from job post to signed offer letter — CV scoring, interviews, candidate pipeline.' },
  { icon: '📊', title: 'HR Managers',            desc: 'Pulse surveys, performance tracking, onboarding journeys, culture monitoring, and team health scores.' },
  { icon: '🚀', title: 'Growing Companies',      desc: 'Build a professional HR foundation from your first hire without a large dedicated HR team.' },
  { icon: '🌍', title: 'Multi-location Teams',   desc: 'Manage HR operations across offices and branches with a single unified workspace.' },
];

const plans = [
  {
    name: 'Starter', price: '49', billing: '/mo',
    desc: 'For HR teams centralising employee operations.',
    features: ['Up to 25 employees', 'HR Document Generator™', 'Smart Employee Import™', 'Company Identity Engine™', 'Email support'],
    highlight: false,
  },
  {
    name: 'Professional', price: '149', billing: '/mo',
    desc: 'Full AI suite for growing HR departments.',
    features: ['Up to 150 employees', 'AI Recruitment Suite™', 'Workforce Radar™', 'Pulse Surveys™', 'HR Policy Audit™', 'Executive Briefing™', 'Arabic RTL included'],
    highlight: true,
  },
  {
    name: 'Business', price: '299', billing: '/mo',
    desc: 'Advanced analytics and full HR intelligence.',
    features: ['Unlimited employees', 'All Professional features', 'Employer Brand Studio™', 'HR Academy™', 'Exit & Retention™', 'Branded PDF exports', 'Priority support'],
    highlight: false,
  },
];

export function Landing() {
  const { isRTL } = useLang();

  return (
    <>
      <SEOHead
        title="AI-Powered HR Software for Companies"
        description="REBOULO SmartHR AI — 14 AI-powered HR tools for company HR departments: recruitment, documents, performance, compliance, workforce intelligence, pulse surveys, executive briefing."
        canonical="https://reboulo-uae.com/"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="gradient-hero min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <div className="max-w-5xl mx-auto animate-fade-up">
          <div className="section-label mx-auto mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            REBOULO HR Intelligence Suite™ — 14 AI Tools for HR Departments
          </div>
          <h1 className={cn('font-display text-5xl md:text-6xl lg:text-7xl font-medium text-ink-950 leading-[1.1] mb-6 text-balance', isRTL && 'text-right')}>
            The intelligent HR platform<br />
            <em className="text-brand-600 not-italic">for modern companies.</em>
          </h1>
          <p className={cn('text-lg md:text-xl text-ink-500 leading-relaxed max-w-3xl mx-auto mb-10', isRTL && 'text-right')}>
            Recruitment · Employee Management · Performance · Documents · HR Compliance ·<br className="hidden md:block" />
            Workforce Intelligence · Pulse Surveys · Executive Reporting — all in one HR workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link to="/signup" className="btn-primary text-base px-8 py-4 rounded-full">
              Start free — 7 days <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/demo" className="btn-secondary text-base px-8 py-4 rounded-full">
              See how it works
            </Link>
          </div>
          <p className="text-xs text-ink-400">7-day free trial · No credit card · Full HR platform access</p>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 max-w-6xl mx-auto w-full animate-fade-in">
          <div className="bg-white rounded-3xl shadow-premium border border-ink-100 overflow-hidden">
            <div className="bg-ink-950 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-ink-800 rounded-md px-3 py-1 text-xs text-ink-400 text-center max-w-xs mx-auto">
                app.reboulo-uae.com / HR Dashboard
              </div>
            </div>
            <div className="flex">
              <div className="hidden md:flex w-48 bg-ink-50 border-r border-ink-100 flex-col py-4 px-3 gap-0.5">
                {['Dashboard','Employees','Recruitment AI','HR Documents','HR Policy Audit','Workforce Radar','Pulse Surveys','Executive Briefing'].map((item, i) => (
                  <div key={item} className={cn('px-2 py-1.5 rounded-lg text-xs font-medium', i === 0 ? 'bg-brand-100 text-brand-700' : 'text-ink-500')}>{item}</div>
                ))}
              </div>
              <div className="flex-1 p-5 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { l: 'Total Employees',   v: '248', s: '+12 this month' },
                    { l: 'Open Positions',    v: '06',  s: '3 candidates shortlisted' },
                    { l: 'HR Policy Alerts',  v: '02',  s: 'Leave policy review due' },
                    { l: 'Pulse Score',       v: '74%', s: 'Engagement healthy' },
                  ].map(c => (
                    <div key={c.l} className="bg-ink-50 rounded-xl p-3">
                      <p className="text-[10px] text-ink-400 uppercase tracking-wide mb-1">{c.l}</p>
                      <p className="font-display text-2xl font-medium text-ink-900">{c.v}</p>
                      <p className="text-[10px] text-ink-400 mt-0.5">{c.s}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 flex gap-2">
                    <Brain className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-brand-700 uppercase tracking-wide">AI Recruitment</p>
                      <p className="text-xs text-ink-600 mt-0.5">3 CVs scored · Top candidate: 92% match · Human review required before any decision</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2">
                    <Scale className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide">HR Policy Audit</p>
                      <p className="text-xs text-ink-600 mt-0.5">Leave policy outdated · 3 probation reviews due · 2 contract renewals this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-ink-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-display text-4xl font-medium text-white mb-1">{s.value}</p>
              <p className="text-sm text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 14 AI HR TOOLS ────────────────────────────────────────────────── */}
      <section id="platform" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">14 AI-Powered HR Tools</div>
            <h2 className="section-title mb-4">Every HR function. One intelligent platform.</h2>
            <p className="section-subtitle mx-auto text-center">
              From recruitment to performance, onboarding to exit interviews —<br className="hidden md:block" />
              each tool is built for HR departments and reviewed by HR professionals.
            </p>
          </div>

          {['Core', 'Premium', 'Growth'].map(tier => (
            <div key={tier} className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <span className={cn('text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full', badgeColor[tier])}>
                  {tier === 'Core' ? 'Core HR Platform' : tier === 'Premium' ? 'Premium HR Tools' : 'HR Intelligence & Growth'}
                </span>
                <div className="flex-1 h-px bg-ink-100" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {aiTools.filter(t => t.badge === tier).map(tool => (
                  <div key={tool.title} className="card group hover:shadow-soft hover:border-brand-200 transition-all duration-200 relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className={cn('h-10 w-10 rounded-xl border flex items-center justify-center flex-shrink-0', colorMap[tool.color])}>
                        <tool.icon className="h-5 w-5" />
                      </div>
                      <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-full', badgeColor[tool.badge])}>
                        {tool.badge}
                      </span>
                    </div>
                    <h3 className="font-semibold text-ink-900 mb-1.5 text-sm leading-snug">{tool.title}</h3>
                    <p className="text-xs text-ink-500 leading-relaxed">{tool.desc}</p>
                    <Link to={tool.href} className="mt-3 inline-flex items-center gap-1 text-xs text-brand-600 font-medium hover:text-brand-700 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HR AI GOVERNANCE ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">AI Governance for HR</div>
            <h2 className="section-title mt-2 mb-4">The AI prepares. The HR team decides.</h2>
            <p className="text-ink-500 leading-relaxed mb-8">
              Every AI output in REBOULO SmartHR AI includes a risk level, confidence score, and a mandatory human-review flag. The platform never makes final HR decisions automatically — hiring, termination, discipline, or performance ratings always require qualified HR professional review.
            </p>
            <ul className="space-y-3">
              {[
                'Human review required for all hiring and termination decisions',
                'Explainable candidate scoring — no black-box HR assessments',
                'Bias-warning on recruitment AI outputs',
                'All HR document drafts reviewed before finalising',
                'Pulse survey data — anonymous, never individual-identifiable',
                'AI audit log on every generated HR recommendation',
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-ink-100 shadow-soft p-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-4">Sample HR AI Output</p>
            {[
              { label: 'Tool',                   value: 'AI Recruitment Suite™' },
              { label: 'Output',                  value: 'Candidate scored 91% match — Senior HR Manager' },
              { label: 'Risk Level',              value: '🟡 Low — strong match on 7 of 8 HR criteria' },
              { label: 'Confidence',              value: '87% — CV data only. Interview needed.' },
              { label: 'Recommended Action',      value: 'Schedule structured interview with HR panel' },
              { label: 'Human Review Required',   value: '✅ YES — HR Director must make final decision' },
            ].map(row => (
              <div key={row.label} className="flex gap-3 text-sm border-b border-ink-50 pb-2 last:border-0">
                <span className="text-ink-400 w-40 flex-shrink-0 text-xs">{row.label}</span>
                <span className="text-ink-800 font-medium text-xs">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHO ───────────────────────────────────────────────────────── */}
      <section id="for-who" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Built For</div>
            <h2 className="section-title mb-4">Who uses REBOULO SmartHR AI?</h2>
            <p className="section-subtitle mx-auto text-center">
              Designed for HR professionals who want intelligent tools, not just databases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forWho.map(item => (
              <div key={item.title} className="card flex gap-4 hover:shadow-soft hover:border-brand-200 transition-all duration-200">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE STUDIO ───────────────────────────────────────────── */}
      <section id="studio" className="py-24 px-6 bg-ink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">HR Intelligence Studio</div>
            <h2 className="section-title mb-4">AI-drafted. HR-reviewed. Company-branded.</h2>
            <p className="section-subtitle mx-auto text-center">
              Every document carries your company logo, letterhead, and signature.<br />Every AI report goes through your HR team's review queue before distribution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📊', title: 'HR Intelligence Studio™',  desc: 'AI-drafted HR reports reviewed by your HR team — never auto-published.' },
              { icon: '🎨', title: 'Branded Report Studio™',   desc: 'Reports carry your company identity on every page.' },
              { icon: '📬', title: 'AI Report Courier™',       desc: 'Route drafts through your HR review queue before distribution.' },
              { icon: '📄', title: '15 HR Document Types',     desc: 'Contracts, letters, certificates — formal, friendly, or bilingual.' },
            ].map(m => (
              <div key={m.title} className="card flex gap-3 hover:shadow-soft transition-all">
                <span className="text-2xl flex-shrink-0">{m.icon}</span>
                <div>
                  <h3 className="font-semibold text-ink-900 text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-ink-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Pricing</div>
            <h2 className="section-title mb-4">Simple plans for every HR team.</h2>
            <p className="section-subtitle mx-auto text-center">Start with a 7-day free trial. All prices in EUR. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map(plan => (
              <div key={plan.name} className={cn('card relative', plan.highlight && 'border-brand-300 shadow-premium ring-1 ring-brand-200')}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">Most popular</span>
                  </div>
                )}
                <p className="font-semibold text-ink-900 text-xl">{plan.name}</p>
                <p className="text-sm text-ink-500 mt-1 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-medium text-ink-950">€{plan.price}</span>
                  <span className="text-ink-400 text-sm">{plan.billing}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-600">
                      <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className={cn('block w-full text-center py-3 rounded-full text-sm font-medium transition-all', plan.highlight ? 'btn-primary' : 'btn-secondary')}>
                  Start 7-day free trial
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xs text-ink-400 mb-4">Enterprise plan available · Custom AI workflows · Dedicated HR Customer Success Manager</p>
            <Link to="/pricing" className="btn-secondary inline-flex text-sm">
              Full pricing details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECURITY ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto"><Shield className="h-3.5 w-3.5" /> Security & Data Privacy</div>
            <h2 className="section-title mb-4">Your HR data is secure and private.</h2>
            <p className="section-subtitle mx-auto text-center">
              HR data is sensitive. REBOULO SmartHR AI is built with security and privacy as architectural foundations, not features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Shield,  title: 'Company Data Isolation',   desc: 'Row-Level Security on every database table. One company can never access another company\'s HR data, employees, or documents.' },
              { icon: Globe2,  title: 'Privacy-by-Design',        desc: 'HR data processed on your behalf with full confidentiality. Private document storage with signed access URLs. No permanent public links to HR files.' },
              { icon: Users,   title: '8 HR Role Levels',         desc: 'Owner, HR Admin, HR Staff, Recruiter, Manager, Employee, Auditor, Viewer — permissions enforced at database level, not just the interface.' },
            ].map(item => (
              <div key={item.title} className="card text-center">
                <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-ink-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">Start Today</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            14 HR tools. One platform.<br />Calm, precise, professional.
          </h2>
          <p className="text-ink-400 text-lg mb-8">
            منصة ذكاء اصطناعي متكاملة لقسم الموارد البشرية — توظيف، وثائق، أداء، رواتب، ثقافة مؤسسية، وتقارير تنفيذية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup" className="btn-primary px-8 py-4 rounded-full text-base">
              Start free — 7 days <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 rounded-full text-base border-ink-600 text-ink-300 hover:border-ink-400 hover:text-white hover:bg-ink-800">
              Request a demo
            </Link>
          </div>
          <p className="text-ink-500 text-xs mt-5">No credit card · Full access · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
