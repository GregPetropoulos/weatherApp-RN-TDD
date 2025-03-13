import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import WeatherCoordinates from '@/components/WeatherCoordinates';
import WeatherCurrent from '@/components/WeatherCurrent';
import DateDay from '@/components/DateDay';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        testID='HomeScreen'
        colors={[Colors.dark.background, Colors.light.background]}
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        // colors={['rgba(0,0,0,0.8)', 'transparent']}

        style={styles.background}>
          <DateDay/>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <View style={styles.weatherLocContent}>

        <WeatherCurrent />
        <Text testID='home-screen-divider' style={styles.divider}>
          Or
        </Text>
        <WeatherCoordinates />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'orange'
  },
  background: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center',
    // backgroundColor: 'orange'
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: 300
  },
 
  weatherLocContent:{
    backgroundColor:'transparent', alignItems:'center', marginTop:10
  },
  
  divider: {
    marginVertical: 25,
    // color:Colors.dark.text,
    color: 'red',
    textAlign: 'center'
  }
});
