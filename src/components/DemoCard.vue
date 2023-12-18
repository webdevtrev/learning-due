<script setup lang="ts">
defineProps<{
    title?: string
    description?: string
    link?: string
}>()
</script>
<template>
    <div class="flex flex-col gap-2 max-w-xs w-full border-2 border-dark dark:border-white border-solid rounded-xl p-4">
        <span v-if="title">{{ title }}</span>
        <hr />
        <p v-if="description">{{ description }}</p>
        <RouterLink :to="`/demos/${link}`" class="hover:underline self-end">View this demo</RouterLink>
    </div>
</template>