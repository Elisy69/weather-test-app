<script setup lang="ts">
const { weatherData } = useWeather();

watchEffect(() => {
  console.log("WATCH EFFECT", weatherData.value);
});
</script>
<template>
  <div>Im CURRENT WEATHER</div>
  <h1 v-if="weatherData">{{ weatherData?.city.name }}</h1>
</template>
<style scoped></style>
