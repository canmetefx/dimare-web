import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Dimare Design',
  description: 'Terms and conditions for using the Dimare Design website and services.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-linen-light pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl text-espresso mb-3">Terms of Service</h1>
        <p className="text-espresso/50 text-sm mb-12">Last updated: April 2025</p>

        <div className="prose prose-stone max-w-none space-y-8 text-espresso/80 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">1. About Us</h2>
            <p>
              Dimare Design is a luxury handcrafted textile and décor studio based in Turkey, specialising
              in bespoke macramé installations, woven textiles, and artisan furniture for hospitality and
              residential projects. These Terms govern your use of <strong>dimare.design</strong> (the &ldquo;Site&rdquo;).
            </p>
            <p className="mt-3">
              By accessing or using the Site, you agree to these Terms. If you do not agree, please
              discontinue use of the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">2. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the Site in any way that violates applicable Turkish or international law or regulation.</li>
              <li>Reproduce, duplicate, copy, or resell any part of our Site content without prior written permission.</li>
              <li>Transmit any unsolicited or unauthorised advertising material.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">3. Products &amp; Services</h2>
            <p>
              The products and services displayed on this Site are provided for informational and enquiry
              purposes only. This Site does not process direct payments — purchases are completed on our
              Etsy store or Shopify store, which operate under their own terms and conditions.
            </p>
            <p className="mt-4">
              All bespoke projects are subject to a separate written agreement between Dimare Design and
              the client, which supersedes any general information on this Site.
            </p>
            <p className="mt-4">
              Pricing, lead times, and availability are subject to change without notice. We will always
              confirm current terms before accepting an order.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">4. Intellectual Property</h2>
            <p>
              All content on this Site — including photographs, illustrations, design work, text, and
              brand assets — is the exclusive intellectual property of Dimare Design or its licensors,
              and is protected by Turkish and international copyright law.
            </p>
            <p className="mt-4">
              You may not copy, reproduce, distribute, or create derivative works from any content on
              this Site without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">5. Enquiry Forms &amp; Communications</h2>
            <p>
              When you submit an enquiry through our contact form, you authorise us to store and process
              the information provided to respond to your request. Submitting an enquiry does not
              constitute a binding contract or guarantee of availability.
            </p>
            <p className="mt-4">
              We aim to respond to all enquiries within 2 business days. Response times during high
              season or trade events may be longer.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">6. Disclaimer of Warranties</h2>
            <p>
              The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties,
              express or implied, regarding the accuracy, completeness, or availability of the Site or
              its content. We reserve the right to modify or discontinue any part of the Site without notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Dimare Design shall not be liable for
              any indirect, incidental, special, or consequential damages arising from your use of, or
              inability to use, the Site or its content.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">8. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites (Etsy, Shopify, Pinterest, Instagram).
              These links are provided for convenience only. Dimare Design has no control over, and
              accepts no responsibility for, the content or practices of third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of
              Turkey. Any disputes arising under these Terms shall be subject to the exclusive
              jurisdiction of the courts of Istanbul, Turkey.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">10. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Material changes will be indicated
              by the updated &ldquo;Last updated&rdquo; date. Continued use of the Site after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-espresso mb-4">11. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at:{' '}
              <a href="mailto:dimaredesignstore@gmail.com" className="text-gold hover:underline">dimaredesignstore@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
