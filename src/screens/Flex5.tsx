import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Flex5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}></Text>
      <Text style={styles.box2}></Text>
      <Text style={styles.box3}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#102C57',
  },
  box1: {
    backgroundColor: '#451952',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '100%',
  },
  box2: {
    backgroundColor: '#FFBB5C',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '100%',
  },
  box3: {
    backgroundColor: '#40A2E3',
    borderWidth: 10,
    borderColor: 'white',
    width: 100,
    height: '100%',
  },
});
