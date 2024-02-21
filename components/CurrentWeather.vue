<script setup lang="ts">
const { weatherData } = useWeather();

watchEffect(() => {
  console.log("WATCH EFFECT", weatherData.value);
});
</script>
<template>
  <div class="currentWeatherWrapper">
    <div class="weatherInfo">
      <h1 class="locaton">
        {{ weatherData.city.name }}, {{ weatherData.list[0].dt }}
      </h1>
      <div class="conditions">
        <span class="conditions_item"
          >Temperature: {{ Math.round(weatherData.list[0].main.temp) }}° C</span
        >
        <span class="conditions_item"
          >Humidity: {{ weatherData.list[0].main.humidity }}%</span
        >
        <span class="conditions_item"
          >Wind: {{ weatherData.list[0].wind.speed }} m/s</span
        >
      </div>
    </div>
    <div></div>
  </div>
</template>
<style scoped>
.currentWeatherWrapper {
  display: flex;
}
.weatherInfo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.locaton {
  margin: 0;
}
.conditions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.conditions_item {
  font-size: 1rem;
}
</style>
