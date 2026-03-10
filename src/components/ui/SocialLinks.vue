<template>
  <div class="social-links">
    <a 
      v-for="link in socialLinks" 
      :key="link.platform" 
      :href="link.url" 
      :aria-label="`Follow us on ${link.platform}`"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
    >
      <!-- Using simple text icons for now; swap with SVG/font-awesome later -->
      {{ link.icon }}
    </a>
  </div>
</template>

<script setup>
// All your social links in one central place — easy to edit/add/remove
const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/', // ← replace with real URL
    icon: 'FB'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/',
    icon: 'IG'
  },
  {
    platform: 'X', // formerly Twitter
    url: 'https://x.com/', // or your business handle
    icon: 'X'
  },
  {
    platform: 'TikTok',
    url: 'https://tiktok.com/@',
    icon: 'TT'
  },
  // Add more as needed, e.g.:
  // {
  //   platform: 'LinkedIn',
  //   url: 'https://linkedin.com/company/wardentechnology',
  //   icon: 'LI'
  // },
  // {
  //   platform: 'YouTube',
  //   url: 'https://youtube.com/@wardentechnology',
  //   icon: 'YT'
  // }
]
</script>

<style module>
.social-links {
  display: flex;
  gap: 1.25rem;          /* space between icons */
  justify-content: center;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9ecef;     /* light gray background */
  color: #495057;                /* dark gray text/icon */
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-icon:hover,
.social-icon:focus {
  background-color: #adb5bd;
  color: #212529;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.social-icon:active {
  transform: translateY(0);
}
</style>