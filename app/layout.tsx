import type { Metadata, Viewport } from "next";
import { Cairo, Oswald } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
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
  title: "ARAB REFORGER | مجتمع الرول بلاي العربي في Arma Reforger",
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
    images: ["/images/hero.png"],
    locale: "ar_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b09",
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
      className={`${cairo.variable} ${oswald.variable} bg-background`}
      style={{ backgroundColor: "#0a0b09" }}
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
        style={{ backgroundColor: "#0a0b09", color: "#ebe8df" }}
      >
        {children}
      </body>
    </html>
  );
}
