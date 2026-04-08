<!-- src/views/TermsPage.vue -->
<template>
  <div class="legal-page">
    <div class="container">
      <h1 class="page-title">Terms of Service</h1>
      <p class="last-updated">Last Updated: April 2026</p>

      <div class="legal-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By engaging Warden Technology for IT support, networking, or cybersecurity services, you agree to these Terms of Service. 
            Please read them carefully.
          </p>
        </section>

        <section>
          <h2>2. Our Service Agreement</h2>
          <p>
            Our services are also governed by our <router-link to="/sla">Service Level Agreement (SLA)</router-link>. 
            By using our services, you acknowledge that you have read, understood, and agree to both these Terms of Service 
            and the SLA. In case of any conflict, the SLA takes precedence regarding service delivery and performance.
          </p>
        </section>

        <section>
          <h2>3. Services and Scope</h2>
          <p>
            Warden Technology provides IT support, troubleshooting, networking, server setup, security camera installation, 
            cybersecurity services, and related consulting for residential clients and small businesses in the Orlando and 
            Central Florida area.
          </p>
          <p>
            We reserve the right to decline any work that falls outside our expertise or that we believe poses an unreasonable risk.
          </p>
        </section>

        <section>
          <h2>4. Payment Terms</h2>
          <p>
            All recurring plans are billed monthly. One-off projects, equipment, and materials are billed separately. 
            Payment is due upon receipt unless otherwise agreed.
          </p>
          <p>
            Late payments may result in suspension of services. We reserve the right to charge reasonable late fees.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            Warden Technology is not liable for any indirect, incidental, consequential, or punitive damages arising from 
            our services, including but not limited to data loss, business interruption, or loss of profits.
          </p>
          <p>
            Our total liability shall not exceed the amount paid by you for the services in the past 12 months.
          </p>
        </section>

        <section>
          <h2>6. Warranty Disclaimer</h2>
          <p>
            We provide our services "as is" and make no warranties, express or implied, regarding the results of our work. 
            While we strive for high quality, we cannot guarantee that all issues will be resolved or that systems will be 
            completely secure from all threats.
          </p>
        </section>

        <section>
          <h2>7. Cancellation</h2>
          <p>
            All monthly plans are month-to-month. You may cancel or downgrade your plan at any time. 
            Cancellation takes effect at the end of the current billing period.
          </p>
        </section>

        <section>
          <h2>8. One-off Projects</h2>
          <p>
            We are happy to perform one-off projects (installs, server setups, camera systems, equipment sales, etc.) 
            without requiring an ongoing membership. These are billed separately at our standard rates.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Florida. Any disputes will be resolved in Orange County, Florida.
          </p>
        </section>

        <section>
          <h2>10. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services after changes are made 
            constitutes acceptance of the new terms.
          </p>
        </section>
      </div>

      <div class="back-link">
        <router-link to="/">← Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static page
</script>

<style scoped>
.legal-page {
  padding: 6rem 1rem 4rem;
  background: var(--gray-light, #f8f9fa);
  line-height: 1.7;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: var(--primary, #2563eb);
  text-align: center;
}

.last-updated {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}

.legal-content section {
  margin-bottom: 3rem;
}

.legal-content h2 {
  font-size: 1.55rem;
  margin-bottom: 1rem;
  color: #333;
}

.back-link {
  text-align: center;
  margin-top: 4rem;
}

.back-link a {
  color: var(--primary);
  text-decoration: none;
}

.back-link a:hover {
  text-decoration: underline;
}
</style>