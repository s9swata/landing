import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nuturn Studio",
  description: "Privacy Policy for Nuturn Studio - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

      <p className="text-muted-foreground mb-8">
        <strong>Last updated:</strong> March 20, 2026
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          Nuturn Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website
          or use our services. Please read this privacy policy carefully. By using our website and services,
          you consent to the practices described in this policy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

        <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may collect personal information that you voluntarily provide to us, including:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Name and contact information (email address, phone number)</li>
          <li>Business information (company name, job title)</li>
          <li>Project requirements and goals</li>
          <li>Communication preferences</li>
          <li>Payment and billing information</li>
        </ul>

        <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When you visit our website, we may automatically collect certain information, including:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>IP address and device information</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring website or source</li>
          <li>General geographic location (country/region)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>To provide, maintain, and improve our services</li>
          <li>To communicate with you about our services and respond to inquiries</li>
          <li>To process transactions and send related information</li>
          <li>To send promotional communications (with your consent)</li>
          <li>To analyze website usage and optimize user experience</li>
          <li>To detect, prevent, and address technical issues</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use cookies and similar tracking technologies to collect information about your browsing activities.
          This includes:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may use third-party services that collect, monitor, and analyze data. These include:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Website analytics services (e.g., Google Analytics)</li>
          <li>Payment processors</li>
          <li>Communication platforms (e.g., Calendly for scheduling)</li>
          <li>Cloud hosting providers</li>
          <li>Email marketing services</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          These third parties have their own privacy policies governing their use of your information.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Information Sharing and Disclosure</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our business</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
          <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We implement appropriate technical and organizational measures to protect your personal information, including:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Secure server infrastructure</li>
          <li>Access controls and authentication measures</li>
          <li>Regular security assessments and updates</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          While we strive to protect your information, no method of transmission over the Internet is 100% secure.
          We cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed">
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this
          Privacy Policy, unless a longer retention period is required by law. When information is no longer needed,
          we securely delete or anonymize it.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
          <li><strong>Portability:</strong> Request transfer of your data to another party</li>
          <li><strong>Objection:</strong> Object to certain processing activities</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:hello@nuturnstudio.com" className="text-foreground hover:underline">
            hello@nuturnstudio.com
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children&apos;s Privacy</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our services are not directed to individuals under the age of 18. We do not knowingly collect
          personal information from children. If you believe we have collected information from a child,
          please contact us immediately.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">11. Links to Other Websites</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices of these external sites. We encourage you to review the privacy policies of any
          third-party websites you visit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">12. International Data Transfers</h2>
        <p className="text-muted-foreground leading-relaxed">
          Your information may be transferred to and processed in countries other than your country of residence.
          We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses
          or equivalent legal mechanisms.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify you of any material changes by
          posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage
          you to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:
        </p>
        <div className="text-muted-foreground leading-relaxed">
          <p><strong>Nuturn Studio</strong></p>
          <p>Email: <a href="mailto:hello@nuturnstudio.com" className="text-foreground hover:underline">hello@nuturnstudio.com</a></p>
        </div>
      </section>
    </article>
  );
}
