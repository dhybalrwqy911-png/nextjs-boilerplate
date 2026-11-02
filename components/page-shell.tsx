import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { PageHero } from "./page-hero";
export function PageShell({image,eyebrow,title,description,children}:{image:string;eyebrow:string;title:string;description:string;children:ReactNode}) {
 return <><SiteHeader/><main id="main"><PageHero image={image} alt="مشهد من عالم عرب ريفورجر" eyebrow={eyebrow} title={title} description={description}/>{children}</main><SiteFooter/></>;
}
export function TextPanel({title,children}:{title:string;children:ReactNode}) {return <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><h2 className="mb-8 text-3xl font-black md:text-5xl">{title}</h2><div className="text-lg leading-9 text-foreground/75">{children}</div></section>}
