<!-- src/components/sections/ServiceAreas.vue -->
<template>
  <section id="service-areas" class="service-areas-section">
    <div class="container">
      <h2 class="section-title">Proudly Serving Central Florida</h2>
      <p class="section-subtitle">
        We provide reliable IT support to homes and small businesses in the following areas:
      </p>

      <div class="areas-grid">
        <div class="area-card">Tavares</div>
        <div class="area-card">Leesburg</div>
        <div class="area-card">Apopka</div>
        <div class="area-card">Clermont</div>
        <div class="area-card">The Villages</div>
        <div class="area-card">Mount Dora</div>
        <div class="area-card">Eustis</div>
        <div class="area-card">Groveland</div>
        <div class="area-card">Minneola</div>
        <div class="area-card">Central Florida</div>
      </div>

      <p class="service-note">
        If you don't see your city listed but you're in the greater Central Florida area, 
        feel free to reach out — we're happy to discuss how we can help.
      </p>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.service-areas-section {
  padding: var(--section-padding);
  margin-bottom: var(--section-gap);
  background: white;
  text-align: center;
  border-radius: var(--section-border-radius);
}

.section-title {
  font-size: 2.6rem;
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.section-subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: #555;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  max-width: 1000px;
  margin: 0 auto 3rem;
}

.area-card {
  background: var(--gray-light, #f8f9fa);
  padding: 1.4rem 1rem;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.area-card:hover {
  transform: translateY(-4px);
}

.service-note {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
</style>