export type Gateway = "esewa" | "khalti" | "fonepay";

export async function createPaymentIntent(gateway: Gateway, amountNpr: number, ref: string) {
  // Phase 1 stub: in production, call eSewa/Khalti/Fonepay SDKs server-side.
  // Kept intentionally synchronous-shaped for Netlify Functions compatibility.
  return {
    gateway,
    amountNpr,
    ref,
    checkoutUrl: `/demo?enroll=${encodeURIComponent(ref)}&gw=${gateway}`,
    mode: process.env.PAYMENTS_MODE ?? "test",
  };
}

export function gatewayLabel(g: Gateway) {
  return g === "esewa" ? "eSewa" : g === "khalti" ? "Khalti" : "Fonepay";
}
