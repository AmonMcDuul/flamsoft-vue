<template>
  <div class="section-bg-white scroll-target" id="contact">
    <div class="container">
      <div class="contact-header">
        <h2>Laten we kennismaken</h2>
        <p class="contact-subtitle">
          Even sparren over jouw idee? Ik luister graag en denk met je mee.
        </p>
      </div>

      <div class="contact-form">
        <input
          type="email"
          v-model="form.email"
          placeholder="Jouw e-mailadres"
          :disabled="sending"
          required
        />
        <textarea
          rows="4"
          v-model="form.message"
          placeholder="Vertel me eens over je project, vraag of uitdaging..."
          :disabled="sending"
          required
        ></textarea>

        <div
          v-if="statusMessage"
          class="status-message"
          :class="{ error: !statusSuccess }"
        >
          {{ statusMessage }}
        </div>

        <button
          class="btn-soft"
          @click="submitForm"
          :disabled="sending || !isFormValid"
        >
          {{ sending ? "Versturen..." : "Verstuur bericht →" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { sendEmail } from "@/services/emailService";

const form = reactive({
  email: "",
  message: "",
});

const sending = ref(false);
const statusMessage = ref("");
const statusSuccess = ref(false);

const isFormValid = computed(() => {
  return (
    form.email.trim() !== "" &&
    form.message.trim() !== "" &&
    form.email.includes("@")
  );
});

async function submitForm() {
  if (!isFormValid.value) {
    statusMessage.value = "Vul een geldig e-mailadres en bericht in.";
    statusSuccess.value = false;
    return;
  }

  sending.value = true;
  statusMessage.value = "";

  const result = await sendEmail(form.email, form.message);

  statusSuccess.value = result.success;
  statusMessage.value =
    result.message || (result.success ? "Verzonden!" : "Fout bij verzenden.");

  if (result.success) {
    form.email = "";
    form.message = "";
  }

  sending.value = false;

  setTimeout(() => {
    statusMessage.value = "";
  }, 5000);
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-header {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  color: $color-text-muted;
  font-size: 1rem;
  max-width: 32rem;
  line-height: 1.5;
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
    &:disabled {
      background: rgba(255, 255, 255, 0.4);
      cursor: not-allowed;
    }
  }

  textarea {
    border-radius: 1rem;
    margin-top: 1rem;
  }

  button {
    margin-top: 1rem;
    width: 100%;
    transition: all 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    @media (min-width: $breakpoint-md) {
      width: auto;
    }
  }

  .status-message {
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 1rem;
    text-align: center;
    font-size: 0.875rem;
    background: rgba(163, 184, 193, 0.1);
    color: $color-text-primary;

    &.error {
      background: rgba(220, 38, 38, 0.1);
      color: #b91c1c;
    }
  }
}
</style>
