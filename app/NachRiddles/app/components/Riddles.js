import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  Button
} from 'react-native'

export default class ComponentRiddles extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.titleText}>מקבילה ל-בראשית</Text>
          <Text style={styles.titleText}>פרשת יהושע</Text>
          <Text style={styles.titleText}>ספר יהושע</Text>
        </View>
        <View  style={styles.container}>
          <Text style={styles.titleText2}>חידה א</Text>
        </View>
        <View>
          <Image
                style={styles.imageView}
                source={require('../img/free-question-mark-background.jpg')}>
              <Text>ספר יהושע</Text>
          </Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    height: 300,
    width: 360,
    alignItems: 'center',

  },
  titleText: {
    height: 40,
    width: 120,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'steelblue'
  },
  titleText2: {

    width: 360,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
  imageView: {
    paddingTop:0,
    paddingBottom:0 ,
    width: 340,
    height: 80,
  },
  titleText3: {
    paddingTop:50 ,
    paddingBottom:100 ,
    includeFontPadding: true,
    backgroundColor: 'darkorchid',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  }

})

// skip this line if using Create React Native App
AppRegistry.registerComponent('ComponentRiddles', () => ComponentRiddles)
