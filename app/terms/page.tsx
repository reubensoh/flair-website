export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">Last Updated: April 24, 2026</p>
      <p className="mb-8">Flair Health is a product of Regal Pines Pte. Ltd. (Singapore). By downloading, accessing, or using the Flair Health mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the App.</p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Eligibility</h2>
          <p>You must be at least 13 years of age (or the minimum legal age in your country) to use Flair Health.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Not Medical Advice</h2>
          <p>Flair Health is designed for lifestyle guidance and general wellness purposes only. The App, including its AI-generated insights, wellness protocols, recommendations, and macro estimates, is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, diet, or fitness regimen. Never disregard professional medical advice or delay in seeking it because of something you have read in this App.</p>
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
          <p className="mb-2">By using features like &quot;Level Up,&quot; &quot;Magic Lens,&quot; and the Blueprint Protocol, you acknowledge that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>AI is an automated system and may occasionally produce inaccurate, incomplete, or hallucinated information.</li>
            <li>Macro calculations and ingredient extractions are estimates and should not be relied upon for strict medical or allergy-related dietary tracking.</li>
            <li>AI-generated content is for lifestyle guidance and general wellness purposes and should not be used to manage chronic conditions, allergies, or acute medical needs.</li>
            <li>You are responsible for reviewing and verifying AI-generated advice before acting upon it.</li>
            <li>AI-generated Protocol targets are lifestyle suggestions only. They do not account for your complete medical history and must not replace the advice of a qualified healthcare provider.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Acceptable Use</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reverse engineer, decompile, or disassemble any aspect of the App or our AI routing servers.</li>
            <li>Attempt to bypass, exploit, or spam the Insight Energy (&quot;Zaps&quot;) system or our AI APIs.</li>
            <li>Use the App for any illegal or unauthorized purpose.</li>
            <li>Use the App to make medical, dietary, or treatment decisions without consulting a qualified healthcare provider.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Flair Health (and its developers, partners, and affiliates) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the App; (b) any conduct or content of any third party on the App; or (c) any unauthorized access, use, or alteration of your transmissions or content.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of these Terms and providing an in-app notice on your next launch. Your continued use of the App after changes are published constitutes your acceptance of the revised Terms.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Governing Law</h2>
          <p>These Terms are governed by the laws of Singapore. Any dispute arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Singapore.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
          <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <p>For questions or concerns regarding these Terms, contact:</p>
          <p className="mt-2">Regal Pines Pte. Ltd.<br /><a href="mailto:support@flairhealth.app" className="text-blue-600 dark:text-blue-400 hover:underline">support@flairhealth.app</a></p>
        </section>
      </div>
    </main>
  );
}
