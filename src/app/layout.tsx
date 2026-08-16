import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chingiz Sharifov | Color Expert",
  description:
    "Chingiz Sharifov — Bakıda premium saç rənglənməsi: Airtouch, Balayage, Shatush, Total Blonde. Face Studio Nərimanov.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f8f7f5",
  colorScheme: "light dark",
};

const themeInitScript = `
  try {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    if (localStorage.lang === "ru") {
      document.documentElement.lang = "ru";
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="az"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
