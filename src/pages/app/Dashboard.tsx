import { Users, FileText, FolderKanban, Brain, ArrowRight, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { SEOHead } from '../../components/SEOHead';

const cards = [
  { label: 'Workforce',         value: '—',  sub: 'Connect Supabase to see live data', icon: Users,        color: 'brand' },
  { label: 'Documents Ready',   value: '—',  sub: 'Studio not yet configured',          icon: FileText,     color: 'blue' },
  { label: 'Active Projects',   value: '—',  sub: 'Add your first project',             icon: FolderKanban, color: 'purple' },
  { label: 'AI Queue',          value: '—',  sub: 'AI Console needs OpenAI key',        icon: Brain,        color: 'amber' },
];

const quickStart = [
  { label: 'Complete company identity',  href: '/app/company',       done: false, icon: '🏢' },
  { label: 'Import your first employees', href: '/app/people',       done: false, icon: '👥' },
  { label: 'Create a project',           href: '/app/projects',      done: false, icon: '📁' },
  { label: 'Configure AI Console',       href: '/app/ai-console',    done: false, icon: '🤖' },
  { label: 'Connect billing',            href: '/app/billing',       done: false, icon: '💳' },
];

export function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.user_metadata?.first_name || user?.email?.split('@')[0] || 'there';

  return (
    <>
      <SEOHead title="Dashboard" noindex />
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-ink-400 uppercase tracking-widest mb-1">Dashboard</p>
            <h1 className="font-display text-3xl font-medium text-ink-950">Good morning, {firstName}.</h1>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2">
            <Clock className="h-4 w-4 text-amber-600" />
            <p className="text-sm text-amber-700 font-medium">Trial active · 7 days remaining</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(c => (
            <div key={c.label} className="card">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-ink-400 uppercase tracking-wide">{c.label}</p>
                <c.icon className="h-4 w-4 text-ink-300" />
              </div>
              <p className="font-display text-3xl font-medium text-ink-300 mb-1">{c.value}</p>
              <p className="text-xs text-ink-400">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Start */}
          <div className="card">
            <h2 className="font-semibold text-ink-900 mb-1">Quick start checklist</h2>
            <p className="text-sm text-ink-400 mb-5">Complete these steps to reach Launch Ready status.</p>
            <div className="space-y-3">
              {quickStart.map(item => (
                <Link key={item.label} to={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-ink-50 transition-colors group">
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${item.done ? 'bg-brand-100' : 'bg-ink-100'}`}>
                    {item.icon}
                  </div>
                  <span className="flex-1 text-sm text-ink-700 group-hover:text-ink-900">{item.label}</span>
                  {item.done
                    ? <CheckCircle2 className="h-4 w-4 text-brand-500" />
                    : <ArrowRight className="h-4 w-4 text-ink-300 group-hover:text-ink-500" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Supabase notice */}
          <div className="space-y-4">
            <div className="card border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-900 text-sm mb-1">Supabase not connected</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Add <code className="bg-amber-100 px-1 rounded">VITE_SUPABASE_URL</code> and <code className="bg-amber-100 px-1 rounded">VITE_SUPABASE_ANON_KEY</code> to your environment variables to activate real data, auth, and storage.
                  </p>
                </div>
              </div>
            </div>

            <div className="card border-blue-200 bg-blue-50">
              <div className="flex items-start gap-3">
                <Brain className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900 text-sm mb-1">AI Console not configured</p>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Add your <code className="bg-blue-100 px-1 rounded">OPENAI_API_KEY</code> to Supabase Edge Function secrets to activate the AI HR Console.
                  </p>
                  <Link to="/app/ai-console" className="text-xs text-blue-700 underline mt-1 inline-block">Go to AI Console →</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <p className="font-semibold text-ink-900 text-sm mb-1">Launch Readiness Score</p>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 bg-ink-100 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '10%' }} />
                </div>
                <span className="text-sm font-medium text-ink-500">10%</span>
              </div>
              <p className="text-xs text-ink-400 mt-2">Not ready — complete setup steps to improve score.</p>
              <Link to="/app/launch-readiness" className="text-xs text-brand-600 mt-2 inline-block hover:text-brand-700">View full checklist →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
