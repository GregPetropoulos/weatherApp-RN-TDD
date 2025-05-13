import { StyleSheet, Button as RNButton, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import WeatherCoordinates from '@/components/WeatherCoordinates';
import WeatherCurrent from '@/components/WeatherCurrent';
import DateDay from '@/components/DateDay';
import Button from '@/components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DIRECTIONS } from '@/constants/global';
import IconButton from '@/components/IconButton';
import LocationService from '@/services/LocationService';
// TODO MAKE FETCH CALL TO WEATHER API WTIH COORDS
// TODO SET USER LOCATION GLOBAL STATE ZUSTAND
// TODO USE EXPO LOCATION
const UknownLocationHomeScreen = () => {
  const handleFetchPosition = async () => {
    //todo once you get the cordinates set the users added location
    const position = await LocationService.getCurrentPosition();
    console.log('POSITION', position);
    return position;
  };
  return (
    <View
      style={{
        flex: 1,
        borderColor: 'purple',
        borderWidth: 2,
        //TODO add in primary background color
        // alignItems:'flex-start',
        //  justifyContent:'center',
        flexDirection: 'row'
      }}>
      {/* <View style={{ flex: 0.5 }}> */}
      <IconButton
        name='plus'
        iconName='MaterialCommunityIcons'
        size={28}
        // titleStyle={{color:'yellow'}}
        // color={'red'}
        label={'Add Location'}
        onPress={handleFetchPosition}
      />
      {/* </View> */}
      {/* <View style={{ flex: 0.5 }}> */}
      <IconButton
        name='map'
        iconName='MaterialCommunityIcons'
        size={28}
        label={'Map'}
        onPress={() => console.log('IconButton MAP pressed')}
      />
      {/* </View> */}
    </View>
  );
};
export default function TabHomeScreen() {
  const isUserLocation = false; // Make this a global state
  return (
    <>
      {isUserLocation ? (
        <Text>Full Home Component</Text>
      ) : (
        <UknownLocationHomeScreen />
      )}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // backgroundColor: 'orange'
//   },
//   background: {
//     flex: 1,
//     alignItems: 'center'
//     // justifyContent: 'center',
//     // backgroundColor: 'orange'
//     // position: 'absolute',
//     // left: 0,
//     // right: 0,
//     // top: 0,
//     // height: 300
//   },

//   weatherLocContent: {
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     marginTop: 10
//   },

//   divider: {
//     marginVertical: 25,
//     // color:Colors.dark.text,
//     color: 'red',
//     textAlign: 'center'
//   }
// });
// <View style={styles.container} testID='HomeScreen'>

//   {/* <View style={{ flexDirection: 'row', flex: 1 }}>
//     <View style={{ flex: 0.5 }}>
//       <Button
//         label={'Add Location'}
//         onPress={() => console.log('Add Location')}
//         icon={
//           <MaterialCommunityIcons
//             name={'plus'}
//             size={24}
//             color={'#e01d1d'}
//           />
//         }
//         iconPosition={DIRECTIONS.LEFT}
//       />
//     </View>
//     <View style={{ flex: 0.5 }}>
//       <Button
//         label={'Add Location'}
//         onPress={() => console.log('Add Location')}
//         icon={
//           <MaterialCommunityIcons
//             name={'map'}
//             size={24}
//             color={'#e01d1d'}
//           />
//         }
//         iconPosition={DIRECTIONS.LEFT}

//       />
//     </View>
//   </View> */}
//   <LinearGradient
//     // testID='HomeScreen'
//     colors={[Colors.dark.background, Colors.light.background]}
//     // colors={['#4c669f', '#3b5998', '#192f6a']}
//     // colors={['rgba(0,0,0,0.8)', 'transparent']}

//     style={styles.background}>
//     <DateDay />
//     {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
//     <View style={styles.weatherLocContent}>
//       <WeatherCurrent />
//       <Text testID='home-screen-divider' style={styles.divider}>
//         Or
//       </Text>
//       <WeatherCoordinates />
//     </View>
//   </LinearGradient>
// </View>
