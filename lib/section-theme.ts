const pageThemes: Record<string, string> = {
  "/news/sectors-applications": "departments",
  "/news/economy-update": "jobs",
  "/news/gang-raids": "gangs",
  "/news/contraband": "contraband",
};

export function sectionTheme(pathname: string) {
  const [, section, subsection] = pathname.split("/");
  if (section === "departments" || section === "rules") {
    if (subsection === "police" || subsection === "ems" || subsection === "government" || subsection === "jobs" || subsection === "roleplay" || subsection === "discord" || subsection === "gangs") {
      return subsection;
    }
  }
  return pageThemes[pathname] ?? (section || "home");
}
