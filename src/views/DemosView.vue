<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue';
import DemoCard from '../components/DemoCard.vue';
import demos from '../demos.json';

</script>
<template>
    <main-banner heading="My Demos" />
    <demo-card v-for="(demo, index) in demos" :key="index" :title="demo?.title" :description="demo?.description"
        :link="demo?.link" />
</template>