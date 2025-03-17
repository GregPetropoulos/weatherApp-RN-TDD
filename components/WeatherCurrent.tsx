import React,{useCallback} from 'react';
import { View, Text } from './Themed';
import { useNavigation, Link } from 'expo-router';
import LocationService from '@/services/LocationService';
import Button from './Button';
import { Pressable } from 'react-native';
const WeatherCurrent = () => {
  const navigation:any = useNavigation()
  const handleFetch = async ()=>{
    console.log('HIT')
const position = await LocationService.getCurrentPosition();
console.log('-------------POSITION-----',position)

// navigation.navigate('weather')
  }
// const getPosition=()=>{
// const position=  LocationService.getCurrentPosition()
// return position
// }

  return (
    <View testID='WeatherCurrentComponent'>
      <Text>WeatherCurrent</Text>
      <Text>100F Sunny</Text>
      {/* <Link href='/(tabs)/weather' asChild>
      <Pressable onPress={getPosition}>

      <Text>GET POSITION</Text>
      </Pressable> */}
      <Button label='Current Location' testID='weatherCurrentButton' onPress={handleFetch}/>
      {/* </Link> */}
    </View>
  );
};

export default WeatherCurrent;
