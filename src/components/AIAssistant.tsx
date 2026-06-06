import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Minimize2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

// REBOULO SmartHR AI — HR platform assistant
// Scope: HR department services for companies ONLY
// Not: visa services, immigration, legal services, government services
const HR_ANSWERS: { patterns: string[]; answer: string }[] = [
  {
    patterns: ['trial', 'free', 'تجربة', 'مجاني'],
    answer: 'REBOULO SmartHR AI offers a **7-day free trial** with full platform access. No credit card required. Your HR data is preserved if you choose not to subscribe after the trial.',
  },
  {
    patterns: ['price', 'pricing', 'cost', 'plan', 'سعر', 'خطة', 'تكلفة'],
    answer: 'HR platform plans:\n• **Starter — €49/mo**: Up to 25 employees, HR documents, employee import, company identity\n• **Professional — €149/mo**: Full AI suite, up to 150 employees, workforce radar, pulse surveys, HR policy audit, executive briefing\n• **Business — €299/mo**: Unlimited employees, employer brand studio, HR academy, branded PDF exports\n• **Enterprise**: Custom pricing, SSO, dedicated HR Customer Success Manager\n\nExtra projects: €15/project beyond 5 included.',
  },
  {
    patterns: ['import', 'excel', 'csv', 'employee', 'استيراد', 'موظف'],
    answer: '**Smart Employee Import™** supports Excel (.xlsx) and CSV. Fields include: employee number (mandatory), name, job title, department, employment type, contract type, salary, probation end date, reporting manager, start date. The platform validates every row — errors shown before confirming. No fake import success.',
  },
  {
    patterns: ['document', 'contract', 'letter', 'وثيقة', 'عقد', 'خطاب', 'شهادة'],
    answer: '**HR Document Generator™** produces 15 HR document types:\n• Employment contracts (permanent, fixed-term, part-time)\n• Offer letters & rejection letters\n• Warning letters & disciplinary notices\n• Salary certificates & payslip letters\n• Probation review letters\n• Termination notices\n• Performance Improvement Plans (PIPs)\n• Onboarding checklists\n\nOutput modes: formal corporate, friendly HR, or bilingual Arabic + English. All branded with your company logo and letterhead.',
  },
  {
    patterns: ['compliance', 'audit', 'policy', 'امتثال', 'سياسة', 'تدقيق'],
    answer: '**HR Policy & Audit Guardian™** covers internal HR compliance:\n• Leave policy completeness (annual, sick, maternity, paternity, unpaid)\n• Probation end-date tracker with review reminders\n• Employment contract type audit\n• HR policy gap detector (what policies are missing?)\n• HR audit readiness score with action plan\n\nThis is an **HR department tool** — not a legal, immigration, or visa service. For legal matters, consult qualified legal professionals.',
  },
  {
    patterns: ['recruitment', 'cv', 'candidate', 'hire', 'توظيف', 'مرشح', 'تعيين'],
    answer: '**AI Recruitment Suite™** for HR departments:\n• CV scoring across 8 criteria: skills, experience, education, communication, salary fit, role match, culture indicators, gaps\n• Job-candidate matching score\n• Interview question generator per role\n• Bias-warning layer on every assessment\n• Offer letter draft — branded, ready for HR review\n\n⚠️ Human review is mandatory before any hiring decision. The AI assists your HR team — it does not make final decisions.',
  },
  {
    patterns: ['performance', 'appraisal', 'review', 'أداء', 'تقييم'],
    answer: '**Performance management** in REBOULO SmartHR AI:\n• Performance review templates\n• Manager assessment forms\n• Performance Improvement Plan (PIP) generator\n• Goal tracking support\n• Performance conversation script (Culture Copilot™)\n\nAll performance records are stored securely per company. No data shared between companies.',
  },
  {
    patterns: ['pulse', 'survey', 'engagement', 'mood', 'استطلاع', 'مشاركة', 'رضا'],
    answer: '**Pulse Survey & Sentiment Engine™** for HR teams:\n• Anonymous employee pulse questions\n• Department mood score (0–100)\n• Burnout signals and early warning alerts\n• Manager trust score per team\n• Conflict and morale risk indicators\n• AI-generated HR action plan\n\nIndividual identity is never exposed in anonymous surveys.',
  },
  {
    patterns: ['onboarding', 'new hire', 'استقبال', 'تأهيل', 'موظف جديد'],
    answer: '**Onboarding Journey AI™** for HR departments:\n• 7 / 30 / 60 / 90-day onboarding plan templates\n• Role-specific onboarding checklists\n• Manager preparation guide\n• Employee welcome pack generator\n• First-week schedule\n• Company culture introduction\n• Probation checkpoint reminders\n\nEnsures every new employee receives a structured, consistent onboarding experience.',
  },
  {
    patterns: ['workforce', 'radar', 'attrition', 'burnout', 'risk', 'قوى عاملة', 'احتراق', 'دوران'],
    answer: '**Workforce Intelligence Radar™** monitors HR health signals:\n• Department health score (0–100)\n• Attrition risk: Low / Medium / High / Critical\n• Burnout signals from leave and attendance patterns\n• Absenteeism trend detection\n• Skills gap analysis\n• Manager performance indicators\n• AI-recommended HR intervention per department',
  },
  {
    patterns: ['executive', 'briefing', 'report', 'ceo', 'board', 'تقرير', 'تنفيذي'],
    answer: '**Executive HR Briefing Room™** for leadership:\n• Monthly HR executive summary\n• Workforce health score\n• Top 3 HR risks with severity\n• Hiring pipeline status and bottlenecks\n• Employee engagement overview\n• HR compliance urgency\n• Recommended executive actions\n• Export to branded company PDF',
  },
  {
    patterns: ['culture', 'conflict', 'leadership', 'manager', 'ثقافة', 'قائد', 'مدير'],
    answer: '**Culture & Leadership Copilot™** helps HR and managers:\n• Conflict diagnosis between employees\n• Low-morale situation intervention plan\n• Performance conversation script\n• Burnout support guidance for managers\n• Employee grievance first-response guide\n• Meeting agenda and follow-up plan\n\nThis tool provides HR guidance — not psychological or legal advice.',
  },
  {
    patterns: ['compensation', 'salary', 'benefits', 'pay', 'راتب', 'تعويض', 'مزايا'],
    answer: '**Benefits & Compensation Intelligence™** for HR:\n• Salary band builder per job level\n• Benefits package comparison tool\n• Compensation communication generator\n• Pay transparency readiness check\n• Benefits satisfaction pulse\n• Equity and fairness risk alerts',
  },
  {
    patterns: ['security', 'privacy', 'data', 'أمان', 'خصوصية', 'بيانات'],
    answer: '**HR data security** in REBOULO SmartHR AI:\n• Row-Level Security (RLS) — one company can never access another\'s HR data\n• Private document storage with signed access URLs\n• No permanent public links to employee files\n• AI keys and Stripe keys stored server-side only — never in frontend\n• 8 role levels: Owner, HR Admin, HR Staff, Recruiter, Manager, Employee, Auditor, Viewer\n• Full audit trail on all AI-generated recommendations',
  },
  {
    patterns: ['language', 'arabic', 'rtl', 'عربية', 'لغة'],
    answer: 'REBOULO SmartHR AI supports **5 languages**: English, العربية (full RTL), Français, Português, Español. No mixed languages on any screen — when Arabic is selected, the entire platform switches to Arabic RTL.',
  },
  {
    patterns: ['ai', 'artificial', 'openai', 'assistant', 'ذكاء', 'اصطناعي'],
    answer: '**AI in REBOULO SmartHR AI** is HR-scoped only:\n• Answers HR platform questions\n• Drafts HR documents\n• Scores job candidates\n• Analyses employee pulse data\n• Generates executive HR reports\n\nThe AI does NOT:\n• Provide final legal advice\n• Make automatic hiring or termination decisions\n• Answer questions outside HR operations\n• Access other companies\' data\n\nEvery AI output includes risk level, confidence score, and **human review required** flag.',
  },
  {
    patterns: ['cancel', 'refund', 'stop', 'إلغاء', 'استرداد'],
    answer: 'You can cancel your subscription at any time from your billing settings. **Your HR data is preserved for 90 days** after cancellation. We never auto-delete employee data. We do not auto-charge without your explicit authorisation.',
  },
  {
    patterns: ['demo', 'tour', 'how', 'show', 'عرض', 'جولة', 'كيف'],
    answer: 'We have a full **interactive product demo** at [/demo](/demo) — 8 step-by-step HR workflows with live data previews. No login required. You can also request a personalised demo via [/contact](/contact).',
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const item of HR_ANSWERS) {
    if (item.patterns.some(p => lower.includes(p))) return item.answer;
  }
  return 'This assistant answers questions about **REBOULO SmartHR AI HR platform features** only — recruitment, employee management, performance, documents, HR compliance, pulse surveys, and workforce intelligence.\n\nFor questions outside HR operations, please contact us at [phd.ghali@reboulo.com](mailto:phd.ghali@reboulo.com).';
}

type Msg = { role: 'user' | 'assistant'; text: string; time: string };

const QUICK = [
  'What does the 7-day trial include?',
  'What HR documents can it generate?',
  'How does AI recruitment work?',
  'Tell me about pulse surveys',
  'ما هي خطط الأسعار؟',
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text: 'Hello! I\'m the REBOULO SmartHR AI platform assistant.\n\nI answer questions about **HR platform features, pricing, recruitment tools, employee management, documents, HR compliance, and workforce intelligence**.\n\nThis is an HR department platform — I do not answer questions about visa services, immigration, or legal services.',
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
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3.5 rounded-full shadow-premium hover:shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Open REBOULO HR Assistant"
        >
          <Bot className="h-5 w-5" />
          <span className="text-sm font-medium">HR Platform Assistant</span>
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        </button>
      )}

      {open && (
        <div className={cn(
          'fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-premium border border-ink-100 flex flex-col overflow-hidden transition-all duration-300',
          minimised ? 'h-16' : 'h-[540px]'
        )}>
          <div className="bg-brand-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">REBOULO HR Assistant</p>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-white/70 text-[10px]">HR platform questions only</p>
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

              <div className="px-4 pb-2">
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                  <p className="text-[10px] text-amber-700 leading-relaxed">
                    This assistant covers REBOULO SmartHR AI HR platform features only. Not a legal, visa, or immigration service. All AI outputs require human HR review.
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send(input)}
                  placeholder="Ask about HR features, pricing, documents…"
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

              <div className="px-4 pb-3 flex-shrink-0">
                <Link to="/app/ai-console" className="flex items-center justify-center gap-1.5 text-[10px] text-ink-400 hover:text-brand-600 transition-colors">
                  Full HR AI Console inside the platform <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
