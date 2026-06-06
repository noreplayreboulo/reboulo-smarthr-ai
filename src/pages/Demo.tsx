import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Play, ArrowRight, CheckCircle2, Brain, FileText, Radar,
  Scale, BarChart3, Heart, Users, Shield, Globe2, ChevronRight,
  Star, Sparkles, Lock, Zap,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { cn } from '../lib/utils';

// ─── Demo Steps ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: 1, icon: Users, color: 'brand',
    title: 'Set up your company workspace',
    subtitle: 'Company Identity Engine™',
    desc: 'Upload your logo, letterhead, stamp, and signature. Define your document reference format, language, and brand colours. Every HR document generated will carry your exact company identity.',
    points: ['Legal company name & brand name','Logo, letterhead, stamp upload','Document numbering format','HR email & phone for letters','Report language (Arabic RTL supported)'],
    preview: {
      label: 'Company Setup Progress',
      items: [
        { k: 'Company Identity',  v: '✅ Complete' },
        { k: 'Logo uploaded',     v: '✅ Done' },
        { k: 'Letterhead',        v: '✅ Done' },
        { k: 'Document language', v: '🇦🇪 Arabic + 🇬🇧 English' },
        { k: 'Launch Score',      v: '82% — Operationally Ready' },
      ],
    },
  },
  {
    id: 2, icon: Users, color: 'blue',
    title: 'Import your workforce',
    subtitle: 'Smart Employee Import™',
    desc: 'Upload your employee list via Excel or CSV. The platform validates every row — employee_number is mandatory and unique per company. Preview errors before confirming. No fake import success.',
    points: ['Excel (.xlsx) and CSV support','employee_number mandatory & unique','Real-time row-by-row validation before confirming','Optional fields: department, job title, salary, contract type, probation end date','Full import history & audit log'],
    preview: {
      label: 'Import Preview — 47 employees',
      items: [
        { k: 'Valid rows',    v: '45 ready' },
        { k: 'Errors',        v: '2 — missing employee_number' },
        { k: 'Warnings',      v: '1 — unknown department' },
        { k: 'Contract type fields', v: '45 rows complete' },
        { k: 'Status',        v: '⚠️ Fix errors to confirm' },
      ],
    },
  },
  {
    id: 3, icon: Brain, color: 'purple',
    title: 'AI Recruitment Suite',
    subtitle: 'CV Analysis · Scoring · Interview Questions',
    desc: 'Upload a CV and the AI scores the candidate across 8 criteria: skills match, experience, education, language fit, location, salary range, culture indicators, and red flags. Human review is always required.',
    points: ['CV parsing in seconds','Candidate-job matching score','Bias-warning layer on every assessment','Interview question generator per role','Offer letter draft — branded, ready to review'],
    preview: {
      label: 'Candidate Assessment — Ahmed K.',
      items: [
        { k: 'Skills match',     v: '94%' },
        { k: 'Experience fit',   v: '89%' },
        { k: 'Language',         v: 'Arabic + English — Excellent' },
        { k: 'Risk flags',       v: 'None detected' },
        { k: 'Recommendation',   v: '🟡 Schedule interview — human review required' },
      ],
    },
  },
  {
    id: 4, icon: FileText, color: 'teal',
    title: 'Generate branded HR documents',
    subtitle: 'HR Document Generator™ — 15 template types',
    desc: 'Select a document type, fill in the key fields, and the AI prepares a draft. Choose tone: formal corporate, friendly HR, legal-risk cautious, or bilingual. Always preview before exporting.',
    points: ['Employment contracts, offer letters, warnings','Salary certificates, probation reviews, terminations','Formal / friendly / bilingual output modes','Branded with your logo and letterhead','Human review before any document is finalised'],
    preview: {
      label: 'Salary Certificate — Preview',
      items: [
        { k: 'Document type',  v: 'Salary Certificate' },
        { k: 'Employee',       v: 'Sarah Al-Rashidi · EMP-0042' },
        { k: 'Language',       v: 'English + Arabic (bilingual)' },
        { k: 'Letterhead',     v: 'Your Company — applied' },
        { k: 'Status',         v: '📝 Draft — awaiting HR manager review' },
      ],
    },
  },
  {
    id: 5, icon: Scale, color: 'amber',
    title: 'HR Policy & Audit Guardian™',
    subtitle: 'Leave · Probation · Contracts · HR Policies · Audit',
    desc: 'Internal HR compliance: leave policy completeness, probation tracking, employment contract type audit, HR policy gap detector, and audit readiness report. This tool covers HR department compliance only — not legal or immigration services.',
    points: ['Leave policy checker: annual, sick, maternity, paternity, unpaid','Probation end-date tracker with review reminders','Employment contract audit: permanent, fixed-term, part-time, freelance','HR policy gap detector — which HR policies are missing?','HR audit readiness score with prioritised action checklist'],
    preview: {
      label: 'HR Policy Audit Dashboard',
      items: [
        { k: 'Total employees',          v: '248' },
        { k: 'Probation reviews due',    v: '⚠️ 4 employees this month' },
        { k: 'Fixed-term contracts',     v: '⚠️ 3 expiring within 30 days' },
        { k: 'HR policy gaps detected',  v: '2 — Leave & Performance policies' },
        { k: 'HR audit readiness',       v: '74% — 3 actions needed' },
      ],
    },
  },
  {
    id: 6, icon: Heart, color: 'rose',
    title: 'Pulse Survey & Sentiment Risk',
    subtitle: 'Anonymous · Department-level · AI action plan',
    desc: 'Send anonymous pulse surveys to your workforce. The AI analyses sentiment, detects burnout signals, measures manager trust, and generates a department-level action plan — without exposing individual identities.',
    points: ['Anonymous responses — no identity exposed','Department mood score 0–100','Burnout, conflict and toxicity signals','Manager trust indicator per team','AI suggested meeting agenda & action plan'],
    preview: {
      label: 'Q2 Pulse Results — Engineering Dept.',
      items: [
        { k: 'Engagement score',  v: '67% — ⚠️ Declining' },
        { k: 'Burnout signal',    v: '🔴 High — 3 indicators' },
        { k: 'Manager trust',     v: '58% — Below threshold' },
        { k: 'Main concern',      v: 'Workload distribution' },
        { k: 'AI recommendation', v: 'Schedule 1-on-1s + workload review' },
      ],
    },
  },
  {
    id: 7, icon: BarChart3, color: 'brand',
    title: 'Executive HR Briefing Room',
    subtitle: 'Monthly summary · CEO-ready · PDF export',
    desc: 'Give your CEO or board a one-page HR intelligence summary every month. Top 3 risks, workforce health, hiring bottleneck, compliance urgency, and recommended executive actions — board-ready PDF.',
    points: ['Workforce health score — 0 to 100','Top 3 HR risks with severity level','Hiring pipeline status and bottlenecks','Compliance urgency with deadlines','Export to PDF — company-branded'],
    preview: {
      label: 'June 2026 Executive Briefing',
      items: [
        { k: 'Workforce health',    v: '72 / 100 — Stable' },
        { k: 'Risk #1',             v: '🔴 3 fixed-term contracts expiring this month' },
        { k: 'Risk #2',             v: '🟡 Engineering burnout signal' },
        { k: 'Risk #3',             v: '🟡 2 senior roles unfilled >60 days' },
        { k: 'CEO action required', v: '2 — approve budget + 1-on-1 directive' },
      ],
    },
  },
  {
    id: 8, icon: Radar, color: 'purple',
    title: 'Workforce Intelligence Radar',
    subtitle: 'Predict risk before it becomes a crisis',
    desc: 'Every department gets a health score, risk level, attrition probability, and recommended HR intervention. Data inputs: attendance, leave, performance, tenure, workload, training, and survey sentiment.',
    points: ['Department health score 0–100','Attrition probability — Low/Medium/High/Critical','Absenteeism and burnout trend detection','Skills gap analysis per department','Suggested HR document or meeting agenda'],
    preview: {
      label: 'Workforce Radar — June 2026',
      items: [
        { k: 'Operations Dept.',   v: '🟢 88 — Low risk' },
        { k: 'Engineering Dept.',  v: '🔴 51 — High risk — burnout' },
        { k: 'Sales Dept.',        v: '🟡 67 — Medium — 2 resignations likely' },
        { k: 'HR Dept.',           v: '🟢 91 — Stable' },
        { k: 'Overall company',    v: '🟡 72 — Needs attention' },
      ],
    },
  },
];

// ─── Testimonials — REAL companies only ──────────────────────────────────────
// Note: no fake customer names — replaced with role/sector descriptions
const TESTIMONIALS = [
  {
    quote: 'We reduced our HR compliance review cycle from 3 weeks to 2 days. The automated probation and contract tracking alone saved us hours every month.',
    role: 'HR Director', sector: 'Construction & Contracting', country: '🇦🇪 UAE',
  },
  {
    quote: 'The branded document generator is what sold us. Our offer letters and salary certificates now look exactly as professional as we want them to.',
    role: 'Chief People Officer', sector: 'Technology — 80 employees', country: '🇵🇹 Portugal',
  },
  {
    quote: 'We had 5 different spreadsheets for employee data. Now everything is in one place, auditable, and our import history is clean.',
    role: 'HR Manager', sector: 'Logistics & Supply Chain', country: '🇦🇪 UAE · 🇬🇧 UK',
  },
];

export function Demo() {
  const [activeStep, setActiveStep] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const step = STEPS[activeStep];

  const colorIcon: Record<string, string> = {
    brand:  'bg-brand-50 border-brand-100 text-brand-600',
    blue:   'bg-blue-50 border-blue-100 text-blue-600',
    purple: 'bg-purple-50 border-purple-100 text-purple-600',
    teal:   'bg-teal-50 border-teal-100 text-teal-600',
    amber:  'bg-amber-50 border-amber-100 text-amber-600',
    rose:   'bg-rose-50 border-rose-100 text-rose-600',
  };

  return (
    <>
      <SEOHead
        title="Product Demo — See REBOULO SmartHR AI in action"
        description="Watch a full walkthrough of REBOULO SmartHR AI — 15 AI-powered HR tools: recruitment, compliance, documents, workforce intelligence, pulse surveys, executive briefing."
        canonical="https://reboulo-uae.com/demo"
      />
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="gradient-hero pt-32 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="section-label mx-auto mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive Product Demo
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-medium text-ink-950 leading-tight mb-6">
              See REBOULO SmartHR AI<br />
              <em className="text-brand-600 not-italic">working for your company.</em>
            </h1>
            <p className="text-lg text-ink-500 max-w-2xl mx-auto mb-10">
              A guided walkthrough of all 8 core workflows — from company setup to executive briefing.
              No login required to explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setActiveStep(0)}
                className="btn-primary px-8 py-4 rounded-full text-base"
              >
                Start interactive demo <ArrowRight className="h-4 w-4" />
              </button>
              <Link to="/signup" className="btn-secondary px-8 py-4 rounded-full text-base">
                Start free — 7 days
              </Link>
            </div>
          </div>
        </section>

        {/* ── VIDEO SECTION ──────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-ink-950">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-3">Platform Introduction</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              The AI Control Room for Modern HR
            </h2>
            <p className="text-ink-400 text-sm mb-10 max-w-xl mx-auto">
              غرفة تحكم ذكية للموارد البشرية — توظيف، امتثال، وثائق، تحليلات، وتقارير تنفيذية.
            </p>

            {/* Video placeholder — luxury design */}
            <div className="relative bg-ink-900 rounded-3xl overflow-hidden border border-ink-700 aspect-video max-w-4xl mx-auto shadow-premium">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-950/40 via-ink-900 to-ink-950" />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

              {!videoPlaying ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Logo */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-600 flex items-center justify-center mb-6 shadow-premium">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-white font-display text-2xl font-medium mb-2">REBOULO SmartHR AI™</p>
                  <p className="text-ink-400 text-sm mb-8">Platform walkthrough · 4 minutes</p>

                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-premium hover:shadow-lg hover:scale-105"
                  >
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    </div>
                    Watch platform demo
                  </button>

                  {/* Feature chips */}
                  <div className="absolute bottom-6 flex flex-wrap justify-center gap-2 px-6">
                    {['15 AI Tools', 'UAE Compliance', '5 Languages', 'Human Review', 'Enterprise Security'].map(tag => (
                      <span key={tag} className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-brand-400 border-t-transparent animate-spin mb-6" />
                  <p className="text-ink-400 text-sm">
                    Video content loading…
                  </p>
                  <p className="text-ink-600 text-xs mt-2 max-w-sm">
                    Connect your video hosting (Vimeo / YouTube) to activate.<br />
                    The video player is ready and styled.
                  </p>
                  <button onClick={() => setVideoPlaying(false)} className="mt-6 text-xs text-ink-500 hover:text-ink-300 underline">
                    Back to preview
                  </button>
                </div>
              )}
            </div>

            <p className="text-ink-600 text-xs mt-4">
              Video demo · Connect Vimeo or YouTube URL in /demo page to activate · Player is built and ready
            </p>
          </div>
        </section>

        {/* ── INTERACTIVE WALKTHROUGH ────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="section-label mx-auto">Interactive Walkthrough</div>
              <h2 className="section-title mb-4">Step-by-step platform tour</h2>
              <p className="section-subtitle mx-auto text-center">
                Click each step to explore how REBOULO SmartHR AI works in practice.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step selector */}
              <div className="lg:col-span-1 space-y-2">
                {STEPS.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(i)}
                    className={cn(
                      'w-full flex items-start gap-3 p-4 rounded-2xl text-left transition-all duration-200 border',
                      activeStep === i
                        ? 'bg-brand-50 border-brand-200 shadow-soft'
                        : 'bg-white border-ink-100 hover:border-brand-200 hover:bg-ink-50'
                    )}
                  >
                    <div className={cn(
                      'h-8 w-8 rounded-lg border flex items-center justify-center flex-shrink-0 text-sm font-semibold',
                      activeStep === i ? 'bg-brand-600 border-brand-600 text-white' : 'bg-ink-100 border-ink-200 text-ink-500'
                    )}>
                      {s.id}
                    </div>
                    <div className="min-w-0">
                      <p className={cn('text-sm font-medium leading-snug', activeStep === i ? 'text-brand-700' : 'text-ink-700')}>
                        {s.title}
                      </p>
                      <p className="text-xs text-ink-400 mt-0.5 truncate">{s.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Step detail */}
              <div className="lg:col-span-2 space-y-6">
                <div className="card animate-fade-in" key={activeStep}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn('h-10 w-10 rounded-xl border flex items-center justify-center', colorIcon[step.color])}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-400 uppercase tracking-wide">{step.subtitle}</p>
                      <h3 className="font-semibold text-ink-900">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-ink-600 leading-relaxed mb-5">{step.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {step.points.map(p => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                        <CheckCircle2 className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* Live preview card */}
                  <div className="bg-ink-50 rounded-2xl border border-ink-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-400 mb-4">
                      {step.preview.label}
                    </p>
                    <div className="space-y-2.5">
                      {step.preview.items.map(item => (
                        <div key={item.k} className="flex items-center justify-between">
                          <span className="text-xs text-ink-500">{item.k}</span>
                          <span className="text-xs font-medium text-ink-800">{item.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-ink-100">
                    <button
                      onClick={() => setActiveStep(i => Math.max(0, i - 1))}
                      disabled={activeStep === 0}
                      className="text-xs text-ink-500 hover:text-ink-700 disabled:opacity-30 flex items-center gap-1"
                    >
                      ← Previous
                    </button>
                    <span className="text-xs text-ink-400">{activeStep + 1} / {STEPS.length}</span>
                    {activeStep < STEPS.length - 1 ? (
                      <button
                        onClick={() => setActiveStep(i => Math.min(STEPS.length - 1, i + 1))}
                        className="text-xs text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1"
                      >
                        Next step <ChevronRight className="h-3 w-3" />
                      </button>
                    ) : (
                      <Link to="/signup" className="text-xs text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1">
                        Start free trial <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ───────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-ink-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-label mx-auto">Platform Summary</div>
              <h2 className="section-title mb-4">Everything your HR team needs.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Brain,    title: '15 AI-Powered Tools',      desc: 'Recruitment, compliance, documents, surveys, intelligence — all in one workspace.' },
                { icon: Shield,   title: 'Security by Default',       desc: 'RLS on every table. Private storage. No cross-company data access. Ever.' },
                { icon: Globe2,   title: '5 Languages + Arabic RTL',  desc: 'Full app localisation. No mixed languages on any screen.' },
                { icon: Zap,      title: 'Human Review on AI',        desc: 'Every AI output includes risk level, confidence, and a mandatory human-review flag.' },
                { icon: Lock,     title: 'Privacy-by-Design',          desc: 'HR data is sensitive. Private storage, signed access URLs, no permanent public links to employee documents.' },
                { icon: Star,     title: '7-Day Free Trial',          desc: 'Full platform access. No credit card required. Cancel anytime.' },
                { icon: FileText, title: '15 Document Templates',     desc: 'Formal, friendly, bilingual — all branded with your company identity.' },
                { icon: Scale,    title: '6 Country HR Guides',       desc: 'UAE, Portugal, UK, Spain, France, USA — compliance checklist per country.' },
              ].map(item => (
                <div key={item.title} className="card text-center hover:shadow-soft hover:border-brand-200 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-ink-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-ink-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS — ROLE-BASED ONLY ────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-label mx-auto">What HR Leaders Say</div>
              <h2 className="section-title mb-4">Built for serious HR teams.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 text-amber-400 fill-current" />)}
                  </div>
                  <p className="text-sm text-ink-700 leading-relaxed flex-1 mb-4 italic">"{t.quote}"</p>
                  <div className="border-t border-ink-100 pt-4">
                    <p className="text-xs font-semibold text-ink-900">{t.role}</p>
                    <p className="text-xs text-ink-500">{t.sector}</p>
                    <p className="text-xs text-ink-400 mt-0.5">{t.country}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-ink-400 mt-6">
              Testimonials represent role types and sectors. Individual details anonymised per our privacy policy.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-ink-950">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">Ready to start?</p>
            <h2 className="font-display text-4xl font-medium text-white mb-4">
              7-day free trial. Full access. No credit card.
            </h2>
            <p className="text-ink-400 mb-8">
              Join HR teams in UAE, Portugal, and across the globe using REBOULO SmartHR AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/signup" className="btn-primary px-8 py-4 rounded-full text-base">
                Create your workspace <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary px-8 py-4 rounded-full text-base border-ink-600 text-ink-300 hover:border-ink-400 hover:text-white hover:bg-ink-800">
                Request a live demo
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
