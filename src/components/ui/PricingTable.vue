<template>
    <div class="pricing-comparison">
        <table>
            <thead>
                <tr>
                    <th class="feature-column"></th>
                    
                    <th class="tier-header">
                        <span class="tier-name">Vigil</span>
                    </th>
                    
                    <th class="tier-header">
                        <span class="tier-name">Shield</span>
                    </th>
                    
                    <th class="tier-header popular-column">
                        <span class="popular-badge">Most Popular</span>
                        <span class="tier-name">Citadel</span>
                    </th>
                    
                    <th class="tier-header">
                        <span class="tier-name">Fortress</span>
                    </th>
                </tr>
</thead>
            <tbody>
            <tr v-if="planType === 'home'">
                <td class="feature-label">Monthly Price</td>
                <td>$0</td>
                <td>${{ config.homePrices.shield }}</td>
                <td>${{ config.homePrices.citadel }}</td>
                <td>${{ config.homePrices.fortress }}</td>
            </tr>
            <tr v-if="planType === 'business'">
                <td class="feature-label">Monthly Price Per Device</td>
                <td>$0</td>
                <td>${{ config.businessPrices.shield }}/device</td>
                <td>${{ config.businessPrices.citadel }}/device</td>
                <td>${{ config.businessPrices.fortress }}/device</td>
            </tr>
            <tr>
                <td class="feature-label">Projects & Installs</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">Phone, Email & Text Support</td>
                <td class="no">—</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">Remote Support</td>
                <td class="no">—</td>
                <td class="no">—</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">24/7 Proactive Monitoring</td>
                <td class="no">—</td>
                <td class="no">—</td>
                <td class="yes">✓</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">Automated Backups</td>
                <td class="no">—</td>
                <td class="no">—</td>
                <td class="no">—</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">Emergency / After-Hours Support</td>
                <td class="no">—</td>
                <td class="no">—</td>
                <td class="limited">—</td>
                <td class="yes">✓</td>
            </tr>
            <tr>
                <td class="feature-label">Labor Discount</td>
                <td class="limited">20%</td>
                <td class="yes">20%</td>
                <td class="yes">30%</td>
                <td class="yes">FREE*</td>
            </tr>
            <tr>
                <td class="feature-label">Getting Started</td>
                <td class="no"><router-link to="#contact" class="contact-link">Contact Us</router-link></td>
                <td class="yes">
                    <a v-if="planType === 'home'" href="https://buy.stripe.com/aFafZjeAg4YN3Oz1A6dEs01" class="subscribe-link">Subscribe</a>
                    <router-link v-if="planType === 'business'" to="#contact" class="contact-link">Contact Us</router-link>
                </td>
                <td class="yes">
                    <a v-if="planType === 'home'" href="https://buy.stripe.com/00w3cx3VC2QF84P5QmdEs00" class="subscribe-link">Subscribe</a>
                    <router-link v-if="planType === 'business'" to="#contact" class="contact-link">Contact Us</router-link>
                </td>
                <td class="yes">
                    <router-link to="#contact" class="contact-link">Contact Us</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.pricing-comparison {
    width: 100%;
}
.pricing-comparison table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

.pricing-comparison th,
.pricing-comparison td {
  padding: 1.25rem 1rem;
  text-align: center;
  border-bottom: 1px solid #f1f1f1;
}

.pricing-comparison .feature-column {
  text-align: left;
  font-weight: 600;
  background: #f8f9fa;
  width: 38%;
}

.pricing-comparison th {
  background: #f8f9fa;
  font-weight: 700;
  color: #333;
}

.pricing-comparison .tier-subtitle {
  font-size: 0.9rem;
  font-weight: normal;
  color: #666;
  display: block;
  margin-top: 4px;
}

.pricing-comparison .popular-badge {
  background: #f59e0b;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
  display: inline-block;
  margin-top: 6px;
}

.pricing-comparison .yes {
  color: #10b981;
  font-weight: 600;
}

.pricing-comparison .no {
  color: #9ca3af;
}

.pricing-comparison .limited {
  color: #f59e0b;
  font-size: 0.95rem;
}

.pricing-comparison tr:last-child td {
  border-bottom: none;
}

/* Tier Headers */
.tier-header {
  vertical-align: top;
  padding-top: 1.25rem;
  position: relative;
  min-height: 110px;           /* Ensures all columns have same height */
}

.tier-name {
  display: block;
  font-weight: 700;
  font-size: 1.35rem;
  color: #333;
  margin-bottom: 0.25rem;
}

.tier-subtitle {
  font-size: 0.9rem;
  font-weight: normal;
  color: #666;
  display: block;
}

/* Popular column styling */
.popular-column {
  background: linear-gradient(to bottom, #f0f9ff, #f8f9fa) !important;
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #f59e0b;
  color: white;
  font-size: 0.82rem;
  padding: 0.25rem 0.85rem;
  border-radius: 999px;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

/* Make sure feature column stays left-aligned and clean */
.feature-column {
  text-align: left;
  font-weight: 600;
  background: #f8f9fa;
  width: 38%;
  padding-left: 1.5rem;
}

.subscribe-link, .contact-link {
    border: 1px solid black;
    border-radius: 99999px;
    background: #f59e0b;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
}

.subscribe-link:hover, .contact-link:hover {
    transform: scale(1.05);
}
</style>

<script setup>
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
</script>