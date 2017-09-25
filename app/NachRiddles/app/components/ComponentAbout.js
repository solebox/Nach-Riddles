import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ComponentRiddles extends Component {
  render() {
    return (
        <View>
          <View>
            <Text style={styles.titleText}>אודות</Text>
          </View>
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('ComponentRiddles', () => ComponentRiddles);
