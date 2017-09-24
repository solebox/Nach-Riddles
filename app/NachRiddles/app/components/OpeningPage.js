import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button } from 'react-native';

export default class OpeningPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>אביעה חידות מני קדם</Text>
        <View style={styles.imageViewer}>
        <Image style={{width: 360, height:200}} source={require("../img/Book.png")}/>
        </View>
      </View>
      <View style={{height:50}}>
      <Text style={styles.lineText}>ברוכים הבאים למשחק חידות הנ''ך</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={this.changeColor}
          title="התחל"
          color='skyblue'
        />
        </View>
      <View style={styles.buttonView}>
        <Button
          onPress={this.changeColor}
          title="שלבים"
          color='skyblue'
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={this.changeColor}
          title="הגדרות"
          color='skyblue'
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={this.changeColor}
          title="אודות"
          color='skyblue'
        />
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    height:545,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViewer: {
    height:170,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 150,
    height: 45
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
