export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last Updated: March 23, 2026</p>
      <p className="mb-8">Welcome to Flair Health. Your health journey is yours alone. We built Flair with one core belief: your data belongs strictly to you — and only you decide what happens to it. This Privacy Policy explains exactly how we handle (and don&apos;t handle) your information.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. No Cloud, No Accounts, No Tracking</h2>
          <p className="mb-2">Flair is fully offline-first.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We never require an account, email, or phone number.</li>
            <li>Your journal entries, habits, scores, and AI insights live only on your device.</li>
            <li>We do not have a backend database for your personal data.</li>
            <li>We do not sell, share, or monetize your information.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Local Encryption & Ownership (&quot;The Sovereign&quot;)</h2>
          <p className="mb-2">If you enable &quot;The Sovereign&quot; in Settings → Data Ownership:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We generate a 12-word backup phrase that only you control.</li>
            <li>This phrase derives the encryption key that protects your entire journal on disk.</li>
            <li>We never see, store, or back up your phrase or key.</li>
            <li>This backup phrase is yours alone and can serve as the foundation for future features that give you even more control over your wellness identity.</li>
            <li>If you lose your phrase or device, your encrypted data cannot be recovered — even by us.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Biometric Lock (&quot;The Vault&quot;)</h2>
          <p className="mb-2">If you enable biometric locking (Face ID / Touch ID / device passcode) in Settings → Privacy & Security:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authentication is handled entirely by your device&apos;s operating system.</li>
            <li>Flair never accesses or stores your biometric data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Artificial Intelligence & Ephemeral Data Processing</h2>
          <p className="mb-2">Features like &quot;Level Up&quot; and &quot;Magic Lens&quot; use Google Gemini AI to generate insights.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>In-Transit Processing:</strong> A temporary, compressed copy of your meal photo (Magic Lens) or text summary of your day (Level Up) is sent securely to our serverless routing layer.</li>
            <li><strong>No Persistence:</strong> This data is processed in memory only and discarded immediately after generating your insights.</li>
            <li><strong>No Training:</strong> Your personal data is never stored, logged, retained, or used to train public AI models.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Apple Health & Google Health Connect</h2>
          <p className="mb-2">To power automated tracking:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Flair requests read-only access to steps, workouts, sleep, heart rate, and GPS routes.</li>
            <li>This data is pulled directly into your local journal and never leaves your device.</li>
            <li>We do not transmit raw health data to any server.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Location & Environment Data</h2>
          <p className="mb-2">For outdoor workouts or environmental context, we may temporarily fetch local weather/AQI/UV data.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Coordinates are never stored or linked to any identity.</li>
            <li>Data is used only for real-time recommendations and discarded.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Crash Reports & Anonymous Analytics</h2>
          <p className="mb-2">To improve stability, we may collect anonymized crash logs and performance metrics (via third-party tools).</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>These contain no health data, no journal entries, and no personally identifiable information.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Your Rights & Data Deletion</h2>
          <p className="mb-2">You have full control:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delete everything at any time via Settings → Reset App.</li>
            <li>Or simply uninstall Flair — your data disappears with the app.</li>
            <li>In the future we may offer optional ways to share select anonymised insights with third parties of your choosing — always with your explicit consent and under your full control.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>Questions? Reach out at <a href="mailto:support@flairhealth.app" className="text-blue-600 hover:underline">support@flairhealth.app</a>. We&apos;re here to help.</p>
        </section>
        <p className="mt-8 italic text-gray-500">We may update this policy from time to time. We&apos;ll notify you of material changes within the App.</p>
      </div>
    </main>
  );
}
