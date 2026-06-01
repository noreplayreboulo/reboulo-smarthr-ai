import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'en' | 'ar' | 'fr' | 'pt' | 'es';

const translations: Record<Lang, Record<string, string>> = {
  en: {
    nav_platform: 'Platform', nav_studio: 'Intelligence Studio', nav_pricing: 'Pricing',
    nav_open: 'Open workspace', nav_signin: 'Sign in', nav_start: 'Start free',
    hero_badge: 'REBOULO HR Intelligence Suite™',
    hero_title_1: 'The Human Resources', hero_title_2: 'Operating System',
    hero_title_3: 'for modern companies.',
    hero_sub: 'REBOULO SmartHR AI unifies your people, documents and compliance-aware workflows into a single calm workspace — with branded executive reports prepared by AI and reviewed by you.',
    hero_cta1: 'Start free — 7 days', hero_cta2: 'Open workspace',
    trial_note: '7-day free trial · No credit card required',
    footer_tagline: 'An AI-powered HR Intelligence Ecosystem for modern companies — calm, precise, and quietly enterprise-grade.',
    footer_compliance: 'Compliance-aware · Not a substitute for legal advice.',
    footer_product: 'Product', footer_legal: 'Legal', footer_offices: 'Offices',
    footer_privacy: 'Privacy', footer_terms: 'Terms', footer_security: 'Security',
    footer_rights: '© 2026 REBOULO SmartHR AI™ · All rights reserved.',
    signin_title: 'Welcome back', signin_sub: 'Sign in to your REBOULO SmartHR workspace.',
    signin_email: 'Work email', signin_password: 'Password', signin_btn: 'Sign in',
    signin_forgot: 'Forgot?', signin_noaccount: 'No account?', signin_create: 'Create one',
    signup_title: 'Create your workspace', signup_sub: 'Start your 7-day free trial. No credit card required.',
    signup_first: 'First name', signup_last: 'Last name', signup_company: 'Company name',
    signup_email: 'Work email', signup_password: 'Password', signup_btn: 'Create workspace',
    signup_hasaccount: 'Already have an account?', signup_login: 'Sign in',
    pricing_title: 'Plans that scale with you', pricing_sub: 'Start in minutes. Upgrade as you grow.',
    plan_starter: 'Starter', plan_growth: 'Growth', plan_enterprise: 'Enterprise',
    plan_starter_desc: 'For lean HR teams centralising operations.',
    plan_growth_desc: 'For scaling companies needing full HR intelligence.',
    plan_enterprise_desc: 'For global organisations with complex workforce.',
    plan_mo: '/mo', plan_trial: 'Start 7-day free trial', plan_sales: 'Talk to sales',
    plan_custom: 'Custom',
  },
  ar: {
    nav_platform: 'المنصة', nav_studio: 'استوديو الذكاء', nav_pricing: 'الأسعار',
    nav_open: 'فتح مساحة العمل', nav_signin: 'تسجيل الدخول', nav_start: 'ابدأ مجاناً',
    hero_badge: 'مجموعة REBOULO لذكاء الموارد البشرية™',
    hero_title_1: 'نظام تشغيل', hero_title_2: 'الموارد البشرية',
    hero_title_3: 'للشركات الحديثة.',
    hero_sub: 'تجمع REBOULO SmartHR AI موظفيك، مستنداتك، ومسارات العمل المتوافقة في مساحة عمل واحدة هادئة — مع تقارير تنفيذية مُعلَّمة بهوية شركتك، يُعدّها الذكاء الاصطناعي وتراجعها أنت.',
    hero_cta1: 'ابدأ مجاناً — 7 أيام', hero_cta2: 'فتح مساحة العمل',
    trial_note: 'تجربة مجانية 7 أيام · لا بطاقة ائتمانية مطلوبة',
    footer_tagline: 'منظومة ذكاء اصطناعي للموارد البشرية للشركات الحديثة — هادئة، دقيقة، وبجودة المؤسسات الكبرى.',
    footer_compliance: 'واعٍ بالامتثال · ليس بديلاً عن الاستشارة القانونية.',
    footer_product: 'المنتج', footer_legal: 'قانوني', footer_offices: 'مكاتبنا',
    footer_privacy: 'الخصوصية', footer_terms: 'الشروط', footer_security: 'الأمان',
    footer_rights: '© 2026 REBOULO SmartHR AI™ · جميع الحقوق محفوظة.',
    signin_title: 'مرحباً بعودتك', signin_sub: 'تسجيل الدخول إلى مساحة عمل REBOULO SmartHR.',
    signin_email: 'البريد المهني', signin_password: 'كلمة المرور', signin_btn: 'تسجيل الدخول',
    signin_forgot: 'نسيت؟', signin_noaccount: 'لا يوجد حساب؟', signin_create: 'إنشاء حساب',
    signup_title: 'أنشئ مساحة عملك', signup_sub: 'ابدأ تجربتك المجانية لمدة 7 أيام. لا بطاقة ائتمانية مطلوبة.',
    signup_first: 'الاسم الأول', signup_last: 'اسم العائلة', signup_company: 'اسم الشركة',
    signup_email: 'البريد المهني', signup_password: 'كلمة المرور', signup_btn: 'إنشاء مساحة العمل',
    signup_hasaccount: 'لديك حساب بالفعل؟', signup_login: 'تسجيل الدخول',
    pricing_title: 'خطط تنمو معك', pricing_sub: 'ابدأ في دقائق. طوّر مع نمو شركتك.',
    plan_starter: 'المبتدئ', plan_growth: 'النمو', plan_enterprise: 'المؤسسات',
    plan_starter_desc: 'لفرق الموارد البشرية الصغيرة التي تبدأ مركزة عملياتها.',
    plan_growth_desc: 'للشركات المتنامية التي تحتاج ذكاء موارد بشرية متكاملاً.',
    plan_enterprise_desc: 'للمؤسسات العالمية ذات القوى العاملة المعقدة.',
    plan_mo: '/شهر', plan_trial: 'ابدأ تجربة 7 أيام مجاناً', plan_sales: 'تحدث مع المبيعات',
    plan_custom: 'مخصص',
  },
  fr: {
    nav_platform: 'Plateforme', nav_studio: 'Studio Intelligence', nav_pricing: 'Tarifs',
    nav_open: 'Ouvrir l\'espace', nav_signin: 'Connexion', nav_start: 'Commencer',
    hero_badge: 'REBOULO HR Intelligence Suite™',
    hero_title_1: 'Le Système d\'Exploitation', hero_title_2: 'des Ressources Humaines',
    hero_title_3: 'pour entreprises modernes.',
    hero_sub: 'REBOULO SmartHR AI unifie vos employés, documents et workflows conformes en un seul espace de travail calme — avec des rapports exécutifs de marque préparés par l\'IA et examinés par vous.',
    hero_cta1: 'Commencer — 7 jours', hero_cta2: 'Ouvrir l\'espace',
    trial_note: 'Essai gratuit 7 jours · Aucune carte de crédit requise',
    footer_tagline: 'Un écosystème d\'intelligence RH alimenté par l\'IA pour les entreprises modernes.',
    footer_compliance: 'Conformité-aware · Ne remplace pas un conseil juridique.',
    footer_product: 'Produit', footer_legal: 'Légal', footer_offices: 'Bureaux',
    footer_privacy: 'Confidentialité', footer_terms: 'Conditions', footer_security: 'Sécurité',
    footer_rights: '© 2026 REBOULO SmartHR AI™ · Tous droits réservés.',
    signin_title: 'Bon retour', signin_sub: 'Connectez-vous à votre espace REBOULO SmartHR.',
    signin_email: 'Email professionnel', signin_password: 'Mot de passe', signin_btn: 'Se connecter',
    signin_forgot: 'Oublié?', signin_noaccount: 'Pas de compte?', signin_create: 'Créer un',
    signup_title: 'Créer votre espace', signup_sub: 'Commencez votre essai gratuit de 7 jours. Sans carte de crédit.',
    signup_first: 'Prénom', signup_last: 'Nom', signup_company: 'Nom de l\'entreprise',
    signup_email: 'Email professionnel', signup_password: 'Mot de passe', signup_btn: 'Créer l\'espace',
    signup_hasaccount: 'Déjà un compte?', signup_login: 'Se connecter',
    pricing_title: 'Des plans qui évoluent avec vous', pricing_sub: 'Commencez en minutes. Évoluez selon votre croissance.',
    plan_starter: 'Starter', plan_growth: 'Croissance', plan_enterprise: 'Entreprise',
    plan_starter_desc: 'Pour les équipes RH légères qui commencent à centraliser.',
    plan_growth_desc: 'Pour les PME en croissance ayant besoin d\'IA RH complète.',
    plan_enterprise_desc: 'Pour les organisations mondiales avec une main-d\'œuvre complexe.',
    plan_mo: '/mois', plan_trial: 'Essai gratuit 7 jours', plan_sales: 'Parler aux ventes',
    plan_custom: 'Personnalisé',
  },
  pt: {
    nav_platform: 'Plataforma', nav_studio: 'Estúdio de Inteligência', nav_pricing: 'Preços',
    nav_open: 'Abrir espaço', nav_signin: 'Entrar', nav_start: 'Começar grátis',
    hero_badge: 'REBOULO HR Intelligence Suite™',
    hero_title_1: 'O Sistema Operativo', hero_title_2: 'de Recursos Humanos',
    hero_title_3: 'para empresas modernas.',
    hero_sub: 'REBOULO SmartHR AI unifica as suas pessoas, documentos e fluxos de trabalho em conformidade num único espaço calmo — com relatórios executivos de marca preparados por IA e revistos por si.',
    hero_cta1: 'Começar — 7 dias', hero_cta2: 'Abrir espaço',
    trial_note: 'Teste gratuito de 7 dias · Sem cartão de crédito',
    footer_tagline: 'Um ecossistema de inteligência de RH alimentado por IA para empresas modernas.',
    footer_compliance: 'Aware de conformidade · Não substitui aconselhamento jurídico.',
    footer_product: 'Produto', footer_legal: 'Legal', footer_offices: 'Escritórios',
    footer_privacy: 'Privacidade', footer_terms: 'Termos', footer_security: 'Segurança',
    footer_rights: '© 2026 REBOULO SmartHR AI™ · Todos os direitos reservados.',
    signin_title: 'Bem-vindo de volta', signin_sub: 'Aceda ao seu espaço REBOULO SmartHR.',
    signin_email: 'Email profissional', signin_password: 'Palavra-passe', signin_btn: 'Entrar',
    signin_forgot: 'Esqueceu?', signin_noaccount: 'Sem conta?', signin_create: 'Criar',
    signup_title: 'Criar o seu espaço', signup_sub: 'Inicie o seu teste gratuito de 7 dias. Sem cartão de crédito.',
    signup_first: 'Nome próprio', signup_last: 'Apelido', signup_company: 'Nome da empresa',
    signup_email: 'Email profissional', signup_password: 'Palavra-passe', signup_btn: 'Criar espaço',
    signup_hasaccount: 'Já tem conta?', signup_login: 'Entrar',
    pricing_title: 'Planos que crescem consigo', pricing_sub: 'Comece em minutos. Evolua conforme cresce.',
    plan_starter: 'Starter', plan_growth: 'Crescimento', plan_enterprise: 'Empresa',
    plan_starter_desc: 'Para equipas de RH pequenas a centralizar operações.',
    plan_growth_desc: 'Para PMEs em crescimento que precisam de inteligência de RH.',
    plan_enterprise_desc: 'Para organizações globais com força de trabalho complexa.',
    plan_mo: '/mês', plan_trial: 'Teste gratuito 7 dias', plan_sales: 'Falar com vendas',
    plan_custom: 'Personalizado',
  },
  es: {
    nav_platform: 'Plataforma', nav_studio: 'Estudio de Inteligencia', nav_pricing: 'Precios',
    nav_open: 'Abrir espacio', nav_signin: 'Iniciar sesión', nav_start: 'Comenzar gratis',
    hero_badge: 'REBOULO HR Intelligence Suite™',
    hero_title_1: 'El Sistema Operativo', hero_title_2: 'de Recursos Humanos',
    hero_title_3: 'para empresas modernas.',
    hero_sub: 'REBOULO SmartHR AI unifica a tu gente, documentos y flujos de trabajo conformes en un único espacio de trabajo tranquilo — con informes ejecutivos de marca preparados por IA y revisados por ti.',
    hero_cta1: 'Comenzar — 7 días', hero_cta2: 'Abrir espacio',
    trial_note: 'Prueba gratuita 7 días · Sin tarjeta de crédito',
    footer_tagline: 'Un ecosistema de inteligencia de RRHH impulsado por IA para empresas modernas.',
    footer_compliance: 'Conforme con normativa · No sustituye asesoramiento jurídico.',
    footer_product: 'Producto', footer_legal: 'Legal', footer_offices: 'Oficinas',
    footer_privacy: 'Privacidad', footer_terms: 'Términos', footer_security: 'Seguridad',
    footer_rights: '© 2026 REBOULO SmartHR AI™ · Todos los derechos reservados.',
    signin_title: 'Bienvenido de nuevo', signin_sub: 'Inicia sesión en tu espacio REBOULO SmartHR.',
    signin_email: 'Email de trabajo', signin_password: 'Contraseña', signin_btn: 'Iniciar sesión',
    signin_forgot: '¿Olvidaste?', signin_noaccount: '¿Sin cuenta?', signin_create: 'Crear una',
    signup_title: 'Crea tu espacio', signup_sub: 'Inicia tu prueba gratuita de 7 días. Sin tarjeta de crédito.',
    signup_first: 'Nombre', signup_last: 'Apellido', signup_company: 'Nombre de la empresa',
    signup_email: 'Email de trabajo', signup_password: 'Contraseña', signup_btn: 'Crear espacio',
    signup_hasaccount: '¿Ya tienes cuenta?', signup_login: 'Iniciar sesión',
    pricing_title: 'Planes que crecen contigo', pricing_sub: 'Comienza en minutos. Evoluciona según creces.',
    plan_starter: 'Starter', plan_growth: 'Crecimiento', plan_enterprise: 'Empresa',
    plan_starter_desc: 'Para equipos de RRHH pequeños que centralizan operaciones.',
    plan_growth_desc: 'Para PYMEs en crecimiento que necesitan inteligencia de RRHH.',
    plan_enterprise_desc: 'Para organizaciones globales con plantillas complejas.',
    plan_mo: '/mes', plan_trial: 'Prueba gratuita 7 días', plan_sales: 'Hablar con ventas',
    plan_custom: 'Personalizado',
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem('reboulo_lang') as Lang) || 'en');

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('reboulo_lang', l);
  };

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [lang, isRTL]);

  const t = (key: string) => translations[lang]?.[key] ?? translations['en']?.[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be within LanguageProvider');
  return ctx;
}

export const LANGUAGES = [
  { code: 'en' as Lang, label: 'English', flag: '🇬🇧' },
  { code: 'ar' as Lang, label: 'العربية', flag: '🇦🇪' },
  { code: 'fr' as Lang, label: 'Français', flag: '🇫🇷' },
  { code: 'pt' as Lang, label: 'Português', flag: '🇵🇹' },
  { code: 'es' as Lang, label: 'Español', flag: '🇪🇸' },
];
