import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Flex9= () => {
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
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#102C57',
  },
  box1: {
    backgroundColor: '#451952',
    borderWidth: 10,
    borderColor: 'white',
    height: '10%',
    width: '18%',
  },
  box2: {
    backgroundColor: '#FFBB5C',
    borderWidth: 10,
    borderColor: 'white',
    height: '10%',
    top: 70,
    width: '18%',
  },
  box3: {
    backgroundColor: '#40A2E3',
    borderWidth: 10,
    borderColor: 'white',
    height: '10%',
    width: '18%',
  },
});