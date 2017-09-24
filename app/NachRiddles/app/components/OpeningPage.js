import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text } from 'react-native';

export default class OpeningPage extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: 'white'
      }}>
        <Text style={styles.titleText}>Nach Riddles!</Text>
        <Image style={{height:200, width:250, borderColor: '#d6d7da', justifyContent: 'center'}} source={require("../img/NachRiddles.png")}/>
        <Text >Nach Riddles!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  titleText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
