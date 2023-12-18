<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue';
import VueIcon from '../components/icons/VueIcon.vue';
</script>

<template>
  <main-banner heading="Welcome to my VueJS training grounds"
    subheading="This website was spun up using VueJS in combination with TypeScript and Tailwind CSS in preparation to adapt to a new jobs frontend tech stack" />
  <section>
    <h2>This website was made with and my personal definitions:</h2>
    <ul>
      <li>
        <h3 class="flex gap-2 items-center"><vue-icon />VueJS</h3>
        <p>Vue JS is a javascript framework that seems to be a nice middle ground between React and Angular</p>
      </li>
      <li>
        <h3 class="flex gap-2 items-center">Typescript</h3>
        <p>Typescript is a layer applied on top of JavaScript that enforces typechecking which if used properly ideally
          will lead to easier to track and fewer bugs</p>
      </li>
      <li>
        <h3 class="flex gap-2 items-center">Tailwind CSS</h3>
        <p>Tailwind CSS is a short hand and easier way to add one off styles to specific elements and also gives nice ways
          to add hover states, media queries, and theming(checkout the theme toggle in the header!)</p>
      </li>
    </ul>

  </section>
</template>
