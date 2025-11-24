import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lora} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Nitish’s Portfolio",
  description: "Personal portfolio of Nitish Babu Chetti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>    
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased min-h-screen`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
          fontFamily: "var(--font-lora)",
          transition: "background-color 0.7s ease, color 0.7s ease",
        }}
      >
        {children}
      </body>
    </html>
  );
}
