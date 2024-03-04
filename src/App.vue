<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
const route = useRoute();
</script>

<template>
  <TheNavigation />
  <div class="container mx-auto my-20 flex flex-row flex-wrap items-center">
    <RouterView :key="route.path" />
  </div>
</template>

<style scoped></style>
