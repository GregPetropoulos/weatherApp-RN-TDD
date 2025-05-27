type Geometry = {
  type: string | null;
  coordinates: number[] | null; //in order long lat reversed from normal lat long
};
type Forecast12hPeriods = [
  {
    number: number | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    isDaytime: boolean;
    temperature: number | null;
    temperatureUnit: string | null;
    temperatureTrend: string | null;
    probabilityOfPrecipitation: {
      unitCode: string | null;
      value: number | null;
    };
    windSpeed: string | null;
    windDirection: string | null;
    icon: string | null; //link
    shortForecast: string | null;
    detailedForecast: string | null;
  }
];
type ForecastHourly = [
  {
    number: number | null;
    name: string | null;
    startTime: string | null;
    endTime: string | null;
    isDaytime: boolean;
    temperature: number | null;
    temperatureUnit: string | null;
    temperatureTrend: string | null;
    probabilityOfPrecipitation: {
      unitCode: string | null;
      value: number | null;
    };
    dewpoint: {
      unitCode: string | null;
      value: number | null;
    };
    relativeHumidity: {
      unitCode: string | null;
      value: number | null;
    };
    windSpeed: string | null;
    windDirection: string | null;
    icon: string | null; //Link
    shortForecast: string | null;
    detailedForecast: string | null;
  }
];
export interface WeatherDataResponse {
  city: string | null;
  county: string | null;
  state: string | null;
  forecast12HourPeriods7Days: Forecast12hPeriods;
  forecastHourly7days: ForecastHourly;
  radarStation: string | null;
  timeZone: string | null;

  // For geojson/maps etc
  id: string | null;
  type: string | null;
  geometry: Geometry;
}
