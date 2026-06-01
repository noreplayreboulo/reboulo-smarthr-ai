import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLayout } from './layouts/AppLayout';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Public pages
import { Landing }  from './pages/Landing';
import { Pricing }  from './pages/Pricing';
import { Privacy }  from './pages/Privacy';
import { Terms }    from './pages/Terms';
import { Security } from './pages/Security';
import { Contact }  from './pages/Contact';
import { SignIn }   from './pages/SignIn';
import { SignUp }   from './pages/SignUp';

// App pages
import { Dashboard } from './pages/app/Dashboard';
import { PlaceholderPage } from './pages/app/PlaceholderPage';

// Icons for placeholder pages
import {
  Building2, Users, FolderKanban, Sparkles, Brain,
  GraduationCap, Bell, Shield, CreditCard, Zap, Settings, Rocket,
} from 'lucide-react';

// Simple static pages with shared layout
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
          <p className="text-ink-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="btn-primary">Return home</a>
        </div>
      </div>
    </StaticPage>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* ── Public ── */}
            <Route path="/" element={<><Navbar /><Landing /><Footer /></>} />
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
            <Route path="/app" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company"    element={<ProtectedRoute><AppLayout><PlaceholderPage title="Company Identity" description="Set up your company profile, brand kit, letterhead, stamp, signature, and document identity to start generating branded HR documents." icon={Building2} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company/identity"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="Company Identity Engine™" icon={Building2} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company/brand-kit"         element={<ProtectedRoute><AppLayout><PlaceholderPage title="Brand Kit" icon={Building2} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company/branches"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="Branches" icon={Building2} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/company/document-identity" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Document Identity Lock™" icon={Building2} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/people"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="People Directory" description="Your complete employee directory. Import via Excel/CSV with Smart Employee Import™, manage profiles, and track employee numbers." icon={Users} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/people/import"   element={<ProtectedRoute><AppLayout><PlaceholderPage title="Smart Employee Import™" description="Import employees via Excel (.xlsx) or CSV. employee_number is mandatory and unique per company." icon={Users} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/people/import-history" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Import History" icon={Users} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/projects"    element={<ProtectedRoute><AppLayout><PlaceholderPage title="Projects" description="Project Cost Centers™ — allocate employees, track workforce costs, and manage up to 5 included projects. Extra projects at €15/project." icon={FolderKanban} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/projects/new" element={<ProtectedRoute><AppLayout><PlaceholderPage title="New Project" icon={FolderKanban} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/studio"                   element={<ProtectedRoute><AppLayout><PlaceholderPage title="HR Intelligence Studio™" description="Generate, review, and courier branded HR documents and executive reports — AI-drafted, human-reviewed." icon={Sparkles} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/studio/hr-intelligence"   element={<ProtectedRoute><AppLayout><PlaceholderPage title="HR Intelligence Studio™" icon={Sparkles} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/studio/branded-reports"   element={<ProtectedRoute><AppLayout><PlaceholderPage title="Branded Report Studio™" icon={Sparkles} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/studio/report-courier"    element={<ProtectedRoute><AppLayout><PlaceholderPage title="AI Report Courier™" icon={Sparkles} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/studio/document-preview"  element={<ProtectedRoute><AppLayout><PlaceholderPage title="Document Preview" icon={Sparkles} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/ai-console"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="REBOULO SmartHR AI Console™" description="Full-page HR AI assistant. Add your OPENAI_API_KEY to Supabase Edge Function secrets to activate. AI is scoped to HR topics only." icon={Brain} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/ai-console/chat"     element={<ProtectedRoute><AppLayout><PlaceholderPage title="AI Chat" icon={Brain} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/ai-console/history"  element={<ProtectedRoute><AppLayout><PlaceholderPage title="Conversation History" icon={Brain} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/ai-console/settings" element={<ProtectedRoute><AppLayout><PlaceholderPage title="AI Settings" icon={Brain} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/learn"                   element={<ProtectedRoute><AppLayout><PlaceholderPage title="Demo & Training Center™" description="Learn the platform with guided demos, product simulators, guides, and multilingual video library." icon={GraduationCap} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/learn/demo-center"        element={<ProtectedRoute><AppLayout><PlaceholderPage title="Demo Center" icon={GraduationCap} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/learn/guides"             element={<ProtectedRoute><AppLayout><PlaceholderPage title="Guides" icon={GraduationCap} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/learn/video-library"      element={<ProtectedRoute><AppLayout><PlaceholderPage title="Video Library" icon={GraduationCap} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/notifications"         element={<ProtectedRoute><AppLayout><PlaceholderPage title="Notification Inbox™" description="System alerts, billing, trial, imports, projects, AI review, security, and compliance notifications." icon={Bell} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/notifications/settings" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Notification Settings" icon={Bell} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/audit"                  element={<ProtectedRoute><AppLayout><PlaceholderPage title="Security & Audit Center" description="Audit logs, AI audit logs, import audits, privacy requests, and security events." icon={Shield} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/audit/security-center"  element={<ProtectedRoute><AppLayout><PlaceholderPage title="Security Center" icon={Shield} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/audit/audit-logs"       element={<ProtectedRoute><AppLayout><PlaceholderPage title="Audit Logs" icon={Shield} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/audit/ai-audit-logs"    element={<ProtectedRoute><AppLayout><PlaceholderPage title="AI Audit Center™" icon={Shield} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/audit/import-audits"    element={<ProtectedRoute><AppLayout><PlaceholderPage title="Import Audits" icon={Shield} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/audit/privacy-requests" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Privacy Requests" icon={Shield} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/billing"                element={<ProtectedRoute><AppLayout><PlaceholderPage title="Billing & Subscriptions" description="Manage your plan, payment method, invoices, and trial status. Powered by Stripe — requires STRIPE_SECRET_KEY configuration." icon={CreditCard} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/billing/plans"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="Plans" icon={CreditCard} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/billing/payment-method" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Payment Method" icon={CreditCard} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/billing/invoices"       element={<ProtectedRoute><AppLayout><PlaceholderPage title="Invoices" icon={CreditCard} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/billing/trial-expired"  element={<ProtectedRoute><AppLayout><PlaceholderPage title="Trial Expired" icon={CreditCard} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/system"          element={<ProtectedRoute><AppLayout><PlaceholderPage title="AutoSync Guardian™" description="Automated operational checks: trial status, subscription refresh, identity score, project count, duplicate flags, and document expiry alerts. Requires Supabase scheduled Edge Functions." icon={Zap} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/system/autosync" element={<ProtectedRoute><AppLayout><PlaceholderPage title="AutoSync" icon={Zap} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/system/guardian" element={<ProtectedRoute><AppLayout><PlaceholderPage title="System Guardian" icon={Zap} /></AppLayout></ProtectedRoute>} />

            <Route path="/app/settings"         element={<ProtectedRoute><AppLayout><PlaceholderPage title="Settings" icon={Settings} /></AppLayout></ProtectedRoute>} />
            <Route path="/app/launch-readiness" element={<ProtectedRoute><AppLayout><PlaceholderPage title="Launch Readiness Score™" description="Your workspace readiness score across Company Identity, Branding, Employees, Projects, Billing, AI, Notifications, Security, and Language setup." icon={Rocket} /></AppLayout></ProtectedRoute>} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}
