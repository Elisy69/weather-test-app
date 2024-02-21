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
  gap: 0.5rem;
  height: 40%;
  align-items: center;
}
.weatherdatacontainer {
  width: 100%;
  height: 90%;
}
</style>
