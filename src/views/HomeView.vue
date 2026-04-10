<script setup>
import HeroSection from '../components/Sections/HeroSection.vue';
import WhySection from '../components/Sections/WhySection.vue';
import ServicesSection from '../components/Sections/ServicesSection.vue';
import PricingSection from '../components/Sections/PricingSection.vue';
import FAQSection from '../components/Sections/FAQSection.vue';
import ContactSection from '../components/Sections/ContactSection.vue';
import ServiceAreas from '../components/Sections/ServiceAreas.vue';
</script>

<template>
  <div class="page-wrapper"> 
    
    <main class="main-content">
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <ServiceAreas />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
    
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  /* padding-top: calc(var(--header-height) + var(--header-gap)); */
}
</style>
