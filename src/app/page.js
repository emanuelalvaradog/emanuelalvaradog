"use client";

import Image from "next/image";
import styles from "@/styles/home.module.scss";
import { Bio, LastPost, Navbar, SocialMedia } from "@/components";

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContent}>
        <Bio />
        <LastPost />
        <SocialMedia />
      </div>
    </section>
  );
}
