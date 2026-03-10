import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // For now, just one route since it's single-page
    { path: '/', component: () => HomeView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Smooth scroll to the element with matching ID
      return {
        el: to.hash,           // e.g. '#pricing'
        behavior: 'smooth',    // native smooth scrolling (works in all modern browsers)
        top: 80,               // optional offset if you have a fixed header (adjust to your nav height)
      }
    }
    // Default: scroll to top on normal route changes (you probably won't need many yet)
    return { top: 0 }
  },
})

export default router
