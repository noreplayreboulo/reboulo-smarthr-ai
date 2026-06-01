import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Building2, Users, FolderKanban, Sparkles, Brain,
  GraduationCap, Bell, Shield, CreditCard, Settings, Zap, Rocket,
  LogOut, Menu, X,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { useAuth } from '../contexts/AuthContext';
import { useLang } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const NAV = [
  { label: 'Dashboard',         href: '/app',                  icon: LayoutDashboard },
  { label: 'Company',           href: '/app/company',          icon: Building2 },
  { label: 'People',            href: '/app/people',           icon: Users },
  { label: 'Projects',          href: '/app/projects',         icon: FolderKanban },
  { label: 'Studio',            href: '/app/studio',           icon: Sparkles },
  { label: 'AI Console',        href: '/app/ai-console',       icon: Brain },
  { label: 'Learn',             href: '/app/learn',            icon: GraduationCap },
  { label: 'Notifications',     href: '/app/notifications',    icon: Bell },
  { label: 'Audit',             href: '/app/audit',            icon: Shield },
  { label: 'Billing',           href: '/app/billing',          icon: CreditCard },
  { label: 'System',            href: '/app/system',           icon: Zap },
  { label: 'Settings',          href: '/app/settings',         icon: Settings },
  { label: 'Launch Readiness',  href: '/app/launch-readiness', icon: Rocket },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const { isRTL } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => { await signOut(); navigate('/'); };

  const Sidebar = () => (
    <aside className={cn(
      'w-64 bg-white border-r border-ink-100 flex flex-col h-screen sticky top-0 flex-shrink-0',
      isRTL && 'border-r-0 border-l',
    )}>
      <div className="p-5 border-b border-ink-100">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        {NAV.map(item => {
          const active = location.pathname === item.href || (item.href !== '/app' && location.pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn('sidebar-link', active && 'active')}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-ink-100">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-ink-50 cursor-pointer">
          <div className="h-8 w-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-brand-700">
            {user?.email?.[0]?.toUpperCase() ?? 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-ink-900 truncate">{user?.email}</p>
            <p className="text-xs text-ink-400">Owner</p>
          </div>
        </div>
        <button onClick={handleSignOut} className="sidebar-link w-full mt-1 text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="h-4 w-4" />Sign out
        </button>
      </div>
    </aside>
  );

  return (
    <div className={cn('flex min-h-screen bg-ink-50', isRTL && 'flex-row-reverse')}>
      {/* Desktop sidebar */}
      <div className="hidden md:block"><Sidebar /></div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-ink-950/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10"><Sidebar /></div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (mobile) */}
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
