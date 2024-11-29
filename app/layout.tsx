import type { Metadata } from "next";
import { nunito, americana } from "../styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ancerre",
  description: "Ancerre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${americana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
