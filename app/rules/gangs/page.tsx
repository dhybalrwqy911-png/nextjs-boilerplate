import type { Metadata } from "next";
import { Rules } from "@/components/rules";
export const metadata: Metadata = { title: "قوانين العصابات" };
export default function Page() { return <Rules categoryId="gangs" />; }
