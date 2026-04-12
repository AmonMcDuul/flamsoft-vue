import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { projects, type Project } from "@/data/projects";

export const useProjectStore = defineStore("project", () => {
  const projectsList = ref<Project[]>(projects);
  const activeProjectId = ref<string | null>(null);
  const panelOpen = ref(false);

  const activeProject = computed(() => {
    if (!activeProjectId.value) return null;
    return (
      projectsList.value.find((p) => p.id === activeProjectId.value) || null
    );
  });

  function openProjectPanel(projectId: string) {
    activeProjectId.value = projectId;
    panelOpen.value = true;
    document.body.style.overflow = "hidden";
  }

  function closeProjectPanel() {
    panelOpen.value = false;
    activeProjectId.value = null;
    document.body.style.overflow = "";
  }

  return {
    projectsList,
    activeProjectId,
    panelOpen,
    activeProject,
    openProjectPanel,
    closeProjectPanel,
  };
});
