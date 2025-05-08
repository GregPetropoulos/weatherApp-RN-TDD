import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { PropsWithChildren } from 'react';

const DrawerCardItem = ({ children }: PropsWithChildren) => {
  return <View style={styles.drawerCardItem}>{children}</View>;
};
const DrawerCard = ({ children }: PropsWithChildren) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.drawerCard,
        backgroundColor: colors.card,
        borderColor: colors.border
      }}>
      {children}
    </View>
  );
};

export default DrawerCard;
DrawerCard.ItemRow = DrawerCardItem;

const styles = StyleSheet.create({
  drawerIconLabel: {
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 5
  },
  drawerCard: {
    // flex:1,
    flexWrap: 'wrap',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 6,

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5
  },
  drawerCardItem: {
    flexDirection: 'row',
    marginHorizontal: 2,
    paddingVertical: 4
  }
});
