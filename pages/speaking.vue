<template>
  <div>
    <h1>Speaking</h1>
    <p class="lead">I speak on topics related to learning experience design, educational technology, automation, and creative approaches to teaching and learning.</p>
    
    <!-- <section class="section">
      <h2>Speaking Topics</h2>
      <div class="topics-grid">
        <div v-for="(topic, index) in speakingTopics" :key="index" class="topic-card">
          <h3>{{ topic.title }}</h3>
          <p>{{ topic.description }}</p>
        </div>
      </div>
    </section> -->
    
    <section class="section">
      <h2>Past Events</h2>
      <div class="events-list">
        <div v-for="(event, index) in pastEvents" :key="index" class="event-item">
          <div class="event-date">{{ event.date }}</div>
          <div class="event-content">
            <h3>{{ event.title }}</h3>
            <div class="event-venue">{{ event.venue }}</div>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section contact-section">
      <h2>Interested in booking me for your event?</h2>
      <p>I'm available for conferences, workshops, webinars, and other speaking engagements.</p>
      <a href="mailto:contact@soummyeah.com" class="button">Contact Me</a>
    </section>
  </div>
</template>

<script setup>
// Sample speaking topics
const speakingTopics = [
  {
    title: "The Future of Learning Experience Design",
    description: "Exploring emerging trends and technologies that are shaping the future of how we design learning experiences."
  },
  {
    title: "Minimalist Design for Maximum Learning",
    description: "How to apply minimalist design principles to create focused, effective learning environments."
  },
  {
    title: "Creative Technology in Education",
    description: "Innovative ways to incorporate technology into educational settings to enhance engagement and outcomes."
  },
  {
    title: "Building Interactive Learning Experiences",
    description: "Strategies and tools for creating interactive, engaging learning experiences that drive better results."
  }
];

// Sample past events
const pastEvents = [
  {
    date: "April 2024",
    title: "Usability and Accessibility",
    venue: "Virtual School Victoria",
    description: "Staff training workshop on the usability and accessibility considerations for course developers."
  },
  {
    date: "October 2022",
    title: "What Astronauts Can Teach Us About Workplace Burnout",
    venue: "Strathcona Girls Grammar School",
    description: "A dive into teacher retention, workplace burnout and the role school leaders play in fostering a supportive workplace culture."
  },
];
</script>

<style scoped>
.lead {
  font-size: 1.25rem;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xl);
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.topic-card {
  padding: var(--spacing-lg);
  border: 1px solid var(--color-gray-200);
  height: 100%;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.event-item {
  display: flex;
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-gray-200);
}

.event-date {
  min-width: 120px;
  font-weight: 600;
}

.event-venue {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-sm);
}

.contact-section {
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background-color: var(--color-gray-100);
  text-align: center;
}

@media (max-width: 768px) {
  .event-item {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .event-date {
    min-width: auto;
  }
}
</style>
