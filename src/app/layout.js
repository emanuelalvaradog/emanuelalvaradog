import "./globals.css";
import Link from "next/link";
import { Inter_Tight, Source_Serif_4 } from "next/font/google";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const SITE = "https://emanuelalvarado.com";
const DESCRIPTION =
  "Emanuel Alvarado — lidero iniciativas de inteligencia artificial en corporativos y PyMEs, y construyo productos que la usan de verdad.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Emanuel Alvarado",
    template: "%s · Emanuel Alvarado",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Emanuel Alvarado",
    description: DESCRIPTION,
    url: SITE,
    siteName: "Emanuel Alvarado",
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Emanuel Alvarado", description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const LINKS = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/blog", label: "Escritos" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${serif.variable}`}>
        <header className="nav">
          <div className="nav-in">
            <Link className="nav-name" href="/">
              Emanuel Alvarado
            </Link>
            <nav className="nav-links">
              {LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="foot">
          <div className="foot-in">
            <span>Emanuel Alvarado · Monterrey, México</span>
            <a href="mailto:emanuel.alvarado.g@gmail.com">emanuel.alvarado.g@gmail.com</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
