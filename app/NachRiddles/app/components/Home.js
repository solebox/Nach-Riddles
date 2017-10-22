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

   constructor(props) {
     super(props);
     this.state = { userAnswer: '', count: 0, diamonds: 0, urldatabase: {}, wordsnumber: 0, riddleletter: '' };
   }

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../img/opening-img2.jpg')}
      >
        <View style={styles.backdropView}>
          <View>
            <Text style={styles.titleText}>אביעה חידות מני קדם</Text>
            <Image
              style={{ width: 360, height: 165 }}
              source={require('../img/Book.png')}
            />
            <View style={{ height: 50 }}>
              <Text style={styles.lineText}>1188 חידות על הנביא</Text>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Riddles')}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>התחל</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('About')}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>אודות</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null,
  },
  backdropView: {
    flex:1,
    backgroundColor: 'rgba(255,255,255, 0.8)'
  },
  titleText: {
    paddingTop:20,
    fontFamily: 'stam1',
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 55,
  },
  lineText: {
    fontFamily: 'nrkis',
    color: 'red',
    fontSize: 30,
    textAlign: 'center'
  },
  buttonView: {
    alignItems: 'center',
  },
  button: {
    marginBottom: 5,
    width: 220,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    position: 'relative',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 45,
    padding: 1,
    color: 'white',
    fontFamily: 'nrkis',
    backgroundColor: 'rgba(0,0,0,0)'
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('HomeScreen', () => HomeScreen)
