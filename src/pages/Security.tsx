import { Shield, Lock, Eye, Server, Key, AlertTriangle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

const pillars = [
  { icon: Lock,         title: 'Row-Level Security (RLS)',      desc: 'Every tenant table enforces RLS at the database level. Company isolation is guaranteed — one tenant can never query another\'s data, regardless of application bugs.' },
  { icon: Server,       title: 'Private Document Storage',      desc: 'Employee files, HR reports, letterheads, stamps, and import files are stored in private Supabase Storage buckets. Documents are accessed only via signed, time-limited URLs.' },
  { icon: Key,          title: 'Secret Management',             desc: 'OpenAI keys, Stripe secrets, and service role keys are never exposed to the frontend. All sensitive operations run through Supabase Edge Functions with server-side secrets.' },
  { icon: Eye,          title: 'AI Audit Logging',              desc: 'Every AI Console interaction is logged: tool used, response mode, language, token count, and any legal or privacy review flags. Logs are immutable and scoped per company.' },
  { icon: Shield,       title: 'Role-Based Access Control',     desc: 'Eight distinct roles (owner, hr_admin, hr_staff, recruiter, manager, employee, auditor, viewer) with granular permissions enforced at the RLS and backend level.' },
  { icon: AlertTriangle, title: 'Privacy-by-Design',            desc: 'HR data is sensitive. Privacy is built into the architecture — private storage, signed URLs, data retention controls, privacy request management. Human review required for all sensitive AI-generated HR outputs.' },
];

export function Security() {
  return (
    <>
      <SEOHead title="Security" description="REBOULO SmartHR AI security architecture — RLS, private storage, AI audit logs, role-based access, and privacy-by-design." canonical="https://reboulo-uae.com/security" />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Security</div>
            <h1 className="section-title mb-4">Security by default.</h1>
            <p className="section-subtitle mx-auto text-center">
              REBOULO SmartHR AI handles sensitive HR and company data. Security is architectural, not cosmetic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {pillars.map(p => (
              <div key={p.title} className="card flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <p.icon className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-ink-50 rounded-2xl p-8 mb-10">
            <h2 className="font-semibold text-ink-900 mb-4">Security disclosures</h2>
            <p className="text-sm text-ink-600 leading-relaxed mb-4">
              We welcome responsible disclosure of security vulnerabilities. If you discover a security issue, please email us directly at phd.ghali@reboulo.com with details. We commit to acknowledging your report within 48 hours and providing a timeline for resolution.
            </p>
            <p className="text-sm text-ink-600">
              Please do not publicly disclose vulnerabilities before we have had a chance to address them.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-semibold text-amber-900 mb-2">Important disclaimer</h3>
            <p className="text-sm text-amber-800">
              REBOULO SmartHR AI provides a secure, compliance-aware technical foundation. We do not claim to be 100% breach-proof, legally certified (SOC2, ISO 27001, etc.) unless explicit certification exists, or a replacement for your organisation's own security practices and legal compliance obligations. We strongly recommend a qualified security and legal review for your specific jurisdiction and use case.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
