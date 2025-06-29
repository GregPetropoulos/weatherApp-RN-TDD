import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppContextType, Location } from '../types';
import {
  getLocations,
  saveLocations,
  getDefaultLocation,
  saveDefaultLocation
} from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LocationContext = createContext<AppContextType | undefined>(
  undefined
);

export const LocationProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [defaultLocation, setDefaultLocationState] = useState<Location | null>({
    id: '',
    name: '',
    lat: 0,
    lon: 0
  });

  useEffect(() => {
    // AsyncStorage.clear()
    const init = async () => {
      const savedLocations = await getLocations();
      console.log('ASYNC STORAGE===savedLocations-======', savedLocations);
      const savedDefault = await getDefaultLocation();
      // console.log('@@@@@@savedDefault@@@@@---------', savedDefault);
      setLocations(savedLocations);
      setDefaultLocationState(savedDefault);
    };
    init();
  }, []);

  const addLocation = (location: Location) => {
    const updatedLocations =[...locations, location]
    const newLocations = [...new Set(updatedLocations)];
    setLocations(newLocations);
    saveLocations(newLocations);
    if (!defaultLocation) {
      setDefaultLocationState(location);
      saveDefaultLocation(location);
    }
  };

  const removeLocation = (id: string) => {
    const newLocations = locations.filter((loc) => loc.id !== id);
    setLocations(newLocations);
    saveLocations(newLocations);
    if (defaultLocation?.id === id) {
      setDefaultLocationState(null);
      saveDefaultLocation(null);
    }
  };

  const setDefaultLocation = (location: Location) => {
    setDefaultLocationState(location);
    saveDefaultLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        addLocation,
        removeLocation,
        defaultLocation,
        setDefaultLocation
      }}>
      {children}
    </LocationContext.Provider>
  );
};
export const useLocationCtx = (): AppContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
