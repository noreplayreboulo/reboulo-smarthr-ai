import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Shield, Globe2, Users, FileText,
  BarChart3, Brain, Sparkles, ChevronRight, Search, Radar,
  Heart, Scale, BookOpen, TrendingUp, Award, Briefcase,
  MessageSquare, Star, Newspaper,
} from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { cn } from '../lib/utils';

// ── AI Tools ────────────────────────────────────────────────────────────────
const aiTools = [
  {
    icon: Brain,      color: 'brand',
    title: 'AI Recruitment Suite™',
    desc:  'CV parsing, candidate scoring, job matching, interview questions, offer letter generation — with bias-warning and human-review layer.',
    href:  '/app/recruitment',
    badge: 'Priority 1',
  },
  {
    icon: FileText,   color: 'blue',
    title: 'HR Document Generator™',
    desc:  'Employment contracts, offer letters, warning letters, salary certificates, termination notices — branded, bilingual, formal or friendly tone.',
    href:  '/app/studio',
    badge: 'Priority 1',
  },
  {
    icon: Radar,      color: 'purple',
    title: 'Workforce Intelligence Radar™',
    desc:  'Attrition risk, burnout signals, absenteeism trends, department health scores, skills gaps — predict problems before they become crises.',
    href:  '/app/workforce-radar',
    badge: 'Priority 1',
  },
  {
    icon: Scale,      color: 'amber',
    title: 'HR Compliance & Policy Guardian™',
    desc:  'Country-specific checklists, visa/work-permit expiry alerts, probation tracker, policy gap detector, audit readiness report.',
    href:  '/app/compliance',
    badge: 'Priority 1',
  },
  {
    icon: BarChart3,  color: 'teal',
    title: 'Executive HR Briefing Room™',
    desc:  'Monthly HR summary, top 3 risks, hiring bottlenecks, employee mood, compliance urgency — board-ready PDF export.',
    href:  '/app/executive-briefing',
    badge: 'Priority 1',
  },
  {
    icon: Heart,      color: 'rose',
    title: 'Pulse Survey & Sentiment Risk Engine™',
    desc:  'Anonymous employee pulse, department mood score, burnout alerts, manager trust score — AI-generated action plan.',
    href:  '/app/pulse-surveys',
    badge: 'Priority 1',
  },
  {
    icon: Star,       color: 'gold',
    title: 'Employer Brand Studio™',
    desc:  'EVP generator, job-ad tone analyzer, candidate attraction score, employer brand weakness detection, recruitment messaging.',
    href:  '/app/employer-brand',
    badge: 'Priority 2',
  },
  {
    icon: BookOpen,   color: 'brand',
    title: 'Onboarding Journey AI™',
    desc:  '7/30/60/90-day onboarding plans, role-specific checklists, welcome packs, culture introduction, probation checkpoints.',
    href:  '/app/onboarding',
    badge: 'Priority 2',
  },
  {
    icon: MessageSquare, color: 'blue',
    title: 'Culture & Leadership Copilot™',
    desc:  'Conflict handling, low-morale diagnosis, performance conversation scripts, burnout intervention — HR-guided not AI-decided.',
    href:  '/app/culture-copilot',
    badge: 'Priority 2',
  },
  {
    icon: Globe2,     color: 'purple',
    title: 'Global HR Country Guide™',
    desc:  'Hiring checklists, contract requirements, probation rules, leave laws, termination basics — UAE, Portugal, UK, Spain, France, USA.',
    href:  '/app/country-guide',
    badge: 'Priority 2',
  },
  {
    icon: TrendingUp, color: 'amber',
    title: 'Benefits & Compensation Intelligence™',
    desc:  'Salary band builder, benefits comparison, pay-transparency readiness, compensation communication generator, equity/fairness alerts.',
    href:  '/app/compensation',
    badge: 'Priority 2',
  },
  {
    icon: Search,     color: 'teal',
    title: 'HR Intelligence Center™',
    desc:  'AI search for HR questions, topic library, country-specific insights, daily risk alerts, compliance watch, recommended actions.',
    href:  '/app/intelligence-center',
    badge: 'Priority 3',
  },
  {
    icon: Award,      color: 'rose',
    title: 'HR Academy & Competency Builder™',
    desc:  'Training pathways, competency matrices, skills gap reports, 30/60/90-day learning plans, assessment questions.',
    href:  '/app/hr-academy',
    badge: 'Priority 3',
  },
  {
    icon: Briefcase,  color: 'gold',
    title: 'Exit & Retention Intelligence™',
    desc:  'Exit interview analyzer, resignation clustering, retention risk score, replacement cost estimate, stay-interview generator.',
    href:  '/app/exit-retention',
    badge: 'Priority 3',
  },
  {
    icon: Newspaper,  color: 'brand',
    title: 'AI HR Newsroom™',
    desc:  'Daily HR digest, weekly executive briefing, AI summaries of HR news — filters for compliance, recruitment, AI, culture, benefits.',
    href:  '/app/hr-newsroom',
    badge: 'Priority 3',
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
  'Priority 1': 'bg-brand-100 text-brand-700',
  'Priority 2': 'bg-blue-100 text-blue-700',
  'Priority 3': 'bg-ink-100 text-ink-600',
};

// ── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '15+', label: 'AI-Powered Tools' },
  { value: '5',   label: 'Languages (incl. Arabic RTL)' },
  { value: '6+',  label: 'Countries HR Coverage' },
  { value: '100%',label: 'Human Review on Critical Actions' },
];

// ── For-who ──────────────────────────────────────────────────────────────────
const forWho = [
  { icon: '🏢', title: 'SMEs & Scale-ups',     desc: 'Full HR operations from day one without a large HR team.' },
  { icon: '👔', title: 'HR Directors',          desc: 'Intelligent tools for strategic decisions and compliance.' },
  { icon: '🔍', title: 'Recruitment Teams',     desc: 'AI-powered hiring from job post to signed offer letter.' },
  { icon: '🌍', title: 'Global Companies',      desc: 'Multi-country compliance, multi-language, multi-currency.' },
  { icon: '🇦🇪', title: 'UAE & GCC Companies',  desc: 'UAE PDPL-ready, visa tracking, UAE-first HR workflows.' },
  { icon: '🚀', title: 'Growing Startups',      desc: 'Build professional HR foundations from the first hire.' },
];

// ── Plans preview ────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Starter', price: '49', billing: '/mo',
    desc: 'Employees, documents, import, basic compliance.',
    features: ['Up to 25 employees', 'HR Document Generator™', 'Smart Import™', 'Company Identity Engine™'],
    highlight: false,
  },
  {
    name: 'Professional', price: '149', billing: '/mo',
    desc: 'Full AI suite for growing HR teams.',
    features: ['Up to 150 employees', 'AI Recruitment Suite™', 'Workforce Radar™', 'Pulse Surveys™', 'Compliance Guardian™', 'Executive Briefing™'],
    highlight: true,
  },
  {
    name: 'Business', price: '299', billing: '/mo',
    desc: 'Advanced analytics and global coverage.',
    features: ['Unlimited employees', 'Country HR Guides™', 'Employer Brand Studio™', 'HR Academy™', 'Branded PDF exports', 'Priority support'],
    highlight: false,
  },
];

export function Landing() {
  const { isRTL } = useLang();

  return (
    <>
      <SEOHead
        title="The AI Control Room for Modern HR"
        description="REBOULO SmartHR AI — 15 AI-powered HR tools: recruitment, compliance, workforce intelligence, document generation, pulse surveys, executive briefing. UAE-first, global-ready."
        canonical="https://reboulo-uae.com/"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="gradient-hero min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <div className="max-w-5xl mx-auto animate-fade-up">
          <div className="section-label mx-auto mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            REBOULO HR Intelligence Suite™ — 15 AI Tools in One Platform
          </div>

          <h1 className={cn(
            'font-display text-5xl md:text-6xl lg:text-7xl font-medium text-ink-950 leading-[1.1] mb-6 text-balance',
            isRTL && 'text-right'
          )}>
            The AI Control Room<br />
            for <em className="text-brand-600 not-italic">Modern HR</em>
          </h1>

          <p className={cn('text-lg md:text-xl text-ink-500 leading-relaxed max-w-3xl mx-auto mb-10', isRTL && 'text-right')}>
            Recruitment · Compliance · Workforce Intelligence · Documents · Pulse Surveys · Executive Briefing ·<br className="hidden md:block" />
            Employer Brand · Onboarding · Culture — all powered by AI, all reviewed by humans.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link to="/signup" className="btn-primary text-base px-8 py-4 rounded-full">
              Start free — 7 days <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/features" className="btn-secondary text-base px-8 py-4 rounded-full">
              Explore all 15 tools
            </Link>
          </div>
          <p className="text-xs text-ink-400">7-day free trial · No credit card · Full platform access</p>
        </div>

        {/* ── Dashboard mockup ── */}
        <div className="mt-20 max-w-6xl mx-auto w-full animate-fade-in">
          <div className="bg-white rounded-3xl shadow-premium border border-ink-100 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-ink-950 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <div className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-ink-800 rounded-md px-3 py-1 text-xs text-ink-400 text-center max-w-xs mx-auto">
                app.reboulo-uae.com/dashboard
              </div>
            </div>

            {/* Mock dashboard */}
            <div className="flex">
              {/* Sidebar preview */}
              <div className="hidden md:flex w-48 bg-ink-50 border-r border-ink-100 flex-col py-4 px-3 gap-0.5">
                {['Dashboard','Employees','Recruitment AI','HR Documents','Compliance','Workforce Radar','Pulse Surveys','Executive Briefing'].map((item, i) => (
                  <div key={item} className={cn(
                    'px-2 py-1.5 rounded-lg text-xs font-medium',
                    i === 0 ? 'bg-brand-100 text-brand-700' : 'text-ink-500'
                  )}>{item}</div>
                ))}
              </div>

              {/* Main content preview */}
              <div className="flex-1 p-5 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { l: 'Workforce', v: '248', s: '+12 this month', c: 'brand' },
                    { l: 'Open Roles', v: '06', s: '3 candidates shortlisted', c: 'blue' },
                    { l: 'Compliance Alerts', v: '02', s: 'Visa expiry in 30 days', c: 'amber' },
                    { l: 'Pulse Score', v: '74%', s: 'Engagement healthy', c: 'teal' },
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
                      <p className="text-xs text-ink-600 mt-0.5">3 CVs analysed · Top candidate: 92% match · Human review recommended</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex gap-2">
                    <Scale className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide">Compliance Guardian</p>
                      <p className="text-xs text-ink-600 mt-0.5">2 visa renewals due · UAE PDPL audit ready · Policy gap detected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
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

      {/* ── 15 AI TOOLS ──────────────────────────────────────────────────── */}
      <section id="platform" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">15 AI-Powered Tools</div>
            <h2 className="section-title mb-4">Everything HR needs. One platform.</h2>
            <p className="section-subtitle mx-auto text-center">
              From recruitment to compliance, documents to workforce intelligence —<br className="hidden md:block" />
              each tool is AI-assisted and human-reviewed.
            </p>
          </div>

          {/* Priority 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full">Priority Tier — Core Platform</span>
              <div className="flex-1 h-px bg-ink-100" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiTools.filter(t => t.badge === 'Priority 1').map(tool => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>
          </div>

          {/* Priority 2 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Premium Differentiators</span>
              <div className="flex-1 h-px bg-ink-100" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiTools.filter(t => t.badge === 'Priority 2').map(tool => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>
          </div>

          {/* Priority 3 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-500 bg-ink-100 px-3 py-1 rounded-full">Authority & Growth Layer</span>
              <div className="flex-1 h-px bg-ink-100" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiTools.filter(t => t.badge === 'Priority 3').map(tool => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI GOVERNANCE ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">AI Governance</div>
              <h2 className="section-title mt-2 mb-4">AI that assists. Humans who decide.</h2>
              <p className="text-ink-500 leading-relaxed mb-8">
                Every REBOULO AI output includes a risk level, confidence score, recommended action, and a mandatory human-review flag. We never auto-reject candidates, never make final legal claims, and never replace qualified professional judgment.
              </p>
              <ul className="space-y-3">
                {[
                  'Human review required for hiring, termination & discipline',
                  'Explainable candidate scoring — no black-box decisions',
                  'Bias-warning layer on all recruitment AI outputs',
                  'Legal disclaimer on all compliance outputs',
                  'AI audit logs for every generated recommendation',
                  'Anonymous survey data — employee identity never exposed',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-ink-100 shadow-soft p-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-2">Sample AI Output Structure</p>
              {[
                { label: 'Output', value: 'Candidate Ahmed K. — 91% match score for Senior HR Manager role', color: 'ink' },
                { label: 'Risk Level', value: 'Low — strong match across 7 of 8 criteria', color: 'brand' },
                { label: 'Confidence', value: '87% — based on CV data only. Reference check pending.', color: 'blue' },
                { label: 'Recommended Action', value: 'Schedule structured interview. Do not auto-advance.', color: 'amber' },
                { label: 'Human Review Required', value: 'YES — Final hiring decision must be made by HR director.', color: 'red' },
              ].map(row => (
                <div key={row.label} className="flex gap-3 text-sm">
                  <span className="text-ink-400 w-36 flex-shrink-0">{row.label}</span>
                  <span className="text-ink-800 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR WHO ──────────────────────────────────────────────────────── */}
      <section id="for-who" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Built For</div>
            <h2 className="section-title mb-4">Who uses REBOULO SmartHR AI?</h2>
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

      {/* ── INTELLIGENCE STUDIO ──────────────────────────────────────────── */}
      <section id="studio" className="py-24 px-6 bg-ink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Intelligence Studio</div>
            <h2 className="section-title mb-4">AI-drafted. Human-reviewed. Company-branded.</h2>
            <p className="section-subtitle mx-auto text-center">Every document carries your logo, letterhead, signature, and footer. Every AI report goes through a human review queue before distribution.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📊', title: 'HR Intelligence Studio™',   desc: 'AI-drafted reports reviewed by your team — never auto-published.' },
              { icon: '🎨', title: 'Branded Report Studio™',    desc: 'Reports carry your company identity on every page.' },
              { icon: '📬', title: 'AI Report Courier™',        desc: 'Route drafts through human review queues before distribution.' },
              { icon: '📄', title: '15 Document Templates',     desc: 'Contracts, letters, plans — formal, friendly, or bilingual.' },
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

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-label mx-auto">Pricing</div>
            <h2 className="section-title mb-4">Plans that scale with your HR ambition.</h2>
            <p className="section-subtitle mx-auto text-center">Start with a 7-day free trial. All prices in EUR.</p>
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
          <p className="text-center text-xs text-ink-400 mt-8">
            Enterprise plan available · Custom AI workflows · Dedicated CSM · 99.99% SLA · Extra projects €15/project
          </p>
          <div className="text-center mt-6">
            <Link to="/pricing" className="btn-secondary inline-flex">
              See full pricing details <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECURITY ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-ink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label mx-auto"><Shield className="h-3.5 w-3.5" /> Security & Privacy</div>
            <h2 className="section-title mb-4">Enterprise-grade security. Privacy by design.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Shield,    title: 'RLS-Enforced Isolation',  desc: 'Row-Level Security on every table. One company can never access another\'s data.' },
              { icon: Globe2,    title: 'GDPR & UAE PDPL Ready',   desc: 'Privacy-by-design architecture. Compliance-aware workflows. Human review on sensitive actions.' },
              { icon: Users,     title: '8 Role Levels',           desc: 'Owner, HR Admin, HR Staff, Recruiter, Manager, Employee, Auditor, Viewer — enforced at database level.' },
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

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-ink-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">The AI Control Room for Modern HR</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
            15 AI tools. One platform.<br />Calm, precise, enterprise-grade.
          </h2>
          <p className="text-ink-400 text-lg mb-8">
            غرفة تحكم ذكية للموارد البشرية — توظيف، امتثال، وثائق، تحليلات، ثقافة مؤسسية، وتقارير تنفيذية باحترافية عالمية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/signup" className="btn-primary px-8 py-4 rounded-full text-base">
              Start free — 7 days <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 rounded-full text-base border-ink-600 text-ink-300 hover:border-ink-400 hover:text-white hover:bg-ink-800">
              Request a demo
            </Link>
          </div>
          <p className="text-ink-500 text-xs mt-5">No credit card · Full 7-day access · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}

// ── Tool Card Component ───────────────────────────────────────────────────────
function ToolCard({ tool }: { tool: typeof aiTools[0] }) {
  return (
    <div className="card group hover:shadow-soft hover:border-brand-200 transition-all duration-200 relative">
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
        Explore tool <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
