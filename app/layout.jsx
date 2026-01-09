import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
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
      <ReactLenis root>
        <body className="antialiased">
          <Navbar/>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
