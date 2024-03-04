<script lang="ts" setup>
import data from '../data.json';
import { ref, defineProps, onBeforeMount } from 'vue';
import BackButton from '../components/BackButton.vue';

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
  <BackButton />
  <section class="py-10">
    <div class="flex flex-row flex-nowrap">
      <img
        :src="`/images/${sight.img}`"
        alt="sight.name"
        class="w-2/5 mr-10"
      />
      <div class="w-3/5">
        <h1>{{ sight.name }}</h1>
        <p>{{ sight.description }}</p>
      </div>
    </div>
  </section>
</template>
