import { NextResponse } from "next/server";
import { sendSms } from "@/lib/notify";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const phone = String(body.phone ?? "");
  if (phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "Invalid phone" }, { status: 400 });
  }
  await sendSms(phone, `Achievers: demo request received for ${body.name ?? "student"} (${body.classLevel ?? ""}). We will confirm slot shortly.`);
  return NextResponse.json({ ok: true });
}
