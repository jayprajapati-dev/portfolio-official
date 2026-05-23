import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://jp-cloud.space-z.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jay Prajapati | Cloud & Software Engineer",
  description:
    "Jay Prajapati — Cloud & Software Engineer building scalable web applications, infrastructure automation, and developer tools from Gujarat, India.",
  keywords: [
    "Jay Prajapati",
    "Cloud Engineer",
    "Software Engineer",
    "Web Developer India",
    "DevOps Engineer",
    "MERN Stack Developer",
    "Scalable Infrastructure",
    "PHP Developer",
    "React Developer",
    "AWS Engineer Gujarat",
    "Full Stack Developer",
    "TaskProper",
    "Cloud Architecture",
    "System Design",
  ],
  authors: [{ name: "Jay Prajapati", url: SITE_URL }],
  creator: "Jay Prajapati",
  publisher: "Jay Prajapati",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "34YykTA0XOMgSVXkUhxqu5bnbpMoP12wAPlDBL2t0xE",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "x-default": SITE_URL,
      "en": SITE_URL,
      "en-IN": SITE_URL,
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
    },
  },
  openGraph: {
    title: "Jay Prajapati | Cloud & Software Engineer",
    description:
      "Building scalable web applications, cloud infrastructure, and developer tools. MERN stack, AWS, Docker, and DevOps from Gujarat, India.",
    url: SITE_URL,
    siteName: "Jay Prajapati Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Jay Prajapati — Cloud & Software Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Prajapati | Cloud & Software Engineer",
    description:
      "Building scalable web apps, cloud infrastructure, and developer tools. MERN stack, AWS, Docker, DevOps.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@jayprajapati",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Jay Prajapati",
        url: SITE_URL,
        jobTitle: "Cloud & Software Engineer",
        description:
          "Versatile Software Engineer specializing in the MERN stack, Cloud Infrastructure, and micro-SaaS logic.",
        image: `${SITE_URL}/og-image.png`,
        email: "prajapatijay17112007@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Palanpur",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/jayprajapati-dev",
          "https://www.linkedin.com/in/jayprajapati171120/",
          "https://www.taskproper.com",
        ],
        knowsAbout: [
          "Cloud Computing",
          "System Design",
          "Web Development",
          "DevOps",
          "MERN Stack",
          "Infrastructure as Code",
          "Docker",
          "AWS",
          "Automation",
          "Scalable Architecture",
          "PHP",
          "Python",
          "JavaScript",
          "React",
          "Node.js",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Diploma in Information Technology",
        },
        worksFor: {
          "@type": "Organization",
          name: "TaskProper",
          url: "https://www.taskproper.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Jay Prajapati Portfolio",
        description:
          "Personal portfolio of Jay Prajapati — Cloud & Software Engineer building scalable infrastructure and web applications.",
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "Jay Prajapati — Cloud & Software Engineer",
        description:
          "Professional profile and portfolio showcasing cloud infrastructure projects, full-stack applications, and developer tools.",
        about: { "@id": `${SITE_URL}/#person` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
