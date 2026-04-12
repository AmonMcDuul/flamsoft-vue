<template>
  <div class="section-bg-light scroll-target" id="projects">
    <div class="container">
      <div class="section-header">
        <h2>Projecten</h2>
        <div class="scroll-hint">
          <span class="hidden-sm">← swipe →</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div class="projects-scroll" ref="scrollContainerRef">
        <ProjectCard
          v-for="project in projectsStore.projectsList"
          :key="project.id"
          :project="project"
          @click="openDetail"
        />
      </div>
    </div>
  </div>

  <!-- Detail panel (slide-in) -->
  <ProjectPanel />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useProjectStore } from "@/stores/projectStore";
import ProjectCard from "./ProjectCard.vue";
import ProjectPanel from "./ProjectPanel.vue";

const projectsStore = useProjectStore();
const scrollContainerRef = ref<HTMLElement | null>(null);

const openDetail = (id: string) => {
  projectsStore.openProjectPanel(id);
};

// Scroll momentum feedback
let momentumTimeout: ReturnType<typeof setTimeout>;
const handleScroll = () => {
  if (scrollContainerRef.value) {
    scrollContainerRef.value.style.transform = "scale(0.995)";
    clearTimeout(momentumTimeout);
    momentumTimeout = setTimeout(() => {
      if (scrollContainerRef.value)
        scrollContainerRef.value.style.transform = "scale(1)";
    }, 100);
  }
};

// Drag to scroll (muis)
let isDown = false;
let startX = 0;
let scrollLeft = 0;

const onMouseDown = (e: MouseEvent) => {
  if (!scrollContainerRef.value) return;
  isDown = true;
  startX = e.pageX - scrollContainerRef.value.offsetLeft;
  scrollLeft = scrollContainerRef.value.scrollLeft;
};

const onMouseLeave = () => {
  isDown = false;
};
const onMouseUp = () => {
  isDown = false;
};
const onMouseMove = (e: MouseEvent) => {
  if (!isDown || !scrollContainerRef.value) return;
  e.preventDefault();
  const x = e.pageX - scrollContainerRef.value.offsetLeft;
  const walk = (x - startX) * 1.5;
  scrollContainerRef.value.scrollLeft = scrollLeft - walk;
};

onMounted(() => {
  const el = scrollContainerRef.value;
  if (el) {
    el.addEventListener("scroll", handleScroll);
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
  }
});

onUnmounted(() => {
  const el = scrollContainerRef.value;
  if (el) {
    el.removeEventListener("scroll", handleScroll);
    el.removeEventListener("mousedown", onMouseDown);
    el.removeEventListener("mouseleave", onMouseLeave);
    el.removeEventListener("mouseup", onMouseUp);
    el.removeEventListener("mousemove", onMouseMove);
  }
  clearTimeout(momentumTimeout);
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 300;

    @media (min-width: $breakpoint-sm) {
      font-size: 1.875rem;
    }
  }

  .scroll-hint {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: $color-text-muted;

    .hidden-sm {
      display: none;
      @media (min-width: $breakpoint-sm) {
        display: inline;
      }
    }
  }
}

.projects-scroll {
  margin-top: 1rem;
}
</style>
