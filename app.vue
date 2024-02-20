<script setup lang="ts">
const { weatherData, errorMessage } = useWeather();
</script>

<template>
  <div>
    <SearchForm />
    <WeatherDataContainer v-if="weatherData && !errorMessage" />
    <div v-if="!weatherData && !errorMessage">
      Hello! Type a city name and press find to get a weather forecast!
    </div>
    <div v-if="errorMessage">Oops, something went wrong, try again!</div>
  </div>
</template>
<style scoped></style>
