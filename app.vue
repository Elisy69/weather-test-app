<script setup lang="ts">
import "~/styles/normalize.css";
import "~/styles/global.css";
const { weatherData, errorMessage } = useWeather();
</script>

<template>
  <div class="widgetWrapper">
    <SearchForm />
    <WeatherDataContainer v-if="weatherData && !errorMessage" />
    <div v-if="!weatherData && !errorMessage">
      Hello! Type a city name and press find to get a weather forecast!
    </div>
    <div v-if="errorMessage">Oops, something went wrong, try again!</div>
  </div>
</template>
<style>
.widgetWrapper {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
}
</style>
