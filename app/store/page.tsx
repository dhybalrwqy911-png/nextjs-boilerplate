import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "متجر عرب ريفورجر — قريباً" };

export default function StorePage() {
  return (
    <section aria-labelledby="store-status" className="grid min-h-svh place-items-center px-5 pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
      <div className="flex flex-col items-center gap-5 sm:gap-7">
        <Image
          src="/images/server-logo.gif"
          alt="شعار عرب ريفورجر"
          width={450}
          height={450}
          unoptimized
          className="size-36 object-contain sm:size-48"
        />
        <h1 id="store-status" className="whitespace-nowrap text-4xl font-bold leading-tight text-accent sm:text-6xl">
          قريباً
        </h1>
      </div>
    </section>
  );
}
