import type { Metadata } from "next";
import { Rules } from "@/components/rules";
export const metadata: Metadata = { title: "قوانين الإسعاف" };
export default function Page() { return <Rules categoryId="ems" />; }
