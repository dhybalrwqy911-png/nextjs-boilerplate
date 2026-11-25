import { DISCORD_URL } from "@/lib/site";
import { UsersIcon } from "./icons";

async function getMemberCount() {
  const inviteCode = DISCORD_URL?.split("/").pop();
  if (!inviteCode) return null;

  try {
    const response = await fetch(
      `https://discord.com/api/v10/invites/${encodeURIComponent(inviteCode)}?with_counts=true`,
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(8000) },
    );
    if (!response.ok) return null;

    const { approximate_member_count: count } = await response.json();
    return typeof count === "number" && Number.isSafeInteger(count) && count >= 0 ? count : null;
  } catch {
    return null;
  }
}

export async function DiscordMemberCount() {
  const count = await getMemberCount();

  if (count === null) return null;

  return (
    <p className="flex items-center gap-2 text-sm text-muted">
      <UsersIcon aria-hidden="true" className="size-4 shrink-0 text-accent" />
      <span><bdi className="font-bold tabular-nums text-foreground">{count.toLocaleString("ar-SA")}</bdi> عضو تقريبًا في ديسكورد</span>
    </p>
  );
}
