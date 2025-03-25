<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const skills = [
  {
    category: "Frontend",
    items: ["Vue.js", "React", "TypeScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Django", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "Redis"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "CI/CD", "MQTT", "Grafana"]
  }
]

onMounted(async () => {

  gsap.set('.skill-category', { opacity: 0, y: 50 });
  gsap.to('.skill-category', {
    scrollTrigger: {
      trigger: '.skills',
      toggleActions: 'play none none none',
      start: 'top 70%'
    },
    duration: 1,
    y: 50,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>

<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      <div class="skills-container">
        <div class="skill-category" v-for="(skill, index) in skills" :key="index">
          <h3>{{ skill.category }}</h3>
          <ul>
            <li v-for="(item, i) in skill.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: #fff;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-category {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.skill-category:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: var(--primary);
  position: relative;
  padding-bottom: 10px;
}

.skill-category h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 3px;
}

.skill-category ul {
  list-style: none;
}

.skill-category ul li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
  font-weight: 500;
}

.skill-category ul li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary);
}

@media (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style>