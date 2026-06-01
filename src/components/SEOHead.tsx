import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
}

export function SEOHead({ title, description, canonical, noindex = false, ogImage }: SEOProps) {
  const fullTitle = title
    ? `${title} — REBOULO SmartHR AI™`
    : 'REBOULO SmartHR AI™ — The HR Intelligence Ecosystem';
  const desc = description ||
    'REBOULO SmartHR AI unifies your people, documents and compliance-aware workflows into a single calm workspace with branded executive reports.';
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const image = ogImage || 'https://reboulo-uae.com/og-image.jpg';

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', desc);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    if (canonical) setCanonical(canonical);
    setRobots(noindex ? 'noindex, nofollow' : 'index, follow');
  }, [fullTitle, desc, url, image, canonical, noindex]);

  return null;
}

function setMeta(name: string, content: string, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = href;
}

function setRobots(content: string) {
  let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.setAttribute('name', 'robots'); document.head.appendChild(el); }
  el.content = content;
}
