<script setup lang="ts">
const loc = ref("");
const { getWeather } = useWeather();
</script>
<template>
  <div class="searchFormWrapper">
    <input v-model="loc" type="text" />
    <button @click="getWeather(loc)">Find</button>
  </div>
</template>
<style scoped>
.searchFormWrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
