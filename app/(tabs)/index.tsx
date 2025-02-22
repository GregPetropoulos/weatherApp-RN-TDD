import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import moment from 'moment';
import WeatherCoordinates from '@/components/WeatherCoordinates';
import WeatherCurrent from '@/components/WeatherCurrent';

export default function TabOneScreen() {
  const now = moment(new Date());
  return (
    // <View style={styles.container}>
    <LinearGradient
      testID='linearGradient-HomeScreen'
      colors={[Colors.dark.background, Colors.light.background]}
      // colors={['#4c669f', '#3b5998', '#192f6a']}
      // colors={['rgba(0,0,0,0.8)', 'transparent']}

      style={styles.background}>
      <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
      <Text style={styles.day}>{now.format('dddd')}</Text>
      <Text style={styles.title}>Welcome!</Text>

      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <WeatherCurrent/>
      <Text testID='home-screen-divider' style={styles.divider}>Or</Text>
      <WeatherCoordinates/>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'orange'
  },
  background: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'orange'
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: 300
  },
  date: {
    color: Colors.dark.text,
    fontSize: 14
  },
  day: {
    fontSize: 36,
    color: Colors.dark.text
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  divider:{
color:Colors.dark.text,
textAlign:'center'
  }
});
