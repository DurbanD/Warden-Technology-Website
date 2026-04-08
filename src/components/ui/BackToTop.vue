<!-- src/components/ui/BackToTop.vue -->
<template>
  <button 
    v-if="showButton"
    class="back-to-top-floating"
    @click="scrollToTop"
    aria-label="Return to top of page"
    title="Return to top"
  >
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const scrollThreshold = 30  // pixels scrolled before showing button

const handleScroll = () => {
  showButton.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check in case page loads scrolled
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

.back-to-top-floating {
  position: fixed;
  top: 65px;
  right: 30px;
  z-index: 1000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--blue-font-1);        /* blue-600 – your brand color */
  color: white;
  font-size: 1.5rem;
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top-floating:hover {
  opacity: 1;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.back-to-top-floating:active {
  transform: translateY(0);
}

/* Optional: hide on very small screens if desired */
/* @media (max-width: 480px) {
  .back-to-top-floating {
    width: 44px;
    height: 44px;
    font-size: 1.3rem;
    bottom: 20px;
    right: 20px;
  }
} */
</style>