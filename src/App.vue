<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const activeSection = ref('home')

const handleScroll = () => {
  const sections = ['home', 'about', 'work', 'skills', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <Header :active-section="activeSection" />
  <main>
    <Hero id="home" />
    <About id="about" />
    <Projects id="work" />
    <Skills id="skills" />
    <Contact id="contact" />
  </main>
  <Footer />
</template>

<style>
@import './styles/main.css';
@import './styles/animations.css';
</style>