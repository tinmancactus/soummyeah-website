<template>
  <div>
    <h1>Blog</h1>
    <p class="lead">Thoughts, insights, and explorations in learning experience design and creative technology.</p>
    
    <div v-if="postsList.length">
      <div v-for="post in postsList" :key="post._path" class="blog-post">
        <h2>
          <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        </h2>
        <div class="blog-post-meta">{{ formatDate(post.date) }}</div>
        <p>{{ post.description }}</p>
        <NuxtLink :to="post._path" class="button">Read More</NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>No blog posts available yet.</p>
    </div>
  </div>
</template>

<script setup>
// Fetch all blog posts from content directory
const { data: posts } = await useAsyncData('blog-posts', () => queryContent('/blog')
  .sort({ date: -1 })
  .find()
);

// Computed property to safely access posts array
const postsList = computed(() => posts.value || []);

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
.lead {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xl);
}

.blog-post {
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-gray-200);
}

.blog-post:last-child {
  border-bottom: none;
}
</style>
