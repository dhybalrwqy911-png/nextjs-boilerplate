import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "ar-announcement-editor";
const sessionSeconds = 8 * 60 * 60;

function getEditors() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) return null;
  try {
    const config: unknown = JSON.parse(process.env.ANNOUNCEMENT_EDITORS ?? "{}");
    if (!config || typeof config !== "object" || Array.isArray(config)) return null;

    const editors = new Map(
      Object.entries(config).filter((entry): entry is [string, string] =>
        /^[a-zA-Z0-9_-]{1,40}$/.test(entry[0]) && typeof entry[1] === "string" && /^[a-f0-9]{64}$/.test(entry[1]),
      ),
    );
    return editors.size ? { secret, editors } : null;
  } catch {
    return null;
  }
}

function matches(left: string, right: string) {
  return left.length === right.length && timingSafeEqual(Buffer.from(left), Buffer.from(right));
}

function sign(payload: string, secret: string, digest: string) {
  return createHmac("sha256", secret).update(`${payload}.${digest}`).digest("hex");
}

export function hasEditors() {
  return getEditors() !== null;
}

export async function issueEditorSession(name: string, key: string) {
  const config = getEditors();
  const digest = config?.editors.get(name);
  if (!config || !digest || !/^[a-f0-9]{64}$/.test(key)) return false;
  if (!matches(createHash("sha256").update(key).digest("hex"), digest)) return false;

  const payload = `${name}.${Math.floor(Date.now() / 1000) + sessionSeconds}`;
  (await cookies()).set(cookieName, `${payload}.${sign(payload, config.secret, digest)}`, {
    httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/admin", maxAge: sessionSeconds,
  });
  return true;
}

export async function getEditor() {
  const config = getEditors();
  const value = (await cookies()).get(cookieName)?.value;
  if (!config || !value) return null;

  const [name, expiry, signature, extra] = value.split(".");
  if (extra !== undefined || !expiry || !signature || !/^[0-9]{10}$/.test(expiry) || !/^[a-f0-9]{64}$/.test(signature)) return null;
  if (Number(expiry) <= Date.now() / 1000) return null;

  const digest = config.editors.get(name);
  if (!digest || !matches(signature, sign(`${name}.${expiry}`, config.secret, digest))) return null;
  return name;
}

export async function clearEditorSession() {
  (await cookies()).set(cookieName, "", { path: "/admin", maxAge: 0 });
}
