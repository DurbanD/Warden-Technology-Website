import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // For now, just one route since it's single-page
    { path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue') 
    },
    {
      path: '/sla',
      name: 'Sla',
      component: () => import('@/views/SlaPage.vue'),           // The dedicated SLA page
    },
    {
      path: '/terms',
      name: 'Terms',
      component: () => import('@/views/TermsPage.vue')
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('@/views/PrivacyPage.vue')
    },
    {
      path: '/contact-success',
      name: 'ContactSuccess',
      component: () => import('@/views/ContactSuccess.vue')
    }
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
