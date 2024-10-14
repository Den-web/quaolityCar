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
  title: "Quolity Car Campany",
  description:
    "Introducing Quolity Car Campaign, captivating campaign landing page.",
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
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
