import { StyleSheet, Text, View } from 'react-native';
import React, { forwardRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Icons } from '@/constants/Icons';
import { useTheme } from '@react-navigation/native';

//forwardRef needed for when the <Link/> from expo-router wraps this component

type IconButtonProps = {
  name: any;
  iconName: string;
  size: number;
  onPress?: any;
  label?: string;
  color?: string;
  titleStyle?: { [key: string]: any };
};
const IconButton = forwardRef(
  (
    {
      name,
      size,
      label,
      color,
      titleStyle,
      iconName,
      onPress
    }: IconButtonProps,
    ref
  ) => {
    const { colors } = useTheme();
    return (
      <View style={{ ...styles.container }} testID='IconButton'>
        {iconName === Icons.MATERIAL_COMMUNITY_ICONS && (
          <MaterialCommunityIcons.Button
            name={name}
            size={size ?? 16}
            color={colors.background} // icon color
            backgroundColor={colors.primary}
            aria-label={`${label} icon button`}
            onPress={onPress}>
            <Text
              style={{
                ...styles.labelDefaultStyle,
                color: colors.background,
                ...titleStyle
              }}>
              {label}
            </Text>
          </MaterialCommunityIcons.Button>
        )}
        {iconName === Icons.MATERIAL_ICONS && (
          <MaterialIcons.Button
            name={name}
            size={size ?? 16}
            color={colors.background}
            backgroundColor={colors.primary}
            aria-label={`${label} icon button`}
            onPress={onPress}>
            <Text
              style={{
                ...styles.labelDefaultStyle,
                color: colors.background,
                ...titleStyle
              }}>
              {label}
            </Text>
          </MaterialIcons.Button>
        )}
        {iconName === Icons.FONT_AWESOME && (
          <FontAwesome.Button
            name={name}
            size={size ?? 16}
            color={colors.background}
            backgroundColor={colors.primary}
            aria-label={`${label} icon button`}
            onPress={onPress}>
            <Text
              style={{
                ...styles.labelDefaultStyle,
                color: colors.text,
                ...titleStyle
              }}>
              {label}
            </Text>
          </FontAwesome.Button>
        )}
      </View>
    );
  }
);

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 2
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  labelDefaultStyle: {
    fontSize: 16, //todo base font
    fontWeight: 500
  }
});
