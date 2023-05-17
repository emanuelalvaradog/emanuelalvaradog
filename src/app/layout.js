import { Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Emanuel Alvarado @emanuelalvaradog",
    template: "%s | Emanuel Alvarado",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Emanuel Alvarado @emanuelalvaradog",
    description: "Developer, writer, and creator.",
    url: "https://emanuelalvarado.com",
    siteName: "Emanuel Alvarado",
    images: [
      {
        url: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "es-MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Emanuel Alvarado",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
