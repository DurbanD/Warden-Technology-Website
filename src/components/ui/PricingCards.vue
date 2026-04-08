<template>
  <div class="pricing-cards">
    <!-- Home Plans -->
    <div v-if="planType === 'home'" class="pricing-grid">
      <div class="pricing-card free">
        <h3>Vigil</h3>
        <div class="price">$0</div>
        <VigilFeatures />
        <button class="cta-button"><a href="#contact" class="soft-outline">Get Started Free</a></button>
      </div>

      <div class="pricing-card">
        <h3>Shield</h3>
        <div class="price-block">
          <div class="price">{{ shieldHomePrice }}</div>
        </div>
        <ShieldFeatures />
        <button class="cta-button"><a href="https://buy.stripe.com/aFafZjeAg4YN3Oz1A6dEs01" class="soft-outline">Subscribe</a></button>
      </div>

      <div class="pricing-card popular">
        <div class="popular-badge">Most Popular</div>
        <h3>Citadel</h3>
        <div class="price-block">
          <div class="price">{{ citadelHomePrice }}</div>
        </div>
        <CitadelFeatures />
        <button class="cta-button"><a href="https://buy.stripe.com/00w3cx3VC2QF84P5QmdEs00" class="soft-outline">Subscribe</a></button>
      </div>

      <div class="pricing-card">
        <h3>Fortress</h3>
        <div class="price-block">
          <div class="price">{{ fortressHomePrice }}</div>
        </div>
        <FortressFeatures />
        <button class="cta-button"><a href="/#contact" class="soft-outline">Contact Us</a></button>
      </div>
    </div>

    <!-- Business Plans -->
    <div v-if="planType === 'business'" class="pricing-grid">
      <div class="pricing-card free">
        <h3>Vigil</h3>
        <div class="price">$0</div>
        <p class="note">Full rates apply (trip + hourly)</p>
        <VigilFeatures />
        <button class="cta-button"><a href="/#contact">Contact Us</a></button>
      </div>

      <div class="pricing-card">
        <h3>Shield</h3>
        <div class="price">{{ shieldBusinessPrice }}</div>
        <p class="note">Per Device (5-device minimum)</p>
        <ShieldFeatures />
        <button class="cta-button"><a href="/#contact">Contact Us</a></button>
      </div>

      <div class="pricing-card popular">
        <div class="popular-badge">Most Popular</div>
        <h3>Citadel</h3>
        <div class="price">{{ citadelBusinessPrice }}</div>
        <p class="note">Per Device (5-device minimum)</p>
        <CitadelFeatures />
        <button class="cta-button"><a href="/#contact">Contact Us</a></button>
      </div>

      <div class="pricing-card">
        <h3>Fortress</h3>
        <div class="price">{{ fortressBusinessPrice }}</div>
        <p class="note">Per Device (5-device minimum)</p>
        <FortressFeatures />
        <button class="cta-button"><a href="/#contact">Contact Us</a></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VigilFeatures from '../ui/VigilFeatures.vue'
import ShieldFeatures from '../ui/ShieldFeatures.vue'
import CitadelFeatures from '../ui/CitadelFeatures.vue'
import FortressFeatures from '../ui/FortressFeatures.vue'
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const config = proxy.$config

defineProps({
  planType: {
    type: String,
    required: true,
    validator: (val) => ['home', 'business'].includes(val)
  }
})

const homePrices = config.homePrices
const businessPrices = config.businessPrices

const shieldHomePrice = `$${homePrices.shield}`
const citadelHomePrice = `$${homePrices.citadel}`
const fortressHomePrice = `$${homePrices.fortress}`

const shieldBusinessPrice = `$${businessPrices.shield}`
const citadelBusinessPrice = `$${businessPrices.citadel}`
const fortressBusinessPrice = `$${businessPrices.fortress}`

</script>

<style scoped>
.pricing-cards {
    width: 100%;
    margin-top: 1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  gap: 2rem;
}


.pricing-card {
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  position: relative;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}

.pricing-card:hover {
  transform: translateY(-10px);
}

.pricing-card.free {
  opacity: 0.9;
}

.popular {
  border: 2px solid var(--primary);
  background: linear-gradient(to bottom, #f0f9ff, white);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #f59e0b;
  color: white;
  font-size: 0.85rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
}

.pricing-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: var(--primary);
}

ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

ul li {
  margin: 0.75rem 0;
  font-size: 1.05rem;
  line-height: 1.5;
}

.cta-button {
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  margin-top: 1rem;
}

.cta-button:hover {
  background: #1e40af;
  transform: scale(1.05);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.cta-button.secondary:hover {
  background: rgba(37,99,235,0.1);
}

.note {
  font-size: 0.95rem;
  color: #666;
  margin-top: 1rem;
}

a {
    color: white;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>