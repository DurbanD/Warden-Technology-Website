<!-- src/components/sections/PricingSection.vue -->
<template>
  <section id="pricing" class="pricing-section">
    <div class="container">
      <h2 class="section-title">Choose Your Protection Level</h2>
      <p class="section-subtitle">
        From watchful observation to unbreakable fortress — all paid plans include first 2 hours free and escalating discounts on trips & hourly rates.
      </p>

      <!-- View Toggle -->
      <div class="view-toggle">
        <button 
          v-if="windowWidth >= widthLimit"
          class="toggle-button"
          @click="viewMode = viewMode === 'cards' ? 'table' : 'cards'"
        >
          {{ viewMode === 'cards' ? 'View Comparison Table' : 'View Cards' }}
        </button>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button 
          :class="{ active: activeTab === 'home' }" 
          @click="activeTab = 'home'"
        >
          Home Protection
        </button>
        <button 
          :class="{ active: activeTab === 'business' }" 
          @click="activeTab = 'business'"
        >
          Business Protection
        </button>
      </div>


      <!-- Render chosen view -->
      <PricingCards 
        v-if="viewMode === 'cards' || windowWidth < widthLimit" 
        :plan-type="activeTab"
      />

      <PricingTable 
        v-else 
        :plan-type="activeTab"
      />

      <p class="disclaimer">
        *Applies only to supported equipment.
      </p>
      <p class="disclaimer">
        Prices are starting rates and billed monthly. Final cost may vary based on devices, add-ons, or custom needs. Contact us for a personalized quote.
      </p>

      <div class="sla-link"><router-link to="/sla">View Service Level Agreement</router-link></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PricingCards from '../ui/PricingCards.vue'
import PricingTable from '../ui/PricingTable.vue'

const activeTab = ref('home')
const viewMode = ref('table')     // default to cards or 'table'
const widthLimit = ref(600)


const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if (windowWidth.value < widthLimit.value) {
    viewMode.value = 'cards'
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.pricing-section {
  padding: var(--section-padding);
  background: var(--gray-light, #f8f9fa);
  text-align: center;
  margin-bottom: var(--section-gap);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
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

.tabs {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  /* margin-bottom: 1rem; */
  background: var(--black-mute);
  border-radius: 5px;
}

.tabs button {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  background: transparent;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  color: white;
}

.tabs button.active {
  background: var(--primary);
  color: white;
}

/* View Toggle Button */
.view-toggle {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 1rem;
  align-self: flex-end;
  padding: 0;
}

.toggle-button {
  padding: 0.25rem 1rem;
  font-size: 1rem;
  background: var(--primary, #2563eb);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid black;
}

.toggle-button:hover {
  background: #1e40af;
  transform: translateY(-2px);
}

.disclaimer {
  margin-top: 1rem;
  font-style: italic;
  color: #666;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
}
</style>