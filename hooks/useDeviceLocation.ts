// hooks/useLocation.js
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {
  useForegroundPermissions,
  useBackgroundPermissions
} from 'expo-location';
type LocationState = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
const useDeviceLocation = () => {
  const [location, setLocation] = useState<LocationState | null>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foregroundPermission, requestForegroundPermission] =
    useForegroundPermissions();
  const [backgroundPermission, requestBackgroundPermission] =
    useBackgroundPermissions();

  // Get current location
  const getLocation = async () => {
    // console.log('getLocation');
    try {
      setIsLoading(true);

      // Check foreground permission
      if (foregroundPermission?.status !== 'granted') {
        const { status } = await requestForegroundPermission();
        if (status !== 'granted') {
          setErrorMsg('Foreground location permission denied');
          return;
        }
      }

      // Get current position
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High
      });

      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      });
    } catch (er: any) {
      setErrorMsg(er.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Watch position for real-time updates (including background)
  const watchLocation = async () => {
    try {
      setIsLoading(true);

      // Check both permissions
      if (foregroundPermission?.status !== 'granted') {
        const { status } = await requestForegroundPermission();
        if (status !== 'granted') {
          setErrorMsg('Foreground location permission denied');
          return;
        }
      }

      if (backgroundPermission?.status !== 'granted') {
        const { status } = await requestBackgroundPermission();
        if (status !== 'granted') {
          setErrorMsg('Background location permission denied');
          return;
        }
      }

      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000,
          distanceInterval: 10
        },
        (locationUpdate) => {
          setLocation({
            latitude: locationUpdate.coords.latitude,
            longitude: locationUpdate.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          });
        }
      );

      return subscription; // Return subscription for cleanup
    } catch (er: any) {
      setErrorMsg(er.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if location services are enabled
  const checkLocationServices = async () => {
    const isEnabled = await Location.hasServicesEnabledAsync();
    if (!isEnabled) {
      setErrorMsg('Location services are not enabled');
    }
    return isEnabled;
  };

  // Initial effect to check services and get location
  useEffect(() => {
    checkLocationServices().then((isEnabled) => {
      if (isEnabled) {
        getLocation();
      }
    });

    // Cleanup function
    return () => {
      // Note: If using watchLocation, store and remove subscription
    };
  }, []);

  return {
    location,
    errorMsg,
    isLoading,
    foregroundPermission,
    backgroundPermission,
    requestForegroundPermission,
    requestBackgroundPermission,
    getLocation,
    watchLocation,
    checkLocationServices
  };
};

export default useDeviceLocation;

// import { View, Text } from 'react-native';
// import React, { useState, useEffect } from 'react';

// import * as Location from 'expo-location';
// import { useForegroundPermissions, useBackgroundPermissions } from 'expo-location';

// export default function useDeviceLocation() {
//   const [location, setLocation] = useState({});
//   const [errorMsg, setErrorMsg] = useState<null | string>(null);
//   const [loading, setLoading] = useState(false);
//     const [foregroundPermission, requestForegroundPermission] = useForegroundPermissions();
//   const [backgroundPermission, requestBackgroundPermission] = useBackgroundPermissions();

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   const getCurrentLocation = async () => {
//     setLoading(true);
//     let { status } = await Location.requestForegroundPermissionsAsync(); // For ios this is 'When In Use'

//     if (status !== 'granted') {
//       setErrorMsg('Permission to access location was denied');
//       setLoading(false);
//       return;
//     }
//     try {
//       let deviceLocation = await Location.getCurrentPositionAsync({});
//       setLocation(deviceLocation);
//     } catch (e: any) {
//       setErrorMsg(`Error getting location: ${e.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { location, errorMsg, loading };
// }
