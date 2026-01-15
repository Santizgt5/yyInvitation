import { Inter } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.variable}`}>{children}</body>
    </html>
  );
}
