import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from 'react-native'
import { Header, RiddleHeader,RiddleSections, Button, Spinner } from './common';
import database from '../database/riddles-testing-file';
import axios from 'axios';

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    let num = 0;
    for (i=0;i<0;i++){
        num += 1;
      }
    const check = database[num].riddle_section;
    const book = database[num].book
    const riddle_section = database[num].riddle_section
    const parallel = database[num].parallel

    console.log(database[0].answer);


      return(
        <View>
            <Header headerText="אביעה חידות מני קדם" />
            <RiddleHeader headerText={check} />
            <RiddleSections
             bookText={book}
             riddle_sectionText={riddle_section}
             parallelText={parallel}
             />
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    height: 43,
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
    width: 360,
    height: 300,
  },
  titleText3: {
    paddingTop:100 ,
    paddingBottom:130 ,
    includeFontPadding: true,
    backgroundColor: 'rgba(135,206,235, 0.4)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  }

})

// skip this line if using Create React Native App
AppRegistry.registerComponent('Riddles', () => Riddles)
