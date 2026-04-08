<!-- src/views/PrivacyPage.vue -->
<template>
  <div class="legal-page">
    <div class="container">
      <h1 class="page-title">Privacy Policy</h1>
      <p class="last-updated">Last Updated: April 2026</p>

      <div class="legal-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Warden Technology respects your privacy. This Privacy Policy explains how we collect, use, and protect your information 
            when you engage our IT support, networking, or cybersecurity services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
            <li><strong>Technical Information:</strong> Device details, network configuration, software versions, and diagnostic data needed to provide support.</li>
            <li><strong>Account Information:</strong> Subscription tier, billing information, and service history (if you have a paid plan).</li>
            <li><strong>Communication Records:</strong> Notes from calls, emails, and support tickets.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and deliver our IT support services</li>
            <li>Communicate with you about your devices and service requests</li>
            <li>Bill you for services and process payments</li>
            <li>Improve our services and troubleshoot issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share information only in these limited situations:
          </p>
          <ul>
            <li>With trusted service providers (e.g., our monitoring platforms like N-Able or SentinelOne) strictly necessary to deliver the service</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your information. However, no system is completely secure, 
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your personal information. 
            Contact us at support@wardentechnology.com if you would like to exercise these rights.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Warden Technology<br>
            support@wardentechnology.com<br>
            Orlando, Florida
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
// No script needed
</script>

<style scoped>
/* Reuse the same styles as your SLA / Terms page for consistency */
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