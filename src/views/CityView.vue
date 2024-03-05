<script setup lang="ts">
import appData from '../data.json';
import { onBeforeMount, ref } from 'vue';
import SightsCards from '../components/SightsCards.vue';
import BackButton from '../components/BackButton.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const city = ref();

onBeforeMount(() => {
  city.value = appData.cities.find((city) => city.id === parseInt(props.id));
});
</script>
<template>
  <div>
    <BackButton><</BackButton>
    <section class="py-10">
      <div class="flex flex-col lg:flex-row flex-nowrap">
        <img
          :src="`/images/${city.img}`"
          :alt="city.name"
          class="lg:w-2/5 mr-10"
        />
        <div class="lg:w-3/5">
          <h1>{{ city.name }}</h1>
          <p>{{ city.description }}</p>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <h2 class="text-center my-5">Best sights in {{ city.name }}</h2>
      <div class="flex flex-col lg:flex-row flex-nowrap justify-center">
        <RouterLink
          v-for="sight in city.sights"
          :key="sight.slug"
          :to="{ name: 'sight', params: { sightSlug: sight.slug } }"
        >
          <SightsCards :sight="sight" />
        </RouterLink>
      </div>
    </section>
  </div>
</template>
