<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="flex justify-center bg-pink-700 p-5 text-white">
    <RouterLink class="px-10 font-bold text-pink-200 hover:text-pink-300" to="/">Home</RouterLink>
    <RouterLink class="px-10 font-bold text-pink-200 hover:text-pink-300" to="/cracow">Kraków</RouterLink>
    <RouterLink class="px-10 font-bold text-pink-200 hover:text-pink-300" to="/warsaw">Warszawa</RouterLink>
    <RouterLink class="px-10 font-bold text-pink-200 hover:text-pink-300" to="/wroclaw">Wrocław</RouterLink>
    <RouterLink class="px-10 font-bold text-pink-200 hover:text-pink-300" to="/gdansk">Gdańsk</RouterLink>
  </nav>
</template>
