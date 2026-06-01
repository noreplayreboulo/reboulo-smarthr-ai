import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: 'demo', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return (
    <><Navbar />
    <main className="pt-28 pb-24 px-6 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md">
        <div className="h-16 w-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-8 w-8 text-brand-600" />
        </div>
        <h1 className="font-display text-3xl font-medium text-ink-950 mb-3">Message sent</h1>
        <p className="text-ink-500">We'll get back to you within 1 business day. For urgent queries, call +351 912 712 040.</p>
      </div>
    </main><Footer /></>
  );

  return (
    <>
      <SEOHead title="Contact Us" description="Contact REBOULO SmartHR AI — sales, support, demos, and enterprise enquiries." canonical="https://reboulo-uae.com/contact" />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="section-label">Contact</div>
            <h1 className="section-title mt-2 mb-4">Let's talk.</h1>
            <p className="section-subtitle mb-10">Whether you need a demo, have an enterprise enquiry, or want to explore a custom plan — we're here.</p>

            <div className="space-y-6 text-sm text-ink-600">
              <div>
                <p className="font-semibold text-ink-900 mb-3">🇵🇹 Portugal HQ</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-ink-400" />Av. Emídio Navarro 27, 3500-126 Viseu</p>
                <p className="flex items-center gap-2 mt-1"><Phone className="h-4 w-4 text-ink-400" />+351 912 712 040</p>
                <p className="flex items-center gap-2 mt-1"><Mail className="h-4 w-4 text-ink-400" />phd.ghali@reboulo.com</p>
              </div>
              <div>
                <p className="font-semibold text-ink-900 mb-1">🇦🇪 UAE — Dubai</p>
                <p>REBOULO Smart Services · United Arab Emirates</p>
              </div>
              <div>
                <p className="font-semibold text-ink-900 mb-1">🇪🇬 Egypt — Cairo</p>
                <p>REBOULO Smart Services · Arab Republic of Egypt</p>
              </div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Full name</label>
                  <input required type="text" value={form.name} onChange={set('name')} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 mb-1.5">Company</label>
                  <input type="text" value={form.company} onChange={set('company')} className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Work email</label>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Subject</label>
                <select value={form.subject} onChange={set('subject')} className="input-field">
                  <option value="demo">Request a demo</option>
                  <option value="enterprise">Enterprise enquiry</option>
                  <option value="support">Technical support</option>
                  <option value="billing">Billing question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 mb-1.5">Message</label>
                <textarea required rows={5} value={form.message} onChange={set('message')}
                  placeholder="Tell us about your team size, use case, or question..."
                  className="input-field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-xl">Send message</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
