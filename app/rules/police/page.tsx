import type { Metadata } from "next";
import { Rules } from "@/components/rules";
export const metadata: Metadata = { title: "قوانين قطاع الشرطة" };
export default function Page() { return <Rules categoryId="police" />; }
