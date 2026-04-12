<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          Ik bouw software<br />
          <span class="highlight">die gewoon werkt.</span>
        </h1>
        <p>Van idee naar product. Geen gedoe, gewoon resultaat.</p>
        <button class="btn-soft" @click="scrollToProjects">
          Bekijk projecten →
        </button>
      </div>
      <div class="hero-image">
        <img src="../assets/images/joran1.jpeg" alt="Hero" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToProjects = () => {
  const element = document.getElementById("projects");
  if (element) {
    const offset = 90;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.hero {
  padding-top: 8rem;
  padding-bottom: 3rem;
  min-height: 75vh;
  display: flex;
  align-items: center;

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
    }
  }

  .hero-content {
    flex: 1;

    h1 {
      font-size: 3rem;
      font-weight: 300;
      line-height: 1.05;
      letter-spacing: -0.025em;

      @media (min-width: $breakpoint-sm) {
        font-size: 3.75rem;
      }
      @media (min-width: $breakpoint-md) {
        font-size: 4.5rem;
      }

      .highlight {
        color: $color-text-muted;
      }
    }

    p {
      color: $color-text-muted;
      font-size: 1rem;
      margin: 1.5rem 0;
      max-width: 28rem;

      @media (min-width: $breakpoint-sm) {
        font-size: 1.125rem;
      }
    }
  }

  .hero-image {
    flex: 1;

    img {
      border-radius: 1rem;
      box-shadow: $shadow-xl;
      transition: transform 0.5s;
      width: 100%;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>
