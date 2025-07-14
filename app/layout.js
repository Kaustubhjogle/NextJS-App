import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto", // --font-fontName Naming Convention
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: {
    default: "ASIMO | Next JS",
    template: "%s | ASIMO",
  },
  description: "The Initial NextJs Website",
  authors: [
    { name: "Kaustubh" },
    { name: "Kaustubh Jogle", url: "kaustubhjogle.com" },
  ],
  keywords: ["nextjs", "reactjs", "next"],
  icons: {
    icon: "./favicon.png", //favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
