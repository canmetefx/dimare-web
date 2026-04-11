import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DiMare Design',
  description: 'Privacy policy for DiMare Design — how we collect, use, and protect your personal data.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-linen-light pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl text-espresso mb-3">Privacy Policy</h1>
        <p className="text-espresso/50 text-sm mb-12">Last updated: April 2025</p>

        <div className="prose prose-stone max-w-none space-y-8 text-espresso/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">1. Data Controller</h2>
            <p>
              DiMare Design (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is the data controller for personal data collected
              through this website (<strong>dimare.design</strong>). We are committed to protecting your
              privacy in accordance with the Turkish Personal Data Protection Law (KVKK, Law No. 6698)
              and the EU General Data Protection Regulation (GDPR) where applicable.
            </p>
            <p className="mt-3">
              Contact: <a href="mailto:info@dimare.design" className="text-gold hover:underline">info@dimare.design</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">2. Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Contact form data:</strong> Name, email address, phone number, company/hotel name, project details, and message content — collected when you submit an enquiry.</li>
              <li><strong>Usage data:</strong> Pages visited, time on page, referral source, browser type and device — collected anonymously via Google Analytics (GA4) through Google Tag Manager.</li>
              <li><strong>Advertising data:</strong> Ad interaction data collected via Google Ads and Meta (Facebook/Instagram) Pixel for campaign measurement. This data is pseudonymised.</li>
              <li><strong>Communication data:</strong> Email or WhatsApp correspondence you initiate with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your project enquiries and provide quotations (legitimate interest / contract).</li>
              <li>To improve our website and understand visitor behaviour (legitimate interest).</li>
              <li>To measure the effectiveness of our advertising campaigns (legitimate interest).</li>
              <li>To send marketing communications, only with your explicit consent.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">4. Cookies &amp; Tracking Technologies</h2>
            <p>We use the following tracking tools:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Google Tag Manager</strong> — manages analytics and ad tags without direct code changes.</li>
              <li><strong>Google Analytics 4 (GA4)</strong> — collects anonymised usage statistics. IP addresses are anonymised.</li>
              <li><strong>Google Ads</strong> — conversion tracking for advertising campaigns.</li>
              <li><strong>Meta Pixel</strong> — measures the effectiveness of Meta ads and supports retargeting.</li>
            </ul>
            <p className="mt-4">
              You can opt out of analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              , or by adjusting your browser&apos;s cookie settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Service providers:</strong> Formspree (form processing), Google LLC (analytics/ads), Meta Platforms Inc. (ads), Vercel Inc. (hosting), Sanity Inc. (CMS).</li>
              <li><strong>Legal authorities:</strong> Where required by law.</li>
            </ul>
            <p className="mt-4">
              All third-party providers are bound by their own privacy policies and applicable data protection regulations.
              Data transfers to the US occur under Standard Contractual Clauses (SCCs) or equivalent safeguards.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">6. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact form submissions: retained for up to 2 years, then deleted.</li>
              <li>Analytics data: retained for 14 months (Google Analytics default).</li>
              <li>Email correspondence: retained for up to 5 years for business record purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">7. Your Rights</h2>
            <p>Under KVKK and GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Object to processing based on legitimate interest.</li>
              <li>Withdraw consent at any time where processing is based on consent.</li>
              <li>Lodge a complaint with your local data protection authority (Turkey: KVKK; EU: your national DPA).</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:info@dimare.design" className="text-gold hover:underline">info@dimare.design</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be notified
              by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the site
              after changes constitutes acceptance.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
