export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Version 41. Last Updated: September 6, 2026.</p>
      <p className="mb-4">Flair Health is a product of Regal Pines Pte. Ltd., a company incorporated in Singapore. References to &quot;Flair,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refer to Regal Pines Pte. Ltd.</p>
      <p className="mb-8">Flair is a local-first wellness app, privacy-first until we can verifiably be more. This policy explains what data leaves your device, when, and why.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. No Cloud, No Accounts, No Tracking</h2>
          <p className="mb-2">Flair is fully offline-first.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We never require an account, email, or phone number.</li>
            <li>Your journal entries, habits, scores, and AI insights live only on your device.</li>
            <li>We do not have a backend database for your personal data.</li>
            <li>We do not sell, share, or monetize your information.</li>
            <li>The only exception is when you explicitly invoke an AI feature (Refresh Insights, Magic Lens, Eat Now, Document Scanner, Body Age, Daily Quests, Inspire Me, Do Now, or Weekly Wrapped). Each feature requires your explicit approval via an in-app consent prompt before any data is transmitted. See Section 5. Flair makes no network request on app launch. The first server contact only occurs when you actively use an AI feature and have provided explicit consent.</li>
            <li>A pseudonymous identifier, generated on your device and rotating daily, is included with AI requests. It is not derived from any device or account identifier, and it is never forwarded to an AI provider. Section 5 describes what it is used for and what is retained alongside it.</li>
          </ul>
          <p className="mt-3"><strong>Smart Habits:</strong> Flair learns your recurring wellness patterns (such as meals, supplements, or workouts) by analyzing the timing and content of your journal entries. This analysis is performed entirely on your device. No habit data, patterns, or predictions are transmitted to any server. You can confirm or dismiss any predicted entry, and patterns that are consistently dismissed are automatically deactivated.</p>
          <p className="mt-3"><strong>Voice Input:</strong> Flair offers optional speech-to-text input for journal entries. Speech recognition is performed entirely on your device by the operating system (Apple Speech Recognition). Flair requires on-device recognition and does not permit a fallback that would send your audio elsewhere for processing. Where your device or selected language cannot support on-device recognition, voice input does not work. Flair does not record, store, or transmit audio.</p>
          <p className="mt-3"><strong>Phone Sleep Tracking:</strong> During Focus Mode sleep sessions, Flair uses your device&apos;s accelerometer to measure restlessness while your phone is on your mattress. Optionally, Flair analyzes ambient sound through your device&apos;s microphone to detect snoring patterns. All accelerometer and audio processing is performed entirely on-device. No motion data or audio recordings are stored by Flair or transmitted to any server. Sleep quality metrics derived from these sensors (duration, restlessness score, wake events, snoring indicators, and the timing of individual snoring episodes) are stored locally in your journal and may be included in AI feature payloads (such as Refresh Insights and Weekly Wrapped) with your explicit consent.</p>
          <p className="mt-3"><strong>Siri Shortcuts:</strong> Flair supports Siri Shortcuts for hands-free journal entry logging. Siri interactions are processed by your device&apos;s operating system (Apple Siri). Flair does not access Siri audio or transcripts beyond the text content you choose to log as a journal entry.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Your Control Over Your Data</h2>
          <p className="mb-2">No data leaves your device without your explicit, per-feature consent.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Each AI feature requires individual consent before activation. You decide which features may transmit data, and which may not.</li>
            <li>Before any AI feature you initiate sends data, Flair displays a consent form showing every specific data field that will be shared. This field-level transparency lets you see exactly what is being transmitted and why. In supported features (currently Eat Now), you can additionally view the exact minimized payload before it is sent, rendered from the same code that builds the real request. Standing context you&apos;ve enabled, such as weather and environmental data (see Section 9), runs on a simpler permission toggle rather than a per-send preview.</li>
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
            <li>Your data is stored within the <strong>Health Passport</strong>, an encrypted container on your device (previously referred to as &quot;The Vault&quot; in earlier versions of Flair).</li>
            <li>We never see, store, or back up your phrase or key.</li>
            <li>If you lose your phrase or device, your encrypted data cannot be recovered, even by us.</li>
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
            <li><strong>Refresh Insights</strong> sends a structured summary of your day&apos;s journal entries, anonymous health profile buckets (age range, sex, BMI category), your stated health objective, active wellness protocol targets, medical conditions (such as diabetes, hypertension, thyroid, kidney, or liver conditions), Fitzpatrick skin type, behavioral patterns (7-day activity breakdown), and, if available from scanned documents, lab biomarker values to our serverless routing layer over HTTPS. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Magic Lens</strong> sends a compressed copy of your photo for analysis. What is analyzed depends on the mode you select: meal photos are analyzed for nutritional content; life moments (books, rooms, objects, scenes) are analyzed to write a short journal entry; and photos of medical-device readings (glucose meters, blood-pressure monitors, scales) are analyzed to extract the numeric values. No metadata, location, or identifying information from the photo is transmitted.</li>
            <li><strong>Eat Now</strong> sends your restaurant name, approximate location (street or mall), country, and meal intention alongside your anonymous health profile, dietary preferences, food allergies, fasting mode, medical conditions (including whether your blood pressure readings are above a general guideline threshold of 130/80, whether you have declared asthma, and whether you have declared high cholesterol), today&apos;s food log entries, and 7-day rolling nutrient averages to generate personalized meal recommendations. When you name a venue, its name and general area go to a venue lookup service to confirm the match: Recruit Co., Ltd. (Hot Pepper Gourmet) in Japan, Foursquare elsewhere. No health data is included in that lookup. The recommendations themselves are generated by our AI provider, not by either venue service. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Document Scanner</strong> processes your health report photo entirely on-device using optical character recognition (OCR). Personal identifiers (names, dates of birth, ID numbers, phone numbers, email addresses, and national IDs) are detected and stripped locally using on-device pattern matching. Before sending, Flair displays the specific items that were detected and removed, and requires your explicit approval to proceed. Only the anonymized, redacted clinical text is sent to our routing layer for biomarker extraction. The original photo is never stored by Flair and never transmitted to any server.</li>
            <li><strong>Daily Quests</strong> sends your anonymous health profile and stated health objective to generate a personalized wellness protocol. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Do Now</strong> sends your stated health objective, your age group, your current energy level, medical conditions (including whether your blood pressure readings are above a general guideline threshold of 130/80, whether you have declared asthma, and whether you have declared high cholesterol), injuries, today&apos;s journal entries, recent journal context, and any active health concerns to help you choose between options you are weighing. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Body Age</strong> sends your anonymous health profile (age, sex, height, weight, and BMI), vital signs (resting heart rate, HRV, blood oxygen, respiratory rate, VO₂ max), blood pressure, body composition (body fat percentage, visceral fat, BMI), available lab biomarkers from scanned documents (such as HbA1c, total cholesterol, triglycerides, eGFR, creatinine, haemoglobin, TSH, liver enzymes, uric acid, ferritin, and vitamin D levels), Fitzpatrick skin type, bone and joint conditions, injuries and mobility limitations, your ongoing medications and supplements, smoking status, sleep quality summary, medical conditions (including whether your blood pressure readings are above a general guideline threshold of 130/80, whether you have declared asthma, and whether you have declared high cholesterol), lifestyle factors, a 30-day journal activity summary, and a flag indicating whether your BMI is assessed against a lower threshold used for some ethnic groups shown to be at higher health risk at a lower BMI, to estimate your biological age. No names, exact birth dates, or account identifiers are transmitted.</li>
            <li><strong>Age Transmission for Body Age:</strong> When you use the Body Age feature, your chronological age (derived from the birth year in your profile) is transmitted to our third-party AI providers as an input to the biological-age estimate. It is sent only for that computation and is not used to identify you.</li>
            <li><strong>Ethnicity and Body Age:</strong> Body Age no longer transmits your ethnicity. It sends a single yes-or-no flag instead, showing only whether your BMI is measured against a lower threshold used for some ethnic groups. The flag does not reveal which ethnicity you selected.</li>
            <li><strong>Blood Pressure Threshold Flag:</strong> Where you have entered blood pressure readings, Do Now, Eat Now, and Body Age also receive a flag for whether those readings sit above the general guideline threshold (130/80). This is a comparison against a published threshold, not a diagnosis, and it is not a substitute for assessment by a healthcare professional.</li>
            <li><strong>Inspire Me</strong> sends your active quest (title, category, and rationale), today&apos;s journal entries (up to 10), your stated health objective, medical conditions and, depending on the task category, dietary preferences, food allergies, fasting mode, preferred exercises, or injuries to generate personalized activity suggestions. Your country is included for location-aware recommendations. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Weekly Wrapped</strong> sends a structured 7-day summary to our routing layer, including: daily journal entries, workout summaries, sleep summaries (including phone-based sleep quality metrics such as restlessness, wake events, and snoring indicators, if available), meal times, mood entries, daily biometric readings (HRV, resting heart rate, blood oxygen, steps), nutrition summaries, hydration intake, environmental conditions (temperature, humidity, UV index, air quality), habit names and frequencies, Health Wallet net delta for the week and, if available, your previous report&apos;s advice for continuity. Your age and sex are included for age-appropriate context. No names, exact birth dates, or account identifiers are transmitted. Weekly Wrapped requires your explicit consent before activation.</li>
            <li><strong>AI Providers:</strong> AI inference is performed via Google Cloud Vertex AI, OpenAI&apos;s GPT-4.1-mini and GPT-4.1 APIs, or Anthropic&apos;s Claude API, selected automatically by our routing layer based on availability. Certain features, such as Eat Now, exclusively use Google Cloud Vertex AI because they require real-time search capabilities only available through this provider. All providers process data for inference only, under their respective API terms of service. We do not share personally identifiable information with any provider. Flair uses Google Cloud Vertex AI&apos;s Singapore region for inference processing.</li>
            <li><strong>No Content Persistence:</strong> Our routing layer processes the content of your request in memory and does not log, store, or retain it after the request is complete. Journal entries, health data, photos, and any other content you send are never written to storage on our servers. We do keep an operational record of each request, described under Pseudonymous Telemetry below. AI providers process your data under their own API terms. For reference: <a href="https://cloud.google.com/terms/data-processing-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Vertex AI</a>,{' '}<a href="https://openai.com/policies/terms-of-use" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">OpenAI GPT-4.1-mini and GPT-4.1</a>,{' '}<a href="https://www.anthropic.com/legal/commercial-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Anthropic Claude</a>.</li>
            <li><strong>IP Address:</strong> AI providers never see your IP address; requests are routed through our server. Our server sees your IP address in transit, as every server does. The only application-layer use is a one-way cryptographic hash of it, held for about two minutes, solely to prevent abuse (rate limiting): never the raw IP, never linked to your identity beyond that window, never used to profile you, and never stored in any database. Our hosting provider&apos;s own infrastructure logs are bounded by their published retention policy, which we do not control and cannot shorten.</li>
            <li><strong>No Training:</strong> Your data is not used by our routing layer or by any AI provider to train models.</li>
            <li><strong>Pseudonymous Telemetry:</strong> Your device generates a pseudonymous identifier by hashing a random per-install value with the current date, and includes it in requests to Flair&apos;s routing layer. It is never forwarded to any AI provider. The providers that process your request receive no identifier of any kind. We use it to enforce rate limits, and we retain it alongside an operational record of each request covering which feature was called, when, how long it took, how many tokens were used, and which model answered. When you use Refresh Insights, this record also includes the brand categories of any connected wearables or health apps detected in Apple Health (for example, &quot;Garmin&quot; or &quot;Oura&quot;), never the device model, firmware version, or any identifier from the device. These records contain no journal content, no health values, and no IP address. They do show which features a given day&apos;s identifier used, so they are a record of activity rather than an anonymous count. Because the identifier changes every day, that activity cannot be linked from one day to the next. The random value it derives from never leaves your device. All telemetry held in our own store is subject to a 90 day retention limit. Separately, our hosting provider retains short-lived runtime logs of each request. These carry the same operational fields, without the pseudonymous identifier, and no content. They are held for the period our hosting provider applies to the plan we are on, currently one hour. In addition, Body Age assessments contribute the difference between your estimated biological age and your chronological age to a weekly aggregate used to monitor how the model is performing. That aggregate records only the week, the number of assessments, and their combined values. It carries no identifier and is not linked to the record described above.</li>
            <li><strong>Sensitive Medical Context:</strong> If you optionally provide medical conditions (such as diabetes, hypertension, kidney or liver conditions, or injuries) or fasting states, this information is transmitted to the AI provider for inference and is not stored by Flair. It is used solely to ensure that generated recommendations do not suggest activities that could be harmful to you. This data is never stored on our servers, never retained after your request is processed, and is treated as sensitive health data under applicable law.</li>
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
          <p className="mt-3">With your permission, Flair imports the data categories listed above from Apple Health. This data is stored locally on your device and is never transmitted to any server unless you explicitly invoke an AI feature that includes it (such as Body Age). Flair also reads which apps or wearable devices have written data to Apple Health (for example, Garmin Connect or Oura) to detect your connected devices. This information is stored locally and only the brand category (e.g. &quot;Garmin&quot;, &quot;Oura&quot;), not the device model or firmware version, is included in Refresh Insights requests with your explicit consent.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Health Wallet</h2>
          <p className="mb-2">Health Wallet estimates the long-term economic implications of daily health behaviors using population-level epidemiological data.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Values are expressed in a fictional dollar currency. Health Wallet is not real money, not financial advice, and not a financial product.</li>
            <li><strong>All computation occurs exclusively on your device.</strong> Health Wallet makes zero network calls. No data is sent to any server for processing.</li>
            <li>Cost tables, regional scalars, and epidemiological constants are embedded in the app binary and do not require a network connection.</li>
            <li>Health Wallet transaction history is stored on-device within the encrypted Health Passport.</li>
            <li>Health Wallet data is included in encrypted <code>.flair</code> backup snapshots.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Flair Services</h2>
          <p className="mb-2">The app connects to <code>api.flairhealth.app</code> for certain non-AI functions:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Latency Estimates:</strong> The endpoint <code>api.flairhealth.app/api/stats</code> provides latency estimates used for progress bars during AI requests. This endpoint receives only a feature identifier. It is stateless: no user data is sent, retained, or logged.</li>
            <li><strong>Weekly Wrapped:</strong> The endpoint <code>api.flairhealth.app/api/weekly-report</code> (an internal path name, retained from before the feature&apos;s current display name) generates an AI-powered 7-day lifestyle summary. See Section 5 for the data fields transmitted.</li>
            <li><strong>IP Address:</strong> AI providers never see your IP address; requests are routed through our server. Our server sees your IP address in transit, as every server does. The only application-layer use is a one-way cryptographic hash of it, held for about two minutes, solely to prevent abuse (rate limiting): never the raw IP, never linked to your identity beyond that window, never used to profile you, and never stored in any database. Our hosting provider&apos;s own infrastructure logs are bounded by their published retention policy, which we do not control and cannot shorten.</li>
          </ul>
          <p className="mt-3">Health Wallet makes zero network calls. All wallet computation is performed entirely on-device.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Location &amp; Environment Data</h2>
          <p className="mb-2">With your permission, Flair uses your approximate location to request local weather, air quality (AQI), and UV index data from third-party environment services. The providers currently in use are:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>OpenWeatherMap</strong>: weather conditions and air quality data (<a href="https://openweathermap.org/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
            <li><strong>Singapore National Environment Agency (NEA) via data.gov.sg</strong>: UV index and Pollutant Standards Index for Singapore users (<a href="https://data.gov.sg/privacy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          </ul>
          <p className="mb-2">Your coordinates are coarsened to approximately 1 km on your device before transmission. The coarsened location is sent to Flair&apos;s server, which requests environmental data from the providers listed above and caches the result for 30 minutes. Your exact location is never transmitted to these providers. No health data is included in these requests. Your coordinates are not stored beyond the cache period and are never linked to any identity. You can disable environment data in Settings.</p>
          <p className="mb-2">Flair also uses your approximate location for venue lookup in Eat Now. When you name a venue, its name and general area (about 1 km) are sent to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>Foursquare</strong> (United States): venue lookup outside Japan (<a href="https://foursquare.com/legal/privacy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
            <li><strong>Recruit Co., Ltd. (Hot Pepper Gourmet)</strong> (Japan): venue lookup for users in Japan (<a href="https://cdn.p.recruit.co.jp/terms/cmn-t-1001/index.html?p=pp035" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          </ul>
          <p className="mb-2">Your exact location is never transmitted and no health data is included in these requests.</p>
          <p>Flair may request &quot;Always&quot; location access to import workout GPS routes from Apple Health. Route data is stored locally on your device and is never transmitted to any server. You can choose &quot;While Using the App&quot; location access if you prefer not to import route data.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Crash Reports</h2>
          <p>Flair ships zero third-party analytics, tracking, or crash-reporting SDKs. To maintain stability, Flair may collect first-party crash logs (stack traces only), which contain no health data, no journal content, and no personally identifiable information. If we ever integrate a third-party crash-reporting tool, we will name it here and update this policy first.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Your Rights &amp; Data Deletion</h2>
          <p className="mb-2">You have full control:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Delete everything at any time via <strong>Settings → Reset App</strong>.</li>
            <li>Or simply uninstall Flair: your local data disappears with the app.</li>
            <li>Note: Data that originates from Apple Health or Google Health Connect is managed through those platforms and is not deleted by uninstalling Flair.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Data Ownership &amp; Portability</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You own all of your health data. Flair makes no claim to any data stored on your device.</li>
            <li>You can export your data as an encrypted <code>.flair</code> file at any time.</li>
            <li><code>.flair</code> files are encrypted using AES-256-GCM.</li>
            <li>Flair cannot recover your data if your seed phrase is lost; no server-side backup exists. There is no password reset mechanism.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">13. Regulatory Positioning</h2>
          <p className="mb-2">Flair Health is positioned as a general wellness product, not a medical device. Flair Health is operated by Regal Pines Pte. Ltd., a company registered in Singapore, and we align our practices with Singapore&apos;s Personal Data Protection Act 2012 (PDPA) and, where applicable, the EU General Data Protection Regulation (GDPR).</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For data protection enquiries, contact: <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a></li>
            <li>Data Protection Officer: Regal Pines Pte. Ltd.</li>
            <li><strong>Right to Complain:</strong> You may lodge a complaint with the Personal Data Protection Commission (PDPC) if you believe your personal data has not been handled in accordance with the PDPA. Contact: <a href="https://www.pdpc.gov.sg/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.pdpc.gov.sg/</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Children&apos;s Privacy</h2>
          <p className="mb-3">Flair Health is not directed at children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect personal information from children under 13 in the United States or under the relevant minimum age elsewhere.</p>
          <p className="mb-3">Our App Store age rating is 13+ in most markets. We do not require account creation, and we do not collect names, email addresses, or other identifying information from any user.</p>
          <p className="mb-3">If we become aware that we have inadvertently received personal information from a child under the applicable minimum age, we will promptly delete that information and, where required by law, notify the child&apos;s parent or guardian.</p>
          <p className="mb-3">If you are a parent or guardian and believe your child has provided personal information to Flair Health, please contact us at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>. We will investigate and delete the data promptly.</p>
          <p>Flair asks for your birth year during setup. It is stored on your device and is never transmitted as a date. It is used for two purposes: to determine whether AI features are available to you, and, if you use Body Age, to calculate a biological age estimate. Features that use artificial intelligence require you to be 18 or over.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">15. Contact Us</h2>
          <p>Questions? Reach out at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>.</p>
        </section>
        <p className="mt-8 italic text-gray-500 dark:text-gray-400">We may update this policy. Material changes will be announced in-app on your next launch. The date at the top of this page always reflects the current version.</p>
      </div>
    </main>
  );
}
