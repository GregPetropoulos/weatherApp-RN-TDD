import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCustomThemeCtx } from '@/context/ThemeContext';
import { fetchWeather } from '../api/weatherApi';
import { Location, WeatherData } from '../types';

const WeatherDisplay: React.FC<{ location: Location }> = ({ location }) => {
  const { theme } = useCustomThemeCtx();
  const [weather, setWeather] = useState<WeatherData | null>(null);
console.log('ZLOCATIONZZZZZZZ',location)
  useEffect(() => {
    const loadWeather = async () => {
      
      try {
        const data = await fetchWeather(location.lat, location.lon);
        console.log('DATA',data)
      //!NEED TO FIND OUT WHY NAME IS NOT SHOWING UP FROM ASYNC STORAG
        setWeather(data);
      } catch (error) {
        console.error('Failed to load weather:', error);
      }
    };
    if(location.lat && location.lon){
      loadWeather();
      }
  }, [location.lat, location.lon]);

  if (!weather) return <Text style={{ color: theme.colors.text }}>Loading...</Text>;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{weather.name}</Text>
      <Text style={[styles.text, { color: theme.colors.text }]}>Temperature: {weather.temperature}°F</Text>
      <Text style={[styles.text, { color: theme.colors.text }]}>Forecast: {weather.shortForecast}</Text>
      <Text style={[styles.text, { color: theme.colors.text }]}>Details: {weather.detailedForecast}</Text>
      {weather.humidity && (
        <Text style={[styles.text, { color: theme.colors.text }]}>Humidity: {weather.humidity}%</Text>
      )}
      {weather.windSpeed && (
        <Text style={[styles.text, { color: theme.colors.text }]}>Wind Speed: {weather.windSpeed}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  text: { fontSize: 16 },
});

export default WeatherDisplay;