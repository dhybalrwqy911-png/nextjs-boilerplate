import type { Metadata } from "next";

export const metadata: Metadata = { title: "متجر عرب ريفورجر — قريباً" };

export default function StorePage() {
  return (
    <section
      aria-labelledby="store-status"
      className="min-h-svh px-5 pt-[calc(50svh_+_min(36vw,14rem,29svh)_+_1rem)] pb-12 text-center"
    >
      <h1 id="store-status" className="whitespace-nowrap text-4xl font-bold leading-tight text-accent sm:text-6xl">
        قريباً
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-foreground/75 sm:max-w-xl sm:text-lg">
        نعمل على تجهيز متجر يقدّم لكم خيارات تضيف لتجربتكم في عرب ريفورجر.
      </p>
    </section>
  );
}
