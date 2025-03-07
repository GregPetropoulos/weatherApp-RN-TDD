import { StyleSheet } from 'react-native';
import { View, Text } from '../../components/Themed';
import React from 'react';

const CurrentLocationScreen = () => {
  return (
    <View testID='CurrentLocationScreen' style={{ flex: 1 }}>
      <Text>Current Location Screen</Text>
      <Text>WeatherCoordinates</Text>
    </View>
  );
};

export default CurrentLocationScreen;

const styles = StyleSheet.create({
  text: {}
});
