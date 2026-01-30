import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "./globals.css";

import {ReactLenis} from "@/utils/lenis";

const inter= Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const ppEditorial = localFont({
  src: [
    { path: "./fonts/PPEditorialNew-Ultralight.otf", weight: "200", style: "normal" },
    { path: "./fonts/PPEditorialNew-UltralightItalic.otf", weight: "200", style: "italic" },

    { path: "./fonts/PPEditorialNew-Regular.otf", weight: "600", style: "normal" },
    { path: "./fonts/PPEditorialNew-Italic.otf", weight: "600", style: "italic" },

    { path: "./fonts/PPEditorialNew-Ultrabold.otf", weight: "700", style: "normal" },
    { path: "./fonts/PPEditorialNew-UltraboldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata = {
  title: "Vedara Collective | Luxury Fashion, Atelier & Creative Design",
  description: "Vedara Collective is a luxury fashion and creative studio blending craftsmanship, modern design, and curated portfolios across fashion, branding, and aesthetics.",
  keywords: ["luxury fashion studio", "creative atelier", "fashion design studio", "luxury creative brand", "vedara collective"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${ppEditorial.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Vedara Collective Corp.",
              alternateName: "Vedara Collective",
              url: "https://vedaracollective.com",
              logo: "https://vedaracollective.com/vedara-logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "",
                contactType: "sales",
                areaServed: [
                  "CA","GB","US","AR","AU","AT","BR","FR","DE","IT","LU",
                  "MC","NL","NZ","QA","SA","SG","ES","CH","SE","AE","UM"
                ],
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.linkedin.com/company/vedaracollective/",
                "https://vedaracollective.com",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VR6STD6WQT"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VR6STD6WQT');
          `}
        </Script>
        <ReactLenis root>
          <Navbar/>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
