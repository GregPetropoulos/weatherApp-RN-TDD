import React, { useState } from 'react';
import {
  StyleSheet,
  Button as RNButton,
  Text,
  View,
  Pressable,
  TextInput,
  ActivityIndicator,
  Alert
} from 'react-native';
import axios from 'axios';
import { useCustomThemeCtx } from '@/context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherCoordinates from '@/components/WeatherCoordinates';
import WeatherCurrent from '@/components/WeatherCurrent';
import DateDay from '@/components/DateDay';
import Button from '@/components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DIRECTIONS } from '@/constants/global';
import IconButton from '@/components/IconButton';
// import LocationService from '@/services/LocationService';
import useDeviceLocation from '@/hooks/useDeviceLocation';
import { getWeatherLocation } from '@/services/weather';
import { useLocationCtx } from '@/context/LocationContext';
import { router } from 'expo-router';
import { Location, WeatherDataResponse } from '@/types';

const addLocation = () => {
  const [city, setCity] = useState('');
  const { theme } = useCustomThemeCtx();
  const { addLocation } = useLocationCtx();
  const { location } = useDeviceLocation();
  const handleAddLocation = () => {
    // console.log('add');
  };
  const handleUseCurrentLocation = async () => {
    try {
      const response = await axios.get(
        `https://api.weather.gov/points/${location?.latitude},${location?.longitude}`,
        {
          // headers: { 'User-Agent': 'WeatherApp/1.0 test@gmail.com' },
        }
      );

      const { city, state, }: WeatherDataResponse = response.data.properties.relativeLocation.properties;
      const newLocation: Location = {
        id: Date.now().toString(),
        name: `${city}, ${state}`,
        lat: location?.latitude ?? 0 ,
        lon: location?.longitude ?? 0
      };
      addLocation(newLocation);
      // console.log('newLocation-----', newLocation);
      router.back();
    } catch (er) {
      Alert.alert('Error', 'Failed to fetch current location');
    }
  };
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: theme.colors.card, color: theme.colors.text }
        ]}
        placeholder='Enter city name'
        placeholderTextColor={theme.colors.text}
        value={city}
        onChangeText={setCity}
      />
      <Pressable
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleAddLocation}>
        <Text style={styles.buttonText}>Add City</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={handleUseCurrentLocation}>
        <Text style={styles.buttonText}>Use Current Location</Text>
      </Pressable>
    </View>
  );
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       borderColor: 'purple',
  //       borderWidth: 2,
  //       //TODO add in primary background color
  //       // alignItems:'flex-start',
  //       //  justifyContent:'center',
  //       flexDirection: 'row'
  //     }}>
  //     {/* <View style={{ flex: 0.5 }}> */}
  //     <IconButton
  //       name='plus'
  //       iconName='MaterialCommunityIcons'
  //       size={28}
  //       // titleStyle={{color:'yellow'}}
  //       // color={'red'}
  //       label={'Add Location'}
  //       // onPress={handleFetchPosition}
  //     />
  //     {/* </View> */}
  //     {/* <View style={{ flex: 0.5 }}> */}
  //     <IconButton
  //       name='map'
  //       iconName='MaterialCommunityIcons'
  //       size={28}
  //       label={'Map'}
  //       onPress={() => console.log('IconButton MAP pressed')}
  //     />
  //     {/* </View> */}
  //     <View>
  //       <Button label='Refresh Location'
  //       // onPress={getLocation}
  //       onPress={()=>{}}
  //       />
  //       {/* <Text>Current Location from Store: {JSON.stringify(location)}</Text> */}
  //       <Button
  //         label='get weather for default location'
  //         // onPress={handleWeatherFetch}
  //       onPress={()=>{}}

  //       />
  //     </View>
  //   </View>
  // );
};

export default addLocation;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { padding: 12, borderRadius: 8, marginBottom: 16 },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8
  },
  buttonText: { color: '#FFFFFF', fontSize: 16 }
});
