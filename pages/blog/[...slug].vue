<template>
  <div v-if="post">
    <div class="blog-header">
      <h1>{{ post.title }}</h1>
      <div class="blog-meta">
        <span class="blog-date">{{ formatDate(post.date) }}</span>
        <div v-if="post.tags && post.tags.length" class="blog-tags">
          <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    
    <ContentRenderer :value="post" />
    
    <div class="blog-footer">
      <NuxtLink to="/blog" class="button button-outline">← Back to Blog</NuxtLink>
    </div>
  </div>
  <div v-else>
    <p>Loading post...</p>
  </div>
</template>

<script setup>
const route = useRoute();

// Get the blog post content
const { data: post } = await useAsyncData(`blog-post-${route.params.slug?.join('/') || 'default'}`, async () => {
  if (!route.params.slug) return null;
  return await queryContent('/blog', ...route.params.slug).findOne().catch(() => null);
}) || { data: null };

// Format date function
const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Set page metadata
useHead(() => ({
  title: post?.value?.title ? `${post.value.title} | So Umm Yeah` : 'Blog | So Umm Yeah',
  meta: [
    { name: 'description', content: post?.value?.description || 'Blog post on So Umm Yeah' }
  ]
}));
</script>

<style scoped>
.blog-header {
  margin-bottom: var(--spacing-xl);
}

.blog-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  color: var(--color-gray-600);
  font-size: 0.9rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.blog-tag {
  padding: 2px 8px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
}

.blog-footer {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-gray-200);
}

:deep(h2) {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

:deep(h3) {
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

:deep(p) {
  margin-bottom: var(--spacing-md);
}

:deep(ul), :deep(ol) {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
}

:deep(li) {
  margin-bottom: var(--spacing-xs);
}

:deep(img) {
  max-width: 100%;
  height: auto;
  margin: var(--spacing-lg) 0;
}

:deep(blockquote) {
  border-left: 4px solid var(--color-gray-300);
  padding-left: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-style: italic;
  color: var(--color-gray-700);
}

:deep(pre) {
  background-color: var(--color-gray-100);
  padding: var(--spacing-md);
  border-radius: 4px;
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

:deep(code) {
  background-color: var(--color-gray-100);
  padding: 2px 4px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.9em;
}
</style>
