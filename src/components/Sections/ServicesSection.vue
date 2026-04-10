<!-- src/components/sections/ServicesSection.vue -->
<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">What We Do</h2>
      <p class="section-subtitle">
        Practical IT support for homes and small businesses in Central Florida — from quick remote fixes to full network builds.
      </p>

      <div class="services-grid">
        <div class="service-card">
            <div class="service-header">
                <div class="icon">🖥️</div>
                <h3>Remote Monitoring & Support</h3>
            </div>
          <p>24/7 proactive monitoring, remote troubleshooting, and instant fixes for members — keep things running without waiting.</p>
        </div>

        <div class="service-card">
            <div class="service-header">
                <div class="icon">🔧</div>
                <h3>On-Site IT Support</h3>
            </div>
          <p>Hands-on help when needed: troubleshooting, repairs, setups, and urgent visits — available to everyone.</p>
        </div>

        <div class="service-card">
            <div class="service-header">
                <div class="icon">🌐</div>
                <h3>Network Design & Installation</h3>
            </div>
          <p>Secure Wi-Fi, wired networks, router/switch setups, and optimization for homes and small offices.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <div class="icon">🖨️</div>
            <h3>Server Management & Setup</h3>
          </div>
          <p>
            Server installs, configuration, maintenance, virtualization, and reliable backup 
            & disaster recovery solutions for small business environments.
          </p>
        </div>

        <div class="service-card">
            <div class="service-header">
                <div class="icon">📹</div>
                <h3>Security Cameras & Smart Systems</h3>
            </div>
          <p>IP camera installs, NVR setup, access control, and basic smart home/security integration.</p>
        </div>

        <div class="service-card">
          <div class="service-header">
            <div class="icon">🛡️</div>
            <h3>Cybersecurity & Protection</h3>
          </div>
          <p>
            Firewall setup, antivirus, malware protection, email security, threat prevention, 
            and secure automated backups to keep your data safe from loss or ransomware.
          </p>
        </div>

        <div class="service-card">
            <div class="service-header">
                <div class="icon">💡</div>
                <h3>IT Consulting & Planning</h3>
            </div>
          <p>Audits, recommendations, roadmaps, and budget-friendly advice for upgrades or growth.</p>
        </div>
        <div class="service-card">
          <div class="service-header">
            <div class="icon">💻</div>
            <h3>Website Design & Development</h3>
          </div>
          <p>
            Professional, modern websites tailored for small businesses and homes. 
            From simple informational sites to custom designs with booking systems, e-commerce, or client portals.
          </p>
        </div>
        <!-- <div class="service-card">
            <div class="service-header">
                <div class="icon">📦</div>
                <h3>Backup & Disaster Recovery</h3>
            </div>
          <p>Automated backups (local/cloud), recovery planning, and fast restores when data is at risk.</p>
        </div> -->
      </div>

      <div class="cta-bottom">
        <button class="cta-button" @click="scrollTo('#contact')">
          Contact Us
        </button>
        <button class="secondary-button" @click="scrollTo('#pricing')">
          Explore Membership Plans
        </button>
      </div>
      <router-link class="service-area-link" to="#service-areas">See all the areas we serve →</router-link>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.services-section {
  padding: var(--section-padding);
  background: white;
  text-align: center;
  margin-bottom: var(--section-gap);
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--gray-light, #f8f9fa);
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid var(--card-border-dark-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;                    /* space between icon and title */
  margin-bottom: 1.25rem;
}

/* Default: mobile/narrow → row layout */
.service-header {
  flex-direction: row;
}

.icon {
  font-size: var(--icon-size);
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.cta-bottom {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.cta-button, .secondary-button {
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
}

.cta-button {
  background: var(--primary, #2563eb);
  color: white;
  border: none;
}

.cta-button:hover {
  background: #1e40af;
  transform: scale(1.05);
}

.secondary-button {
  background: transparent;
  border: 2px solid var(--primary, #2563eb);
  color: var(--primary, #2563eb);
}

.secondary-button:hover {
  background: rgba(37, 99, 235, 0.1);
  transform: scale(1.05);
}


@media (max-width: 968px) {
  .section-title { font-size: 2.2rem; }
  .section-subtitle { font-size: 1.15rem; }
  .services-grid {
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  gap: 1rem;
  }
  .service-card {
    padding: 0.5rem;
  }
  .service-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* text-align: left; */
  }
  /* .service-card h3 {
    font-size: 1.35rem;
    margin: 0;
  } */
  
}
@media (min-width: 968px) {
  .section-title { font-size: 2.2rem; }
  .section-subtitle { font-size: 1.15rem; }
  .services-grid {
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 1rem;
  }
  .service-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>