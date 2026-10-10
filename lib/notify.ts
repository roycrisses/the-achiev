export async function sendSms(to: string, message: string) {
  // Sparrow SMS (Nepal) stub — wire SPARROW_API_KEY in Netlify env.
  if (!process.env.SPARROW_API_KEY) return { ok: true, stub: true, to };
  return { ok: true, stub: false, to, message };
}

export async function sendEmail(to: string, subject: string, html: string) {
  // SendGrid stub — wire SENDGRID_API_KEY in Netlify env.
  if (!process.env.SENDGRID_API_KEY) return { ok: true, stub: true, to };
  return { ok: true, stub: false, to, subject, html };
}
