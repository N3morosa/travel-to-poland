<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <TheNavigation />
  <div class="container mx-auto flex flex-row flex-wrap items-center py-5">
    <RouterView />
  </div>

</template>

<style scoped></style>
