<script lang="ts" setup>
defineProps({
  sight: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="basis-1/3 mx-3 p-5 bg-white shadow-gray-600 shadow-md">
    <img
      :src="`/images/${sight.img}`"
      :alt="sight.id"
    />
    <h3 class="py-3">{{ sight.name }}</h3>
  </div>
</template>
