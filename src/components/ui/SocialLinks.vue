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
        <img :alt="link.icon" class="social-icon" :src="link.iconPath" :width=iconWidth :height=iconHeight />
    </a>
  </div>
</template>

<script setup>
import facebookSvg from '../icons/facebook.svg'
import instagramSvg from '../icons/instagram.svg'
import xSvg from '../icons/twitter-x.svg'
import tiktokSvg from '../icons/tiktok.svg'
import linkedinSvg from '../icons/linkedin.svg'

const iconWidth = '20'
const iconHeight = '20'
// All your social links in one central place — easy to edit/add/remove
const socialLinks = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61572075384001', // ← replace with real URL
    icon: 'FB',
    iconPath: facebookSvg
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/warden.technology/',
    icon: 'IG',
    iconPath: instagramSvg
  },
  {
    platform: 'X', // formerly Twitter
    url: 'https://x.com/WardenTechFL', // or your business handle
    icon: 'X',
    iconPath: xSvg
  },
  // {
  //   platform: 'TikTok',
  //   url: 'https://tiktok.com/@',
  //   icon: 'TT',
  //   iconPath: tiktokSvg
  // },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/warden-technology',
    icon: 'LI',
    iconPath: linkedinSvg
  },
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
  gap: 1.75rem;          /* space between icons */
  justify-content: center;
  flex-wrap: wrap;
  padding: 2px;
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
  padding: 2px;
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

.social-icon[href*="facebook.com"]:hover   { background-color: #1877f2; color: white; }
.social-icon[href*="instagram.com"]:hover { background: linear-gradient(45deg, #f56040, #c13584, #833ab4, #5851db); color: white; }
.social-icon[href*="x.com"]:hover         { background-color: #000000; color: white; }
.social-icon[href*="tiktok.com"]:hover    { background-color: #000000; color: white; }
</style>