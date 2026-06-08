export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Last Updated: June 8, 2026</p>
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
            <li>The only exception is when you explicitly invoke an AI feature (Level Up, Magic Lens, Eat Now, Document Scanner, Body Age, Daily Quests, or Inspire Me). Each feature requires your explicit approval via an in-app consent prompt before any data is transmitted. See Section 5. Flair makes no network request on app launch — the first server contact only occurs when you actively use an AI feature and have provided explicit consent.</li>
            <li>A randomly-generated, non-identifiable token is included with AI requests solely for rate-limiting. It is not linked to you, your device, or your health data.</li>
          </ul>
          <p className="mt-3"><strong>Smart Habits:</strong> Flair learns your recurring wellness patterns (such as meals, supplements, or workouts) by analysing the timing and content of your journal entries. This analysis is performed entirely on your device. No habit data, patterns, or predictions are transmitted to any server. You can confirm or dismiss any predicted entry, and patterns that are consistently dismissed are automatically deactivated.</p>
          <p className="mt-3"><strong>Voice Input:</strong> Flair offers optional speech-to-text input for journal entries. Speech recognition is performed by your device&apos;s operating system (Apple Speech Recognition). Flair does not record, store, or transmit audio. On newer devices, speech recognition is processed entirely on-device. On older devices, your operating system may send audio to Apple for processing under Apple&apos;s own privacy policy.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Your Control Over Your Data</h2>
          <p className="mb-2">No data leaves your device without your explicit, per-feature consent.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Each AI feature requires individual consent before activation. You decide which features may transmit data — and which may not.</li>
            <li>Before any data is sent, Flair displays a consent form showing every specific data field that will be shared. This field-level transparency lets you see exactly what is being transmitted and why.</li>
            <li>If data requirements for a feature change in a future update, Flair shows you exactly what changed (a diff of the previous and updated data fields) and requires you to re-approve before any data is sent under the new terms.</li>
            <li>You can revoke consent for any feature at any time in <strong>Settings → Privacy &amp; Security → Data Sharing Agreements</strong>. Revoking consent immediately stops that feature from transmitting data.</li>
            <li>An &quot;Always show this prompt&quot; option is available if you prefer to review and approve data sharing every time you use a feature, rather than granting standing consent.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Local Encryption &amp; Ownership (&quot;The Sovereign&quot;)</h2>
          <p className="mb-2">If you enable &quot;The Sovereign&quot; in Settings → Data Ownership:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We generate a 12-word backup phrase that only you control.</li>
            <li>This phrase derives the encryption key that protects your entire journal on disk.</li>
            <li>Your data is stored within the <strong>Health Passport</strong> — an encrypted container on your device (previously referred to as &quot;The Vault&quot; in earlier versions of Flair).</li>
            <li>We never see, store, or back up your phrase or key.</li>
            <li>If you lose your phrase or device, your encrypted data cannot be recovered — even by us.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Biometric Lock</h2>
          <p className="mb-2">If you enable biometric locking (Face ID / Touch ID / device passcode) in Settings → Privacy &amp; Security:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authentication is handled entirely by your device&apos;s operating system.</li>
            <li>Flair never accesses or stores your biometric data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Artificial Intelligence &amp; Third-Party API Processing</h2>
          <p className="mb-2">Flair includes several AI-powered features. Each feature requires your explicit in-app consent before any data leaves your device.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Level Up</strong> sends a structured summary of your day&apos;s journal entries, anonymous health profile buckets (age range, sex, BMI category), your stated health objective, active wellness protocol targets, medical conditions (such as diabetes, thyroid, kidney, or liver conditions), Fitzpatrick skin type, behavioural patterns (7-day activity breakdown), and — if available from scanned documents — lab biomarker values to our serverless routing layer over HTTPS. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Magic Lens</strong> sends a compressed copy of your meal photo for nutritional analysis. No metadata, location, or identifying information from the photo is transmitted.</li>
            <li><strong>Eat Now</strong> sends your restaurant name, approximate location (street or mall), country, and meal intention alongside your anonymous health profile, dietary preferences, food allergies, fasting mode, medical conditions, today&apos;s food log entries, and 7-day rolling nutrient averages to generate personalised meal recommendations. This feature uses Google Gemini, which searches for nearby restaurants in real time to generate location-aware suggestions. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Document Scanner</strong> processes your health report photo entirely on-device using optical character recognition (OCR). Personal identifiers (names, dates of birth, ID numbers, phone numbers, email addresses, and national IDs) are detected and stripped locally using on-device pattern matching. Before sending, Flair displays the specific items that were detected and removed, and requires your explicit approval to proceed. Only the anonymised, redacted clinical text is sent to our routing layer for biomarker extraction. The original photo is never stored by Flair and never transmitted to any server.</li>
            <li><strong>Daily Quests</strong> sends your anonymous health profile and stated health objective to generate a personalised wellness protocol. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Body Age</strong> sends your anonymous health profile — age, sex, height, weight, BMI, ethnicity (a sensitive data category under PDPA, transmitted only with your explicit per-session consent) — vital signs (resting heart rate, HRV, blood oxygen, respiratory rate, VO₂ max), blood pressure, body composition (body fat percentage, visceral fat, BMI), available lab biomarkers from scanned documents (such as HbA1c, total cholesterol, triglycerides, eGFR, creatinine, haemoglobin, TSH, liver enzymes, uric acid, ferritin, and vitamin D levels), Fitzpatrick skin type, bone and joint conditions, smoking status, sleep quality summary, medical conditions, lifestyle factors, and a 30-day journal activity summary to estimate your biological age. All data is anonymised — no names, exact birth dates, or account identifiers are transmitted.</li>
            <li><strong>Inspire Me</strong> sends your active quest (title, category, and rationale), today&apos;s journal entries (up to 10), your stated health objective, medical conditions, and — depending on the task category — dietary preferences, food allergies, fasting mode, preferred exercises, or injuries to generate personalised activity suggestions. Your country is included for location-aware recommendations. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>AI Providers:</strong> AI inference is performed via Google&apos;s Gemini API, xAI&apos;s Grok API, or OpenAI&apos;s GPT-4o-mini API, selected automatically by our routing layer based on availability. Certain features, such as Eat Now, exclusively use Google Gemini because they require real-time search capabilities only available through this provider. All providers process data for inference only, under their respective API terms of service. We do not share personally identifiable information with any provider.</li>
            <li><strong>No Persistence:</strong> Our routing layer processes data in memory and does not log, store, or retain your data after the request is complete. AI providers process your data under their own API terms. For reference: <a href="https://ai.google.dev/gemini-api/terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Gemini</a>,{' '}<a href="https://x.ai/legal/api-terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">xAI Grok</a>,{' '}<a href="https://openai.com/policies/terms-of-use" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">OpenAI GPT-4o-mini</a>.</li>
            <li><strong>No Training:</strong> Your data is not used by our routing layer or by any AI provider to train models.</li>
            <li><strong>Anonymous Telemetry:</strong> AI requests include a pseudo-anonymous identifier (a rotating hash, not linked to your identity) used for three purposes only: (1) per-provider cost tracking, (2) API latency monitoring, and (3) error rate analysis. No health data, journal content, or personally identifiable information is included in telemetry. Body Age assessments additionally contribute an anonymised age delta (estimated biological age minus chronological age) and confidence score to aggregate model performance monitoring. No raw age values or personal identifiers are included. When you run Level Up, Flair additionally includes the brand categories of connected health apps detected in Apple Health (e.g. &quot;Garmin&quot;, &quot;Oura&quot;, &quot;Apple Watch&quot;) in aggregate to inform product development. No device model, firmware version, or personally identifiable information is included. This field is subject to the same 90-day retention limit as all other telemetry.</li>
            <li><strong>Sensitive Medical Context:</strong> If you optionally provide medical conditions (such as diabetes, kidney or liver conditions, or injuries) or fasting states, this information is transmitted to the AI provider for inference and is not stored by Flair. It is used solely to ensure that generated recommendations do not suggest activities that could be harmful to you. This data is never stored on our servers, never retained after your request is processed, and is treated as sensitive health data under applicable law.</li>
            <li><strong>In-App Consent:</strong> Before any AI feature transmits data for the first time, Flair displays a consent prompt disclosing the service, purpose, active AI provider, and every specific data field involved (field-level transparency). If the data fields required by a feature change in a future update, Flair displays a diff showing exactly what changed and requires you to re-approve before proceeding. You may approve or reject each feature independently. Your preference is stored locally and can be revoked at any time in <strong>Settings → Privacy &amp; Security → Data Sharing Agreements</strong>.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Apple Health &amp; Google Health Connect</h2>
          <p className="mb-2">To power automated tracking, Flair requests read-only access to the following data categories:</p>
          <p className="mt-3 mb-1 font-semibold">Vitals:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Heart Rate</li>
            <li>Resting Heart Rate</li>
            <li>Heart Rate Variability (HRV / SDNN)</li>
            <li>Blood Oxygen Saturation (SpO₂)</li>
            <li>Respiratory Rate</li>
            <li>VO₂ Max</li>
          </ul>
          <p className="mb-1 font-semibold">Activity:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Daily Step Count</li>
            <li>Workouts</li>
            <li>Workout GPS Routes</li>
          </ul>
          <p className="mb-1 font-semibold">Sleep:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Sleep Sessions (including sleep stage breakdowns)</li>
          </ul>
          <p className="mb-1 font-semibold">Environment:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Time in Daylight (iOS 17+)</li>
            <li>Environmental Audio Exposure</li>
          </ul>
          <p className="mb-1 font-semibold">Wellness:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Mindful Minutes</li>
          </ul>
          <p className="mt-3">This data is pulled directly into your local journal and never leaves your device. We do not transmit raw health data to any server. We do not write to Apple Health or Google Health Connect. Workout route data (GPS), if synced, is stored only on your device and is never transmitted to our servers.</p>
          <p className="mt-3">With your permission, Flair imports the data categories listed above from Apple Health. This data is stored locally on your device and is never transmitted to any server unless you explicitly invoke an AI feature that includes it (such as Body Age). Flair also reads which apps or wearable devices have written data to Apple Health (for example, Garmin Connect or Oura) to detect your connected devices. This information is stored locally and only the brand category (e.g. &quot;Garmin&quot;, &quot;Oura&quot;) — not the device model or firmware version — is included in Level Up requests with your explicit consent.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Health Wallet</h2>
          <p className="mb-2">Health Wallet estimates the long-term economic implications of daily health behaviours using population-level epidemiological data.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Values are expressed in a fictional dollar currency. Health Wallet is not real money, not financial advice, and not a financial product.</li>
            <li><strong>All computation occurs exclusively on your device.</strong> Health Wallet makes zero network calls — no data is sent to any server for processing.</li>
            <li>Cost tables, regional scalars, and epidemiological constants are embedded in the app binary and do not require a network connection.</li>
            <li>Health Wallet transaction history is stored on-device within the encrypted Health Passport.</li>
            <li>Health Wallet data is included in encrypted <code>.flair</code> backup snapshots.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Flair Services</h2>
          <p className="mb-2">The app connects to <code>api.flairhealth.app</code> for certain non-AI functions:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Latency Estimates:</strong> The endpoint <code>api.flairhealth.app/api/stats</code> provides latency estimates used for progress bars during AI requests. This endpoint receives only a feature identifier. It is stateless — no user data is sent, retained, or logged.</li>
          </ul>
          <p className="mt-3">Health Wallet makes zero network calls. All wallet computation is performed entirely on-device.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Location &amp; Environment Data</h2>
          <p>With your permission, Flair uses your approximate location to request local weather, air quality (AQI), and UV index data from a third-party environment service. Your coordinates are used only to resolve the environmental reading and are not stored by Flair or linked to any identity. You can disable this in Settings.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Crash Reports &amp; Anonymous Analytics</h2>
          <p>To maintain stability, Flair may collect anonymized crash logs (stack traces only). These contain no health data, no journal content, and no personally identifiable information. If specific crash reporting tools are integrated, they will be named here.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Your Rights &amp; Data Deletion</h2>
          <p className="mb-2">You have full control:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delete everything at any time via <strong>Settings → Reset App</strong>.</li>
            <li>Or simply uninstall Flair — your local data disappears with the app.</li>
            <li>Note: Data that originates from Apple Health or Google Health Connect is managed through those platforms and is not deleted by uninstalling Flair.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Data Ownership &amp; Portability</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You own all of your health data. Flair makes no claim to any data stored on your device.</li>
            <li>You can export your data as an encrypted <code>.flair</code> file at any time.</li>
            <li><code>.flair</code> files are encrypted using AES-256-GCM.</li>
            <li>Flair cannot recover your data if your seed phrase is lost — no server-side backup exists. There is no password reset mechanism.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">13. PDPA Compliance</h2>
          <p className="mb-2">Flair Health is operated by Regal Pines Pte. Ltd., a company registered in Singapore. We comply with the Personal Data Protection Act 2012 (PDPA).</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For data protection enquiries, contact: <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a></li>
            <li>Data Protection Officer: Regal Pines Pte. Ltd.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
          <p>Questions? Reach out at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>.</p>
        </section>
        <p className="mt-8 italic text-gray-500 dark:text-gray-400">We may update this policy. Material changes will be announced in-app on your next launch. The date at the top of this page always reflects the current version.</p>
      </div>
    </main>
  );
}
