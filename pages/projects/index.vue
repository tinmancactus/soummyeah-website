<template>
  <div>
    <h1>Projects</h1>
    <p class="lead">A collection of open source projects, demos, and experiments in learning experience design and creative technology.</p>
    
    <div class="project-filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        @click="activeFilter = filter.value"
        :class="{ active: activeFilter === filter.value }"
        class="filter-button"
      >
        {{ filter.label }}
      </button>
    </div>
    
    <div class="project-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="project-card"
      >
        <div class="project-image" v-if="project.image">
          <img :src="project.image" :alt="project.title">
        </div>
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="button">View Demo</a>
            <a v-if="project.codeUrl" :href="project.codeUrl" target="_blank" class="button button-outline">View Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Filters for projects
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Open Source', value: 'open-source' },
  { label: 'Demos', value: 'demo' },
  { label: 'Experiments', value: 'experiment' }
];

const activeFilter = ref('all');

// Sample projects data (to be replaced with actual data from Strapi)
const projects = [
  {
    id: 'learning-platform',
    title: 'Interactive Learning Platform',
    description: 'An open-source platform for creating interactive learning experiences with real-time feedback and progress tracking.',
    tags: ['open-source', 'education', 'vue'],
    image: '/images/projects/learning-platform.jpg',
    demoUrl: 'https://demo.example.com/learning-platform',
    codeUrl: 'https://github.com/example/learning-platform',
    category: 'open-source'
  },
  {
    id: 'workshop-tools',
    title: 'Workshop Facilitation Tools',
    description: 'A collection of digital tools designed to enhance workshop facilitation and participant engagement.',
    tags: ['demo', 'workshops', 'collaboration'],
    image: '/images/projects/workshop-tools.jpg',
    demoUrl: 'https://demo.example.com/workshop-tools',
    category: 'demo'
  },
  {
    id: 'ar-learning',
    title: 'AR Learning Experiences',
    description: 'Experimental augmented reality applications for immersive learning in various educational contexts.',
    tags: ['experiment', 'AR', 'immersive'],
    image: '/images/projects/ar-learning.jpg',
    demoUrl: 'https://demo.example.com/ar-learning',
    category: 'experiment'
  }
];

// Filter projects based on active filter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === activeFilter.value);
});
</script>

<style scoped>
.lead {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xl);
}

.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.filter-button {
  background-color: transparent;
  color: var(--color-black);
  border: 1px solid var(--color-gray-300);
  padding: var(--spacing-xs) var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button.active {
  background-color: var(--color-black);
  color: var(--color-white);
  border-color: var(--color-black);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.project-card {
  border: 1px solid var(--color-gray-200);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: var(--spacing-lg);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin: var(--spacing-sm) 0;
}

.project-tag {
  font-size: 0.8rem;
  padding: 2px 8px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
}

.project-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.button-outline {
  background-color: transparent;
  color: var(--color-black);
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
