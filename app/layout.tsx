import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Oswald } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: "ARAB REFORGER | مجتمع الرول بلاي العربي في Arma Reforger",
    template: "%s | ARAB REFORGER",
  },
  description:
    "ARAB REFORGER مجتمع عربي للرول بلاي الواقعي على Arma Reforger. قطاعات حكومية، وظائف مدنية، قصص إجرامية، وعالم حي تصنعه قراراتك.",
  keywords: [
    "Arma Reforger",
    "Arab Reforger",
    "رول بلاي",
    "سيرفر عربي",
    "Roleplay",
  ],
  openGraph: {
    title: "ARAB REFORGER",
    description: "عالمك، قصتك، قراراتك — مجتمع الرول بلاي العربي على Arma Reforger.",
    images: ["/images/arab-banner.webp"],
    locale: "ar_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#120e09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${arabic.variable} ${oswald.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-reveal')",
          }}
        />
      </head>
      <body
        className="min-h-screen font-sans antialiased"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-accent-foreground"
        >
          تخطَّ إلى المحتوى
        </a>
        <SiteFrame>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SiteFrame>
      </body>
    </html>
  );
}
