import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function Privacy() {
  return (
    <>
      <SEOHead title="Privacy Policy" description="REBOULO SmartHR AI Privacy Policy — how we collect, use, and protect your personal data." canonical="https://reboulo-uae.com/privacy" />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-ink">
          <div className="section-label">Legal</div>
          <h1 className="font-display text-4xl font-medium text-ink-950 mt-2 mb-2">Privacy Policy</h1>
          <p className="text-ink-400 text-sm mb-12">Last updated: 1 June 2026 · Effective: 1 June 2026</p>

          {[
            {
              title: '1. Who we are',
              body: `REBOULO SmartHR AI™ is operated by PhD Ghali (Reboulo®), NIF: 322723175, registered in Portugal. Our registered address is Av. Emídio Navarro 27, 3500-126 Viseu, Portugal. We also operate through REBOULO Smart Services in the United Arab Emirates and Egypt. Contact: phd.ghali@reboulo.com`,
            },
            {
              title: '2. What data we collect',
              body: `We collect data you provide directly (name, work email, company name, password hash), data generated through your use of the platform (employee records you import, HR documents you generate, AI conversation logs, audit trails), and technical data (IP address, browser type, session tokens). We do not collect or store raw payment card numbers or CVV codes — all payment data is handled by Stripe.`,
            },
            {
              title: '3. How we use your data',
              body: `We use your data to provide and improve the REBOULO SmartHR AI platform, process subscriptions and payments through Stripe, send transactional notifications (trial expiry, billing, security alerts), generate AI-assisted HR documents and reports (reviewed by humans), and comply with legal obligations.`,
            },
            {
              title: '4. Multi-tenant data isolation',
              body: `Every tenant table in our database includes a company_id and is protected by Row-Level Security (RLS). One company can never access another company's employees, documents, projects, AI conversations, or billing records. This is enforced at the database level, not just the application layer.`,
            },
            {
              title: '5. Data storage and security',
              body: `Data is stored in Supabase (PostgreSQL) with RLS enabled. HR documents, letterheads, employee files, and import files are stored in private Supabase Storage buckets accessible only via signed URLs. We use HTTPS/TLS for all data in transit. OpenAI API calls are routed through secure Supabase Edge Functions — your API key is never exposed to the frontend.`,
            },
            {
              title: '6. Data retention',
              body: `We do not auto-delete customer data when a trial expires or a subscription is cancelled. Your data remains available for 90 days after subscription cancellation, after which we may delete it following written notice. Employee documents follow your company's defined retention policy.`,
            },
            {
              title: '7. Your data rights',
              body: `You have the right to access, correct, export, or delete your personal data held by REBOULO SmartHR AI. You may submit a privacy request via the Privacy Requests section inside the platform, or by emailing phd.ghali@reboulo.com. We respond within 30 days. We handle personal data in accordance with applicable data protection laws in the jurisdictions where we operate.`,
            },
            {
              title: '8. Third-party services',
              body: `We use: Supabase (database, auth, storage — EU region), Stripe (payments — PCI DSS compliant), OpenAI (AI features — you provide your own API key), Vercel (hosting). We do not sell your data to third parties.`,
            },
            {
              title: '9. Cookies',
              body: `We use only necessary cookies for authentication sessions. We do not use advertising or tracking cookies. You can disable cookies in your browser settings, though this may affect platform functionality.`,
            },
            {
              title: '10. Changes to this policy',
              body: `We may update this policy. We will notify you by email and in-platform notification at least 14 days before material changes take effect. Continued use after that date constitutes acceptance.`,
            },
            {
              title: '11. Contact',
              body: `For privacy questions or requests: phd.ghali@reboulo.com · +351 912 712 040 · Av. Emídio Navarro 27, 3500-126 Viseu, Portugal.`,
            },
          ].map(section => (
            <section key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-ink-900 mb-3">{section.title}</h2>
              <p className="text-ink-600 leading-relaxed text-sm">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
