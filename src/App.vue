<template>
  <main class="main">
    <section class="container">
      <header class="header">
        <h1>Give the password</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>

      <GeneratedPassword
        :password="password"
        @copy="copyToClipboard"
        @generate="generatePassword"
      />

      <PasswordOptions
        v-model:length="length"
        v-model:uppercase="uppercase"
        v-model:lowercase="lowercase"
        v-model:numbers="numbers"
        v-model:symbols="symbols"
      />

      <div class="guide guide-horizontal guide-top"></div>
      <div class="guide guide-horizontal guide-bottom"></div>
      <div class="guide guide-vertical guide-left"></div>
      <div class="guide guide-vertical guide-right"></div>
    </section>

    <section class="donate">
      <a
        class="donate-link"
        href="https://revolut.me/patriarxis"
        target="_blank"
      >
        <img
          src="https://patriarxis.com/assets/donate-button.svg"
          alt="Donate button"
        />
      </a>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import GeneratedPassword from "./components/GeneratedPassword.vue";
import PasswordOptions from "./components/PasswordOptions.vue";

const password = ref("");
const length = ref(16);
const uppercase = ref(true);
const lowercase = ref(true);
const numbers = ref(true);
const symbols = ref(true);

const getRandomChar = (charset) => {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset.charAt(randomIndex);
};

const generatePassword = () => {
  let charset = "";
  let newPassword = "";

  if (uppercase.value) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    newPassword += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (lowercase.value) {
    charset += "abcdefghijklmnopqrstuvwxyz";
    newPassword += getRandomChar("abcdefghijklmnopqrstuvwxyz");
  }
  if (numbers.value) {
    charset += "0123456789";
    newPassword += getRandomChar("0123456789");
  }
  if (symbols.value) {
    charset += "!@#$%^&*()_-+=<>?/";
    newPassword += getRandomChar("!@#$%^&*()_-+=<>?/");
  }

  if (charset === "") {
    alert("Please select at least one option.");
    return;
  }

  // Fill remaining length with random characters
  for (let i = newPassword.length; i < length.value; i++) {
    newPassword += getRandomChar(charset);
  }

  // Shuffle the password
  password.value = newPassword
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(password.value);
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
}

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
}

.generated-password-button {
  background-color: rgb(255, 58, 32);
  padding: 1rem;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  transition: all 0.1s ease-in-out;
}

.generated-password-button:hover {
  background-color: rgb(224, 41, 17);
}

.generated-password-button:active {
  background-color: rgb(209, 24, 0);
}

.guide {
  position: absolute;
  background: var(--neutral-2);
  pointer-events: none;
}

.guide-horizontal {
  height: 1px;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
}

.guide-top {
  top: 0;
}

.guide-bottom {
  bottom: 0;
}

.guide-vertical {
  width: 1px;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
}

.guide-left {
  left: 0;
}

.guide-right {
  right: 0;
}

.donate {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
}

.donate-link {
  opacity: 0.4;
  transition: all 0.1s ease-in-out;
}

.donate-link:hover {
  opacity: 1;
}
</style>
