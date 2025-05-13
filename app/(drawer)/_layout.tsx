import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, usePathname, useSegments } from 'expo-router';
import { useTheme } from '@react-navigation/native';
//TODO THE HEADER CITY NAME SHOULD COME FROM GLOBAL STATE
//TODO EACH ADDED CITY LOCATION IS A DYNAMIC SCREEN 
import DrawerContent from '@/components/DrawerContent';
export default function DrawerLayout() {
  const { colors } = useTheme();
  const pathname = usePathname();
  const segments = useSegments();
  console.log('SEGMENTS', segments);
  console.log(' const pathname = usePathname();', pathname);
  return (
    <Drawer
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        drawerType: 'slide',
        // Location name of city
        // date and time ex: Tue 09:31 AM
        headerTitle(props) {
          return (
            <Text style={{ color: props.tintColor }}>
              city name {props.children}{' '}
            </Text>
          );
        },
        headerRight(props) {
          return (
            <MaterialCommunityIcons
              name='plus-circle-outline'
              size={24}
              color={props.tintColor}
            />
          );
        },
        drawerStyle: {
          backgroundColor: colors.card,
          borderRightColor: colors.border,
          borderRightWidth: 1
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text
        // drawerIcon(props) {
        //     return  <MaterialCommunityIcons name="menu" size={24} color="black" />
        // },
        // header: () => null,
        // header(props) {
        //     return <Text>{props.route.name}</Text>
        // },
      }}>
      <Drawer.Screen
        name='(tabs)' // TODO WIP Show the route name in header not tabs
        options={{
          // drawerLabel: 'tabtest',
          // title: 'Tabssss',
          headerShown: true
        }}
      />
    </Drawer>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 24,
//     lineHeight: 30
//   },
//   drawerIconLabel: {
//     fontSize: 16,
//     fontWeight: 500,
//     marginLeft: 5
//   }
// });
