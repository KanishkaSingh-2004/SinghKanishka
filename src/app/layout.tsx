import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profileData";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.roleTitle}`,
  description: profileData.summary,
  keywords: [
    profileData.name,
    "Software Development Engineer",
    "Full-Stack Developer",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Python",
    "Computer Science AI",
    "Parul University",
  ],
  authors: [{ name: profileData.name }],
  openGraph: {
    title: `${profileData.name} | ${profileData.roleTitle}`,
    description: profileData.summary,
    url: profileData.github,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profileData.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | ${profileData.roleTitle}`,
    description: profileData.summary,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.roleTitle,
    email: profileData.email,
    telephone: profileData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.location,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Parul University",
    },
    sameAs: [profileData.github, profileData.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900">
        {children}
      </body>
    </html>
  );
}
