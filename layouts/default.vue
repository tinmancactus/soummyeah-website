<template>
  <div>
    <header class="header">
      <div class="container header-inner">
        <NuxtLink to="/" class="logo"><img src="../assets/images/logo.svg" alt="So Umm Yeah Logo" style="height:9rem;"></NuxtLink>
        
        <!-- Static navigation for non-JS fallback -->
        <nav class="nav static-nav">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/speaking" class="nav-link">Speaking</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          <!-- <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink> -->
        </nav>
        
        <!-- Mobile menu toggle and interactive nav - only for client-side -->
        <ClientOnly>
          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="menuOpen">
            <span class="hamburger-icon"></span>
          </button>
          
          <nav class="nav mobile-nav" :class="{ 'nav-open': menuOpen }">
            <NuxtLink to="/" class="nav-link" @click="closeMenu">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link" @click="closeMenu">About</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" @click="closeMenu">Blog</NuxtLink>
            <NuxtLink to="/speaking" class="nav-link" @click="closeMenu">Speaking</NuxtLink>
            <NuxtLink to="/contact" class="nav-link" @click="closeMenu">Contact</NuxtLink>
            <!-- <NuxtLink to="/projects" class="nav-link" @click="closeMenu">Projects</NuxtLink> -->
          </nav>
          
          <template #fallback>
            <!-- Fallback for static generation - won't be visible in client -->
            <button class="menu-toggle" aria-label="Toggle menu" style="visibility: hidden">
              <span class="hamburger-icon"></span>
            </button>
          </template>
        </ClientOnly>
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

// Enable JavaScript-enhanced features when the component is mounted
onMounted(() => {
  // Add js-enabled class to body to activate enhanced mobile menu styles
  document.body.classList.add('js-enabled');
});

function toggleMenu() {
  console.log('Toggling the menu');
  menuOpen.value = !menuOpen.value;
  
  // Prevent scrolling when menu is open on mobile
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
</script>
