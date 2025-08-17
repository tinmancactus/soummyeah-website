<template>
  <div>
    <header class="header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo"><img src="../assets/images/logo.svg" alt="So Umm Yeah Logo" style="height:9rem;"></NuxtLink>
        
        <nav class="nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/speaking" class="nav-link">Speaking</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <!-- <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink> -->
        </nav>
      </div>
    </header>
    
    <main class="container section">
      <slot />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} So Umm Yeah. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Layout script
</script>
