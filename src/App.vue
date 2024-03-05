<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
const route = useRoute();
</script>

<template>
  <TheNavigation />
  <div class="container mx-auto my-40 flex flex-row flex-wrap items-center">
    <RouterView 
      v-slot="{ Component }"
      :key="route.path"
    >
      <Transition
        name="fade" 
        mode="out-in"
      >
        <component
          :is="Component"
        />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
