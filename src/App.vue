<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import SunIcon from './components/icons/SunIcon.vue';
import MoonIcon from './components/icons/MoonIcon.vue';
import VueIcon from './components/icons/VueIcon.vue';
const darkMode = ref(localStorage.darkMode !== undefined ? localStorage.darkMode : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
watch(darkMode, (newVal) => {
  window.localStorage.darkMode = newVal;
});
</script>


<template>
  <div :class="{ 'dark bg-slate text-white': darkMode, 'bg-slate': darkMode }" class="flex flex-col min-h-screen">
    <header class="flex gap-4 items-center w-full max-w-5xl m-auto p-3 py-10">
      <RouterLink to="/" class="flex items-center gap-2 grow"><vue-icon />Trevor's Vue Practice</RouterLink>
      <button @click="darkMode = !darkMode"
        class="flex gap-1 items-center border-solid border-2 border-black dark:border-white rounded-lg p-1">
        <span>Theme:</span>
        <sun-icon v-if="!darkMode" />
        <moon-icon v-else />
      </button>
      <nav class="flex gap-2">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/demos">Demos</RouterLink>
      </nav>
    </header>
    <main class="max-w-5xl w-full m-auto p-3 grow">
      <RouterView />
    </main>
  </div>
</template>

