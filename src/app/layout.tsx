import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../styles/global.css";
import Providers from "./_Provider/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privy Auth",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
