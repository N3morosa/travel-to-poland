<script lang="ts" setup>
import data from '../data.json';
import { ref, defineProps, onBeforeMount } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sightSlug: {
    type: String,
    required: true,
  },
});
const city = ref();
const sight = ref();

onBeforeMount(() => {
  city.value = data.cities.find((city) => city.id === parseInt(props.id));
  sight.value = city.value.sights.find(
    (sight) => sight.slug === props.sightSlug
  );
});
</script>

<template>
  <section class="py-10">
    <h1>{{ sight.name }}</h1>
    <img
      :src="`/images/${sight.img}`"
      alt="sight.name"
    />
    <p>{{ sight.description }}</p>
  </section>
</template>
