<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import data from '../data.json';

const cities = ref(data.cities);
</script>

<template>
  <RouterLink
    v-for="city in cities"
    :to="city.slug"
    class="py-10 px-5 basis-1/2"
  >
    <h1 class="font-bold text-xl text-pink-900 uppercase pb-5">
      {{ city.name }}
    </h1>
    <img
      :src="`public/images/${city.img}`"
      :alt="city.name"
      class=""
    />
  </RouterLink>
</template>
