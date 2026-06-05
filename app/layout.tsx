import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "A futuristic student dashboard powered by Next.js and Supabase."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
