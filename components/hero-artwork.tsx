"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./hero-artwork.module.css";

export function HeroArtwork() {
  const [paused, setPaused] = useState(false);
  return <figure className="order-first min-w-0 lg:order-none">
    <div className={styles.art}>
      <Image src="/images/arab-character-cutout.webp" alt="شخصية ببدلة رسمية تمد كفّها تحت شعار عرب ريفورجر" width={1672} height={941} priority sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw" className={styles.character} />
      <div className={styles.emblem}>
        <Image src="/images/server-logo.gif" alt="شعار عرب ريفورجر الذهبي" width={450} height={450} unoptimized className={styles.spin} style={{animationPlayState: paused ? "paused" : undefined}} />
      </div>
    </div>
    <button type="button" className={styles.control} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "تشغيل حركة الشعار" : "إيقاف حركة الشعار"}</button>
  </figure>;
}
