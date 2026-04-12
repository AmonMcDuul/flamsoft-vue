<template>
  <div class="section-bg-white scroll-target" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <div class="contact-form">
        <input type="email" placeholder="Jouw email" />
        <textarea rows="3" placeholder="Bericht"></textarea>
        <button class="btn-soft">Verstuur bericht →</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.contact-form {
  max-width: 28rem;

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border-radius: 9999px;
    border: 1px solid #e2e8f0;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.2s;

    &:focus {
      outline: none;
      ring: 1px solid $color-accent;
    }
  }

  textarea {
    border-radius: 1rem;
    margin-top: 1rem;
  }

  button {
    margin-top: 1rem;
    width: 100%;

    @media (min-width: $breakpoint-md) {
      width: auto;
    }
  }
}
</style>
