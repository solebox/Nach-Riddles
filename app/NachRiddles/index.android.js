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

import HomeScreen from './app/components/HomeScreen'
import BookSelector from './app/components/BookSelector'
import indexAndroid from './index.android'
import Levels from './app/components/Levels'
import About from './app/components/About'
import Riddles from './app/components/Riddles'
import Settings from './app/components/Settings'

export default class NachRiddles extends React.Component {
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
      <View>
        <HomeScreen />
      </View>
    )
  }
}

class BookSelectorScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  /*
  constructor(props) {
    super(props)
  }*/
  render() {
    return (
      <View>
        <BookSelector navigation={this.props.navigation} />
      </View>
    )
  }
}

class LevelsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Levels navigation={this.props.navigation} />
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'אביעה חידות מני קדם'
  }
  render() {
    return (
      <View>
        <Settings navigation={this.props.navigation} />
      </View>
    )
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <About navigation={this.props.navigation} />
      </View>
    )
  }
}

class RiddlesScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Riddles navigation={this.props.navigation}/>
      </View>
    )
  }
}

class BookScreen extends React.Component {
  render() {
    return <Text>Im da b00000k</Text>
  }
}

const Navigate = StackNavigator(
  {
    Home: { screen: HomeScreen },
    BookSelector: { screen: BookSelectorScreen },
    Levels: { screen: LevelsScreen },
    Settings: { screen: SettingsScreen },
    About: { screen: AboutScreen },
    Riddles: { screen: RiddlesScreen }
  },
  { headerMode: 'screen' }
)

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
AppRegistry.registerComponent('NachRiddles', () => Navigate)
