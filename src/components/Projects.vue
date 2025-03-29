<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { gsap } from "gsap"
import { useQuery } from "@tanstack/vue-query"
import axios from "axios"
import { format } from "date-fns"

interface GitHubRepo {
	id: number
	name: string
	description: string | null
	html_url: string
	topics?: string[]
	has_pages: boolean
	created_at: string
	updated_at: string
	language: string
}

const projectsPerPage = ref(2)
const isManualLoading = ref(false)

const fetchProjects = async () => {
	const { data } = await axios.get<GitHubRepo[]>(
		"https://api.github.com/users/nbowisdar/repos",
		{
			params: {
				sort: "updated",
				direction: "desc",
				per_page: projectsPerPage.value,
			},
			headers: {
				Accept: "application/vnd.github+json",
			},
		}
	)
	return data
}

const { isLoading, isError, data, error, refetch } = useQuery({
	queryKey: ["projects"],
	queryFn: fetchProjects,
})

console.log(isLoading, "isLoading");
console.log(isLoading, "FOOO");


const formatDate = (dateString: string) => {
	return format(new Date(dateString), "yyyy.MM.dd")
}

const loadMoreProjects = async () => {
  isManualLoading.value = true
  projectsPerPage.value += 2
  try {
    await refetch()
  } finally {
    isManualLoading.value = false
  }
}

onMounted(async () => {
	// Set initial state explicitly
	gsap.set(".projects .section-title", { opacity: 0, y: 50 })
	gsap.set(".project-card", { opacity: 0, y: 50 })

	// Animate section title
	gsap.to(".projects .section-title", {
		scrollTrigger: {
			trigger: ".projects",
			start: "top 80%",
			toggleActions: "play none none none",
		},
		opacity: 1,
		y: 0,
		duration: 0.8,
		ease: "power2.out",
	})

	// Animate project cards
	gsap.to(".project-card", {
		scrollTrigger: {
			trigger: ".projects-grid",
			start: "top 75%",
			toggleActions: "play none none none",
		},
		opacity: 1,
		y: 0,
		duration: 0.6,
		stagger: 0.15,
		ease: "power2.out",
	})
})

onBeforeUnmount(() => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
	<section class="projects" id="work">
		<div class="container">
			<h2 class="section-title">My Projects</h2>
			<!-- Loading State -->
			<div v-if="isLoading">Loading projects...</div>

			<!-- Error State -->
			<div v-else-if="isError">Error: {{ error?.message }}</div>

			<div class="projects-grid">
				<div v-for="project in data" :key="project.id" class="project-card">
					<div class="project-info ">
						<h3>{{ project.name }}</h3>
						<div class="project-date">
							Created at: <span>{{ formatDate(project.created_at) }}</span>
						</div>
						<div class="project-lang">
							Main language:
							<span>
								{{ project.language }}
							</span>
						</div>
						<p>{{ project.description || "No description provided" }}</p>
						<div class="project-links">
							<div>
								<a
									v-if="project.html_url"
									:href="project.html_url"
									class="btn"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Project
								</a>
							</div>
							<div>
								<a
									v-if="project.has_pages"
									:href="`https://nbowisdar.github.io/${project.name}`"
									class="btn"
									target="_blank"
									rel="noopener noreferrer"
								>
									Open Page
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="load-more-div">
					<button
						v-if="data && data.length > 0"
						@click="loadMoreProjects"
						class="btn"
						:disabled="isManualLoading"
					>
						<span v-if="!isManualLoading">Load more</span>
						<span v-else class="loader-container">
							<span class="loader"></span> Loading...
						</span>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

.loader-container {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.loader {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

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

.project-links {
	display: flex;
	justify-content: space-between;
}

.project-date {
	font-size: 0.7rem;
}

.project-date span {
	font-size: 1rem;
	font-weight: bold;
}

.project-lang {
	margin: 8px 0;
	color: var(--text-light);
	font-size: 0.7rem;
}

.project-lang span {
	font: bold;
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
	background-size: 200% 100%;
	background-position: 100% 0;
	transition: background-position 0.5s;
}

.btn:hover {
	background-position: 0 0;
}

@media (max-width: 768px) {
	.projects {
		padding: 80px 0;
	}

	.project-links {
		display: block;
	}

	.projects-grid {
		grid-template-columns: 1fr;
	}

	.project-image {
		height: 200px;
	}
}

.load-more-div {
	display: flex;
	grid-column: 1 / -1;
	justify-content: center;
}
</style>
