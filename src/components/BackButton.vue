<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
  <button
    type="button"
    @click="router.back()"
    class="bg-pink-700 text-white rounded-md px-5 py-1"
  >
    <slot></slot>
  </button>
</template>
