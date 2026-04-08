<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/Layout/AppHeader.vue'
import AppFooter from './components/Layout/AppFooter.vue'
import BackToTop from './components/ui/BackToTop.vue'
// import HeroSection from './components/Sections/HeroSection.vue';
// import WhySection from './components/Sections/WhySection.vue';
// import ServicesSection from './components/Sections/ServicesSection.vue';
// import PricingSection from './components/Sections/PricingSection.vue';
// import FAQSection from './components/Sections/FAQSection.vue';
// import ContactSection from './components/Sections/ContactSection.vue';
</script>

<template>
  <div class="page-wrapper"> 
    <AppHeader />
    
    <main class="main-content">
      <RouterView />
      <!-- <HeroSection />
      <WhySection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection /> -->
    </main>
    
    <BackToTop />
    <AppFooter />
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
  padding-top: calc(var(--header-height) + var(--header-gap));  /* 2rem = 32px gap – adjust */
}
</style>
