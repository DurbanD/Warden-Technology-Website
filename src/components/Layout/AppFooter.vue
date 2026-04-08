<!-- src/components/layout/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        
        
        <div class="ft-contact-wrapper">
            <div class="ft-contact">
                <div class="ft-phoneContact">
                    <a :href="`tel:${$config.phoneNumber}`">Call Us: </a>
                    <span class='ft-contact-text'> {{$config.phoneNumberFormatted}}</span>
                </div>
                <span class="separator"> | </span>
                <div class="ft-emailContact">
                    <a href="mailto:support@wardentechnology.com">Email: </a>
                    <span class='ft-contact-text'> {{$config.email}}</span>
                </div>
                <span class="separator"> | </span>
                <SocialLinks />
            </div>
            <!-- <SocialLinks /> -->
        </div>
        <!-- Left: Copyright -->
          <div class="copyright">
              <span>© {{ currentYear }} Warden Technology. All rights reserved.</span>
              <!-- <span class="separator"> | </span> -->
              <span>Orlando, Florida</span>
          </div>
          <div class="legal">
            <span><router-link to="/terms" id="footer-tos">Terms of Service</router-link></span>
            <span><router-link to="/sla" id="footer-sla">Service Level Agreement</router-link></span>
            <span><router-link to="/privacy" id="footer-privacy">Privacy Policy</router-link></span>
          </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import SocialLinks from '../ui/SocialLinks.vue'

const contactNumber = " (407) 555 - 1234",
    contactEmail = "support@wardentechnology.com"

// Auto-update year (no need to hardcode)
const currentYear = computed(() => new Date().getFullYear())

</script>

<style scoped>
.footer {
  background-color: var(--white-soft); /* light gray background */
  border-top: 1px solid #e9ecef;
  padding: 1rem 0;
  margin: 4rem 0 0 0; /* space from last section */
  font-size: 0.95rem;
  color: #6c757d; /* muted gray text */
  border-radius: 10px;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  /* border: 4px solid red; */
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  /* border: 4px solid red; */
}

.ft-contact-wrapper {
    width: 100%;
    /* border: 3px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0 0 0;
    /* border: 4px solid red; */
}

.ft-contact {
    display:flex;
    align-content: space-between;
    align-items: space-between;
    justify-content: space-between;
    width: 100%;
}

/* @media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
} */

.copyright, .legal {
    text-align: center;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* border: 4px solid red;     */
}

.separator {
  margin: 0 0.75rem;
  opacity: 0.6;
}

</style>