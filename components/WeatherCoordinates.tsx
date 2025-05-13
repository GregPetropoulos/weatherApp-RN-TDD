import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const WeatherCoordinates = () => {
  return (
    <View testID='WeatherCoordinatesComponent'>
      <Text>WeatherCoordinates</Text>
      <Text>Raleigh, NC, USA</Text>
    </View>
  );
};

export default WeatherCoordinates;

const styles = StyleSheet.create({
  text: {}
});
