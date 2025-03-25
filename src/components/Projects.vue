<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';


interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}



const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout.",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality.",
    tags: ["React", "Firebase", "Material UI"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with smooth animations and modern design.",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    image: "https://via.placeholder.com/600x400",
    link: "#"
  }
]

onMounted(async () => {

  // Set initial state explicitly
  gsap.set('.projects .section-title', { opacity: 0, y: 50 });
  gsap.set('.project-card', { opacity: 0, y: 50 });

  // Animate section title
  gsap.to('.projects .section-title', {
    scrollTrigger: {
      trigger: '.projects',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Animate project cards
  gsap.to('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
  });

//   ScrollTrigger.refresh(); // Immediate refresh
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<template>
  <section class="projects" id="work">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="project-card"
        >
          <div class="project-image">
            <img 
              :src="project.image" 
              :alt="project.title"
              loading="lazy"
            >
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="(tag, i) in project.tags" :key="i">
                {{ tag }}
              </span>
            </div>
            <a 
              v-if="project.link" 
              :href="project.link" 
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background-color: var(--light);
  padding: 100px 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 1; /* Ensure initial state is visible for animations */
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-info {
  padding: 24px;
}

.project-info h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: var(--dark);
}

.project-info p {
  color: var(--text-light);
  margin-bottom: 16px;
  line-height: 1.5;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.project-tags span {
  padding: 6px 12px;
  background: rgba(58, 134, 255, 0.1);
  color: var(--primary);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.btn {
  display: inline-block;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .projects {
    padding: 80px 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-image {
    height: 200px;
  }
}
</style>