<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.hero-content h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  })
  
  gsap.from('.hero-content h2', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
  })
  
  gsap.from('.hero-content p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
  })
  
  gsap.from('.hero-content .btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
  })
  
  gsap.from('.hero-image', {
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
  })
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Hi, I'm <span>Volodymyr Fedorets</span></h1>
        <h2>Full Stack Developer</h2>
        <p>Creating beautiful, functional digital experiences with modern web technologies and reliable backend services.</p>
        <a href="#work" class="btn">View My Work</a>
      </div>
      <div class="hero-image float">
        <img src="" alt="Volodymyr Fedorets">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 120px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content h1 span {
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-content h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 400;
  color: var(--text-light);
}

.hero-content p {
  margin-bottom: 30px;
  font-size: 1.1rem;
  max-width: 600px;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .hero .container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-bottom: 50px;
  }
  
  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content h2 {
    font-size: 1.5rem;
  }
}
</style>