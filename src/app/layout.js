import "./globals.css";
import { Navbar } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Emanuel Alvarado @emalvaradog",
    template: "%s | Emanuel Alvarado",
  },
  description:
    "Generalista apasionado por la tecnología, el aprendizaje y la creación.",
  openGraph: {
    title: "Emanuel Alvarado @emalvaradog",
    description:
      "Generalista apasionado por la tecnología, el aprendizaje y la creación.",
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
    image: "https://emanuelalvarado.com/emanuelalvarado.jpeg",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar className={"navbar"} />
        <main>{children}</main>
      </body>
    </html>
  );
}
