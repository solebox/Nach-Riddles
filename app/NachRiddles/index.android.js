import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';

import OpeningPage from './app/components/OpeningPage';
import Levels from './app/components/Levels';
import About from './app/components/About';
import Riddles from './app/components/Riddles';

export default class NachRiddles extends Component{
  render() {
    return(
      <View>
        <Riddles />
      </View>
    );
  }
}

AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
