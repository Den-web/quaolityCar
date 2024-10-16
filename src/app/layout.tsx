// app/layout.tsx or app/RootLayout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Layout } from "@/components";
import Script from 'next/script';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quolity Car Company",
  description:
    "Introducing Quolity Car Company, captivating compaign landing page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="Introducing Quolity Car Company, captivating compaign landing page.." />
        <meta property="og:title" content="Quolity Car Company" />
        <meta property="og:description" content="Introducing Quolity Car Company, captivating compaign landing page." />
        {/* <meta property="og:image" content="https://example.com/my-image.jpg" /> */}
        <meta property="og:url" content="https://quaolity-car.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quolity Car Company" />
        <meta name="twitter:description" content="Introducing Quolity Car Company, captivating compaign landing page." />
        {/* <meta name="twitter:image" content="https://example.com/my-image.jpg" /> */}
      
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
