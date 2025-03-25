<script setup>
import { ref } from 'vue'

defineProps({
  activeSection: String
})

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">Portfolio</div>
      <nav :class="{ 'active': mobileMenuOpen }">
        <ul>
          <li>
            <a 
              href="#home" 
              :class="{ 'active': activeSection === 'home' }"
              @click="closeMenu"
            >Home</a>
          </li>
          <li>
            <a 
              href="#about" 
              :class="{ 'active': activeSection === 'about' }"
              @click="closeMenu"
            >About</a>
          </li>
          <li>
            <a 
              href="#work" 
              :class="{ 'active': activeSection === 'work' }"
              @click="closeMenu"
            >Work</a>
          </li>
          <li>
            <a 
              href="#skills" 
              :class="{ 'active': activeSection === 'skills' }"
              @click="closeMenu"
            >Skills</a>
          </li>
          <li>
            <a 
              href="#contact" 
              :class="{ 'active': activeSection === 'contact' }"
              @click="closeMenu"
            >Contact</a>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu" @click="toggleMenu">
        <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  backdrop-filter: blur(10px);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  transition: all 0.3s;
  position: relative;
  padding: 5px 0;
}

nav ul li a:hover {
  color: var(--primary);
}

nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 0.3s;
}

nav ul li a:hover::after,
nav ul li a.active::after {
  width: 100%;
}

nav ul li a.active {
  color: var(--primary);
}

.mobile-menu {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--dark);
}

@media (max-width: 768px) {
  nav {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: 999;
  }
  
  nav.active {
    transform: translateY(0);
  }
  
  nav ul {
    flex-direction: column;
  }
  
  nav ul li {
    margin: 15px 0;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>