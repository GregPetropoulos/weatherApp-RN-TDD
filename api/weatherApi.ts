import axios from 'axios';
import { WeatherData } from '../types';

const BASE_URL = 'https://api.weather.gov';
const USER_AGENT = 'WeatherApp/1.0 gregpetropoulos@yahoo.com'; // Replace with your email //!FIND OUT IF EVEN NEED MY EMAIL HERE

export const fetchWeather = async (
  lat: number | null,
  lon: number | null
): Promise<WeatherData> => {
  try {
    // Step 1: Get gridpoint data
    const pointResponse = await axios.get(`${BASE_URL}/points/${lat},${lon}`, {
      headers: { 'User-Agent': USER_AGENT }
    });

    const { gridId, gridX, gridY } = pointResponse.data.properties;
    const { city, state } =
      pointResponse.data.properties.relativeLocation.properties;

    // Step 2: Get forecast
    const forecastResponse = await axios.get(
      `${BASE_URL}/gridpoints/${gridId}/${gridX},${gridY}/forecast`,
      {
        headers: { 'User-Agent': USER_AGENT }
      }
    );

    const currentPeriod = forecastResponse.data.properties.periods[0];

    return {
      name: `${city}, ${state}`,
      temperature: currentPeriod.temperature,
      shortForecast: currentPeriod.shortForecast,
      detailedForecast: currentPeriod.detailedForecast,
      humidity: currentPeriod.relativeHumidity?.value,
      windSpeed: currentPeriod.windSpeed
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
