import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Minimize2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

// HR-only knowledge base — no external API needed, no fake responses
const HR_ANSWERS: { patterns: string[]; answer: string }[] = [
  {
    patterns: ['trial', 'free', 'تجربة', 'مجاني'],
    answer: 'REBOULO SmartHR AI offers a **7-day free trial** with full platform access. No credit card required. Your data is preserved if you choose not to subscribe after the trial.',
  },
  {
    patterns: ['price', 'pricing', 'cost', 'plan', 'سعر', 'خطة', 'تكلفة'],
    answer: 'Our plans:\n• **Starter — €49/mo**: Up to 25 employees, documents, import\n• **Professional — €149/mo**: Full AI suite, 150 employees, compliance, pulse surveys\n• **Business — €299/mo**: Unlimited employees, country guides, branded exports\n• **Enterprise**: Custom pricing, SSO, dedicated CSM\n\nExtra projects: €15/project beyond 5 included.',
  },
  {
    patterns: ['import', 'excel', 'csv', 'employee', 'استيراد', 'موظف'],
    answer: '**Smart Employee Import™** supports Excel (.xlsx) and CSV. The employee_number field is mandatory and unique per company. The platform validates every row before confirming — errors shown clearly, no fake import success. UAE fields supported: visa number, Emirates ID, work permit, passport.',
  },
  {
    patterns: ['document', 'contract', 'letter', 'وثيقة', 'عقد', 'خطاب'],
    answer: '**HR Document Generator™** produces 15 document types: employment contracts, offer letters, warning letters, salary certificates, probation reviews, termination notices, PIPs, and more. Output modes: formal corporate, friendly HR, legal-risk cautious, or bilingual (Arabic + English). All documents are branded with your company identity.',
  },
  {
    patterns: ['compliance', 'visa', 'uae', 'امتثال', 'تأشيرة', 'الإمارات'],
    answer: '**Compliance Guardian™** covers UAE, Portugal, UK, Spain, France, and USA. Features: visa/work-permit expiry alerts (30/60/90 days), Emirates ID tracking, probation tracker, policy gap detector, audit readiness report. Important: this is administrative HR support — not legal advice. Qualified legal review is always recommended.',
  },
  {
    patterns: ['ai', 'artificial', 'openai', 'ذكاء اصطناعي'],
    answer: '**AI features** require your own OpenAI API key stored securely in our backend (never in the frontend). Every AI output includes: output · risk_level · confidence_level · recommended_action · **human_review_required**. The AI assists — humans decide. No auto-hiring, no auto-rejections, no final legal advice.',
  },
  {
    patterns: ['recruitment', 'cv', 'candidate', 'hire', 'توظيف', 'مرشح'],
    answer: '**AI Recruitment Suite™** includes: CV parsing, candidate scoring across 8 criteria, job-candidate matching, interview question generator, bias-warning layer, and offer letter draft. Human review is mandatory before any hiring decision. The AI gives a score and recommendation — your HR team makes the final call.',
  },
  {
    patterns: ['pulse', 'survey', 'engagement', 'mood', 'استطلاع', 'مشاركة'],
    answer: '**Pulse Survey & Sentiment Engine™** sends anonymous surveys to your workforce. Results include: department mood score (0–100), burnout signals, manager trust score, conflict/toxicity indicators, and an AI-generated action plan. Individual identity is never exposed in anonymous surveys.',
  },
  {
    patterns: ['security', 'privacy', 'data', 'rls', 'أمان', 'خصوصية', 'بيانات'],
    answer: '**Security architecture**: Row-Level Security (RLS) on every database table — one company can never access another\'s data. Private storage buckets with signed URLs. OpenAI and Stripe keys stored server-side only. GDPR-ready and UAE PDPL-aware. 8 role levels enforced at database level, not just UI.',
  },
  {
    patterns: ['language', 'arabic', 'rtl', 'multilingual', 'لغة', 'عربية'],
    answer: 'REBOULO supports **5 languages**: English, العربية (full RTL), Français, Português, Español. Critical rule: no mixed languages on any screen. Arabic switches the entire app to RTL. All UI strings come from centralised translation keys.',
  },
  {
    patterns: ['supabase', 'database', 'setup', 'configure', 'إعداد', 'قاعدة بيانات'],
    answer: 'To activate data features, add to your environment:\n`VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (frontend-safe)\n\nBackend secrets (Supabase Edge Functions only):\n`OPENAI_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_SERVICE_ROLE_KEY`\n\nNever expose service-role or secret keys in frontend code.',
  },
  {
    patterns: ['demo', 'tour', 'walkthrough', 'show', 'عرض', 'جولة'],
    answer: 'We have a full **interactive product demo** at [/demo](/demo) — 8 step-by-step workflows with live data previews, no login required. You can also request a personalised live demo via our [contact page](/contact).',
  },
  {
    patterns: ['company', 'workspace', 'multi', 'شركة', 'مساحة'],
    answer: 'One account can manage up to **3 separate company workspaces**. Each has its own employees, documents, projects, AI conversations, billing, and branding. Data is completely isolated — switching workspace changes the entire context.',
  },
  {
    patterns: ['cancel', 'refund', 'stop', 'إلغاء', 'استرداد'],
    answer: 'You can cancel your subscription at any time. **Your data is preserved for 90 days** after cancellation — we never auto-delete. After 90 days, data may be removed following written notice. We do not auto-charge without explicit authorisation.',
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const item of HR_ANSWERS) {
    if (item.patterns.some(p => lower.includes(p))) return item.answer;
  }
  return 'This assistant answers questions specifically about **REBOULO SmartHR AI** — features, pricing, compliance, documents, recruitment, security, and setup.\n\nFor other HR questions, please use the **AI Console** inside the platform (requires OpenAI key), or contact us at [phd.ghali@reboulo.com](mailto:phd.ghali@reboulo.com).';
}

type Msg = { role: 'user' | 'assistant'; text: string; time: string };

const QUICK = [
  'What is the 7-day trial?',
  'How does AI recruitment work?',
  'Is the platform GDPR ready?',
  'Show me pricing plans',
  'كيف يعمل استيراد الموظفين؟',
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: 'Hello! I\'m the REBOULO SmartHR AI assistant.\n\nI answer questions about **platform features, pricing, compliance, documents, recruitment, and security**. I do not provide final legal advice or answer unrelated topics.',
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !minimised) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open, minimised]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const userMsg: Msg = { role: 'user', text: text.trim(), time };
    const answer = getAnswer(text);
    const botMsg: Msg = { role: 'assistant', text: answer, time };
    setMessages(m => [...m, userMsg, botMsg]);
    setInput('');
  };

  const renderText = (text: string) =>
    text.split('\n').map((line, i) => {
      const bold = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      const linked = bold.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-600 underline hover:text-brand-700" target="_self">$1</a>');
      return <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: linked }} />;
    });

  return (
    <>
      {/* ── Floating button ── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3.5 rounded-full shadow-premium hover:shadow-lg transition-all duration-200 hover:scale-105 group"
          aria-label="Open REBOULO AI Assistant"
        >
          <Bot className="h-5 w-5" />
          <span className="text-sm font-medium">Ask REBOULO AI</span>
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        </button>
      )}

      {/* ── Chat window ── */}
      {open && (
        <div className={cn(
          'fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-premium border border-ink-100 flex flex-col overflow-hidden transition-all duration-300',
          minimised ? 'h-16' : 'h-[520px]'
        )}>
          {/* Header */}
          <div className="bg-brand-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">REBOULO AI Assistant</p>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-white/70 text-[10px]">HR platform knowledge only</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setMinimised(v => !v)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                <Minimize2 className="h-3.5 w-3.5 text-white" />
              </button>
              <button onClick={() => setOpen(false)} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
                <X className="h-3.5 w-3.5 text-white" />
              </button>
            </div>
          </div>

          {!minimised && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                    <div className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-2.5 text-xs space-y-1',
                      msg.role === 'user'
                        ? 'bg-brand-600 text-white rounded-tr-none'
                        : 'bg-ink-50 text-ink-800 rounded-tl-none border border-ink-100'
                    )}>
                      {renderText(msg.text)}
                      <p className={cn('text-[10px] mt-1', msg.role === 'user' ? 'text-white/60 text-right' : 'text-ink-400')}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Quick questions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {QUICK.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-[10px] bg-brand-50 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-full hover:bg-brand-100 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Disclaimer */}
              <div className="px-4 pb-2">
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex items-start gap-2">
                  <p className="text-[10px] text-amber-700 leading-relaxed">
                    This assistant provides information about REBOULO SmartHR AI only. Not legal advice. Sensitive HR actions require qualified human review.
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="px-4 pb-4 flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send(input)}
                  placeholder="Ask about features, pricing, compliance…"
                  className="flex-1 input-field py-2 text-xs"
                />
                <button
                  onClick={() => send(input)}
                  disabled={!input.trim()}
                  className="bg-brand-600 hover:bg-brand-700 text-white p-2.5 rounded-xl transition-colors disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Full platform link */}
              <div className="px-4 pb-3 flex-shrink-0">
                <Link
                  to="/app/ai-console"
                  className="flex items-center justify-center gap-1.5 text-[10px] text-ink-400 hover:text-brand-600 transition-colors"
                >
                  Full AI Console inside the platform <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
