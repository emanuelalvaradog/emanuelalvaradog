import "./globals.css";
import { Navbar } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Emanuel Alvarado @emanuelalvaradog",
    template: "%s | Emanuel Alvarado",
  },
  description: {
    default:
      "Generalista apasionado por la tecnología, el aprendizaje y la creación.",
    blog: "Mi camino hacia una vida de impacto: pensamientos y aprendizajes.",
  },
  openGraph: {
    title: "Emanuel Alvarado @emanuelalvaradog",
    description: {
      default:
        "Generalista apasionado por la tecnología, el aprendizaje y la creación.",
      blog: "Mi camino hacia una vida de impacto: pensamientos y aprendizajes.",
    },
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
    <html lang="es">
      <body className={inter.className}>
        <Navbar className={"navbar"} />
        <main>{children}</main>
      </body>
    </html>
  );
}
