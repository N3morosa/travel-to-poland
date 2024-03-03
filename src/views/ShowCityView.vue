<script setup lang="ts">
import data from '../data.json';
import { onBeforeMount, ref } from 'vue';
import SightsCards from '../components/SightsCards.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const city = ref();

onBeforeMount(() => {
  city.value = data.cities.find((city) => city.id === parseInt(props.id));
});
</script>
<template>
  <section class="py-10">
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
  </section>
  <section class="flex flex-row mt-10">
    <h2 class="self-center">Best sights in {{ city.name }}</h2>
    <RouterLink
      v-for="sight in city.sights"
      :key="sight.slug"
      :to="{ name: 'sight', params: { sightSlug: sight.slug } }"
    >
      <SightsCards :sight="sight" />
    </RouterLink>
  </section>
</template>
