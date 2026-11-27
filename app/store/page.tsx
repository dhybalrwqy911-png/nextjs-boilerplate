import type { Metadata } from "next";

export const metadata: Metadata = { title: "متجر عرب ريفورجر — قريباً" };

export default function StorePage() {
  return (
    <section
      aria-labelledby="store-status"
      className="grid min-h-dvh place-items-center px-5 pt-20 pb-[max(1rem,env(safe-area-inset-bottom))] text-center sm:pt-24"
    >
      <div className="flex flex-col items-center">
        <div
          aria-hidden="true"
          className="size-[min(64vw,35dvh,20rem)] bg-[url('/images/server-logo.gif')] bg-contain bg-center bg-no-repeat opacity-35"
        />
        <h1 id="store-status" className="mt-4 whitespace-nowrap text-4xl font-bold leading-tight text-accent sm:text-6xl">
          قريباً
        </h1>
        <p className="mt-2 max-w-md text-base leading-7 text-foreground/75 sm:text-lg">
          نعمل على تجهيز متجر يقدّم لكم خيارات تضيف لتجربتكم في عرب ريفورجر.
        </p>
      </div>
    </section>
  );
}
