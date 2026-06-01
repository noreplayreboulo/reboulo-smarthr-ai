import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLayout } from './layouts/AppLayout';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Public pages
import { Landing }  from './pages/Landing';
import { Features } from './pages/Features';
import { Pricing }  from './pages/Pricing';
import { Privacy }  from './pages/Privacy';
import { Terms }    from './pages/Terms';
import { Security } from './pages/Security';
import { Contact }  from './pages/Contact';
import { SignIn }   from './pages/SignIn';
import { SignUp }   from './pages/SignUp';

// App pages
import { Dashboard }      from './pages/app/Dashboard';
import { PlaceholderPage } from './pages/app/PlaceholderPage';

import {
  Building2, Users, FolderKanban, Sparkles, Brain, GraduationCap,
  Bell, Shield, CreditCard, Zap, Settings, Rocket,
  Radar, Scale, BarChart3, Heart, Star, BookOpen,
  MessageSquare, Globe2, TrendingUp, Search, Award, Briefcase, Newspaper,
} from 'lucide-react';

function StaticPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <StaticPage>
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-display text-8xl font-medium text-ink-200 mb-4">404</p>
          <h1 className="text-2xl font-semibold text-ink-900 mb-3">Page not found</h1>
          <p className="text-ink-500 mb-8">The page you're looking for doesn't exist.</p>
          <a href="/" className="btn-primary">Return home</a>
        </div>
      </div>
    </StaticPage>
  );
}

// Helper to create protected placeholder pages
import { type LucideIcon } from 'lucide-react';
const P = (title: string, icon: LucideIcon, desc?: string) => (
  <ProtectedRoute>
    <AppLayout>
      <PlaceholderPage title={title} icon={icon} description={desc} />
    </AppLayout>
  </ProtectedRoute>
);

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* ── Public ── */}
            <Route path="/"         element={<><Navbar /><Landing /><Footer /></>} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing"  element={<Pricing />} />
            <Route path="/privacy"  element={<Privacy />} />
            <Route path="/terms"    element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact"  element={<Contact />} />

            {/* Auth */}
            <Route path="/signin"          element={<SignIn />} />
            <Route path="/signup"          element={<SignUp />} />
            <Route path="/forgot-password" element={
              <StaticPage>
                <div className="min-h-[60vh] flex items-center justify-center px-6">
                  <div className="w-full max-w-sm">
                    <h1 className="font-display text-3xl font-medium text-ink-950 mb-2">Reset password</h1>
                    <p className="text-ink-500 text-sm mb-6">Enter your work email and we'll send a reset link.</p>
                    <input type="email" placeholder="you@company.com" className="input-field mb-3" />
                    <button className="btn-primary w-full py-3.5 rounded-xl">Send reset link</button>
                  </div>
                </div>
              </StaticPage>
            } />

            {/* Legacy redirects */}
            <Route path="/login"     element={<Navigate to="/signin" replace />} />
            <Route path="/register"  element={<Navigate to="/signup" replace />} />
            <Route path="/dashboard" element={<Navigate to="/app" replace />} />

            {/* ── Protected App ── */}
            {/* Core */}
            <Route path="/app" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company/*"    element={P('Company Identity Engine™', Building2, 'Set up your company profile, brand kit, letterhead, stamp, signature, and document identity.')} />
            <Route path="/app/people/*"     element={P('Employee Directory', Users, 'Smart Employee Import™ — import via Excel/CSV. employee_number is mandatory and unique per company.')} />
            <Route path="/app/projects/*"   element={P('Project Cost Centers™', FolderKanban, '5 included projects per company. Extra projects at €15/project. Workforce cost allocation.')} />

            {/* AI Tools — Priority 1 */}
            <Route path="/app/recruitment"          element={P('AI Recruitment Suite™', Brain, 'CV parsing, candidate scoring, job matching, interview questions, offer letters. Bias-warning + human review required.')} />
            <Route path="/app/recruitment/jobs"     element={P('Job Listings', Brain)} />
            <Route path="/app/recruitment/candidates" element={P('Candidate Pipeline', Brain)} />
            <Route path="/app/recruitment/cv-analysis" element={P('CV Analysis', Brain)} />
            <Route path="/app/recruitment/interviews"  element={P('Interview Management', Brain)} />

            <Route path="/app/studio/*"             element={P('HR Document Generator™', Sparkles, 'Employment contracts, offer letters, warning letters, salary certificates, probation reviews — formal, friendly, or bilingual.')} />
            <Route path="/app/workforce-radar"      element={P('Workforce Intelligence Radar™', Radar, 'Department health scores 0–100, attrition risk, burnout signals, absenteeism trends, skills gaps, manager risk alerts.')} />
            <Route path="/app/compliance"           element={P('HR Compliance & Policy Guardian™', Scale, 'Country-specific compliance checklists, visa/work-permit expiry alerts, probation tracker, policy gap detector, audit readiness.')} />
            <Route path="/app/executive-briefing"   element={P('Executive HR Briefing Room™', BarChart3, 'Monthly HR summary, top 3 risks, hiring bottlenecks, employee mood, compliance urgency — board-ready PDF export.')} />
            <Route path="/app/pulse-surveys"        element={P('Pulse Survey & Sentiment Risk Engine™', Heart, 'Anonymous pulse, department mood score, burnout alerts, manager trust score — AI action plan.')} />

            {/* AI Tools — Priority 2 */}
            <Route path="/app/employer-brand"       element={P('Employer Brand Studio™', Star, 'EVP generator, job-ad tone analyzer, candidate attraction score, brand weakness detection, recruitment messaging.')} />
            <Route path="/app/onboarding"           element={P('Onboarding Journey AI™', BookOpen, '7/30/60/90-day plans, role-specific checklists, welcome packs, culture introduction, probation checkpoints.')} />
            <Route path="/app/culture-copilot"      element={P('Culture & Leadership Copilot™', MessageSquare, 'Conflict handling scripts, low-morale intervention, performance conversation guides, burnout support.')} />
            <Route path="/app/country-guide"        element={P('Global HR Country Guide™', Globe2, 'Hiring checklists, contract requirements, leave laws, termination basics — UAE, Portugal, UK, Spain, France, USA.')} />
            <Route path="/app/compensation"         element={P('Benefits & Compensation Intelligence™', TrendingUp, 'Salary band builder, benefits comparison, pay-transparency readiness, equity/fairness alerts.')} />

            {/* AI Tools — Priority 3 */}
            <Route path="/app/intelligence-center"  element={P('HR Intelligence Center™', Search, 'AI search for HR questions, topic library, daily risk alerts, country-specific insights, recommended actions.')} />
            <Route path="/app/hr-academy"           element={P('HR Academy & Competency Builder™', Award, 'Training pathways, competency matrices, skills gap reports, 30/60/90-day learning plans.')} />
            <Route path="/app/exit-retention"       element={P('Exit & Retention Intelligence™', Briefcase, 'Exit interview analyzer, resignation clustering, retention risk score, stay-interview generator.')} />
            <Route path="/app/hr-newsroom"          element={P('AI HR Newsroom™', Newspaper, 'Daily HR digest, weekly executive briefing, AI summaries — compliance, recruitment, AI, culture filters.')} />

            {/* Ops */}
            <Route path="/app/learn/*"              element={P('Demo & Training Center™', GraduationCap)} />
            <Route path="/app/notifications/*"      element={P('Notification Inbox™', Bell)} />
            <Route path="/app/audit/*"              element={P('Security & Audit Center', Shield)} />
            <Route path="/app/billing/*"            element={P('Billing & Subscriptions', CreditCard, 'Manage plan, payment method, invoices. Powered by Stripe.')} />
            <Route path="/app/system/*"             element={P('AutoSync Guardian™', Zap)} />
            <Route path="/app/settings"             element={P('Settings', Settings)} />
            <Route path="/app/launch-readiness"     element={P('Launch Readiness Score™', Rocket, 'Company identity, employees, projects, billing, AI, notifications, security — all in one readiness score.')} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}
