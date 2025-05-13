import React, { ReactNode } from 'react';
import { Button as RNButton } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Pressable,
  ViewProps,
  ActivityIndicator,
  View, Text
} from 'react-native';
import { DIRECTIONS } from '@/constants/global';
type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: string;
} & ViewProps;

const Button = (props: Props) => {
  const { onPress, label, loading, style, icon, iconPosition, ...rest } = props;
  return (
 <RNButton title={label} accessibilityLabel={label} onPress={onPress}/>
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
    fontSize: 19

  }
});
