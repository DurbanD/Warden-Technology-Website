<!-- src/views/SlaPage.vue -->
<template>
  <div class="sla-page">
    <div class="container">
      <h1 class="page-title">Service Level Agreement (SLA)</h1>
      <p class="intro">
        At Warden Technology, we believe in clear expectations. This agreement outlines how we work together 
        so you know exactly what to expect from each tier.
      </p>

      <div class="sla-content">
        <!-- Business Hours -->
        <div class="sla-section">
          <h2>Normal Business Hours</h2>
          <p>Monday – Friday, 9:00 AM – 6:00 PM Eastern Time</p>
        </div>

        <!-- Response Times -->
        <div class="sla-section">
          <h2>Response Time Commitments</h2>
          <div class="response-grid">
            <div class="tier-response">
              <h3>Shield</h3>
              <p>Initial response within 4 business hours</p>
            </div>
            <div class="tier-response">
              <h3>Citadel</h3>
              <p>Initial response within 2 business hours (priority)</p>
            </div>
            <div class="tier-response">
              <h3>Fortress</h3>
              <p>Initial response within 1 business hour (highest priority)</p>
            </div>
          </div>
        </div>

        <!-- After-Hours -->
        <div class="sla-section">
          <h2>Emergency / After-Hours Support</h2>
          <p>
            Fortress clients receive guaranteed 24/7 response, including nights, weekends, and holidays 
            for truly urgent issues. All other tiers are best-effort only outside normal business hours.
          </p>
          <p class="note">
            If we are able to assist outside normal hours on non-Fortress plans, the rate will be 50% higher 
            than our standard rates.
          </p>
        </div>

        <!-- On-site Visits -->
        <div class="sla-section">
          <h2>On-site Visit Fees</h2>
          <p>
            All on-site visits are billed at $249 for the first hour (includes travel and initial assessment) 
            and $124 per hour thereafter. Discounts are applied to labor only as shown in the pricing table.
          </p>
          <p class="note">
            Discounts do not apply to equipment, materials, or third-party costs.
          </p>
        </div>

        <!-- Remote Support -->
        <div class="sla-section">
          <h2>Remote Support & Onboarding</h2>
          <p>
            Citadel and Fortress include unlimited full remote support (screen sharing + remote control) 
            once secure remote access is set up. Most clients are fully onboarded within 1–2 business days.
          </p>
        </div>

        <!-- One-off Projects -->
        <div class="sla-section">
          <h2>One-off Projects & Installs</h2>
          <p>
            We welcome one-off projects such as network installs, server setup, security camera systems, 
            and equipment sales with no ongoing commitment required.
          </p>
        </div>

        <!-- Cancellation -->
        <div class="sla-section">
          <h2>Cancellation Policy</h2>
          <p>
            All paid plans are month-to-month. You can cancel or downgrade at any time with no penalties. 
            Your plan will automatically revert to the free Vigil tier upon cancellation.
          </p>
        </div>

        <!-- Scope -->
        <div class="sla-section">
          <h2>Scope of Services</h2>
          <p>
            We provide IT support, networking, and cybersecurity services for residential clients and small 
            businesses in the Orlando / Central Florida area. We reserve the right to decline work that falls 
            significantly outside our expertise or poses unreasonable risk.
          </p>
        </div>
      </div>

      <div class="back-to-pricing">
        <router-link to="/#pricing" class="back-link">
          ← Back to Pricing
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
.sla-page {
  padding: 6rem 1rem 4rem;
  background: var(--gray-light, #f8f9fa);
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: var(--primary, #2563eb);
  text-align: center;
}

.intro {
  font-size: 1.25rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  color: #555;
}

.sla-section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
}

.sla-section h2 {
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
  color: #333;
}

.response-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.tier-response {
  background: #f8f9fa;
  padding: 1.25rem;
  border-radius: 8px;
}

.tier-response h3 {
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.note {
  font-size: 0.95rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
}

.back-to-pricing {
  text-align: center;
  margin-top: 3rem;
}

.back-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
}
</style>