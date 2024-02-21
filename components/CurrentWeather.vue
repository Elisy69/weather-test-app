<script setup lang="ts">
import { getDateString } from "~/helpers/getDateString";
const { weatherData } = useWeather();
</script>
<template>
  <div class="currentWeatherWrapper">
    <div class="weatherInfo_left">
      <div>
        <h1 class="location">{{ weatherData.city.name }},</h1>
        <h3 class="location">{{ getDateString(0) }}</h3>
      </div>
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
    <div class="weatherInfo_right">
      <div class="weatherIconWrapper">
        <img
          class="weatherIcon"
          :src="`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`"
        />
      </div>
      <div class="descrWrapper">
        <span class="weatherDescr">{{
          weatherData.list[0].weather[0].main
        }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.currentWeatherWrapper {
  display: flex;
  height: 60%;
}
.weatherInfo_left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}
.location {
  margin: 0;
}
.conditions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.conditions_item {
  font-size: 1rem;
}
.weatherInfo_right {
  width: 50%;
}
.weatherIconWrapper {
  height: 70%;
}
.weatherIcon {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.descrWrapper {
  display: flex;
  justify-content: center;
}
.weatherDescr {
  font-size: 1.5rem;
}
</style>
