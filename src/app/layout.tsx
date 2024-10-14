import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-geist-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Novanex IT Agency",
  description: "A Next Level Software Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased container`}>{children}</body>
    </html>
  );
}
