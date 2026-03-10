<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/Layout/AppHeader.vue'
import AppFooter from './components/Layout/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
    <!-- <img alt="logo" class="logo" src="@/assets/WT Logo White.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <ComingSoon msg="Coming Soon..." /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav> -->
    </div>
  <AppFooter />
</template>

<style scoped>

</style>
