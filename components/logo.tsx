export function Logo() {
  return (
    <span className="flex items-center gap-3" dir="ltr">
      <span className="relative flex size-9 items-center justify-center border border-accent">
        <span className="font-display text-sm font-bold text-accent">AR</span>
        <span className="absolute -left-1 -top-1 size-2 bg-accent" />
      </span>
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
