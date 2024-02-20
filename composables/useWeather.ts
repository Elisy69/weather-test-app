import { ref } from "vue";

type SomeWeatherDataType = unknown;

const weatherData = ref<null | SomeWeatherDataType>(null);
const errorMessage = ref(false);

export function useWeather() {
  const getWeather = async (location: String) => {
    try {
      errorMessage.value = false;
      const data = await $fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=0daebd284041661535effcb38b6df858&units=metric`,
      );
      console.log(data);
      weatherData.value = data;
    } catch (error) {
      errorMessage.value = true;
      console.log(error);
    }
  };
  return { weatherData, getWeather, errorMessage };
}
