import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nuturn Studio",
  description: "Terms of Service for Nuturn Studio - Web development and digital services.",
};

export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

      <p className="text-muted-foreground mb-8">
        <strong>Last updated:</strong> March 20, 2026
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          By accessing and using Nuturn Studio&apos;s services, you agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our services. These terms constitute a legally
          binding agreement between you and Nuturn Studio.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Nuturn Studio provides the following services:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>SaaS product development and landing pages</li>
          <li>E-commerce store development</li>
          <li>Custom web applications</li>
          <li>AI integration services</li>
          <li>Technical consulting and strategy</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By using our services, you agree to:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Provide accurate and complete information necessary for project delivery</li>
          <li>Respond to communications within a reasonable timeframe</li>
          <li>Provide timely feedback and approvals</li>
          <li>Ensure you have the legal rights to any content, materials, or assets you provide</li>
          <li>Make payments according to the agreed-upon schedule</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property Rights</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Upon full payment, you will own the deliverables created specifically for your project,
          including code, designs, and content. We retain ownership of:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Pre-existing frameworks, libraries, and tools</li>
          <li>General knowledge and techniques developed during the project</li>
          <li>Templates and components used across multiple projects</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We reserve the right to display completed work in our portfolio unless otherwise agreed in writing.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          Payment terms are outlined in individual project proposals and contracts. Generally,
          we require a deposit before work begins, with the balance due upon project completion.
          Late payments may result in project delays or suspension of services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Revisions and Changes</h2>
        <p className="text-muted-foreground leading-relaxed">
          Each project scope includes a specified number of revision rounds. Additional revisions,
          scope changes, or significant redesign requests may incur additional charges. We will
          communicate any potential additional costs before proceeding.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">
          Nuturn Studio shall not be liable for any indirect, incidental, special, consequential,
          or punitive damages, including but not limited to loss of profits, data, or business
          opportunities, resulting from the use of our services. Our total liability shall not
          exceed the amount paid by the client for the specific service in question.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Project Timeline</h2>
        <p className="text-muted-foreground leading-relaxed">
          Project timelines are estimates based on timely client collaboration and feedback. We
          commit to our estimated timelines but are not liable for delays caused by client
          feedback delays, scope changes, or circumstances beyond our reasonable control.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Either party may terminate a project with 14 days written notice. Upon termination:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>Client pays for all work completed up to the termination date</li>
          <li>We deliver all completed work product</li>
          <li>Any deposits are non-refundable for work already begun</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Confidentiality</h2>
        <p className="text-muted-foreground leading-relaxed">
          We treat all client information with strict confidentiality. We will not disclose
          sensitive business information, proprietary data, or client identities without
          explicit permission, except as required by law.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">11. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our services may involve integration with third-party services (hosting, payment
          processors, APIs, etc.). We are not responsible for the terms, privacy practices,
          or reliability of third-party services. Please review their terms before use.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
        <p className="text-muted-foreground leading-relaxed">
          These Terms of Service are governed by and construed in accordance with applicable
          laws. Any disputes shall be resolved through good-faith negotiation first, followed
          by binding arbitration if necessary.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting. Continued use of our services constitutes acceptance of
          the modified terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have questions about these Terms of Service, please contact us at{" "}
          <a href="mailto:hello@nuturnstudio.com" className="text-foreground hover:underline">
            hello@nuturnstudio.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
