import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import BookSelector from './BookSelector';
import About from './About';
import Riddles from './Riddles';


class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = { userAnswer: '', count: 0, diamonds: 0, urldatabase: {}, wordsnumber: 0, riddleletter: '' };
  }


  render() {
    const count = this.state.count
    return (
      <View>
        <Home  navigation={this.props.navigation}/>
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
        <BookSelector navigation={this.props.navigation}/>
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
    console.log("go to resadlle screen")
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
    Riddles: { screen: RiddlesScreen },
    BookSelector: { screen: BookSelectorScreen },
    About: { screen: AboutScreen },
  },
  { headerMode: 'screen' }
)

// skip this line if using Create React Native App
AppRegistry.registerComponent('NachRiddles', () => Navigate)
