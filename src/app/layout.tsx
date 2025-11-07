import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
  description:
    'Professional portfolio of Anabel Chura Triviño — Scrum Master with a technical background (.NET), QA Engineer, and agile leader focused on metrics and continuous improvement.',
  keywords:
    'Scrum Master, QA Engineer, Agile, Management 3.0, .NET, Angular, Jira, Azure DevOps, Leadership, Continuous Improvement',
  openGraph: {
    title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
    description:
      'Agile leadership with a technical background: metrics, team coaching, and value delivery.',
    type: 'website',
    url: 'https://anabelchtr.github.io/anabelchura-portfolio/',
    siteName: 'Anabel Chura Portfolio',
    images: [
      {
        url: 'https://anabelchtr.github.io/anabelchura-portfolio/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Anabel Chura Triviño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
    description:
      'Agile leadership with a technical background: metrics, team coaching, and value delivery.',
    images: ['https://anabelchtr.github.io/anabelchura-portfolio/profile.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anabel Chura Triviño',
              jobTitle: 'Scrum Master',
              knowsAbout: [
                'Agile',
                'Scrum',
                'QA',
                'Management 3.0',
                '.NET',
                'Angular',
                'SQL Server',
                'Jira',
                'Azure DevOps',
              ],
              alumniOf: 'U.A.G.R.M',
              nationality: 'Bolivian',
              url: 'https://anabelchtr.github.io/anabelchura-portfolio/',
              email: 'mailto:anabelchtr@gmail.com',
              sameAs: [
                'https://www.linkedin.com/in/anabel-chura-trivino',
                'https://github.com/anabelchtr',
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
