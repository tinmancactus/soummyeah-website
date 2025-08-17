<template>
  <div>
    <h1>About Me</h1>
    
    <div class="about-content">
      <div class="about-text">
        <p class="lead">Learning Experience Designer, Creative Technologist and Automation Wizard passionate about creating engaging interactive learning experiences, and making life easier for educators and designers.</p>
        
        <h2>My Background</h2>
        <p>
          I have experience in education, media production, web development, software development, instructional design, user experience design and automation. I have worked in a variety of roles in these fields including secondary teaching, training and assessment, web development, learning design and digital education design.
        </p>
        
        <h2>My Approach</h2>
        <p>I am a strong believer the following:</p>
        <ul>
          <li>Don't make me think</li>
          <li>Keep it simple, stupid</li>
          <li>Work smarter, not harder.</li>
        </ul>
        <p>Put these together and you have an approach to educational design that focuses on intuitive learning experiences that put the content first and minimises distractions.</p>
        <p>I care about usability and accessibility, and I believe that the best learning experiences are those that work for <strong>all students.</strong></p>
        
        <h2>Skills & Expertise</h2>
        <ul class="skills-list">
          <li>Learning Experience Design</li>
          <li>Instructional Design</li>
          <li>Educational Technology</li>
          <li>Web Development</li>
          <li>Software Development</li>
          <li>Interactive Media</li>
          <li>User Experience Design</li>
          <li>Automation</li>
        </ul>
      </div>
    </div>
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
