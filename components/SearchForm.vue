<script setup lang="ts">
const loc = ref("");
const { getWeather } = useWeather();
</script>
<template>
  <div>
    <input v-model="loc" type="text" />
    <button @click="getWeather(loc)">Get weather forecast</button>
  </div>
</template>
<style scoped></style>
