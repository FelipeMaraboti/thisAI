import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export const metadata: Metadata = {
  title: 'ThisAI? — Digital Forensics & AI Signal Intelligence',
  description: 'Investigative digital forensics publication and heuristic platform detecting artificial intelligence development signals in web architecture.',
  keywords: ['AI detection', 'web forensics', 'digital forensics', 'AI code analysis', 'technology journalism'],
  authors: [{ name: 'ThisAI? Investigative Lab' }],
  openGraph: {
    title: 'ThisAI? — Digital Forensics & AI Signal Intelligence',
    description: 'Investigating the public surface of websites for AI-assisted development patterns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-bg-primary text-ink-body selection:bg-acid selection:text-bg-primary">
        <LanguageProvider>
          <div className="editorial-grain" aria-hidden="true" />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
