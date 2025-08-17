<template>
  <div>
    <section class="hero">
      <h1>Hi, I'm Tim.</h1>
      <p class="lead">Learning Experience Designer | Creative Technologist | Automation Wizard</p>
      <p class="lead">Welcome to my blog and portfolio where I share my ideas, projects, and insights.</p>
    </section>
    
    <section class="section">
      <h2>Latest Blog Posts</h2>
      <div v-if="posts && posts.length">
        <div v-for="post in posts" :key="post._path" class="blog-post">
          <h3>
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          </h3>
          <div class="blog-post-meta">{{ formatDate(post.date) }}</div>
          <p>{{ post.description }}</p>
          <NuxtLink :to="post._path" class="button">Read More</NuxtLink>
        </div>
      </div>
      <div v-else>
        <p>No blog posts available yet.</p>
      </div>
    </section>
    
    <!-- <section class="section">
      <h2>Featured Projects</h2>
      <div class="project-grid">
        <div v-for="project in featuredProjects" :key="project.id" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <NuxtLink :to="'/projects/' + project.id" class="button">View Project</NuxtLink>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// Fetch blog posts from content directory
const { data: posts } = await useAsyncData('home-posts', () => queryContent('/blog')
  .sort({ date: -1 })
  .limit(3)
  .find()
) || { data: [] };

// Sample featured projects (to be replaced with actual data)
const featuredProjects = [
  {
    id: 'project-1',
    title: 'Kangarubric',
    description: 'Setting up rubrics in the LMS sucks. Kangarubric does it for you.'
  },
  {
    id: 'project-2',
    title: 'TeXchidna',
    description: `TeX can do things Canvas can't. TeXchidna converts your TeX documents to Canvas pages so you can have the best of both worlds.`
  }
];

// Format date function
const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style scoped>
.hero {
  padding: var(--spacing-3xl) 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.lead {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
}
</style>
