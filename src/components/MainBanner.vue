<script setup lang="ts">
defineProps<{
    heading?: string
    subheading?: string
}>()
</script>
<template>
    <section class="py-20">
        <h1 v-if="heading">{{ heading }}</h1>
        <p v-if="subheading">{{ subheading }}</p>
    </section>
</template>