export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Last Updated: April 24, 2026</p>
      <p className="mb-4">Flair Health is a product of Regal Pines Pte. Ltd., a company incorporated in Singapore. References to &quot;Flair,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refer to Regal Pines Pte. Ltd.</p>
      <p className="mb-8">Flair is a local-first wellness app. This policy explains what data leaves your device, when, and why — and what we cannot do with it even if we wanted to.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. No Cloud, No Accounts, No Tracking</h2>
          <p className="mb-2">Flair is fully offline-first.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We never require an account, email, or phone number.</li>
            <li>Your journal entries, habits, scores, and AI insights live only on your device.</li>
            <li>We do not have a backend database for your personal data.</li>
            <li>We do not sell, share, or monetize your information.</li>
            <li>The only exception is when you explicitly invoke an AI feature (Level Up, Magic Lens). See Section 4.</li>
            <li>A randomly-generated, non-identifiable token is included with AI requests solely for rate-limiting. It is not linked to you, your device, or your health data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Local Encryption &amp; Ownership (&quot;The Sovereign&quot;)</h2>
          <p className="mb-2">If you enable &quot;The Sovereign&quot; in Settings → Data Ownership:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We generate a 12-word backup phrase that only you control.</li>
            <li>This phrase derives the encryption key that protects your entire journal on disk.</li>
            <li>We never see, store, or back up your phrase or key.</li>
            <li>If you lose your phrase or device, your encrypted data cannot be recovered — even by us.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Biometric Lock (&quot;The Vault&quot;)</h2>
          <p className="mb-2">If you enable biometric locking (Face ID / Touch ID / device passcode) in Settings → Privacy &amp; Security:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authentication is handled entirely by your device&apos;s operating system.</li>
            <li>Flair never accesses or stores your biometric data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Artificial Intelligence &amp; Ephemeral Data Processing</h2>
          <p className="mb-2">Features like &quot;Level Up&quot; and &quot;Magic Lens&quot; use Google Gemini AI to generate insights.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>In-Transit Processing:</strong> When you trigger Level Up, a structured summary of your day&apos;s journal entries, anonymous health profile buckets (age range, sex, BMI category), your stated health objective, and your active wellness protocol targets are sent to our serverless routing layer over HTTPS. For Magic Lens, a compressed copy of your meal photo is sent. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>No Persistence:</strong> Our routing layer processes this data in memory and does not log, store, or retain it. AI inference is performed via Google&apos;s Gemini API and is subject to Google&apos;s API Terms of Service. We do not share personally identifiable information with Google.</li>
            <li><strong>No Training:</strong> Your data is not used by our routing layer to train any model. Google&apos;s own data handling is governed by their API Terms linked above.</li>
            <li><strong>Anonymous Telemetry:</strong> AI requests include a hardware-derived anonymous identifier (not linked to any personal information) used only for aggregate diagnostics. This cannot be used to identify you.</li>
            <li><strong>Sensitive Medical Context:</strong> If you optionally provide medical conditions (such as diabetes, kidney or liver conditions, or injuries) or fasting states, this information is kept strictly on your device and transmitted to the AI ephemerally solely to ensure that generated protocols do not suggest activities that could be harmful to you. This data is never stored on our servers, never retained after your request is processed, and is treated as sensitive health data under applicable law.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Apple Health &amp; Google Health Connect</h2>
          <p className="mb-2">To power automated tracking:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Flair requests read-only access to steps, workouts, sleep, heart rate, and GPS routes.</li>
            <li>This data is pulled directly into your local journal and never leaves your device.</li>
            <li>We do not transmit raw health data to any server.</li>
            <li>We do not write to Apple Health or Google Health Connect.</li>
            <li>Workout route data (GPS), if synced, is stored only on your device and is never transmitted to our servers.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Location &amp; Environment Data</h2>
          <p>With your permission, Flair uses your approximate location to request local weather, air quality (AQI), and UV index data from a third-party environment service. Your coordinates are used only to resolve the environmental reading and are not stored by Flair or linked to any identity. You can disable this in Settings.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Crash Reports &amp; Anonymous Analytics</h2>
          <p>To maintain stability, Flair may collect anonymized crash logs (stack traces only). These contain no health data, no journal content, and no personally identifiable information. If specific crash reporting tools are integrated, they will be named here.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Your Rights &amp; Data Deletion</h2>
          <p className="mb-2">You have full control:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delete everything at any time via Settings → Reset App.</li>
            <li>Or simply uninstall Flair — your local data disappears with the app.</li>
            <li>Note: Data that originates from Apple Health or Google Health Connect is managed through those platforms and is not deleted by uninstalling Flair.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>Questions? Reach out at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>.</p>
        </section>
        <p className="mt-8 italic text-gray-500 dark:text-gray-400">We may update this policy. Material changes will be announced in-app on your next launch. The date at the top of this page always reflects the current version.</p>
      </div>
    </main>
  );
}
