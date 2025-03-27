<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'


onMounted(() => {
  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  })
  
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section class="about" id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>Hey, I'm a Full Stack Web Developer. I've been building modern web applications for about five years now.</p>
          <p>While I enjoy working on the front-end with things like Vue.js and React, making sure everything works smoothly behind the scenes – the backend stuff – is really where my passion lies. I like to think I can build things that not only look good but also work great.</p>
          <div class="social-links">
            <a target="_blank" href="https://github.com/nbowisdar"><i class="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/volodymyr-fedorets-189953207/"><i class="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://t.me/nbowisdar"><i class="fab fa-telegram"></i></a>
            <a target="_blank" href="https://t.me/nbowisdar"><i class="fab fa-telegram"></i></a>
            <a target="_blank" href="https://freelancehunt.com/freelancer/nbowisdar.html"><img class="freelancehunt-img" src="/freelancehunt-icon.png" alt="frelancehunt"></a>
          </div>
        </div>
        <div class="about-image">
          <img src="/m1.png" alt="About Me">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: #fff;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-text {
  flex: 2;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.social-links {
  display: flex;
  margin-top: 30px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  color: white;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-links a:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(58, 134, 255, 0.4);
}

.about-image {
  flex: 1;
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-text {
    margin-bottom: 40px;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>