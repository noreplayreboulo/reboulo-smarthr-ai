import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function Terms() {
  return (
    <>
      <SEOHead title="Terms of Service" description="REBOULO SmartHR AI Terms of Service — your rights and responsibilities when using our platform." canonical="https://reboulo-uae.com/terms" />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-label">Legal</div>
          <h1 className="font-display text-4xl font-medium text-ink-950 mt-2 mb-2">Terms of Service</h1>
          <p className="text-ink-400 text-sm mb-12">Last updated: 1 June 2026 · Effective: 1 June 2026</p>

          {[
            { title: '1. Acceptance', body: 'By creating a workspace on REBOULO SmartHR AI, you agree to these Terms. If you do not agree, do not use the platform. These Terms apply to all users, including company owners, HR admins, employees, and viewers.' },
            { title: '2. Platform use', body: 'REBOULO SmartHR AI is a B2B SaaS platform for HR operations. You may use it only for lawful HR management purposes within your organisation. You may not reverse-engineer, resell, or use the platform to harm others.' },
            { title: '3. Accounts and access', body: 'You are responsible for maintaining the security of your account credentials. Each account may manage up to 3 company workspaces. You must notify us immediately of any unauthorised access.' },
            { title: '4. Free trial', body: 'New company workspaces receive a 7-day free trial with full platform access. No credit card is required to start. After 7 days, the workspace is locked (but data is preserved) until a paid plan is selected.' },
            { title: '5. Subscriptions and billing', body: 'Subscriptions are monthly or annual and auto-renew unless cancelled. You authorise us to charge your payment method on file. We do not store raw card numbers — all payment processing is via Stripe. Extra project add-ons are charged at €15/project/month beyond 5 included projects.' },
            { title: '6. Cancellation and data', body: 'You may cancel your subscription at any time. Your workspace data is preserved for 90 days post-cancellation. We do not auto-delete data on subscription expiry. After 90 days, we may delete data following written notice.' },
            { title: '7. AI features', body: 'AI-assisted features require your own OpenAI API key. REBOULO AI provides guidance, drafts, and reports — not final legal advice or employment decisions. All AI outputs require human review before implementation. We are not liable for decisions made based on AI outputs without proper human review.' },
            { title: '8. Your data', body: 'You retain ownership of all HR data you upload or create on the platform. We process it on your behalf. See our Privacy Policy for details on data handling, retention, and your rights.' },
            { title: '9. Prohibited uses', body: 'You may not use REBOULO SmartHR AI to: process data of individuals without lawful basis; attempt to access other companies\' data; upload malicious code; bypass security controls; or use AI features to generate discriminatory HR decisions.' },
            { title: '10. Liability limitation', body: 'REBOULO SmartHR AI is provided "as is". We are not liable for HR decisions made using the platform, data loss caused by incorrect import configurations, AI output errors, or indirect/consequential damages. Our total liability is limited to 12 months of subscription fees paid.' },
            { title: '11. Governing law', body: 'These Terms are governed by Portuguese law. Disputes shall be resolved in the courts of Viseu, Portugal, except where UAE or other local consumer protection laws apply to users in those jurisdictions.' },
            { title: '12. Changes', body: 'We may update these Terms. We will notify you 14 days before material changes. Continued use constitutes acceptance.' },
            { title: '13. Contact', body: 'phd.ghali@reboulo.com · +351 912 712 040 · Av. Emídio Navarro 27, 3500-126 Viseu, Portugal' },
          ].map(s => (
            <section key={s.title} className="mb-8">
              <h2 className="text-xl font-semibold text-ink-900 mb-3">{s.title}</h2>
              <p className="text-ink-600 leading-relaxed text-sm">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
