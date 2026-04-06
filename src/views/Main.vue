<script setup>
import '@/css/fonts.css'
import { ref } from 'vue'

const openIndex = ref(null)

const faqs = ref([
  {
    question: "Why is it so empty here?",
    answer: "Because time is precious between my job and my studies. But stay tuned for a portfolio section and maybe some blog posts. 💡"
  },
  {
    question: "How are your studies going?",
    answer: "More than well! Next up: Writing my bachelors thesis."
  },
  {
    question: "When do you find time to sleep?",
    answer: "Sometimes."
  },
  {
    question: "What are your plans for the future?",
    answer: "Taking a long nap after finishing my degree. 😴 Also, allow me to shamelessly direct you to my LinkedIn for professional life updates. 😉"
  },
  {
    question: "What are your hobbies?",
    answer: "Studying is my hobby. 📚 Otherwise I like strategy games and playing Tennis."
  },
  {
    question: "Is this site a Data Engineering project?",
    answer: "It's a frontend experiment and I collect absolutely zero data from your visit. (This project would be much more exciting if databases were involved.)"
  },
  {
    question: "Where is the dark mode?",
    answer: "Coming soon. My eyes are burning too."
  }
])

const toggleFaq = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<template>
  <div class="main-content-div">
    <h1>Alina de Vries</h1>
    <p>Business Intelligence Developer by day, student of Computer Science and Media Applications (B.Sc.) by night. <br> I enjoy turning data into value and learning new things daily.</p>
    <h2>Let's connect:</h2>
    <a href="https://www.linkedin.com/in/alina-de-vries-79a6a8200"><img src="/icons/linkedin-fill-svgrepo-com.svg" alt="LinkedIn Logo" class="social-icon"></a>
    <div class="faq-div">
      <p>This page is under contruction. 🏗️ But worry not ‒ I have the answers to your questions.</p>
      <h2>FAQ</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFaq(index)" class="faq-question">
          <span>{{ faq.question }}</span>
          <span class="icon" :class="{ rotate: openIndex === index }">▼</span>
        </button>

        <Transition name="expand">
          <div v-if="openIndex === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-icon {
  height: 50px;
  transition: filter 0.3s ease;
}

.social-icon:hover {
  opacity: 0.8;
}

.main-content-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  text-align: center;
}

.faq-div {
  max-width: 650px;
  width: 95%;
  margin: 40px auto;
  font-family: 'Outfit';
}

.faq-div h2 {
  text-align: center;
}

.faq-item {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
}

.faq-question {
  font-family: 'Outfit';
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: none;
  border: none;
  color: #1c1c1c;
  cursor: pointer;
  text-align: left;
}

.faq-answer {
  padding: 0 20px 20px 20px;
  color: #1c1c1c;
}

.icon {
  transition: transform 0.3s ease;
}

.icon.rotate {
  transform: rotate(180deg);
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease-out;
  max-height: 500px;
}

.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>