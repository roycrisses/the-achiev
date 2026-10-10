import { NextResponse } from "next/server";
import { createPaymentIntent, type Gateway } from "@/lib/payments";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const gateway = (body.gateway ?? "esewa") as Gateway;
  const amount = Number(body.amount ?? 0);
  if (!["esewa", "khalti", "fonepay"].includes(gateway) || !amount) {
    return NextResponse.json({ ok: false, error: "Invalid gateway/amount" }, { status: 400 });
  }
  const intent = await createPaymentIntent(gateway, amount, String(body.ref ?? `ACH-${Date.now()}`));
  return NextResponse.json({ ok: true, intent });
}
