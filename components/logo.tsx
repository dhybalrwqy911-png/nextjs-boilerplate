import Image from "next/image";

export function Logo() {
  return (
    <span className="flex items-center gap-2 sm:gap-3" dir="ltr">
      <Image
        src="/images/server-logo.gif"
        alt=""
        unoptimized
        width={48}
        height={48}
        className="size-9 shrink-0 sm:size-12 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-bold tracking-[0.12em] sm:text-lg sm:tracking-[0.15em] text-foreground">
          ARAB REFORGER
        </span>
        <span className="hidden font-display text-[10px] tracking-[0.35em] sm:block text-muted">
          ROLEPLAY COMMUNITY
        </span>
      </span>
    </span>
  );
}
