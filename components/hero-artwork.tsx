"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./hero-artwork.module.css";

export function HeroArtwork() {
  const [paused, setPaused] = useState(false);
  return <figure className="min-w-0 text-center">
    <div className={styles.art}>
      <Image src="/images/server-logo.gif" alt="شعار عرب ريفورجر الذهبي" width={450} height={450} priority unoptimized className={styles.spin} style={{animationPlayState: paused ? "paused" : undefined}} />
    </div>
    <button type="button" className={styles.control} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "تشغيل حركة الشعار" : "إيقاف حركة الشعار"}</button>
  </figure>;
}
