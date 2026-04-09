<!-- src/views/ContactSuccess.vue -->
<template>
  <div class="success-page">
    <div class="success-container">
      <div class="success-icon">✅</div>
      
      <h1>Message Sent Successfully!</h1>
      
      <p class="success-message">
        Thank you for reaching out. We've received your message and will get back to you 
        within 1 business day.
      </p>

      <p class="next-steps">
        If your request is urgent, feel free to call us directly at 
        <a :href="`tel:${$config.phoneNumber}`">{{ $config.phoneNumberFormatted }}</a>.
      </p>

      <div class="actions">
        <router-link to="/" class="btn-primary">
          Return to Home
        </router-link>
        
        <router-link to="/#pricing" class="btn-secondary">
          View Our Plans
        </router-link>
      </div>

      <p class="support-note">
        You can also email us anytime at 
        <a :href="`mailto:${$config.email}`">{{ $config.email }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
// No logic needed for this static success page
</script>

<style scoped>
.success-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: var(--gray-light, #f8f9fa);
  text-align: center;
}

.success-container {
  max-width: 600px;
}

.success-icon {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.success-message {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
}

.next-steps {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: #444;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--primary, #2563eb);
  color: white;
}

.btn-primary:hover {
  background: #1e40af;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--primary, #2563eb);
  color: var(--primary, #2563eb);
}

.btn-secondary:hover {
  background: rgba(37, 99, 235, 0.1);
}

.support-note {
  color: #666;
  font-size: 1rem;
}

@media (max-width: 600px) {
  h1 { font-size: 2.2rem; }
  .actions { flex-direction: column; align-items: center; }
}
</style>