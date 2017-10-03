import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import BookSelector from './BookSelector'
import indexAndroid from '../../index.android'
import Levels from './Levels'
import About from './About'
import Riddles from './Riddles'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  /*constructor(props) {
      super(props);
      this.state = {
          discounts: undefined
      }
   }*/
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>אביעה חידות מני קדם</Text>
          <View style={styles.imageViewer}>
            <View>
              <Image
                style={{ width: 360, height: 165 }}
                source={require('../img/Book.png')}
              />
            </View>
          </View>
        </View>
        <View style={{ height: 50 }}>
          <Text style={styles.lineText}>ברוכים הבאים למשחק חידות הנ''ך</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BookSelector')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>התחל</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Levels')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>שלבים</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Settings')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>הגדרות</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('About')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>אודות</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

//export HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: 570,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  titleText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  },
  imageViewer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  buttonView: {
    textAlign: 'center',
    width: 170,
    height: 45
  },
  button: {
    marginBottom: 5,
    width: 200,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    fontSize: 30,
    padding: 1,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
