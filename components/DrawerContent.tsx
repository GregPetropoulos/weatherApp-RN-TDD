import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DrawerCard from './DrawerCard';
import Separator from './Separator';
import { useTheme } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Icons } from '@/constants/Icons';
import { Link } from 'expo-router';
import IconButton from './IconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const DrawerContent = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
//TODO ADD IN LOCATION
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        padding: 24,
        gap: 16,
        flex: 1,
        backgroundColor: colors.background
      }}>
      <Text style={{ ...styles.text, color: colors.text }}>Weather App</Text>
      <Separator />

      <DrawerCard>
        <DrawerCard.ItemRow>
          <MaterialIcons
            name='location-on'
            size={Icons.BASE_SIZE}
            color={colors.primary}
          />
          <Text style={{ ...styles.drawerIconLabel, color: colors.text }}>
            Current Location
          </Text>
        </DrawerCard.ItemRow>
        <DrawerCard.ItemRow>
          <MaterialIcons
            name='location-city'
            size={Icons.BASE_SIZE}
            color={colors.primary}
          />
          <Text style={{ ...styles.drawerIconLabel, color: colors.text }}>
            Raleigh - dont hardcode
          </Text>
        </DrawerCard.ItemRow>
      </DrawerCard>
      <DrawerCard>
        <DrawerCard.ItemRow>
          <Link href={{ pathname: '/settings' }} asChild>
            <IconButton
              name='settings'
              iconName='MaterialIcons'
              size={Icons.BASE_SIZE}
              label='Settings'
            />
          </Link>
        </DrawerCard.ItemRow>
        <DrawerCard.ItemRow>
          <IconButton
            name='star'
            iconName='MaterialIcons'
            size={Icons.BASE_SIZE}
            label='Rate Us'
            onPress={() => console.log('todo rate us mechanism')}
          />
        </DrawerCard.ItemRow>
      </DrawerCard>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 30
  },
  drawerIconLabel: {
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 5
  }
});
