import { About } from "@/components/about";
import { Community } from "@/components/community";
import { Criminal } from "@/components/criminal";
import { Departments } from "@/components/departments";
import { Hero } from "@/components/hero";
import { InteractiveMap } from "@/components/interactive-map";
import { Jobs } from "@/components/jobs";
import { News } from "@/components/news";
import { RoleplayWorld } from "@/components/roleplay-world";
import { Rules } from "@/components/rules";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <RoleplayWorld />
        <Departments />
        <Jobs />
        <Criminal />
        <InteractiveMap />
        <News />
        <Rules />
        <Community />
      </main>
      <SiteFooter />
    </>
  );
}
