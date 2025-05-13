import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';

const DateDay = () => {
  const now = moment(new Date());
  return (
    <View style={styles.dateTimeContent} testID='DateDayComponent'>
      <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
      <Text style={styles.day}>{now.format('dddd')}</Text>
      <Text style={styles.title} testID='home-text'>
        Welcome!
      </Text>
    </View>
  );
};

export default DateDay;

const styles = StyleSheet.create({
  dateTimeContent: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10
  },
  date: {
    fontSize: 14,
    // color: Colors.dark.text,
    marginVertical: 5
  },
  day: {
    fontSize: 36,
    // color: Colors.dark.text,
    marginVertical: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
