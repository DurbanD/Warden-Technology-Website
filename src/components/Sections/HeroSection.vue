<!-- src/components/sections/HeroSection.vue -->
<template>
    <section id="hero" class="hero">
        <img 
            :src=bannerBG
            alt="Orlando background" 
            class="hero-bg-image"
            />
        <div class="hero-overlay"></div>
    <!-- <div class="hero-bg"></div> or <img> if not using CSS bg -->

        <div class="hero-content">
            <img
            src="../../assets/WT Logo White.svg"
            alt="WT-Logo"
            class="hero-logo"
            />
            <div class="brand-name-wrapper">
                <h1 class="brand-name">Warden Technology</h1>
            </div>
            <div class="headline-wrapper">
                <p class="headline">Reliable, Friendly IT Support for Homes & Small Businesses</p>
            
                <p class="subheadline">
                    Fast response • Transparent pricing • No corporate nonsense
                </p>
            </div>
            <div class="cta-group">
                <button class="primary-cta" @click="scrollTo('#contact')">
                Contact Us
                </button>
                <button class="secondary-cta" @click="scrollTo('#pricing')">
                View Plans
                </button>
            </div>

            <div class="trust-badges">
            </div>

            <div class="hero-locations">
                <div class="location-headline">
                    <span>Proudly Serving:</span>
                </div>
                
                <div class="location-badges">
                    <span class="location-badge">Leesburg</span>
                    <span class="location-badge">Tavares</span>
                    <span class="location-badge">The Villages</span>
                    <span class="location-badge">Apopka</span>
                    <span class="location-badge">Clermont</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import bannerBG from '../../assets/bannerbg1.jpg'

const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>

.hero {
  position: relative;
  height: auto;
  /* min-height: 60vh; */
  display: flex;
  flex-flow: column;
  align-items: center; 
  justify-content: space-between;
  text-align: center;
  color: white;                    /* Base text color for the whole section */
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 5px;
  margin-bottom: var(--section-gap);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.hero-logo {
    margin: 1rem auto;
}

.hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);  /* adjustable darkness */
  z-index: -1;
}

.hero-content {
  max-width: 900px;
  padding: 1.75rem;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  /* border: 5px solid pink; */
  height: 100%;
}

.brand-name {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);  /* Helps text pop on busy bg */
}

.headline {
  font-size: 2rem;
  margin: 1.5rem 0;
}

.subheadline {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
}

/* Buttons – keep them high-contrast */
.primary-cta {
  background: var(--primary, #2563eb);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3); /* Button shadow for depth */
}

.primary-cta:hover {
  transform: scale(1.05);
}

.secondary-cta {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7); /* Light shadow on secondary text */
}

.secondary-cta:hover {
  transform: scale(1.05);
  background: rgba(25, 100, 255, 0.35)
}

.hero-locations {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
}

.location-headline {
    font-size: 1.1rem;
    opacity: 0.9;
  /* border: 3px solid pink; */
    width: 100%;
}

.location-badges {
  display: flex;
  flex-wrap: wrap;
  /* align-content: space-between; */
  /* align-items: stretch;
  align-content: space-between;
  justify-content: space-between; */
  gap: 1.5rem;
  justify-content: space-between;
  font-size: 1.1rem;
  opacity: 0.9;
  /* border: 3px solid pink; */
  width: 100%;
}

/* .hero-trust-badge {
    border: 3px solid green;
} */

.brand-name,
.headline,
.subheadline,
.trust-badges span,
.location-badges span {
  color: white;
  text-shadow: 
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000,
    0 0 8px rgba(0,0,0,0.6);   /* Soft outer glow for extra pop */
}

/* .subheadline,
.trust-badges span {
  text-shadow: 
    -1.5px -1.5px 0 #000,
    1.5px -1.5px 0 #000,
    -1.5px 1.5px 0 #000,
    1.5px 1.5px 0 #000,
    0 0 6px rgba(0,0,0,0.5);
} */

@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
  .brand-name { font-size: 3.2rem; }
  .headline { font-size: 2rem; }
  .subheadline { font-size: 1.2rem; }
}
</style>