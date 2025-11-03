import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hush: A Data-Driven Entrepreneurial Experiment",
  description: "A case study in Lean Startup and market validation.",

  // --- Updated this line ---
  icons:
    "https://res.cloudinary.com/dcwzstwur/image/upload/v1762184373/HUSH_tb0whs.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
