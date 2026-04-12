<template>
  <Teleport to="body">
    <div
      class="panel-overlay"
      :class="{ active: store.panelOpen }"
      @click="store.closeProjectPanel()"
    ></div>
    <div class="detail-panel" :class="{ active: store.panelOpen }">
      <button class="close-btn" @click="store.closeProjectPanel()">✕</button>
      <div v-if="store.activeProject">
        <img
          :src="store.activeProject.image"
          class="panel-image"
          :alt="store.activeProject.title"
        />
        <h3 class="panel-title">{{ store.activeProject.title }}</h3>
        <p class="panel-desc">{{ store.activeProject.description }}</p>
        <div class="panel-tech">
          <span>⚙️ {{ store.activeProject.tech }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";

const store = useProjectStore();
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.panel-image {
  border-radius: 0.75rem;
  max-height: 14rem;
  width: 100%;
  object-fit: cover;
  margin-bottom: 1.25rem;
}

.panel-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.panel-desc {
  color: $color-text-secondary;
  line-height: 1.5;
}

.panel-tech {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  color: $color-text-muted;
}
</style>
