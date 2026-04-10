<!-- src/components/sections/FAQSection.vue -->
<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <p class="section-subtitle">
        Quick answers to the questions we hear most often.
      </p>

      <div class="faq-list">
        <FaqItem
          v-for="(item, index) in faqItems"
          :key="index"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FaqItem from '@/components/ui/FaqItem.vue'

const faqItems = [
  {
    question: "Do I need to sign up for a membership to get help?",
    answer: "No! Vigil (free tier) lets you schedule on-site help with no commitment. You pay full rates for visits, but you can upgrade anytime."
  },
  {
    question: "What happens if I only need help once?",
    answer: "That's fine — book a visit through Vigil. You'll pay the trip fee + hourly rate (with 20% off your first visit). If you like how it goes, Shield or higher can save you money next time."
  },
  {
    question: "How fast can you respond?",
    answer: "Standard response is same-day or next-business-day for most issues. Citadel and Fortress get priority, and Fortress includes off-hours/emergency response."
  },
  {
    question: "Do you offer remote support?",
    answer: "Yes — Shield & Citadel has free remote during business hours, and Fortress includes 24/7 free remote support."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Clermont, Apopka, Leesburg, Tavares, The Villages, and most of Central Florida. Travel fees may apply outside our core area — just ask."
  },
  {
    question: "Can you install new equipment or networks without ongoing support?",
    answer: "Absolutely — we do one-off projects (Wi-Fi setup, camera installs, server configuration, equipment sales) with no requirement to sign up for monitoring or plans."
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer: "No contracts. All plans are month-to-month and you can cancel anytime. Vigil has no commitment at all."
  }
]
</script>

<style scoped>
.faq-section {
  padding: var(--section-padding);
  background: white;
  text-align: center;
  border-radius: var(--section-border-radius);
  margin-bottom: var(--section-gap);
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--primary, #2563eb);
}

.section-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #555;
}

.faq-list {
  text-align: left;
}
</style>