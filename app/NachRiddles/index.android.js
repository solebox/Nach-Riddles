import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';

import OpeningPage from './app/components/OpeningPage';

export default class NachRiddles extends Component{
  render() {
    return(
      <View>
        <OpeningPage/>
      </View>
    );
  }
}

AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
