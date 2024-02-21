import { ref } from "vue";

type SomeWeatherDataType = any;

const weatherData = ref<null | SomeWeatherDataType>(null);
const errorMessage = ref(false);
const isLoading = ref(false);

export function useWeather() {
  const getWeather = async (location: string) => {
    try {
      errorMessage.value = false;
      isLoading.value = true;
      const data = await $fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=0daebd284041661535effcb38b6df858&units=metric`,
      );
      isLoading.value = false;
      weatherData.value = data;
    } catch (error) {
      isLoading.value = false;
      errorMessage.value = true;
    }
  };
  return { weatherData, getWeather, errorMessage, isLoading };
}
