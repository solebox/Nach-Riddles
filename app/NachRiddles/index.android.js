import React, {Component} from 'react';
import {AppRegistry, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ComponentHomeScreen from './app/components/ComponentHomeScreen';
import ComponentLevels from './app/components/ComponentLevels';
import ComponentAbout from './app/components/ComponentAbout';
import ComponentRiddles from './app/components/ComponentRiddles';


export default class NachRiddles extends Component{
  render() {
    return(
      <View>
        <ComponentHomeScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
