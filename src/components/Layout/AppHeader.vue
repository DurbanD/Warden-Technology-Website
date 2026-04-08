<template>
  <header class="header">
    <div class="container">
      <!-- Logo / Home link -->
      <router-link to="/" class="logo">
        <img alt="logo" class="logo" src="@/assets/WT Logo Black.svg" width="35" height="35" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <router-link to="/#hero" class="nav-link">Home</router-link>
        <router-link to="/#why" class="nav-link">Why WardenTech</router-link>
        <router-link to="/#services" class="nav-link">Services</router-link>
        <router-link to="/#pricing" class="nav-link">Pricing</router-link>
        <router-link to="/#faq" class="nav-link">FAQ</router-link>
        <router-link to="/#contact" class="nav-link">Contact</router-link>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button 
        class="hamburger" 
        @click="isOpen = !isOpen"
        aria-label="Toggle mobile menu"
      >
        {{ isOpen ? '✕' : '☰' }}
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <nav v-if="isOpen" class="nav-mobile">
        <div class="mobile-links">
          <router-link to="#hero" class="mobile-link" @click="isOpen = false">Home</router-link>
          <router-link to="#why" class="mobile-link" @click="isOpen = false">Why WardenTech</router-link>
          <router-link to="#services" class="mobile-link" @click="isOpen = false">Services</router-link>
          <router-link to="#pricing" class="mobile-link" @click="isOpen = false">Pricing</router-link>
          <router-link to="#faq" class="mobile-link" @click="isOpen = false">FAQ</router-link>
          <router-link to="#contact" class="mobile-link" @click="isOpen = false">Contact</router-link>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: var(--white-soft);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: var(--header-height);
  border-bottom: 2px solid black;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  /* border: 3px solid pink; */
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 4px;
  border-radius: 20px;
}

.logo:hover {
  background: rgba(45, 178, 255, 0.2);          /* darker blue */
}

.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    /* border: 3px solid blue; */
    height: 100%;
  }
}

.nav-link {
  color: #374151;          /* gray-700 */
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 100%;
  /* border: 3px solid green; */
}

.nav-link:hover {
  color: #2563eb;          /* blue-600 */
  background: rgba(45, 178, 255, 0.20);
  border-radius: 10px;
}

.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0;
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

/* Mobile Menu */
.nav-mobile {
  background-color: white;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.mobile-links {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-link {
  font-size: 1.125rem;
  color: #1f2937;          /* gray-800 */
  text-decoration: none;
  font-weight: 500;
}

.mobile-link:hover {
  color: #2563eb;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>