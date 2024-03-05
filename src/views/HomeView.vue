<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import appData from '../data.json';

const cities = ref(appData.cities);
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <RouterLink
      v-for="city in cities"
      :to="{ name: 'city', params: { id: city.id, slug: city.slug } }"
      :key="city.id"
      class="py-10 px-5 md:basis-1/2"
    >
      <h1 class="pink-900 pb-5">
        {{ city.name }}
      </h1>
      <img
        :src="`/images/${city.img}`"
        :alt="city.name"
        class="shadow-gray-600 shadow-md"
      />
    </RouterLink>
  </div>
</template>
