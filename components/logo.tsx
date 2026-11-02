export function Logo() {
  return (
    <span className="flex items-center gap-3" dir="ltr">
      <img
        src="/images/server-logo.gif"
        alt="شعار عرب ريفورجر"
        width={48}
        height={48}
        className="size-12 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.15em] text-foreground">
          ARAB REFORGER
        </span>
        <span className="font-display text-[10px] tracking-[0.35em] text-muted">
          ROLEPLAY COMMUNITY
        </span>
      </span>
    </span>
  );
}
