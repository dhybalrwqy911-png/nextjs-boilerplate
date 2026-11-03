import type { Metadata } from "next";
import { Rules } from "@/components/rules";
export const metadata: Metadata = { title: "قوانين الوظائف" };
export default function Page() { return <Rules categoryId="jobs" />; }
