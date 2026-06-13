import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flyza Tours | Travel & Tours",
  description:
    "Flyza Tours is a simple travel and tours landing page for memorable trips, curated packages, and easy planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
