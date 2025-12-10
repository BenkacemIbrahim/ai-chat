export function PrivacyContent() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8">
        <p className="text-slate-600 dark:text-slate-300 mb-0">
          <strong>Last updated:</strong> January 15, 2024
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-semibold text-white">Account Information</h3>
            <p>
              When you create an account, we collect your email address, name, and password. We may also collect
              optional profile information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-white">Usage Data</h3>
            <p>
              We collect information about how you use our services, including your conversations with our AI models,
              API usage patterns, and feature interactions.
            </p>

            <h3 className="text-xl font-semibold text-white">Technical Information</h3>
            <p>
              We automatically collect certain technical information, including IP addresses, browser type, device
              information, and usage analytics.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our AI services</li>
              <li>Personalize your experience and recommendations</li>
              <li>Communicate with you about our services</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Develop new features and services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist our operations</li>
              <li>In connection with a business transaction</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We implement industry-standard security measures to protect your information, including encryption in
              transit and at rest, access controls, and regular security audits.
            </p>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We retain your information for as long as necessary to provide our services and fulfill the purposes
              outlined in this policy. You can request deletion of your account and associated data at any time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
          <div className="space-y-4 text-gray-300">
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Restrict processing of your information</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide
              personalized content. You can control cookie settings through your browser preferences.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. International Transfers</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place for such transfers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal information from
              children under 13.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by email
              or through our service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
          <div className="space-y-4 text-gray-300">
            <p>If you have questions about this privacy policy, please contact us:</p>
            <ul className="list-none space-y-2">
              <li>Email: privacy@chatai.ai</li>
              <li>Address: 123 AI Street, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
