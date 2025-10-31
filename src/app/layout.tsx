import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
  description: 'Portafolio profesional de Anabel Chura Triviño: Scrum Master con base técnica (.NET), QA Engineer y liderazgo ágil orientado a métricas y mejora continua.',
  keywords: "Scrum Master, QA Engineer, Agile, Management 3.0, .NET, Angular, Jira, Azure DevOps, Leadership, Continuous Improvement",
  openGraph: {
    title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
    description: 'Liderazgo ágil con base técnica: métricas, coaching de equipos y entrega de valor.',
    type: 'website',
    url: 'https://anabel-chura-portfolio.web.app',
    images: [
      {
        url: 'https://picsum.photos/seed/og-cover/1200/630',
        width: 1200,
        height: 630,
        alt: 'Anabel Chura Triviño Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anabel Chura Triviño | Scrum Master • QA • Ex-Developer',
    description: 'Liderazgo ágil con base técnica: métricas, coaching de equipos y entrega de valor.',
    images: ['https://picsum.photos/seed/og-cover/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anabel Chura Triviño",
            "jobTitle": "Scrum Master",
            "knowsAbout": ["Agile","Scrum","QA","Management 3.0",".NET","Angular","SQL Server","Jira","Azure DevOps"],
            "alumniOf": "U.A.G.R.M",
            "nationality": "Bolivian",
            "url": "https://anabel-chura-portfolio.web.app",
            "email": "mailto:anabelchtr@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/in/anabel-chura-trivino",
              "https://github.com/anabelchura"
            ]
          }) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
