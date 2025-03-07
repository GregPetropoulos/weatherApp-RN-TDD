import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import WeatherCurrent from '@/components/WeatherCurrent';

const CurrentWeatherScreen = () => {
  return (
   <View testID='CurrentWeatherScreen' style={{ flex: 1 }}>
         <Text>The Weather is 100F</Text>
         <Text>Current Weather Screen</Text>
       </View>
  );
}
export default CurrentWeatherScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
