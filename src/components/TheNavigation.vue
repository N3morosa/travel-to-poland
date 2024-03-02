<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import data from '../data.json';

const cities = ref(data.cities);
</script>

<template>
  <nav class="flex justify-center bg-pink-700 p-5 text-white">
    <RouterLink
      class="px-10 font-bold text-pink-200 hover:text-pink-300"
      to="/"
    >
      Home
    </RouterLink>
    <RouterLink
      v-for="city in cities"
      :to="{ name: 'city', params: { id: city.id, slug: city.slug } }"
      :key="city.id"
      class="px-10 font-bold text-pink-200 hover:text-pink-300"
    >
      {{ city.name }}
    </RouterLink>
  </nav>
</template>
