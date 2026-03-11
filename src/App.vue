<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/Layout/AppHeader.vue'
import AppFooter from './components/Layout/AppFooter.vue'
import BackToTop from './components/ui/BackToTop.vue'
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <div class="main-content">
      <RouterView />
    </div>
    <BackToTop />
    <AppFooter />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;           /* Full viewport height minimum */
}

.main-content {
  flex: 1 0 auto;              /* Grow to fill available space, don't shrink */
}

/* Optional: Add some breathing room if needed */
/* .main-content {
  padding: 80px 0 40px;
} 
*/
</style>
