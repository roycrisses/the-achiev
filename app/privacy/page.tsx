export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return (
    <div className="bg-[#faf8f3]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="ed-kicker">Legal</p>
        <h1 className="ed-display mt-2 text-4xl text-[#1c2b22]">Privacy Policy</h1>
        <div className="card-soft mt-5 p-6 text-[14px] leading-relaxed text-[#1c2b22]/80">
          <p>We collect name, phone and learning activity to deliver classes, track progress and send OTP/enrollment updates via Sparrow SMS and SendGrid. Payments are processed by eSewa/Khalti/Fonepay — we never store card data. Contact info@theachievers.com.np for deletion requests. Compliant with Nepal Privacy Act + cookie consent.</p>
        </div>
      </div>
    </div>
  );
}
