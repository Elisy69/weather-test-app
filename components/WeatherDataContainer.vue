<script setup lang="ts">
const { weatherData } = useWeather();
</script>
<template>
  <div class="weatherdatacontainer">
    <CurrentWeather />
    <div class="forecastWrapper">
      <ForecastItem
        v-for="(day, index) in weatherData.list.slice(1, 4)"
        :dayNum="index"
        :data="day"
      />
    </div>
  </div>
</template>
<style scoped>
.forecastWrapper {
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
}
.weatherdatacontainer {
  width: 100%;
  height: 100%;
}
</style>
