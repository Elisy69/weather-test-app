<script setup lang="ts">
import { getDateString } from "~/helpers/getDateString";
const props = defineProps(["dayNum", "data"]);
const isImgLoading = ref(true);

const handleLoading = () => {
  isImgLoading.value = false;
};
</script>
<template>
  <div class="forecastItemWrapper">
    <h1 class="location">{{ getDateString(props.dayNum + 1) }}</h1>
    <div class="weatherInfoWrapper">
      <div class="iconWrapper">
        <img
          class="icon"
          :src="`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`"
        />
      </div>
      <div class="weatherInfo">
        <span class="info">{{ Math.round(props.data.main.temp) }}° C</span>
        <span class="info">{{ props.data.weather[0].main }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.forecastItemWrapper {
  border: 2px solid black;
  border-radius: 1rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 70%;
}
.location {
  font-size: 1rem;
  margin: 0;
}
.weatherInfoWrapper {
  display: flex;
  gap: 0.4rem;
  width: 100%;
  height: 100%;
}
.iconWrapper {
  width: 40%;
  margin: 0.1rem;
}
.icon {
  object-fit: cover;

  width: 100%;
  height: 100%;
}
.weatherInfo {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
}
</style>
