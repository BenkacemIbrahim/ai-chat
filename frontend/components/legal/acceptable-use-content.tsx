export function AcceptableUseContent() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8 mb-8">
        <p className="text-slate-600 dark:text-slate-300 mb-0">
          <strong>Last updated:</strong> December 20, 2023
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              This Acceptable Use Policy ("AUP") outlines the rules and guidelines for using CHATAI services. By
              accessing or using our services, you agree to comply with this policy. Violation of this policy may result
              in suspension or termination of your access to our services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Prohibited Uses</h2>
          <div className="space-y-4 text-gray-300">
            <p>You agree not to use CHATAI services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Generate, promote, or distribute content that is illegal, harmful, threatening, abusive, harassing,
                defamatory, vulgar, obscene, invasive of privacy, hateful, or otherwise objectionable
              </li>
              <li>
                Engage in activities that violate the legal rights of others, including but not limited to intellectual
                property rights
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a
                person or entity
              </li>
              <li>
                Interfere with or disrupt the services or servers or networks connected to the services, or disobey any
                requirements, procedures, policies, or regulations of networks connected to the services
              </li>
              <li>
                Collect or store personal data about other users without their express consent or in violation of
                applicable privacy laws
              </li>
              <li>
                Use the services for any purpose that is unlawful or prohibited by these terms, or to solicit the
                performance of any illegal activity
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Content Guidelines</h2>
          <div className="space-y-4 text-gray-300">
            <p>When using CHATAI services, you must not generate or distribute content that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promotes violence, terrorism, or illegal activities</li>
              <li>Contains hate speech or discriminatory content based on protected characteristics</li>
              <li>Includes sexually explicit or pornographic material</li>
              <li>Promotes self-harm or suicide</li>
              <li>Spreads misinformation or disinformation that could cause public harm</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains malware, viruses, or other harmful code</li>
              <li>Attempts to manipulate or deceive users or systems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. API Usage</h2>
          <div className="space-y-4 text-gray-300">
            <p>When using the CHATAI API, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adhere to rate limits and quotas specified in your plan</li>
              <li>Not attempt to circumvent any limitations or restrictions</li>
              <li>Properly authenticate all API requests</li>
              <li>Not share your API keys or credentials with unauthorized parties</li>
              <li>Implement proper error handling to avoid excessive failed requests</li>
              <li>Not use automated tools to scrape or extract data beyond authorized API endpoints</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Security</h2>
          <div className="space-y-4 text-gray-300">
            <p>You must not engage in any activity that compromises the security of our services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempting to probe, scan, or test the vulnerability of our systems</li>
              <li>Breaching or circumventing authentication or security measures</li>
              <li>Accessing data not intended for you</li>
              <li>Attempting to interfere with service to any user, host, or network</li>
              <li>Conducting denial-of-service attacks</li>
              <li>Reverse engineering our software or services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Monitoring and Enforcement</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We reserve the right to monitor compliance with this policy and investigate potential violations. We may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review and analyze your usage patterns</li>
              <li>Request information regarding your compliance with this policy</li>
              <li>Issue warnings for potential violations</li>
              <li>Temporarily suspend or permanently terminate your access for violations</li>
              <li>Report illegal activities to appropriate law enforcement authorities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Reporting Violations</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              If you become aware of any violation of this Acceptable Use Policy, please report it immediately to
              abuse@chatai.ai. Please provide as much detail as possible to help us investigate the issue.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Changes to this Policy</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We may update this Acceptable Use Policy from time to time. We will notify users of any material changes
              via email or through our service. Your continued use of our services after such modifications constitutes
              your acceptance of the updated policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
          <div className="space-y-4 text-gray-300">
            <p>If you have questions about this policy, please contact us:</p>
            <ul className="list-none space-y-2">
              <li>Email: legal@chatai.ai</li>
              <li>Address: 123 AI Street, San Francisco, CA 94105</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
