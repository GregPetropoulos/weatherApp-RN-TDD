import { CustomThemes } from '@/constants/Theme';
import { Theme } from '@react-navigation/native';

export type IconsTypes = {
  MATERIAL_COMMUNITY_ICONS: string;
  MATERIAL_ICONS: string;
  FONT_AWESOME: string;
  BASE_SIZE: number;
};
export type Directions = {
  LEFT: string;
  RIGHT: string;
  UP: string;
  DOWN: string;
  IN: string;
  OUT: string;
};

// THEME TYPES
export type ThemeType = keyof typeof CustomThemes;
export type NavigationNativeTheme = Theme;
export interface ThemeContextType {
  theme: Theme;
  themeType: ThemeType;
  setTheme: (themeType: ThemeType) => void;
}

// ============1st Attempt to weather api======================
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
// ============ End 1st Attempt to weather api======================

// ============2nd Attempt to weather api======================
// export interface WeatherData {
//   name: string; // City name from geocoding
//   temperature: number; // Current period temperature
//   shortForecast: string; // Short description (e.g., "Sunny")
//   detailedForecast: string; // Detailed description
//   humidity?: number; // Relative humidity (if available)
//   windSpeed?: string; // Wind speed (e.g., "10 mph")
// }
export interface WeatherData {
  // name: string;
  // main: { temp: number; humidity: number };
  // weather: { description: string; icon: string }[];
  // wind: { speed: number };
   name: string; // City name from geocoding
  temperature: number; // Current period temperature
  shortForecast: string; // Short description (e.g., "Sunny")
  detailedForecast: string; // Detailed description
  humidity?: number; // Relative humidity (if available)
  windSpeed?: string; // Wind speed (e.g., "10 mph")
}

export interface Location {
  id: string;
  name: string;
  lat: number;
  lon: number;
}

export interface AppContextType {
  locations: Location[];
  addLocation: (location: Location) => void;
  removeLocation: (id: string) => void;
  defaultLocation: Location | null;
  setDefaultLocation: (location: Location) => void;
}


// ============End 2nd Attempt to weather api======================
