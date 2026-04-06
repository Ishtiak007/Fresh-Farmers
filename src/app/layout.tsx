import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Farmers",
  description: "This is Fresh Farmers Webiste",
  keywords: ["Fresh Farmers website"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Ishtiak Ahmed",
  authors: [
    {
      name: "Ishtiak Ahmed",
      url: "https://www.facebook.com/ishtiakahmed01999",
    },
  ],
  creator: "Ishtiak Ahmed (Myself)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
