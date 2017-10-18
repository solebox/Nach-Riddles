import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { Header, RiddleHeader, RiddleSectionsHeader1, RiddleSectionsHeader2, RiddleSections, RiddleBox, AnswerBox, LettersBox, AnswersAndLetters, Button, Spinner } from './common';
import database from '../database/riddles-testing-file';
import Modal from 'react-native-modalbox';
import axios from 'axios';

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }
  state = { userAnswer: '', count: 0};


  componentWillMount(){
    axios.get('https://zwerd.com/NachRiddles/database/riddles-testing-file.html')
      .then(response => this.setState({urldatabase: response.data}));
  }

checkAnswer(answer){
  if (this.state.userAnswer === answer){
    this.refs.modalCorrect.open();
} else if (this.state.userAnswer === '') {
    this.refs.modalNone.open();
} else {
    this.refs.modalWrong.open();
}
}

clearAnswer(){
  this.setState({
      userAnswer: '',
    });
}

nextQuestion(){
  console.log('befor',this.state.count)
  console.log(!this.state.modalVisible)
  this.setState({
      userAnswer: '',
      count: this.state.count + 1,
    });
  this.refs.modalCorrect.close()
  console.log('after',this.state.count)
  }


  render() {
    //let data = this.state.urldatabase
    const data2 = [{key1:"this is key1", key2:"this is key2"},{key10:"this is key10", key20:"this is key20"}]
    let num = this.state.count;
    console.log(this.state.userAnswer)
    console.log(this.state.count)

    const book = database[num].book
    const riddle_section = database[num].riddle_section
    const parallel = database[num].parallel
    const riddle_number = database[num].riddle_number
    let riddle = database[num].riddle;
    let answer = database[num].answer;

      return (
      <View style={styles.container}>

      <Image
        style={styles.imageStyle}
        source={require('../img/riddle.jpg')}
      >
        <View style={styles.backdropView}>

        <Modal
          style={[styles.modal, styles.modalCorrect]}
          position={'center'}
          ref={'modalCorrect'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <Text style={styles.modalText}>תשובה נכונה!</Text>
          <Image style={{height:30, width:30, padding:50, marginTop:15}} source={require('../img/Green_v.png')}/>
          <TouchableOpacity style={styles.button} onPress={() => this.nextQuestion()}>
            <Text style={{fontFamily: 'nrkis',fontSize: 22, color:'white'}}>המשך</Text>
          </TouchableOpacity>
        </Modal>

        <Modal
          style={[styles.modal, styles.modalNone]}
          position={'center'}
          ref={'modalNone'}
        >
          <Text style={styles.modalText}>לא הקלדת תשובה</Text>
          <Image style={{height:120, width:120, padding:0, marginTop:0}} source={require('../img/pointup.png')}/>
        </Modal>

        <Modal
          style={[styles.modal, styles.modalWrong]}
          position={'center'}
          ref={'modalWrong'}
        >
          <Text style={styles.modalText}>טעות!</Text>
          <Image style={{height:120, width:120, padding:0, marginTop:0}} source={require('../img/Red_x.png')}/>
        </Modal>

        <ScrollView>
                <RiddleHeader headerText={book} />
                <View style={styles.viewFlex}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <RiddleSectionsHeader2 headerText={riddle_section} />
                    <RiddleSectionsHeader1 headerText={parallel} />
                    <RiddleSectionsHeader1 headerText={"חידה מספר\n" + riddle_number} />
                  </View>
                </View>
                <RiddleBox headerText={riddle}/>
                <Image
                  style={{ width: 360, height: 165, resizeMode: 'stretch', justifyContent: 'center', alignItems: 'center'}}
                  source={require('../img/scroll.png')}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='הקלד את תשובתך'
                    style={styles.textInput}
                    onChangeText={(userAnswer) => this.setState({userAnswer})}
                    value={this.state.userAnswer}
                  />
                </Image>
                <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button}  onPress={() => this.clearAnswer(answer)}>
                    <Text style={styles.buttonText}>תקן</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => this.checkAnswer(answer)}>
                    <Text style={styles.buttonText}>בדוק</Text>
                  </TouchableOpacity>



                </View>
              </ScrollView>
        </View>
      </Image>
    </View>
    )
  }
  }




  const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null,
  },
  backdropView: {
    flex:1,
    backgroundColor: 'rgba(255,255,255, 0.8)'
  },
  titleText: {
    fontFamily: 'stam',
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 50,
  },
  viewFlex: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0)',
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
    paddingBottom:0,
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
  },
  textInput: {
     width: 250,
     height: 60,
     borderWidth: 0,
     textAlign: 'center',
     fontSize:25,
     fontFamily: 'stam1',
  },
  button: {
    flex:2,
    marginBottom: 5,
    width: 100,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    position: 'relative',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    margin:10,
  },
  buttonText: {
    marginTop:5,
    fontSize: 30,
    padding: 0,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'nrkis',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCorrect: {
    backgroundColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    width: 300
  },
  modalNone: {
    backgroundColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    width: 300
  },
  modalWrong: {
    backgroundColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    width: 300
  },
  modalText: {
    color: "white",
    fontFamily: 'nrkis',
    fontSize: 40
  }
  })


















/*
        <View>
            <RiddleHeader headerText={book} />
            <View style={styles.viewFlex}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <RiddleSectionsHeader headerText={riddle_section} />
                <RiddleSectionsHeader headerText={parallel} />
                <RiddleSectionsHeader headerText={"חידה מספר" + riddle_number} />
              </View>
            </View>
            <RiddleBox headerText={riddle}/>
            <AnswerBox headerText={answer}/>
            <LettersBox headerText={answer}/>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(0,255,0,0)',
    alignItems: 'center',
  },
  viewFlex: {
    height: 60,
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
*/
// skip this line if using Create React Native App
AppRegistry.registerComponent('Riddles', () => Riddles)
