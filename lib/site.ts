// Official Arab Reforger community invite.
export const DISCORD_URL: string | null = "https://discord.gg/MFekRVgsP";

export type NavChild = { href: string; label: string; description: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن السيرفر" },
  { href: "/roleplay", label: "عالم الرول بلاي" },
  {
    href: "/departments",
    label: "القطاعات الحكومية",
    children: [
      { href: "/departments", label: "جميع القطاعات", description: "دليل القطاعات الحكومية" },
      { href: "/departments/police", label: "الشرطة", description: "الأمن العام والتحقيقات" },
      { href: "/departments/ems", label: "الإسعاف والطوارئ", description: "الاستجابة الطبية والإنقاذ" },
      {
        href: "/departments/government",
        label: "الإدارة الحكومية",
        description: "الشؤون الإدارية والخدمات الحكومية",
      },
    ],
  },
  { href: "/jobs", label: "الوظائف" },
  { href: "/map", label: "الخريطة" },
  { href: "/news", label: "الأخبار" },
  { href: "/rules", label: "القوانين" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
