import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alive Flight — Part 107 Study Guide",
  description: "A deeper FAA Part 107 study guide with worked examples, chart exercises, practice questions and a personal flight desk.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
