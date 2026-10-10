import { NextResponse } from "next/server";
import { sendEmail, sendSms } from "@/lib/notify";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body.name || !body.phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  await sendSms(String(body.phone), "Achievers: account created. OTP sent.");
  await sendEmail("student@example.com", "Welcome to Achievers", `<p>Hi ${body.name}, account created.</p>`);
  return NextResponse.json({ ok: true });
}
