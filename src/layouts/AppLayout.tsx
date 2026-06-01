import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Building2, Users, FolderKanban, Sparkles, Brain,
  GraduationCap, Bell, Shield, CreditCard, Settings, Zap, Rocket,
  LogOut, Menu, X, Radar, Scale, BarChart3, Heart, Star, BookOpen,
  MessageSquare, Globe2, TrendingUp, Search, Award, Briefcase, Newspaper,
  ChevronDown, ChevronRight,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';
import { useLang } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

type NavItem = { label: string; href: string; icon: React.ElementType; children?: NavItem[] };

const NAV: NavItem[] = [
  { label: 'Dashboard',           href: '/app',                    icon: LayoutDashboard },
  { label: 'Company',             href: '/app/company',            icon: Building2 },
  { label: 'Employees',           href: '/app/people',             icon: Users },
  { label: 'Recruitment AI',      href: '/app/recruitment',        icon: Brain },
  { label: 'HR Documents',        href: '/app/studio',             icon: Sparkles },
  { label: 'Workforce Radar',     href: '/app/workforce-radar',    icon: Radar },
  { label: 'Compliance Guardian', href: '/app/compliance',         icon: Scale },
  { label: 'Pulse Surveys',       href: '/app/pulse-surveys',      icon: Heart },
  { label: 'Executive Briefing',  href: '/app/executive-briefing', icon: BarChart3 },
  { label: 'Employer Brand',      href: '/app/employer-brand',     icon: Star },
  { label: 'Onboarding AI',       href: '/app/onboarding',         icon: BookOpen },
  { label: 'Culture Copilot',     href: '/app/culture-copilot',    icon: MessageSquare },
  { label: 'Country Guide',       href: '/app/country-guide',      icon: Globe2 },
  { label: 'Compensation',        href: '/app/compensation',       icon: TrendingUp },
  { label: 'Intelligence Center', href: '/app/intelligence-center',icon: Search },
  { label: 'HR Academy',          href: '/app/hr-academy',         icon: Award },
  { label: 'Exit & Retention',    href: '/app/exit-retention',     icon: Briefcase },
  { label: 'HR Newsroom',         href: '/app/hr-newsroom',        icon: Newspaper },
  { label: 'Projects',            href: '/app/projects',           icon: FolderKanban },
  { label: 'Learn',               href: '/app/learn',              icon: GraduationCap },
  { label: 'Notifications',       href: '/app/notifications',      icon: Bell },
  { label: 'Audit',               href: '/app/audit',              icon: Shield },
  { label: 'Billing',             href: '/app/billing',            icon: CreditCard },
  { label: 'System',              href: '/app/system',             icon: Zap },
  { label: 'Settings',            href: '/app/settings',           icon: Settings },
  { label: 'Launch Readiness',    href: '/app/launch-readiness',   icon: Rocket },
];

// Group nav items for cleaner sidebar
const NAV_GROUPS = [
  { label: 'Core',         items: NAV.slice(0, 5) },
  { label: 'AI Tools',     items: NAV.slice(5, 19) },
  { label: 'Operations',   items: NAV.slice(19, 24) },
  { label: 'Admin',        items: NAV.slice(24) },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const { isRTL } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const handleSignOut = async () => { await signOut(); navigate('/'); };

  const isActive = (href: string) =>
    href === '/app' ? location.pathname === href : location.pathname.startsWith(href);

  const toggle = (label: string) => setCollapsed(c => ({ ...c, [label]: !c[label] }));

  const Sidebar = () => (
    <aside className={cn(
      'w-60 bg-white border-r border-ink-100 flex flex-col h-screen sticky top-0 flex-shrink-0',
      isRTL && 'border-r-0 border-l'
    )}>
      <div className="p-4 border-b border-ink-100">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {NAV_GROUPS.map(group => (
          <div key={group.label} className="mb-1">
            <button
              onClick={() => toggle(group.label)}
              className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-ink-400 hover:text-ink-600 transition-colors"
            >
              {group.label}
              {collapsed[group.label]
                ? <ChevronRight className="h-3 w-3" />
                : <ChevronDown className="h-3 w-3" />}
            </button>
            {!collapsed[group.label] && (
              <div className="space-y-0.5">
                {group.items.map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn('sidebar-link', isActive(item.href) && 'active')}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-ink-100">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-ink-50 cursor-pointer">
          <div className="h-7 w-7 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-brand-700">
            {user?.email?.[0]?.toUpperCase() ?? 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-ink-900 truncate">{user?.email}</p>
            <p className="text-[10px] text-ink-400">Owner</p>
          </div>
        </div>
        <button onClick={handleSignOut} className="sidebar-link w-full mt-1 text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="h-4 w-4" /><span className="text-xs">Sign out</span>
        </button>
      </div>
    </aside>
  );

  return (
    <div className={cn('flex min-h-screen bg-ink-50', isRTL && 'flex-row-reverse')}>
      <div className="hidden md:block"><Sidebar /></div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-ink-950/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10"><Sidebar /></div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <div className="md:hidden sticky top-0 z-40 bg-white border-b border-ink-100 px-4 h-14 flex items-center justify-between">
          <Logo size="sm" />
          <button onClick={() => setSidebarOpen(v => !v)} className="btn-ghost">
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
