<template>
  <header class="app-header">
    <div class="container">
      <span class="logo">Flamsoft</span>
      <nav class="nav">
        <a href="#projects" @click.prevent="scrollTo('projects')">Projecten</a>
        <a href="#about" @click.prevent="scrollTo('about')">Over</a>
        <a href="#expertise" @click.prevent="scrollTo('expertise')"
          >Expertise</a
        >
        <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 90;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    history.pushState(null, "", `#${id}`);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.app-header {
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  z-index: 50;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: -0.025em;
  }

  .nav {
    display: flex;
    gap: 1.5rem;
    font-size: 0.875rem;

    a {
      text-decoration: none;
      color: $color-text-primary;
      transition: color 0.2s;

      &:hover {
        color: $color-text-secondary;
      }
    }
  }
}
</style>
