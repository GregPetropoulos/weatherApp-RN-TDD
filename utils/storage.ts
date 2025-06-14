

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Location } from '../types';

export const saveLocations = async (locations: Location[]) => {
  try {
    await AsyncStorage.setItem('locations', JSON.stringify(locations));
  } catch (error) {
    console.error('Error saving locations:', error);
  }
};

export const getLocations = async (): Promise<Location[]> => {
  try {
    const locations = await AsyncStorage.getItem('locations');
    return locations ? JSON.parse(locations) : [];
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
};

export const saveDefaultLocation = async (location: Location| null) => {
  try {
    await AsyncStorage.setItem('defaultLocation', JSON.stringify(location));
  } catch (error) {
    console.error('Error saving default location:', error);
  }
};

export const getDefaultLocation = async (): Promise<Location | null> => {
  try {
    const location = await AsyncStorage.getItem('defaultLocation');
    return location ? JSON.parse(location) : null;
  } catch (error) {
    console.error('Error fetching default location:', error);
    return null;
  }
};