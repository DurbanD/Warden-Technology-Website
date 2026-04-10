<!-- src/components/sections/WhySection.vue -->
<template>
  <section id="why" class="why-section">
    <div class="container">
      <h2 class="section-title">Why Choose WardenTech?</h2>
      <p class="section-subtitle">
        Local, honest IT support built for homes and small businesses in Central Florida — no corporate red tape.
      </p>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="icon">🏠</div> <!-- replace with SVG/icon later -->
          <h3>Truly Local</h3>
          <p>Proudly serving Clermont, Leesburg, Tavares, The Villages, Apopka and surrounding areas. We get local networks and we actually live here.</p>
        </div>

        <div class="benefit-card">
          <div class="icon">🛠️</div>
          <h3>Experienced & Certified</h3>
          <p>Years of real-world IT + current certifications. From quick fixes to full network/server design and installs — we’ve got you.</p>
        </div>

        <div class="benefit-card">
          <div class="icon">💰</div>
          <h3>Transparent Membership Pricing</h3>
          <p>Plans with 24/7 monitoring, remote support, priority response, and discounts that can drop fees to $0. No hidden costs.</p>
        </div>

        <div class="benefit-card">
          <div class="icon">😊</div>
          <h3>Friendly, No-Nonsense Service</h3>
          <p>We talk like people, not robots. Fast remote help when it makes sense, honest advice when it doesn’t — and zero pushy sales.</p>
        </div>
      </div>

      <div class="cta-bottom">
        <button class="cta-button" @click="scrollTo('#pricing')">
          See Membership Plans
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.why-section {
    padding: var(--section-padding);
    background: var(--gray-light, #f8f9fa);
    text-align: center;
    margin-bottom: var(--section-gap);
    border: 1px solid var(--white-soft);
    border-radius: var(--section-border-radius);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.section-subtitle {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #555;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35%, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: white;
  padding: 1rem 0.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.icon {
  font-size: var(--icon-size);
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.benefit-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.benefit-card p {
  color: #666;
  line-height: 1.6;
}

.cta-bottom {
  margin-top: 4rem;
}

.cta-button {
  background: var(--primary, #2563eb);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button:hover {
  background: #1e40af;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .section-subtitle { font-size: 1.15rem; }
  .benefits-grid {grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));}
}
</style>