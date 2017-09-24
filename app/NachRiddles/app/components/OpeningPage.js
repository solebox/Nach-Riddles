import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class OpeningPage extends Component{
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View>

        <Image
          source={require('../img/light.png')}
         />
      </View>
    );
  }
}


AppRegistry.registerComponent('OpeningPage', () => OpeningPage);
