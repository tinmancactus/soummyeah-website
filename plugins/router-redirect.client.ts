export default defineNuxtPlugin((nuxtApp) => {
  // Check if there's a redirect path stored in sessionStorage
  // This is set by the 404.html page for SPA fallback
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    // Use nextTick to ensure router is ready
    nuxtApp.hook('app:mounted', () => {
      nuxtApp.$router.push(redirect);
    });
  }
});
