<template>
  <div>
    <h1>Contact me</h1>
    <p class="lead">Let's talk.</p>
    <p>The best way to reach me is <a href="mailto:tim@soummyeah.au">via email</a> or <a href="https://linkedin.com/in/tim-churchward-432590206">LinkedIn</a>.</p>
  </div>
</template>

<script setup>
// About page script
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.lead {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xl);
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
  list-style: none;
  margin-top: var(--spacing-md);
  margin-left:0;
}

.skills-list li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-gray-200);
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }
  
  .about-text {
    flex: 2;
  }
}
</style>
