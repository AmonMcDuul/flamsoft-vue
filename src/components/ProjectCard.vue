<template>
  <div class="project-card" @click="$emit('click', project.id)">
    <img :src="project.image" :alt="project.title" class="project-image" />
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.category }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/data/projects";

defineProps<{ project: Project }>();
defineEmits<{ (e: "click", id: string): void }>();
</script>

<style scoped lang="scss">
.project-card {
  .project-image {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  .project-info {
    padding: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    p {
      color: #94a3b8;
      font-size: 0.875rem;
    }
  }
}
</style>
