import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Architects_Daughter } from "next/font/google";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Note App",
  description: "A simple note-taking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${architectsDaughter.variable} antialiased`}>
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children} <Toaster />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
