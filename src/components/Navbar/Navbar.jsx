"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const routes = [
  { name: "inicio", path: "/" },
  { name: "acerca de mi", path: "/emanuel-alvarado" },
  { name: "blog", path: "/blog" },
  { name: "proyectos", path: "/work" },
];

export function Navbar() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      {routes.map((route) => (
        <Link
          className={
            route.path === path ? `${styles.navActive}` : `${styles.navLink}`
          }
          href={route.path}
          key={route.path}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
