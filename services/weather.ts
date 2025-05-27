import React from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.weather.gov';
import { WeatherDataResponse } from '@/types';

export const getWeatherLocation = async (
  lat: number | undefined,
  long: number | undefined
): Promise<WeatherDataResponse> => {
  try {
    const {
      data: { properties },
      status,
      statusText
    } = await axios.get(`${BASE_URL}/points/${lat},${long}`);

    console.log(status);
    if (status === 200) {
      //TRANSFORM DATA
      // Weather API requires secondary request by providing urls in initial response for county, 12 hour forecast and hourly forecast,
      const getCounty = properties.county
        ? await axios
            .get(properties.county)
            .then((resp) => resp.data.properties.name)
        : null;

      const getEvery12HourForecast = properties.forecast
        ? await axios
            .get(properties.forecast)
            .then((resp) => resp.data.properties.periods)
        : null;

      const getHourlyForecast = properties.forecastHourly
        ? await axios
            .get(properties.forecastHourly)
            .then((resp) => resp.data.properties.periods)
        : null;

      const weatherDataResponse: WeatherDataResponse = {
        city: properties.relativeLocation.properties.city,
        county: getCounty,
        state: properties.relativeLocation.properties.state,
        forecast12HourPeriods7Days: getEvery12HourForecast,
        forecastHourly7days: getHourlyForecast,
        radarStation: properties.radarStation,
        timeZone: properties.timeZone,

        //For maps GEOJSON
        //===========
        id: properties.id,
        type: properties.relativeLocation.type,
        geometry: {
          type: properties.relativeLocation.geometry.type,
          // coordinates order is reversed to [long, lat] from normal [lat, long]
          coordinates: properties.relativeLocation.geometry.coordinates
        }
        //===========
      };
      return weatherDataResponse;
    } else {
      throw new Error(`response error: ${status} ${statusText}`);
    }
  } catch (er) {
    console.error('Error fetching weather data:', er);
    throw er;
  }
};
// EXAMPLE RESPONSE
// {
//   @context: [
//     "https://geojson.org/geojson-ld/geojson-context.jsonld",
//     {
//       @version: "1.1",
//       wx: "https://api.weather.gov/ontology#",
//       s: "https://schema.org/",
//       geo: "http://www.opengis.net/ont/geosparql#",
//       unit: "http://codes.wmo.int/common/unit/",
//       @vocab: "https://api.weather.gov/ontology#",
//       geometry: {
//         @id: "s:GeoCoordinates",
//         @type: "geo:wktLiteral"
//       },
//       city: "s:addressLocality",
//       state: "s:addressRegion",
//       distance: {
//         @id: "s:Distance",
//         @type: "s:QuantitativeValue"
//       },
//       bearing: {
//         @type: "s:QuantitativeValue"
//       },
//       value: {
//       @id: "s:value"
//       },
//       unitCode: {
//         @id: "s:unitCode",
//         @type: "@id"
//       },
//       forecastOffice: {
//         @type: "@id"
//       },
//       forecastGridData: {
//         @type: "@id"
//       },
//       publicZone: {
//         @type: "@id"
//       },
//       county: {
//         @type: "@id"
//       }
//     }
//   ],
//   // =============
//   id: "https://api.weather.gov/points/37.7858,-122.4064",
//   type: "Feature",
//   geometry: {
//     type: "Point",
//     coordinates: [
//       -122.4064,
//       37.7858
//     ]
//   },
//   properties: {
//     @id: "https://api.weather.gov/points/37.7858,-122.4064",
//     @type: "wx:Point",
//     cwa: "MTR",
//     forecastOffice: "https://api.weather.gov/offices/MTR",
//     gridId: "MTR",
//     gridX: 85,
//     gridY: 106,
//     forecast: "https://api.weather.gov/gridpoints/MTR/85,106/forecast",
//     forecastHourly: "https://api.weather.gov/gridpoints/MTR/85,106/forecast/hourly",
//     forecastGridData: "https://api.weather.gov/gridpoints/MTR/85,106",
//     observationStations: "https://api.weather.gov/gridpoints/MTR/85,106/stations",
//     relativeLocation: {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [
//           -122.464979,
//           37.700941
//         ]
//       },
//       properties: {
//         city: "Daly City",
//         state: "CA",
//         distance: {
//           unitCode: "wmoUnit:m",
//           value: 10750.196765434
//         },
//         bearing: {
//           unitCode: "wmoUnit:degree_(angle)",
//           value: 28
//         }
//       }
//     },
//     forecastZone: "https://api.weather.gov/zones/forecast/CAZ006",
//     county: "https://api.weather.gov/zones/county/CAC075",
//     fireWeatherZone: "https://api.weather.gov/zones/fire/CAZ006",
//     timeZone: "America/Los_Angeles",
//     radarStation: "KMUX"
//   }
// }
