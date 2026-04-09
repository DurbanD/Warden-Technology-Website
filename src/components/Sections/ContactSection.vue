<!-- src/components/sections/ContactSection.vue -->
<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Get Help Today</h2>
      <p class="section-subtitle">
        We're ready to help with your home or small business IT needs in Central Florida.  
        Call, text, or send us a message — we'll get back to you quickly.
      </p>

      <div class="contact-options">
        <a :href="`tel:${$config.phoneNumber}`" class="phone-cta">
          <span class="phone-icon">📞</span>
          Call Now: {{$config.phoneNumberFormatted}}
        </a>

        <div class="email-link">
          Email us: <a href="mailto:support@wardentechnology.com">support@wardentechnology.com</a>
        </div>
      </div>

      <!-- Simple Form -->
      <!-- <form @submit.prevent="submitForm" class="contact-form" name="contact" netlify>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="form.name" required placeholder="Your name" />
        </div>

        <div class="form-group">
          <label for="contact-info">Email or Phone</label>
          <input type="text" name="contact-info" id="contact" v-model="form.contact" required placeholder="email@domain.com or (407) XXX-XXXX" />
        </div>

        <div class="form-group">
          <label for="message">How can we help?</label>
          <textarea id="message" name="message" v-model="form.message" required rows="5" placeholder="Describe your issue or what you're looking for..."></textarea>
        </div>

        <button type="submit" class="submit-button" :disabled="submitting">
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form> -->
      <!-- Netlify Form -->
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
        class="contact-form"
        netlify
      >
        <!-- Hidden Netlify fields -->
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="bot-field" style="display: none;" />

        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required 
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required 
            placeholder="your@email.com"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone (optional)</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            placeholder="(407) XXX-XXXX"
          />
        </div>

        <div class="form-group">
          <label for="message">How can we help?</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            rows="6" 
            required 
            placeholder="Describe your issue or what you're looking for..."
          ></textarea>
        </div>

        <button type="submit" class="submit-button" :disabled="submitting">
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <p class="hours-note">Business hours: {{$config.hoursOfOperation.weekStart}}–{{$config.hoursOfOperation.weekEnd}} {{$config.hoursOfOperation.dayStart}}–{{$config.hoursOfOperation.dayEnd}} {{$config.hoursOfOperation.timeZone}}</p>
      <p class="hours-note">Urgent issues: Call anytime — higher-tier members get off-hours response.</p>
      <p class="hours-note">We typically respond within 1 business day. For urgent matters, please call {{ $config.phoneNumberFormatted }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Form state
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitting = ref(false)

const handleSubmit = async () => {
  submitting.value = true

  try {
    const formData = new FormData()
    formData.append('form-name', 'contact')
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('phone', form.value.phone)
    formData.append('message', form.value.message)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })

    alert('✅ Message sent successfully! We\'ll get back to you soon.')
    
    // Reset form
    form.value = { name: '', email: '', phone: '', message: '' }

  } catch (error) {
    console.error(error)
    alert('❌ There was an error sending your message. Please try calling us directly.')
  } finally {
    submitting.value = false
  }
}

// const submitForm = async () => {
//   submitting.value = true

//   try {
//     const formData = new FormData()
//     formData.append('form-name', 'contact')
//     formData.append('name', form.value.name)
//     formData.append('email', form.value.email)
//     formData.append('phone', form.value.phone)
//     formData.append('message', form.value.message)

//     await fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: new URLSearchParams(formData).toString()
//     })

//     alert('Message sent successfully! We\'ll get back to you soon.')
//     form.value = { name: '', email: '', phone: '', message: '' }
//   } catch (error) {
//     alert('There was an error sending your message. Please try calling us directly.')
//   } finally {
//     submitting.value = false
//   }
// }
</script>

<style scoped>
.contact-section {
  padding: var(--section-padding);
  background: var(--gray-light, #f8f9fa);
  text-align: center;
  border-radius: 5px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.section-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  color: #555;
}

.contact-options {
  margin-bottom: 3rem;
}

.phone-cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: var(--primary, #2563eb);
  color: white;
  padding: 1.2rem 2.5rem;
  font-size: 1.4rem;
  border-radius: 50px;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: transform 0.2s;
}

.phone-cta:hover {
  transform: scale(1.05);
}

.phone-icon {
  font-size: 2rem;
}

.email-link {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.email-link a {
  color: var(--primary);
  text-decoration: underline;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
}

input, textarea {
  width: 100%;
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.submit-button {
  background: var(--primary);
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
}

.submit-button:hover:not(:disabled) {
  background: #1e40af;
  transform: scale(1.02);
}

.submit-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.hours-note {
  margin-top: 0.25rem;
  color: #666;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .phone-cta { font-size: 1.3rem; padding: 1rem 2rem; }
}
</style>