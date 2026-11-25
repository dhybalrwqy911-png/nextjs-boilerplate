// Official Arab Reforger community invite.
export const DISCORD_URL: string | null = "https://discord.gg/MFekRVgsP";

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/rules", label: "القوانين" },
  { href: "/departments", label: "القطاعات الحكومية" },
  { href: "/roleplay", label: "عالم الرول بلاي" },
  { href: "/news", label: "الأخبار" },
  { href: "/store", label: "المتجر" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/roleplay" && ["/jobs", "/map"].includes(pathname)) return true;
  return pathname === href || pathname.startsWith(`${href}/`);
}
