<template>
  <div class="section-bg-light scroll-target" id="expertise">
    <div class="container">
      <h2 class="section-title">Expertise</h2>
      <p class="section-subtitle">Waar ik je mee kan helpen.</p>

      <div class="expertise-grid">
        <div
          v-for="item in expertiseItems"
          :key="item.title"
          class="expertise-card"
        >
          <div class="card-accent"></div>
          <div class="icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { expertiseItems } from "@/data/expertise";
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  @media (min-width: $breakpoint-sm) {
    font-size: 2.25rem;
  }
}

.section-subtitle {
  color: $color-text-muted;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 36rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: $breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.expertise-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 1.5rem;
  padding: 1.75rem;
  border: 1px solid rgba(163, 184, 193, 0.2);
  transition: $transition-smooth;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-hover;
    background: rgba(255, 255, 255, 0.9);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: $color-text-secondary;
    line-height: 1.5;
    font-size: 0.95rem;
  }
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: $color-accent;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.expertise-card:hover .card-accent {
  transform: scaleX(1);
}
</style>
