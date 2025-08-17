export const fetchAPI = async (path) => {
  try {
    // Define API URL - use environment variable in production
    const apiUrl = process.server 
      ? 'http://localhost:1337/api'
      : 'http://localhost:1337/api';
    
    // Make the API request
    const response = await fetch(`${apiUrl}${path}`);
    
    // Parse the JSON response
    const data = await response.json();
    
    // Return the data
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return { data: [] };
  }
};

// Get all blog posts from Strapi
export const getBlogPosts = async () => {
  const response = await fetchAPI('/blog-posts?populate=*');
  return response.data || [];
};

// Get a single blog post by slug
export const getBlogPost = async (slug) => {
  const response = await fetchAPI(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  return response.data?.[0] || null;
};

// Get all projects from Strapi
export const getProjects = async () => {
  const response = await fetchAPI('/projects?populate=*');
  return response.data || [];
};

// Get all speaking engagements from Strapi
export const getSpeakingEngagements = async () => {
  const response = await fetchAPI('/speakings?populate=*');
  return response.data || [];
};
