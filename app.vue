<script setup lang="ts">
import "~/styles/normalize.css";
import "~/styles/global.css";
const { weatherData, errorMessage, isLoading } = useWeather();
</script>

<template>
  <div class="widgetWrapper">
    <SearchForm />
    <WeatherDataContainer v-if="weatherData && !errorMessage && !isLoading" />
    <Loader v-if="isLoading" />
    <div
      class="welcomingMessage"
      v-if="!weatherData && !errorMessage && !isLoading"
    >
      Hello! Type a city name and press find to get a weather forecast!
    </div>
    <div class="errorMessage" v-if="errorMessage && !isLoading">
      Oops, something went wrong, try again!
    </div>
  </div>
</template>
<style>
.widgetWrapper {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 22rem;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
}
.welcomingMessage {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 4rem;
  height: 90%;
}
.errorMessage {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 4rem;
  color: red;
  height: 90%;
}
</style>
