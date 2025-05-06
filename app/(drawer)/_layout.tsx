import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { usePathname, useSegments } from 'expo-router';
import { useTheme } from '@react-navigation/native';

export default function DrawerLayout() {
  const {colors}= useTheme()
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const segments = useSegments();
  console.log('SEGMENTS', segments);
  console.log(' const pathname = usePathname();', pathname);
  return (
    <Drawer
      drawerContent={() => {
        return (
          <View
            style={{
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              padding: 24,
              gap: 16
            }}>
            <Text style={styles.text}>Hello from the drawer 👋</Text>
          </View>
        );
      }}
      //! STOPPED HERE WITH HEADER
      screenOptions={{
        drawerType: 'slide',
        headerTitle(props) {
          return (
            <Text style={{ color: props.tintColor }}>
              test {props.children}{' '}
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
          borderRightWidth: 1,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.text,
        // drawerIcon(props) {
        //     return  <MaterialCommunityIcons name="menu" size={24} color="black" />
        // },
        // header: () => null,
        // header(props) {
        //     return <Text>{props.route.name}</Text>
        // },
      }}>
      <Drawer.Screen name='(tabs)' options={{ headerShown: true }} />
      <Drawer.Screen name='settings' options={{ headerShown: false }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 30
  }
});
