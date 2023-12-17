<script setup lang="ts">
import MainBanner from '../components/MainBanner.vue';
import DemoCard from '../components/DemoCard.vue';
import demos from '../demos.json';
defineProps(['demos']);
</script>
<template>
    <main-banner heading="My Demos" />
    <demo-card v-for="(demo, index) in demos" :key="index">{{ demo.title }}</demo-card>
</template>