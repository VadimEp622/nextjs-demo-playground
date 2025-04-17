import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// TODO: Using Tailwind, research centering the page in a grid of 3 columns, where the page is in the center column, and the side columns have their own size.
//       It should dynamically allow stretching chosen content from the page to fill the whole 3 grid columns, from any page in the app.
//       ** Hint #1: Make a max-width class for the main content, and give this class to each building-block cmp of the page.
//                  This will allow giving a certain cmp in the middle of the page a full horizontal width (call it ".p-wrapper")

// TODO: add database and deploy to Vercel

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
