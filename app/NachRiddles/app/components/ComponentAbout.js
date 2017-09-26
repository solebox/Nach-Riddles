import React, { Component } from 'react';
import {AppRegistry, View, Image, StyleSheet, Text, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ComponentRiddles extends Component {
  render() {
    var customData = require('../database/riddles_json_file2.json');
    return (
        <View>
          <View style={{height:60, backgroundColor:"skyblue"}}>
            <Text style={styles.titleText2}>אודות</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:545,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageViewer: {
    height:170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  titleText2: {
    height: 45,
    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'skyblue',
  },
  lineText: {
    color: 'skyblue',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    textAlign: 'center',
    width: 150,
    height: 45
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ComponentRiddles', () => ComponentRiddles);
