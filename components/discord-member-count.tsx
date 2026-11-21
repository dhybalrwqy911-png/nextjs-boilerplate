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

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3">
      <UsersIcon aria-hidden="true" className="size-6 shrink-0 text-accent" />
      <dl>
        <dt className="text-sm text-muted">أعضاء ديسكورد</dt>
        <dd className="font-bold">
          {count === null ? <span className="text-sm">العدد غير متاح مؤقتًا</span> : (
            <><bdi className="text-xl tabular-nums">{count.toLocaleString("ar-SA")}</bdi> <span className="text-xs font-normal text-muted">عضو تقريبًا</span></>
          )}
        </dd>
      </dl>
    </div>
  );
}
