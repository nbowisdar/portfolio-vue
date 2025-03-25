<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const submitForm = (e) => {
  e.preventDefault()
  alert('Thank you for your message! I will get back to you soon.')
  e.target.reset()
}

onMounted(() => {
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  })
  
  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact',
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
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-content">
        <form class="contact-form" @submit="submitForm">
          <input type="text" placeholder="Volodymyr Fedorets" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="btn">Send Message</button>
        </form>
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p><i class="fas fa-envelope"></i> your.email@example.com</p>
          <p><i class="fas fa-phone"></i> (123) 456-7890</p>
          <p><i class="fas fa-map-marker-alt"></i> Your City, Country</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--light);
}

.contact-content {
  display: flex;
  gap: 50px;
}

.contact-form {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
}

.contact-form textarea {
  min-height: 150px;
  resize: vertical;
}

.contact-info {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.contact-info h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: var(--dark);
}

.contact-info p {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info i {
  color: var(--primary);
  font-size: 1.2rem;
  width: 25px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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

@media (max-width: 992px) {
  .contact-content {
    flex-direction: column;
  }
  
  .contact-info {
    margin-top: 40px;
  }
}
</style>