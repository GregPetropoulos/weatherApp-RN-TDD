import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCustomThemeCtx } from '@/context/ThemeContext';
import { useLocationCtx } from '@/context/LocationContext';
// import LocationCard from '../src/components/LocationCard'; // TODO 
import { Link } from 'expo-router';


const LocationsScreen = () => {
  const { theme } = useCustomThemeCtx();
  const { locations } = useLocationCtx();
// console.log(theme )
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Locations</Text>
      {locations.map((location) => (
        <View><Text>Test a location card here {location.name}</Text></View>
        // <LocationCard key={location.id} location={location} />
      ))}
      <Link href="/add-location" asChild>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.buttonText}>Add Location</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  button: { padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16 },
});

export default LocationsScreen;