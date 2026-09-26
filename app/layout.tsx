import type { Metadata } from "next";
import { IBM_Plex_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRAINLINK | 記録は日本語で、分析はいつものAIで。",
  description:
    "TRAINLINKは、iPhoneのための筋トレ記録アプリ。記録したデータはMCPでClaudeやChatGPTなどのAIアシスタントに直接つながり、分析もアドバイスも、使い慣れたAIにそのまま相談できます。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${ibmPlexSansJP.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
