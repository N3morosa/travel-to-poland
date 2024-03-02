<script setup lang="ts">
import data from '../data.json';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const cityId = route.params.id as unknown;
const city = ref();

onBeforeMount(() => {
  city.value = data.cities.find((city) => city.id == cityId);
});

</script>
<template>
  <article class="py-10">
    <div class="flex flex-row flex-nowrap">
      <img
        :src="`/images/${city.img}`"
        :alt="city.name"
        class="w-2/5 mr-10"
      />
      <div class="w-3/5">
        <h1 class="">{{ city.name }}</h1>
        <p>{{ city.description }}</p>
      </div>
    </div>
  </article>
</template>
