// Official Arab Reforger community invite.
export const DISCORD_URL: string | null = "https://discord.gg/MFekRVgsP";

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/rules", label: "القوانين" },
  { href: "/departments", label: "القطاعات الحكومية" },
  { href: "/jobs", label: "الوظائف" },
  { href: "/map", label: "الخريطة" },
  { href: "/news", label: "الأخبار" },
  { href: "/store", label: "المتجر" },
  { href: "/roleplay", label: "الرول بلاي" },
  { href: "/about", label: "عن المجتمع" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
