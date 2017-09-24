import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';

export default class OpeningPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Nach Riddles</Text>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          }}>
        <Image style={{width: 250, height:200}} source={require("../img/NachRiddles.png")}/>
        </View>
      </View>
      <View style={{height:80}}>
      <Text style={styles.lineText}>ברוכים הבאים למשחק חידות הנ''ך</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={this.changeColor}
          title="התחל משחק"
          color={'skyblue'}
        />
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    height:500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  titleText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  lineText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    textAlign: 'center',
    width: 100,
    height: 100
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
