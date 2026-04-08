<!-- src/components/ui/FaqItem.vue -->
<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-question" @click="toggle">
      <span class="question-text">{{ question }}</span>
      <span class="toggle-icon">{{ isOpen ? '−' : '+' }}</span>
    </button>

    <div v-if="isOpen" class="faq-answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true }
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.faq-question {
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.2s;
}

.faq-question:hover {
  color: var(--primary, #2563eb);
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary, #2563eb);
}

.faq-answer {
  padding: 0 0 1rem 0;
  color: #555;
  line-height: 1.6;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; height: 0; }
  to   { opacity: 1; height: auto; }
}
</style>