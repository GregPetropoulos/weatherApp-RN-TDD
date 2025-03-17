import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Pressable,
  ViewProps,
  ActivityIndicator
} from 'react-native';
import { View, Text } from './Themed';
import Colors from '@/constants/Colors';
type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
} & ViewProps;
const Button = (props: Props) => {
  const { onPress, label, loading, style, ...rest } = props;
  return (
    <Pressable onPress={onPress} testID='button'>
      <LinearGradient
        {...rest}
        colors={[Colors.general.lighterGray, Colors.general.darkGray]}
        style={[styles.container, style]}>
        {loading ? (
          <ActivityIndicator
            testID='button-loading'
            size={24}
            color={Colors.general.white}
          />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 19,
    color: Colors.general.white
  }
});
