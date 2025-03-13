import { StyleSheet } from 'react-native';
import { View, Text } from './Themed';
import React from 'react';

const WeatherCoordinates = () => {
  return (
    <View testID='weather-coordinates'>
      <Text>WeatherCoordinates</Text>
      <Text>Raleigh, NC, USA</Text>
    </View>
  );
};

export default WeatherCoordinates;

const styles = StyleSheet.create({
  text: {}
});
