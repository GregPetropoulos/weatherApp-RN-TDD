import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type IconButtonProps = {
  name: any;
  size: number;
  onPress: any;
  label?: string;
  color?:string;
  titleStyle?:{[key:string]:any}
};
const IconButton = ({ name, size, label, color,titleStyle, onPress }: IconButtonProps) => {
  return (
    <View style={styles.container} testID='IconButton'>
      <MaterialCommunityIcons.Button
        name={name}
        size={size ?? 16}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[styles.labelDefaultStyle,titleStyle]}>
          {label}
          </Text>
      </MaterialCommunityIcons.Button>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:4,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  labelDefaultStyle:{
    //color:'blue',// TODO Use the default theme
    fontSize:16,
    fontWeight:'bold',
    // TODO NEED TYPOGRAPHY
  }
});
