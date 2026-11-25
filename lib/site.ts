// Official Arab Reforger community invite.
export const DISCORD_URL: string | null = "https://discord.gg/MFekRVgsP";

export const communityNavigation = [
  { href: "/rules", label: "القوانين" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/news", label: "الأخبار" },
];

export const worldNavigation = [
  { href: "/roleplay", label: "عالم الرول بلاي" },
  { href: "/departments", label: "القطاعات الحكومية" },
  { href: "/store", label: "المتجر" },
];

export const navItems = [...communityNavigation, ...worldNavigation];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/roleplay" && ["/jobs", "/map"].includes(pathname)) return true;
  return pathname === href || pathname.startsWith(`${href}/`);
}
