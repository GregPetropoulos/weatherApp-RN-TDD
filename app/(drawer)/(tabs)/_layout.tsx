import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Colors from '@/constants/Colors';
import { useTheme } from '@react-navigation/native';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        // headerShown:false,
        // headerStatusBarHeight: 30,
        // headerRight(props) {
        //     return <MaterialCommunityIcons name="pencil" size={24} color={props.tintColor} />
        // },
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          borderTopWidth: 1
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        header(props) {
          return (
            <View
              style={{
                borderColor: 'red',
                borderWidth: 2,
                flexDirection: 'row'
              }}>
              <View>
                <Text style={{ fontSize: 24 }}>{props.options.title}</Text>
              </View>
              <View>
                <MaterialCommunityIcons
                  name='pencil'
                  size={24}
                  onPress={() => console.log('pencil')}
                  color={props.options.headerTintColor}
                />
              </View>
            </View>
          );
        }
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='sun-o' size={28} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='weather'
        options={{
          title: 'Weather',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='location-on' size={28} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
