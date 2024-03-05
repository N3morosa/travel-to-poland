<script lang="ts" setup>
defineProps({
  sight: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="lg:basis-1/3 m-3 p-5 bg-white shadow-gray-600 shadow-md">
    <img    
      :src="`/images/${sight.img}`"
      :alt="sight.id"
      class="mx-auto"
    />
    <h3 class="text-center py-3">{{ sight.name }}</h3>
  </div>
</template>
