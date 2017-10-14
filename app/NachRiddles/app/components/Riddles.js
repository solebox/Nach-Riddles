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
import { Header, RiddleHeader, RiddleSections, RiddleBox, AnswerBox, LettersBox, Button, Spinner } from './common';
import database from '../database/riddles-testing-file';
import axios from 'axios';

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    function jsondata() {
      return fetch('https://zwerd.com/NachRiddles/database/riddles-testing-file.json')
      return response.json();
    }

    let urldatabase = jsondata()
    console.log("check2")
    console.log(urldatabase[3])


    const check = database[0].riddle_section;
    const book = database[0].book
    const riddle_section = database[0].riddle_section
    const parallel = database[0].parallel
    let riddle = database[0].riddle;
    let answer = database[0].answer;


      return(
        <View>
            <Header headerText="אביעה חידות מני קדם" />
            <RiddleHeader headerText={check} />
            <RiddleBox headerText={riddle}/>
            <AnswerBox headerText={answer}/>
            <LettersBox headerText={answer}/>
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
