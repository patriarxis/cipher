<template>
  <div class="password-container">
    <div class="generated-password">
      <input
        class="generated-password-input"
        type="text"
        id="generatedPassword"
        :value="password"
        placeholder="Generate Password"
        readonly
      />

      <button class="button copy-button" @click="$emit('copy')">
        <svg viewBox="0 0 16 16">
          <path
            d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
          />
          <path
            d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
          />
        </svg>
      </button>

      <button class="button generate-button" @click="$emit('generate')">
        Generate
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["password"]);
defineEmits(["copy"]);
</script>

<style scoped>
.password-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.generated-password {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem 2rem;
  border: 1px solid var(--neutral-2);
}

.generated-password-input {
  font-size: 1rem;
  flex-grow: 1;
}

.generated-password-input:focus {
  outline: none;
}

.generated-password-input::placeholder {
  color: var(--neutral-5);
}

.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin: 0;
  transition: all 0.2s ease-in-out;
}

.button svg {
  width: 1rem;
  height: 1rem;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  outline: none;
  box-shadow: 0 0 0 0.125rem rgba(255, 0, 0, 0.2);
}

.button:active {
  box-shadow: none;
}

.generate-button {
  background-color: var(--red-1);
  border: 1px solid transparent;
  color: var(--neutral-1);
  font-weight: 700;
  font-size: 0.825rem;
}

.generate-button:hover {
  background-color: var(--neutral-8);
  border-color: var(--red-1);
}

.copy-button {
  background-color: var(--neutral-1);
  border: 1px solid var(--neutral-2);
}

.copy-button:hover svg {
  fill: var(--red-1);
}

.copy-button:hover {
  border-color: var(--red-1);
}
</style>
