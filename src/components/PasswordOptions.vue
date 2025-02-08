<template>
  <ul class="options-container">
    <li class="option">
      <input
        type="number"
        id="length"
        min="6"
        max="24"
        :value="length"
        @input="$emit('update:length', parseInt($event.target.value))"
      />
      <label for="length">Password length</label>
    </li>
    <li class="option">
      <input
        type="checkbox"
        id="uppercase"
        :checked="uppercase"
        @change="$emit('update:uppercase', $event.target.checked)"
      />
      <label for="uppercase">Include Uppercase</label>
    </li>
    <li class="option">
      <input
        type="checkbox"
        id="lowercase"
        :checked="lowercase"
        @change="$emit('update:lowercase', $event.target.checked)"
      />
      <label for="lowercase">Include Lowercase</label>
    </li>
    <li class="option">
      <input
        type="checkbox"
        id="numbers"
        :checked="numbers"
        @change="$emit('update:numbers', $event.target.checked)"
      />
      <label for="numbers">Include Numbers</label>
    </li>
    <li class="option">
      <input
        type="checkbox"
        id="symbols"
        :checked="symbols"
        @change="$emit('update:symbols', $event.target.checked)"
      />
      <label for="symbols">Include Symbols</label>
    </li>
  </ul>
</template>

<script setup>
defineProps(["length", "uppercase", "lowercase", "numbers", "symbols"]);
defineEmits([
  "update:length",
  "update:uppercase",
  "update:lowercase",
  "update:numbers",
  "update:symbols",
]);
</script>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.option {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem 2rem;
  width: 100%;
}

.options-container > * + * {
  border-top: 1px solid var(--neutral-2);
}

.option label {
  width: 100%;
  font-size: 0.8rem;
}
</style>
