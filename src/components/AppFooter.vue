<template>
  <footer class="app-footer">
    <div class="container">© Flamsoft</div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.app-footer {
  text-align: center;
  padding: 4rem 1.5rem;
  color: $color-text-muted;
  font-size: 0.875rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>
