<template>
  <div class="app">
    <AppHeader />
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
    <AppFooter />
    <div class="progress-bar" id="progressBar"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExpertiseSection from "@/components/ExpertiseSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import { setAlive } from "@/services/emailService"; // 👈 import

let progressBar: HTMLElement | null = null;

const updateProgressBar = () => {
  if (!progressBar) return;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
};

onMounted(async () => {
  progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", updateProgressBar);

  const isAlive = await setAlive();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgressBar);
});
</script>
