import { Inter, Sour } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const satoshiFont = localFont({
  src: "./font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const sourceFont = localFont({
  src: "./font/SourceSerifPro-Bold.otf",
  variable: "--font-source",
});

export const metadata = {
  title: {
    default: "Wow Dental Center",
    absolute: "Wow Dental Center",
    template: "%s | Wow Dental Center",
  },
  description: "Waves of Welcoming Dental Center",
  keywords: "dental, clinic, health, teeth, smile, care, service, treatment",
  openGraph: {
    title: "Wow Dental Center",
    description: "Waves of Welcoming Dental Center",
    siteName: "Wow Dental Center",
    type: "website",
    locale: "en_US",
    images: ["/logo/logo.svg"],
  },
  appleWebApp: true,
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${satoshiFont.variable} ${sourceFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
