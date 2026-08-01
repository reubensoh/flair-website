export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Last Updated: August 1, 2026</p>
      <p className="mb-8">Flair Health is a product of Regal Pines Pte. Ltd. (Singapore). By downloading, accessing, or using the Flair Health mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the App.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Eligibility</h2>
          <p>You must be at least 13 years of age (or the minimum legal age in your jurisdiction) to use Flair Health. If you are under 13 in the United States, you may not use the App. In jurisdictions where a different minimum age applies, you must meet that minimum age to use the App.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Not Medical Advice</h2>
          <p className="mb-2">Flair Health is designed for lifestyle guidance and general wellness purposes only. The App, including its AI-generated insights, wellness protocols, recommendations, and macro estimates, is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, diet, or fitness regimen. Never disregard professional medical advice or delay in seeking it because of something you have read in this App.</p>
          <p className="mb-2">In particular, you acknowledge that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Body Age</strong> is an algorithmic estimate based on self-reported and device-imported data. It is not a clinical measurement. Actual biological age cannot be determined without clinical laboratory testing.</li>
            <li><strong>Health Wallet</strong> projections are population-level estimates derived from epidemiological data. They are not personalised medical or financial predictions.</li>
            <li><strong>AI recommendations</strong> (including Level Up, Eat Now, and Inspire Me) are informational and motivational in nature. They do not constitute medical advice.</li>
            <li><strong>Daily Quests</strong> goals are motivational lifestyle suggestions. They are not treatment plans, exercise prescriptions, or dietary regimens.</li>
            <li><strong>Document Scanner</strong> biomarker extraction is automated and may contain errors, including misread values, units, or reference ranges. Always verify extracted data against your original report.</li>
            <li>You should <strong>consult qualified healthcare professionals</strong> for all medical decisions. No feature of the App is intended to replace the judgement of a licensed medical provider.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Data Loss &amp; &quot;The Sovereign&quot; Seed Phrase</h2>
          <p className="mb-2">Flair Health empowers you to encrypt your data locally using a 12-word backup phrase (&quot;The Sovereign&quot;).</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Your Responsibility:</strong> You are solely responsible for the safe storage of this 12-word phrase.</li>
            <li><strong>No Recovery:</strong> Because we do not store your data or keys on our servers, we cannot recover your data or restore your journal if you lose your device or your 12-word phrase. Flair Health is not liable for any lost data.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Artificial Intelligence Features</h2>
          <p className="mb-2">By using features like &quot;Level Up,&quot; &quot;Magic Lens,&quot; &quot;Eat Now,&quot; &quot;Document Scanner,&quot; &quot;Body Age,&quot; &quot;Inspire Me,&quot; &quot;Weekly Report,&quot; and Daily Quests, you acknowledge that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI is an automated system and may occasionally produce inaccurate, incomplete, or hallucinated information.</li>
            <li>Macro calculations and ingredient extractions are estimates and should not be relied upon for strict medical or allergy-related dietary tracking.</li>
            <li>AI-generated content is for lifestyle guidance and general wellness purposes and should not be used to manage chronic conditions, allergies, or acute medical needs.</li>
            <li>You are responsible for reviewing and verifying AI-generated advice before acting upon it.</li>
            <li>AI-generated Protocol targets are lifestyle suggestions only. They do not account for your complete medical history and must not replace the advice of a qualified healthcare provider.</li>
            <li>Daily Quests may temporarily pause or deprioritize tasks based on your own journal entries (e.g., a logged injury or illness). This reflects your recorded context and is not a medical recommendation to avoid any activity. Always consult a healthcare provider for injury- or illness-related decisions.</li>
            <li>Smart Habits generates predictive journal entries based on your observed patterns. These suggestions are automated and may not reflect your actual activities on any given day. You are responsible for confirming or dismissing each prediction before it is logged.</li>
            <li>Document Scanner biomarker extraction is automated and may misread values, units, or reference ranges. Always verify extracted data against your original report. Flair Health is not liable for clinical decisions based on AI-extracted biomarker data.</li>
            <li>Body Age estimates are generated by AI based on self-reported and device-imported data. They are not a medical diagnosis. Actual biological age cannot be determined without clinical laboratory testing. Flair Health is not liable for health decisions based on Body Age estimates.</li>
            <li>Inspire Me generates creative, personalised activity suggestions based on your Daily Quests task and health context. Suggestions are for lifestyle inspiration only — they are not prescriptions, exercise programs, or dietary plans. You are responsible for assessing whether any suggestion is appropriate for your individual circumstances.</li>
            <li>Weekly Report generates an AI-powered summary of your past 7 days of wellness activity. It is an automated lifestyle review, not a medical assessment or clinical report. You are responsible for reviewing the content and consulting a healthcare provider for any medical concerns.</li>
            <li>AI inference may be performed by multiple third-party providers (currently Google Gemini, OpenAI GPT-4.1-mini and GPT-4.1, and Anthropic Claude). Provider selection is generally automatic and based on service availability. Certain features, such as Eat Now, exclusively use Google Gemini because they require real-time location search — a capability only available through this provider.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Third-Party AI Services</h2>
          <p className="mb-2">By using AI-powered features, you acknowledge that your data may be processed by third-party AI providers. The providers currently in use are:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>Google Cloud Vertex AI</strong></li>
            <li><strong>Mistral AI</strong></li>
            <li><strong>OpenAI GPT-4.1-mini and GPT-4.1</strong></li>
            <li><strong>Anthropic Claude</strong></li>
          </ul>
          <p className="mb-2">Your use of AI features constitutes acceptance of the applicable provider&apos;s terms of service:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><a href="https://cloud.google.com/terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Terms of Service</a></li>
            <li><a href="https://legal.mistral.ai/terms/commercial-terms-of-service" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Mistral AI Commercial Terms of Service</a></li>
            <li><a href="https://openai.com/policies/terms-of-use/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">OpenAI Terms of Use</a></li>
            <li><a href="https://www.anthropic.com/legal/commercial-terms" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Anthropic Commercial Terms of Service</a></li>
          </ul>
          <p>Flair Health does not control how these providers process data beyond the terms of their respective API agreements. Flair Health does not store copies of data sent to AI providers.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Health Wallet</h2>
          <p className="mb-2">The Health Wallet feature displays projected health-related monetary values. By using Health Wallet, you acknowledge and agree that:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>All monetary values displayed in Health Wallet are denominated in a <strong>fictional dollar currency</strong> with no real-world monetary value.</li>
            <li>Projections are derived from <strong>population-level epidemiological data</strong> and are not personalised financial or medical calculations.</li>
            <li>Flair Health is <strong>not a financial product, financial service, or financial advisor</strong> within the meaning of any applicable financial services legislation, including Singapore&apos;s Securities and Futures Act and Financial Advisers Act.</li>
            <li>You will <strong>not make financial, medical, or insurance decisions</strong> based on Health Wallet values.</li>
            <li>Projections are for <strong>educational and motivational purposes only</strong> and carry no warranty of accuracy.</li>
            <li>All Health Wallet computation occurs <strong>exclusively on your device</strong> — no server-side processing of Health Wallet data takes place.</li>
            <li>Flair Health <strong>expressly disclaims any liability</strong> arising from decisions made based on Health Wallet projections.</li>
          </ol>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Acceptable Use</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reverse engineer, decompile, or disassemble any aspect of the App or our AI routing servers.</li>
            <li>Attempt to bypass, exploit, or spam the Insight Energy (&quot;Zaps&quot;) system or our AI APIs.</li>
            <li>Use the App for any illegal or unauthorized purpose.</li>
            <li>Use the App to make medical, dietary, or treatment decisions without consulting a qualified healthcare provider.</li>
          </ul>
          <p className="mt-3"><strong>Virtual Items:</strong> Virtual items, including Insight Energy (&quot;Zaps&quot;) or &quot;Flames,&quot; have no real-world monetary value, cannot be exchanged for cash, and are licensed to you solely for use within the App. Regal Pines Pte. Ltd. reserves the right to modify, cap, or revoke these virtual items at any time without compensation.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>&quot;Flair Health,&quot; &quot;Health Passport,&quot; &quot;Health Wallet,&quot; the Flair logo, and all related marks, logos, and product names are trademarks or pending trademarks of Regal Pines Pte. Ltd. All rights reserved.</li>
            <li>The Flair Health application, including its design, code, algorithms, methodologies, and content, is protected by copyright, trade secret, and other intellectual property laws.</li>
            <li>You may not copy, modify, distribute, reverse engineer, or create derivative works of the application or its methodologies.</li>
            <li>All rights not expressly granted under these Terms are reserved by Regal Pines Pte. Ltd.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Data Ownership &amp; Portability</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You own your personal health data stored within the App.</li>
            <li>Data can be exported as encrypted <code>.flair</code> files at any time.</li>
            <li>Flair Health cannot recover data if the seed phrase is lost — no server-side backup exists.</li>
            <li>There is no password reset mechanism.</li>
            <li>The <code>.flair</code> export format uses AES-256-GCM encryption.</li>
            <li>Upon deletion or uninstallation of the App, all local data is permanently removed.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Flair Health (and its developers, partners, and affiliates) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the App; (b) any conduct or content of any third party on the App; or (c) any unauthorized access, use, or alteration of your transmissions or content.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of these Terms and providing an in-app notice on your next launch. Your continued use of the App after changes are published constitutes your acceptance of the revised Terms.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Governing Law</h2>
          <p>These Terms are governed by the laws of Singapore. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">13. Disclaimer of Warranties</h2>
          <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">14. Contact Information</h2>
          <p>For questions or concerns regarding these Terms, contact:</p>
          <p className="mt-2">Regal Pines Pte. Ltd.<br /><a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a></p>
        </section>
      </div>
    </main>
  );
}
