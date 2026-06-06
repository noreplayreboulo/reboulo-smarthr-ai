import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Brain, FileText, Radar, Scale, BarChart3, Heart, Star, BookOpen, MessageSquare, TrendingUp, Search, Award, Briefcase, Zap } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

const tiers = [
  {
    label: 'Core Platform — Priority 1',
    color: 'brand',
    tools: [
      {
        icon: Brain, title: 'AI Recruitment Suite™',
        desc: 'Turn recruitment into an AI-powered hiring command center.',
        points: ['CV parsing & candidate scoring','Job description generator','Candidate-job matching','Interview question generator','Bias-warning layer','Offer letter generator','Hiring pipeline automation'],
      },
      {
        icon: FileText, title: 'HR Document Generator™',
        desc: 'Generate HR documents quickly, professionally, and consistently.',
        points: ['Employment contract draft','Offer & warning letters','Salary certificates','Probation review letters','Termination notices','PIPs & onboarding checklists','Formal, friendly, bilingual modes'],
      },
      {
        icon: Radar, title: 'Workforce Intelligence Radar™',
        desc: 'Predict and monitor workforce risk before it becomes a crisis.',
        points: ['Attrition risk detection','Burnout & absenteeism signals','Department health scores 0–100','Skills gap analysis','Manager risk alerts','Productivity anomaly detection','Executive summary export'],
      },
      {
        icon: Scale, title: 'HR Policy & Audit Guardian™',
        desc: 'Keep your HR department compliant with internal policies and employment standards.',
        points: ['Leave policy completeness checker (annual, sick, maternity, paternity, unpaid)','Probation end-date tracker with review reminders','Employment contract type audit (permanent, fixed-term, part-time, freelance)','HR policy gap detector — identify missing HR policies','HR audit readiness score with prioritised action checklist','Internal HR compliance — not legal or immigration services'],
      },
      {
        icon: BarChart3, title: 'Executive HR Briefing Room™',
        desc: 'Give CEOs and HR directors a simple view of people risk.',
        points: ['Monthly HR executive summary','Workforce health score','Top 3 HR risks','Hiring bottleneck view','Employee mood overview','Compliance urgency dashboard','Board-ready PDF export'],
      },
      {
        icon: Heart, title: 'Pulse Survey & Sentiment Risk Engine™',
        desc: 'Measure employee mood before problems become resignations.',
        points: ['Anonymous pulse questions','Department mood score','Engagement trend analysis','Burnout alerts','Manager trust score','Conflict/toxicity signals','AI suggested action plan'],
      },
    ],
  },
  {
    label: 'Premium Differentiators — Priority 2',
    color: 'blue',
    tools: [
      {
        icon: Star, title: 'Employer Brand Studio™',
        desc: 'Understand and improve how candidates and employees see your company.',
        points: ['EVP generator','Career page content generator','Job ad tone analyzer','Candidate attraction score','Brand weakness detection','Reputation improvement plan','Internal culture statement generator'],
      },
      {
        icon: BookOpen, title: 'Onboarding Journey AI™',
        desc: 'Build strong onboarding journeys that set employees up for success.',
        points: ['7/30/60/90-day onboarding plans','Role-specific checklists','Manager checklist','Employee welcome pack','First-week schedule','Culture introduction','Onboarding pulse survey'],
      },
      {
        icon: MessageSquare, title: 'Culture & Leadership Copilot™',
        desc: 'Help leaders handle sensitive people situations with confidence.',
        points: ['Conflict diagnosis & script','Low-morale intervention plan','Performance conversation guide','Burnout conversation support','Return-to-office conflict handling','Employee grievance first response','Meeting agenda & follow-up plan'],
      },
      {
        icon: TrendingUp, title: 'Benefits & Compensation Intelligence™',
        desc: 'Help companies design and communicate competitive benefits.',
        points: ['Salary band builder','Benefits comparison tool','Compensation communication generator','Pay transparency readiness check','Benefits satisfaction pulse','Payroll/benefits checklist','Equity/fairness risk alerts'],
      },
    ],
  },
  {
    label: 'Authority & Growth — Priority 3',
    color: 'ink',
    tools: [
      {
        icon: Search, title: 'HR Intelligence Center™',
        desc: 'A live AI knowledge center for HR leaders and teams.',
        points: ['AI search for any HR department question','Topic library: recruitment, onboarding, performance, culture, leave, compensation','Daily HR risk summaries for your company','Practical HR templates and action plans','Executive-level HR alerts and recommendations','Source reliability labels on all AI outputs'],
      },
      {
        icon: Award, title: 'HR Academy & Competency Builder™',
        desc: 'Build HR training pathways and internal capability frameworks.',
        points: ['HR training plan generator','Manager training plans','Role-based competency matrix','Skills gap reports','30/60/90-day learning plans','Micro-learning cards','Assessment questions generator'],
      },
      {
        icon: Briefcase, title: 'Exit & Retention Intelligence™',
        desc: 'Understand why people leave and prevent avoidable turnover.',
        points: ['Exit interview analyzer','Resignation reason clustering','Retention risk score','Department resignation patterns','Replacement cost estimate','Stay interview generator','Retention action plan'],
      },
      {
        icon: Zap, title: 'AI HR Newsroom™',
        desc: 'Keep HR teams updated without overwhelming them.',
        points: ['Daily HR digest','Weekly executive briefing','AI summaries of HR news','Compliance & recruitment filters','Region filters','Actionable impact explanations','Saved briefings library'],
      },
    ],
  },
];

const colorBg: Record<string, string> = {
  brand: 'bg-brand-50 border-brand-100 text-brand-600',
  blue:  'bg-blue-50 border-blue-100 text-blue-600',
  ink:   'bg-ink-100 border-ink-200 text-ink-600',
};

export function Features() {
  return (
    <>
      <SEOHead
        title="All 15 AI HR Tools"
        description="Explore all 15 AI-powered HR tools in REBOULO SmartHR AI: Recruitment, Documents, Compliance, Workforce Radar, Pulse Surveys, Executive Briefing and more."
        canonical="https://reboulo-uae.com/features"
      />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="section-label mx-auto">All Features</div>
            <h1 className="section-title mt-2 mb-4">15 AI-Powered HR Tools</h1>
            <p className="section-subtitle mx-auto text-center">
              REBOULO SmartHR AI is not another HR database.<br />It is an AI control room for modern HR departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link to="/signup" className="btn-primary px-8 py-3 rounded-full">Start free — 7 days <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/pricing" className="btn-secondary px-8 py-3 rounded-full">View pricing</Link>
            </div>
          </div>

          {/* Tiers */}
          {tiers.map(tier => (
            <div key={tier.label} className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border ${colorBg[tier.color]}`}>
                  {tier.label}
                </div>
                <div className="flex-1 h-px bg-ink-100" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.tools.map(tool => (
                  <div key={tool.title} className="card hover:shadow-soft hover:border-brand-200 transition-all duration-200">
                    <div className={`h-10 w-10 rounded-xl border flex items-center justify-center mb-4 ${colorBg[tier.color]}`}>
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-ink-900 mb-2">{tool.title}</h3>
                    <p className="text-sm text-ink-500 mb-4 leading-relaxed">{tool.desc}</p>
                    <ul className="space-y-1.5">
                      {tool.points.map(p => (
                        <li key={p} className="flex items-start gap-2 text-xs text-ink-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-500 flex-shrink-0 mt-0.5" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* AI Governance box */}
          <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-medium text-ink-950 mb-3">AI Governance — Built In</h2>
            <p className="text-ink-600 text-sm max-w-2xl mx-auto mb-6">
              Every AI output includes: output · risk_level · confidence_level · recommended_next_action · human_review_required.<br />
              No auto-hiring. No auto-rejections. No fake compliance claims. No final legal advice.
            </p>
            <Link to="/signup" className="btn-primary px-8 py-3 rounded-full">
              Get full access — 7-day free trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
