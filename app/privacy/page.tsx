export default function PrivacyPolicy() {
  return (
    <main className="w-full min-w-0 max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Version 43. Last Updated: pending, confirm at merge.</p>
      <p className="mb-4">Flair Health is a product of Regal Pines Pte. Ltd., a company incorporated in Singapore. References to &quot;Flair,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; refer to Regal Pines Pte. Ltd.</p>
      <p className="mb-8">Flair is a local-first wellness app, privacy-first until we can verifiably be more. This policy explains what data leaves your device, when, and why.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. No Cloud, No Accounts, No Tracking</h2>
          <p className="mb-2">Flair is offline-first: it keeps your data on your device and works without a connection, except for the features that need one: the AI features, Local Conditions and route maps.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We never require an account, email, or phone number to use Flair. The beta list on this website is the one place we ask for an email, and section 16 says what happens to it.</li>
            <li>Your journal entries, habits, scores, and AI insights live only on your device.</li>
            <li>We do not have a backend database for your personal data.</li>
            <li>We do not sell your information, rent it, or use it for advertising.</li>
            <li>The only exception is when you explicitly invoke an AI feature (Refresh Insights, Magic Lens, Eat Now, Document Scanner, Daily Quests, or Do Now). Each feature requires your explicit approval via an in-app consent prompt before any data is transmitted. See Section 5. Flair makes no network request on app launch, with one exception you control: if you have turned on Local Conditions, opening Today refreshes the weather and air quality for your area through Flair&apos;s server, as that agreement says. Otherwise the first server contact occurs when you use an AI feature you have approved.</li>
            <li>A pseudonymous identifier, generated on your device and rotating daily, is included with AI requests. It is not derived from any device or account identifier, and it is never forwarded to an AI provider. Section 5 describes what it is used for and what is retained alongside it.</li>
          </ul>
          <p className="mt-3"><strong>Smart Habits:</strong> Flair learns your recurring wellness patterns (such as meals, supplements, or workouts) by analysing the timing and content of your journal entries. This analysis is performed entirely on your device. No habit data, patterns, or predictions are transmitted to any server. You can confirm or dismiss any predicted entry, and patterns that are consistently dismissed are automatically deactivated.</p>
          <p className="mt-3"><strong>Voice Input:</strong> Flair offers optional speech-to-text input for journal entries. Speech recognition is performed entirely on your device by the operating system (Apple Speech Recognition). Flair requires on-device recognition and does not permit a fallback that would send your audio elsewhere for processing. Where your device or selected language cannot support on-device recognition, voice input does not work. Flair does not record, store, or transmit audio.</p>
          <p className="mt-3"><strong>Phone Sleep Tracking:</strong> During Focus Mode sleep sessions, Flair uses your device&apos;s accelerometer to measure restlessness while your phone is on your mattress. Optionally, Flair analyses ambient sound through your device&apos;s microphone to detect snoring patterns. All accelerometer and audio processing is performed entirely on-device. No motion data or audio recordings are stored by Flair or transmitted to any server. Sleep quality metrics derived from these sensors (duration, restlessness score, wake events, snoring indicators, and the timing of individual snoring episodes) are stored locally in your journal and may be included in AI feature payloads (such as Refresh Insights) with your explicit consent.</p>
          <p className="mt-3"><strong>Siri Shortcuts:</strong> Flair supports Siri Shortcuts for hands-free journal entry logging. Siri interactions are processed by your device&apos;s operating system (Apple Siri). Flair does not access Siri audio or transcripts beyond the text content you choose to log as a journal entry.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Your Control Over Your Data</h2>
          <p className="mb-2">No data leaves your device without your explicit, per-feature consent.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Each AI feature requires individual consent before activation. You decide which features may transmit data, and which may not.</li>
            <li>Before any AI feature you initiate sends data, Flair displays a consent form showing every specific data field that will be shared. This field-level transparency lets you see exactly what is being transmitted and why. In supported features (currently Eat Now), you can additionally view the exact minimised payload before it is sent, rendered from the same code that builds the real request. Standing context you&apos;ve enabled, such as weather and environmental data (see Section 9), runs on a simpler permission toggle rather than a per-send preview.</li>
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
            <li><strong>Refresh Insights</strong> sends a structured summary of your day&apos;s journal entries, your health profile in broad bands (age range, sex, BMI category), your stated health objective, active wellness protocol targets, medical conditions (such as diabetes, hypertension, thyroid, kidney, or liver conditions), Fitzpatrick skin type, behavioural patterns (7-day activity breakdown), and, if available from scanned documents, lab biomarker values to our serverless routing layer over HTTPS. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Magic Lens</strong> sends a compressed copy of your photo for analysis. What is analysed depends on the mode you select: meal photos are analysed for nutritional content; life moments (books, rooms, objects, scenes) are analysed to write a short journal entry; and photos of medical-device readings (glucose meters, blood-pressure monitors, scales) are analysed to extract the numeric values. No metadata, location, or identifying information from the photo is transmitted.</li>
            <li><strong>Eat Now</strong> sends the restaurant or venue you name, its area and country and, if you gave one, an approximate position; what you feel like eating and drinking; your stated health objective, your food allergies, your dietary preferences, whether you are fasting, your medical conditions (kidney, liver, diabetes and its type, thyroid, whether your blood pressure readings are above the general 130/80 guideline, asthma and high cholesterol) and your age group; a summary of today&apos;s food entries; your 7-day nutrient averages; and any active food quests, to generate meal suggestions. No name, sex, weight, exact biometrics or account identifier is sent.</li>
            <li><strong>Document Scanner</strong> processes your health report photo entirely on your device using optical character recognition (OCR). Personal identifiers (names, dates of birth, ID numbers, phone numbers, email addresses and national IDs) are detected and removed on your phone by pattern matching. Before sending, Flair shows you the items it found and removed, and asks for your approval. Only the redacted text is then sent to our routing layer, with the request details described below, for biomarker extraction. That text is about your health, and nothing in it names you, but a medical report can still be recognisable from what it says, which is why you see what was removed before anything is sent. The original photo is never stored by Flair and never transmitted to any server.</li>
            <li><strong>Daily Quests</strong> sends your stated health objective, your injuries, your food allergies, your medical conditions and whether you are fasting, with the version of the quest rules, to generate your quests. No age, sex, name or account identifier is sent.</li>
            <li><strong>Do Now</strong> sends your stated health objective, your age group, your current energy level, medical conditions (including whether your blood pressure readings are above a general guideline threshold of 130/80, whether you have declared asthma, and whether you have declared high cholesterol), injuries, today&apos;s journal entries, recent journal context, and any active health concerns to help you choose between options you are weighing. No names, exact biometrics, or account identifiers are transmitted.</li>
            <li><strong>Blood Pressure Threshold Flag:</strong> Where you have entered blood pressure readings, Do Now and Eat Now also receive a flag for whether those readings sit above the general guideline threshold (130/80). This is a comparison against a published threshold, not a diagnosis, and it is not a substitute for assessment by a healthcare professional.</li>
            <li>These requests carry no name, email address or account identifier, and the daily code that reaches Flair&apos;s server is never forwarded to any AI provider. The data is about you, but nothing in it names you.</li>
            <li>If you used Body Age, Weekly Wrapped, Inspire Me or Health Wallet in an earlier build, what they produced, and the agreements you approved for them, stay on your phone and in any backup you made, until you delete them. Nothing more is sent for them, and Health Wallet never sent anything.</li>
            <li><strong>AI Providers:</strong> AI inference is performed via Google Cloud Vertex AI, OpenAI&apos;s GPT-4.1-mini and GPT-4.1 APIs, or Anthropic&apos;s Claude API, selected automatically by our routing layer based on availability. Certain features, such as Eat Now, exclusively use Google Cloud Vertex AI because they require real-time search capabilities only available through this provider. All providers process data for inference only, under their respective API terms of service. We do not share personally identifiable information with any provider. Flair uses Google Cloud Vertex AI&apos;s Singapore region for inference processing. Google keeps a short-lived copy of each request to speed up answers, deleted within one day; for Eat Now, which uses Google Search grounding, Google also keeps the search queries and the pages it drew on for up to three days, and there is no way to switch that off. Either may be kept longer if flagged for misuse. Google does not use your data to train its models.</li>
            <li><strong>No Content Persistence:</strong> Our routing layer processes the content of your request in memory and does not log, store, or retain it after the request is complete. Journal entries, health data, photos, and any other content you send are never written to storage on our servers. We do keep an operational record of each request, described under Pseudonymous Telemetry below. AI providers process your data under their own API terms. For reference: <a href="https://cloud.google.com/terms/data-processing-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Vertex AI</a>,{' '}<a href="https://openai.com/policies/terms-of-use" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">OpenAI GPT-4.1-mini and GPT-4.1</a>,{' '}<a href="https://www.anthropic.com/legal/commercial-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Anthropic Claude</a>.</li>
            <li><strong>IP Address:</strong> AI providers never see your IP address; requests are routed through our server. Our server sees your IP address in transit, as every server does. The only application-layer use is a one-way cryptographic hash of it, held for about two minutes, solely to prevent abuse (rate limiting): never the raw IP, never linked to your identity beyond that window, never used to profile you, and never stored in any database. Our hosting provider&apos;s own infrastructure logs are bounded by their published retention policy, which we do not control and cannot shorten.</li>
            <li><strong>No Training:</strong> Your data is not used by our routing layer or by any AI provider to train models.</li>
            <li><strong>Pseudonymous Telemetry:</strong> Your device generates a pseudonymous identifier by hashing a random per-install value with the current date, and includes it in requests to Flair&apos;s routing layer. Document Scanner&apos;s requests also carry your time zone offset. It is never forwarded to any AI provider. The providers that process your request receive no identifier of any kind. We use it to enforce rate limits, and we retain it alongside an operational record of each request covering which feature was called, when, how long it took, how many tokens were used, and which model answered. When you use Refresh Insights, this record also includes the brand categories of any connected wearables or health apps detected in Apple Health (for example, &quot;Garmin&quot; or &quot;Oura&quot;), never the device model, firmware version, or any identifier from the device. These records contain no journal content, no health values, and no IP address. They do show which features a given day&apos;s identifier used, so they are a record of activity rather than an anonymous count. Because the identifier changes every day, that activity cannot be linked from one day to the next. The random value it derives from never leaves your device. All telemetry held in our own store is subject to a 30 day retention limit. A daily count of requests per feature, with no identifier of any kind, is kept for 12 months. Separately, our hosting provider retains short-lived runtime logs of each request. These carry the same operational fields, without the pseudonymous identifier, and no content. They are held for the period our hosting provider applies to the plan we are on, currently one hour. From Body Age in earlier builds, our server keeps a weekly count of results and their average change, with nothing that identifies anyone. Weeks with fewer than five results are deleted after 30 days; the rest stay as counts. It carries no identifier and is not linked to the record described above.</li>
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
          <p className="mt-3">This data is pulled directly into your local journal and stored on your device. We do not transmit raw health data to any server. We do not write to Apple Health or Google Health Connect. Workout route data (GPS), if synced, is stored only on your device and is never transmitted to our servers.</p>
          <p className="mt-3">With your permission, Flair imports the data categories listed above from Apple Health. This data is stored locally on your device and is never transmitted to any server unless you explicitly invoke an AI feature that includes it (such as Refresh Insights, as section 5 lists). Flair also reads which apps or wearable devices have written data to Apple Health (for example, Garmin Connect or Oura) to detect your connected devices. This information is stored locally and only the brand category (e.g. &quot;Garmin&quot;, &quot;Oura&quot;), not the device model or firmware version, is included in Refresh Insights requests with your explicit consent.</p>
        </section>
        <section>
          <p className="text-gray-500 dark:text-gray-400"><strong>7.</strong> (This section described Health Wallet, which is switched off in the app. See <a href="#what-changed" className="text-blue-600 dark:text-blue-400 hover:underline">What Changed</a>, Version 43.)</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Flair Services</h2>
          <p className="mb-2">The app connects to <code>api.flairhealth.app</code> for certain non-AI functions:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Latency Estimates:</strong> The endpoint <code>api.flairhealth.app/api/stats</code> provides latency estimates used for progress bars during AI requests. This endpoint receives only a feature identifier. It is stateless: no user data is sent, retained, or logged.</li>
            <li><strong>IP Address:</strong> AI providers never see your IP address; requests are routed through our server. Our server sees your IP address in transit, as every server does. The only application-layer use is a one-way cryptographic hash of it, held for about two minutes, solely to prevent abuse (rate limiting): never the raw IP, never linked to your identity beyond that window, never used to profile you, and never stored in any database. Our hosting provider&apos;s own infrastructure logs are bounded by their published retention policy, which we do not control and cannot shorten.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Location &amp; Environment Data</h2>
          <p className="mb-2">With your permission, Flair uses your approximate location to request local weather, air quality (AQI), and UV index data from third-party environment services. The providers currently in use are:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>OpenWeatherMap</strong>: weather conditions and air quality data (<a href="https://openweathermap.org/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
            <li><strong>Singapore National Environment Agency (NEA) via data.gov.sg</strong>: UV index and Pollutant Standards Index for Singapore users (<a href="https://data.gov.sg/privacy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          </ul>
          <p className="mb-2">Your coordinates are coarsened to approximately 1 km on your device before transmission. The coarsened location is sent to Flair&apos;s server, which requests environmental data from the providers listed above and caches the result for 30 minutes. Your exact location is never transmitted to these providers. No health data is included in these requests. Your coordinates are not stored beyond the cache period and are never linked to any identity. You can disable environment data in Settings.</p>
          <p className="mb-2">Flair asks for location access only while you use the app. It uses your location to tailor Local Conditions to your area and, when you choose to record a route, to draw your route and measure its distance while a timer session runs, including when your screen is locked. Route data is stored only on your device and is never sent to Flair&apos;s servers. When you open a route map, your phone downloads map images from the OpenStreetMap Foundation, which receives your network address and the area the map shows, under its own privacy policy. No health data is sent.</p>
          <p className="mb-2">Route maps load map images from:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>OpenStreetMap Foundation</strong> (United Kingdom): map images for route maps; it receives your network address and the area the map shows (<a href="https://osmfoundation.org/wiki/Privacy_Policy" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
          </ul>
          <p className="mt-3">To name the place you are in, for your profile&apos;s city, a travel check-in or the location tag on an outdoor photo, your phone asks Apple&apos;s location service, for a position rounded to about 1 km, under Apple&apos;s own privacy policy.</p>
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
          <p className="mb-3">Our App Store age rating is 13+ in most markets. We do not require account creation, and the app collects no names, email addresses or other identifying information. The beta list on our website is the one exception, and it is described in section 16. To ask to join it you confirm that you are 18 or older.</p>
          <p className="mb-3">If we become aware that we have inadvertently received personal information from a child under the applicable minimum age, we will promptly delete that information and, where required by law, notify the child&apos;s parent or guardian.</p>
          <p className="mb-3">If you are a parent or guardian and believe your child has provided personal information to Flair Health, please contact us at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>. We will investigate and delete the data promptly.</p>
          <p>Flair asks for your birth year during setup. It is stored on your device and is never transmitted as a date. It is used to check that you are 18 or over for the features that need it (every AI feature, and the journal training export), and, when you use an AI feature whose agreement lists your age group, to work out that group on your phone before it is sent; section 5 says which features send it.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">15. Contact Us</h2>
          <p>Questions? Reach out at <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a>.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">16. The Beta List</h2>
          <p className="mb-3">Flair&apos;s app has no accounts and asks for no email. The beta list is the one place Flair asks for one, and it lives on this website rather than in the app.</p>
          <p className="mb-3"><strong>What we ask for.</strong> Your email address; your country; where you found Flair; a social handle, if you choose to give one; and your confirmation that you are 18 or older and agree to be emailed about the beta. We record the date you asked and a code that identifies the exact consent wording you were shown, so that both of us can see later what you agreed to. We do not ask about your health, your goals or any condition, and we do not store your IP address; our hosting provider&apos;s platform log holds your network address for about an hour, as section 17 says.</p>
          <p className="mb-3"><strong>Why we ask.</strong> To invite testers in small groups, and to decide whom to invite first. Your country tells us that; where you found Flair tells us which group you came from. Nothing on this list is used for advertising, and nothing on it is sold or rented.</p>
          <p className="mb-3"><strong>Who holds it.</strong> Regal Pines Pte. Ltd. holds the list in a spreadsheet in its own Google Workspace. Google processes it on our behalf under our agreement with them, and it may be stored on servers outside Singapore under the protections in that agreement. When we invite you, Apple holds your email address for as long as the TestFlight invitation needs it, under Apple&apos;s own terms.</p>
          <p className="mb-3"><strong>How long we keep it.</strong> We keep your row until the beta ends or until you ask us to remove it, and we delete the list within three months of the beta ending.</p>
          <p className="mb-3"><strong>Your row is not in the app.</strong> The email you give us here is never added to the app, never linked to anything you write in Flair, and never sent to an AI provider.</p>
          <p><strong>How to be removed.</strong> Email <a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a> from the address you gave us. We delete your row, and if you have already been invited we remove you from TestFlight. You can also ask us what we hold about you, and we will tell you.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">17. Where Your Data Is Processed</h2>
          {/* Counsel 18 Oct (docs/legal/2026-10-18-counsel-item953c-sheet-layout-and-v43-transfers-routes-apple.md). Verified rows only; Vercel, Supabase, Upstash, Google Cloud Vertex AI and OpenAI are register gaps until confirmed. */}
          <p className="mb-3">Some of the services Flair uses are outside Singapore. When your data goes to them, we protect it as follows.</p>
          <p className="mb-3"><strong>Our processors</strong> (our hosting, database, cache and AI providers) handle your data only to provide Flair to you. The table below shows, for each one we have confirmed, where it processes your data and the agreement that governs it. Our database (Supabase) and cache (Upstash) providers, and the hosting of Flair&apos;s own server (Vercel), are not yet in the table; we will add them in the next version.</p>
          <p className="mb-3"><strong>Services that receive data because you asked for a feature</strong> (weather and map images) receive only what that feature needs, as each feature&apos;s agreement in the app shows, under their own privacy policies.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr><th className="text-left font-semibold p-2 border-b border-gray-300 dark:border-gray-600">Recipient</th><th className="text-left font-semibold p-2 border-b border-gray-300 dark:border-gray-600">What it receives</th><th className="text-left font-semibold p-2 border-b border-gray-300 dark:border-gray-600">Country</th><th className="text-left font-semibold p-2 border-b border-gray-300 dark:border-gray-600">Basis</th></tr>
              </thead>
              <tbody>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>Anthropic (Claude)</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">The data fields each AI feature&apos;s agreement lists, with no names or account identifiers</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">United States (stored); processing may be routed to the United States, Europe, Asia or Australia</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Data processing agreement, incorporated into Anthropic&apos;s <a href="https://www.anthropic.com/legal/commercial-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Commercial Terms</a></td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>OpenWeather Ltd (OpenWeatherMap)</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Your position rounded to about 1 km, sent from Flair&apos;s server</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">United Kingdom</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><span className="italic">Basis to be confirmed by the human lawyer.</span></td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>OpenMeteo GmbH (Open-Meteo)</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Your position rounded to about 1 km, sent from Flair&apos;s server</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Switzerland</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><span className="italic">Basis to be confirmed by the human lawyer.</span></td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>OpenStreetMap Foundation</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Your network address and the area a route map shows</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">United Kingdom</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><span className="italic">Basis to be confirmed by the human lawyer.</span></td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>Apple</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">A position rounded to about 1 km, to name the place you are in</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">United States</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><span className="italic">Basis to be confirmed by the human lawyer.</span></td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>Vercel (our website and its beta sign-up form)</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Your beta list request, for the moment it takes to pass it to our spreadsheet. Our code stores and logs none of it. Vercel&apos;s own platform log records each request&apos;s time, path, status and your network address for about an hour, never the content.</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Singapore</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Vercel&apos;s terms of service. No data processing addendum is available on our current plan, so we keep the request in Singapore and store nothing with Vercel.</td></tr>
                <tr><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700"><strong>Google (Google Workspace, our spreadsheet)</strong></td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">The beta list: your email address, your country, where you found Flair, a handle if you gave one, the date you asked and a code identifying the consent wording you saw</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">May be stored outside Singapore</td><td className="p-2 align-top border-b border-gray-200 dark:border-gray-700">Google Workspace terms with Google&apos;s Cloud Data Processing Addendum</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 id="what-changed" className="text-2xl font-semibold mb-3 scroll-mt-8">What Changed</h2>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> A correction. In builds up to 49, four paths could request local weather and air quality data using your approximate location without the Local Conditions consent: an outdoor workout imported from Apple Health, that same import run by a background task, a pass back over workouts already on the phone, and the Outdoors answer on a workout. The statements in sections 1, 2, 5 and 9 that no data leaves your device without your per-feature consent did not hold for those paths. The fix checks that consent at a single point and fails closed if it cannot be read. No data beyond your position rounded to about a kilometre was involved, and nothing identifying you was sent to the weather services. The fix reached testers in build 50 on 24 October 2026.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 2: removed the interim exception for the stated health objective. The fix, which puts the objective on the Refresh Insights, Inspire Me and Weekly Wrapped consent forms, reached testers in build 48 in September 2026; the exception should have come out then and stayed up until this version.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5: &quot;anonymous health profile&quot; is replaced by a description of what each feature sends (profile bands, or for Body Age the figures themselves). That data carried no name or identifier, but it was about you, so &quot;anonymous&quot; was the wrong word; the section now says what goes.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Removed Body Age, Weekly Wrapped, Inspire Me and Health Wallet from sections 1, 5, 6, 7, 8 and 14: they are switched off in the app and nobody can use them. What each sent while it was available is in the earlier versions of this policy, which stay in the history below. Their text, and their agreements in the app, return together before any of them returns.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Closing paragraph: removed the promise that material changes are announced in the app on your next launch, which the app does not do. The version history on this page, and the app&apos;s own agreements for what it sends, are the record. Terms section 11: removed the promise of an in-app notice on your next launch, which the App does not give; the version date and this history are the record. Terms section 8: the names and logo are described as belonging to Regal Pines; the earlier text called them trademarks or pending trademarks, and none is registered or filed.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 14: the birth year&apos;s uses are now stated in full. It also sets the age group that Refresh Insights, Eat Now and Do Now send, and it gates the journal training export; the earlier text named only AI availability and Body Age. The agreements in the app listed the age group throughout.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5: telemetry retention corrected from 90 to 30 days, and the 12-month daily count per feature named.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5, Daily Quests: the list of what it sends was wrong both ways. It named a health profile that is not sent, and it omitted injuries, food allergies, medical conditions and fasting mode, which are. The agreement shown in the app listed them correctly throughout; the policy now matches it.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5, Document Scanner: &apos;anonymised&apos; removed. The redacted text is about you with your identifiers removed on the phone; it was never anonymous, and the sentence now says what leaves and why you see the redactions first.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5: Google&apos;s retention for AI requests is now stated (a copy for up to one day; Eat Now&apos;s grounding queries for up to three days), as the agreements in the app have said since 12 October 2026, on testers&apos; phones from build 50.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 5, Eat Now: the list of what it sends was incomplete and named a profile that is not sent. It now lists the venue and area, your drinks preference, your age group, the medical conditions by name, today&apos;s food summary and active food quests, as the agreement shown in the app has listed them.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Removed &quot;fully&quot; from &quot;offline-first&quot; and named the features that need a connection: the AI features, Local Conditions and route maps.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Section 1: &quot;no network request on app launch&quot; did not hold with Local Conditions on; opening Today refreshes your area&apos;s readings through Flair&apos;s server, as the Local Conditions agreement in the app has always said. The sentence now says so.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Route maps load map images from OpenStreetMap, which receives your network address and the area shown; the earlier text said route data was never transmitted to any server.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Added: to name the place you are in, for your profile&apos;s city, a travel check-in or the location tag on an outdoor photo, your phone asks Apple&apos;s location service, for a position rounded to about 1 km, under Apple&apos;s own privacy policy.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Removed the statement that Flair may request &apos;Always&apos; location access; Flair asks only while you use the app.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Added to section 9: when you choose to record a route, it is recorded while a timer session runs, including when your screen is locked.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Added section 17, Where Your Data Is Processed: the services outside Singapore that receive your data, what each receives, its country and the basis that protects it, with rows for Vercel (the website&apos;s sign-up form, kept in Singapore) and Google Workspace (the beta list). Our database and cache providers and the hosting of Flair&apos;s own server are not yet in its table; the section says so.</p>
          <p className="mb-3"><strong>Version 43, October 2026.</strong> Removed the Eat Now and section 9 text about venue lookup, and Foursquare and Recruit with it. That lookup is switched off; the text, the table rows and its own agreement in the app return together when it is switched on.</p>
          <p><strong>Version 43, October 2026.</strong> Added section 16, the beta list: what the sign-up form asks for, why, who holds it, how long it is kept and how to be removed. Section 14 is rescoped, because the app collects no email address and the beta list does. In section 1, &quot;We do not sell, share, or monetize your information&quot; is replaced by &quot;We do not sell your information, rent it, or use it for advertising&quot;: the word &quot;share&quot; was inaccurate, because sections 5 and 9 of this policy have always described data going to AI providers and environment services with your consent, and the beta list is held for us by Google.</p>
        </section>
        <p className="mt-8 italic text-gray-500 dark:text-gray-400">We may update this policy. The version and date at the top of this page change with every update, and the history below records each one. A change to what the app sends is shown to you in the app&apos;s own agreement before anything is sent under the new terms.</p>
      </div>
    </main>
  );
}
