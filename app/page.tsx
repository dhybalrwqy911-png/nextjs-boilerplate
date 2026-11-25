import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section aria-labelledby="portal-title" className="grid min-h-svh place-items-center bg-[radial-gradient(ellipse_at_50%_25%,var(--surface-2),var(--background)_75%)] px-5 py-10 text-center sm:py-14 xl:px-12">
      <div className="flex w-full max-w-2xl flex-col items-center xl:grid xl:max-w-[94rem] xl:grid-cols-[1.05fr_1fr] xl:items-center xl:gap-12 xl:text-start">
        <div className="xl:order-2 xl:grid xl:min-h-[min(36rem,65svh)] xl:place-items-center xl:rounded-[2.5rem] xl:border xl:border-accent/25 xl:bg-[radial-gradient(circle,var(--surface-2),transparent_72%)]">
          <Image src="/images/server-logo.gif" alt="" width={450} height={450} unoptimized className="size-32 object-contain sm:size-44 xl:size-[clamp(14rem,24vw,25rem)]" />
        </div>
        <div>
          <h1 id="portal-title" className="mt-6 text-balance text-3xl font-black leading-tight sm:mt-8 sm:text-5xl xl:mt-0 xl:text-[clamp(3.5rem,5.5vw,6rem)]">بوابة عرب ريفورجر</h1>
          <p className="mt-3 text-base leading-7 text-muted sm:mt-5 sm:text-lg xl:text-xl">مجتمع رول بلاي عربي في <bdi>Arma Reforger</bdi>.</p>
          <Link href="/explore" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-accent px-7 py-3 font-bold text-accent-foreground hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:mt-9 xl:px-9 xl:py-4">
            استكشف الموقع <span aria-hidden="true">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
