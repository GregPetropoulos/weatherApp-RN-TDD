import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true)
        // headerShown: true,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          // TODO fix Icon set fails basic rendering RNTL
          // tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />
        }}
      />
      <Tabs.Screen
        name='weather'
        options={{
          title: 'Weather',
          // TODO Fix Icon set fails basic rendering in RNTL
          // tabBarIcon: ({ color }) => <TabBarIcon name='cloud' color={color} />
        }}
      />
    </Tabs>
  );
}
