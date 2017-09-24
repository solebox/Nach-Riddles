import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';

export default class OpeningPage extends Component{
  render() {
    return (
      <View>
      <Text>test!</Text>
        <Image
          style={{width: 50, height: 50}}
          source={require('../img/header_logo.png')}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
