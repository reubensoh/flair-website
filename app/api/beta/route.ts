import { addToList, parseSubmission, tokenIsValid } from "../../../lib/beta";

const MAX_BODY_BYTES = 8192;

function go(path: string): Response {
  return new Response(null, { status: 303, headers: { Location: path, "Cache-Control": "no-store" } });
}

export async function POST(request: Request): Promise<Response> {
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return go("/?beta=invalid#join");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return go("/?beta=invalid#join");
  }

  // Trap field: robots fill it, people never see it. Answer exactly as for a success.
  if (form.get("hp_ref")) return go("/beta/thanks");

  const token = form.get("t");
  if (typeof token !== "string" || !tokenIsValid(token)) return go("/?beta=invalid#join");

  const submission = parseSubmission(form);
  if (!submission) return go("/?beta=invalid#join");

  try {
    // A repeat of an address on the list looks the same as a first request.
    await addToList(submission);
  } catch (err) {
    console.error("beta list write failed:", err instanceof Error ? err.message : "unknown");
    return go("/?beta=error#join");
  }
  return go("/beta/thanks");
}
