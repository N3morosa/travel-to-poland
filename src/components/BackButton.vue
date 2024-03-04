<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
  <button
    type="button"
    @click="router.back()"
    class="bg-pink-700 text-white rounded-md px-3"
  >
    <
  </button>
</template>
