<template>
  <div>
    <header class="header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo"><img src="/images/logo.svg" alt="So Umm Yeah Logo" style="height:9rem;"></NuxtLink>
        
        <!-- Static navigation (visible by default, hidden by JS on mobile) -->
        <nav class="nav static-nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/speaking" class="nav-link">Speaking</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <!-- <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink> -->
        </nav>
        
        <!-- Mobile navigation toggle button -->
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen">
          <span class="hamburger-icon"></span>
          <span class="sr-only">Menu</span>
        </button>
        
        <!-- Mobile navigation -->
        <nav class="nav mobile-nav" :class="{ 'nav-open': menuOpen }">
          <NuxtLink to="/" class="nav-link" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link" @click="closeMenu">About</NuxtLink>
          <NuxtLink to="/blog" class="nav-link" @click="closeMenu">Blog</NuxtLink>
          <NuxtLink to="/speaking" class="nav-link" @click="closeMenu">Speaking</NuxtLink>
          <NuxtLink to="/contact" class="nav-link" @click="closeMenu">Contact</NuxtLink>
          <!-- <NuxtLink to="/projects" class="nav-link" @click="closeMenu">Projects</NuxtLink> -->
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
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);

function toggleMenu() {
  console.log('Toggling the menu');
  menuOpen.value = !menuOpen.value;
  
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  menuOpen.value = false;
  document.body.style.overflow = '';
}

// Add js-enabled class to body immediately to avoid FOUC
if (process.client) {
  document.body.classList.add('js-enabled');
}

// Ensure js-enabled class is added on mount as well
onMounted(() => {
  document.body.classList.add('js-enabled');
});
</script>
