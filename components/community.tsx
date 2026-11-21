import { DiscordButton } from "./buttons";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="border-y border-border bg-surface px-4 py-7 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <h2 id="cta-title" className="text-lg font-black">ديسكورد عرب ريفورجر</h2>
        <DiscordButton />
      </div>
    </section>
  );
}
