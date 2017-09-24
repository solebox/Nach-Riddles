import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';

export default class OpeningPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>שלבים</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    height:70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
