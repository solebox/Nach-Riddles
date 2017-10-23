import React, { Component } from 'react';
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
  AsyncStorage
} from 'react-native';
import {
  RiddleHeader,
  RiddleSectionsHeader1,
  RiddleSectionsHeader2,
  Diamonds,
  Direction,
  RiddleBox,
} from './common';
import database from '../database/riddles-testing-file';
import Modal from 'react-native-modalbox';
import axios from 'axios';

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: '',
      count: 0,
      diamonds: 0,
      urldatabase: {},
      wordsnumber: 0,
      riddleletter: ''
    };
  }

  /*
  componentWillMount(){
    AsyncStorage.getItem("userAnswer").then((value) => {
        this.setState({userAnswer: value || ''})}).done();
    AsyncStorage.getItem("count").then((value) => {
        this.setState({count: value || 0})}).done();
    AsyncStorage.getItem("diamonds").then((value) => {
        this.setState({diamonds: value || 0})}).done();
    AsyncStorage.getItem("urldatabase").then((value) => {
        this.setState({urldatabase: value || {}})}).done();
    AsyncStorage.getItem("wordsnumber").then((value) => {
        this.setState({wordsnumber: value || 0})}).done();
    AsyncStorage.getItem("riddleletter").then((value) => {
        this.setState({riddleletter: value || ''})}).done();
    axios.get('https://zwerd.com/NachRiddles/database/riddles-testing-file.html')
      .then(response => this.setState({urldatabase: response.data}));
  }
  saveData(){
    AsyncStorage.setItem("userAnswer",this.state.userAnswer);
    AsyncStorage.setItem("count",this.state.count);
    AsyncStorage.setItem("diamonds",this.state.diamonds);
    AsyncStorage.setItem("urldatabase",this.state.urldatabase);
    AsyncStorage.setItem("wordsnumber",this.state.wordsnumber);
    AsyncStorage.setItem("riddleletter",this.state.riddleletter);
  };
*/
  clue(words_number,riddle_letter) {
    this.setState({
      wordsnumber: words_number,
      riddleletter: riddle_letter
    })
    this.refs.modalClue.open()
  }

  Diamonds1() {
    if (this.state.diamonds - 1 < 0) {
      Alert.alert('אין לך מספיק יהלומים')
      this.refs.modalClue.close()
    } else {
      this.setState({
        diamonds: this.state.diamonds - 1
      })
      Alert.alert('מספר מילים: ' + this.state.wordsnumber)
      this.refs.modalClue.close()
    }
  }

  Diamonds2() {
    if (this.state.diamonds - 2 < 0) {
      Alert.alert('אין לך מספיק יהלומים')
      this.refs.modalClue.close()
    } else {
      this.setState({
        diamonds: this.state.diamonds - 2
      })
      Alert.alert(', מתחיל באות: ' + this.state.riddleletter)
      this.refs.modalClue.close()
    }
  }

  Diamonds3() {
    if (this.state.diamonds - 3 < 0) {
      Alert.alert('אין לך מספיק יהלומים')
      this.refs.modalClue.close()
    } else {
      this.setState({
        userAnswer: '',
        count: this.state.count + 1,
        diamonds: this.state.diamonds - 3
      })
      this.refs.modalClue.close()
    }
  }

  checkAnswer(answer) {
    if (this.state.userAnswer === answer) {
      this.refs.modalCorrect.open()
    } else if (this.state.userAnswer === '') {
      this.refs.modalNone.open()
    } else {
      this.refs.modalWrong.open()
    }
  }

  clearAnswer() {
    this.setState({
      userAnswer: ''
    })
  }

  nextQuestion() {
    console.log('befor', this.state.diamonds)
    this.setState({
      userAnswer: '',
      count: this.state.count + 1,
      diamonds: this.state.diamonds + 5
    })
    this.refs.modalCorrect.close()
    console.log('after', this.state.diamonds)
  }

  render() {
    //let data = this.state.urldatabase
    const data2 = [
      { key1: 'this is key1', key2: 'this is key2' },
      { key10: 'this is key10', key20: 'this is key20' }
    ]
    let num = this.state.count
    let jsondata = this.state.urldatabase[num]
    let diamonds = this.state.diamonds
    console.log(jsondata && jsondata)

    const book = database[num].book
    const riddle_section = database[num].riddle_section
    const parallel = database[num].parallel
    const riddle_number = database[num].riddle_number
    let riddle = database[num].riddle
    let answer = database[num].answer
    const words_number = answer.split(' ').length
    const riddle_letter = database[num].riddle_letter

    const letter = riddle_letter

    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../img/riddle.jpg')}>
          <View style={styles.backdropView}>
            <Modal
              style={[styles.modal, styles.modalCorrect]}
              position={'center'}
              ref={'modalCorrect'}
            >
              <Text style={styles.modalText}>תשובה נכונה!</Text>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  padding: 10,
                  marginTop: 15,
                  marginBottom: 15
                }}
                source={require('../img/Green_v.png')}
              />
              <TouchableOpacity
                style={styles.modalButtonAnswer}
                onPress={() => this.nextQuestion()}
              >
                <Text
                  style={{ fontFamily: 'nrkis', fontSize: 22, color: 'white' }}
                >
                  אישור
                </Text>
              </TouchableOpacity>
            </Modal>

            <Modal
              style={[styles.modal, styles.modalNone]}
              position={'center'}
              ref={'modalNone'}
            >
              <Text style={styles.modalText}>לא הקלדת תשובה!</Text>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  padding: 10,
                  marginTop: 15,
                  marginBottom: 15
                }}
                source={require('../img/pointup.png')}
              />
              <TouchableOpacity
                style={styles.modalButtonAnswer}
                onPress={() => this.refs.modalNone.close()}
              >
                <Text
                  style={{ fontFamily: 'nrkis', fontSize: 22, color: 'white' }}
                >
                  אישור
                </Text>
              </TouchableOpacity>
            </Modal>

            <Modal
              style={[styles.modal, styles.modalWrong]}
              position={'center'}
              ref={'modalWrong'}
            >
              <Text style={styles.modalText}>טעות!</Text>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  padding: 10,
                  marginTop: 15,
                  marginBottom: 15
                }}
                source={require('../img/Red_x.png')}
              />
              <TouchableOpacity
                style={styles.modalButtonAnswer}
                onPress={() => this.refs.modalWrong.close()}
              >
                <Text
                  style={{ fontFamily: 'nrkis', fontSize: 22, color: 'white' }}
                >
                  אישור
                </Text>
              </TouchableOpacity>
            </Modal>

            <Modal
              style={[styles.modal, styles.modalClue]}
              position={'center'}
              ref={'modalClue'}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 35,
                  fontFamily: 'nrkis'
                }}
              >
                ברוך הבא לחנות
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => this.Diamonds1()}
              >
                <Image
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: 45,
                    width: 50
                  }}
                  source={require('../img/diamond-small.gif')}
                >
                  <Text style={{ color: 'white' }}>-1</Text>
                </Image>
                <Text style={styles.modalClueText}>רמז</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => this.Diamonds2()}
              >
                <Image
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: 45,
                    width: 50
                  }}
                  source={require('../img/diamond-small.gif')}
                >
                  <Text style={{ color: 'white' }}>-2</Text>
                </Image>
                <Text style={styles.modalClueText}>רמז</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => this.Diamonds3()}
              >
                <Image
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: 45,
                    width: 50
                  }}
                  source={require('../img/diamond-small.gif')}
                >
                  <Text style={{ color: 'white' }}>-3</Text>
                </Image>
                <Text style={styles.modalClueText}>מעבר לחידה הבאה</Text>
              </TouchableOpacity>
            </Modal>

            <ScrollView>
              <RiddleHeader headerText={book} />
              <View style={styles.viewFlex}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <RiddleSectionsHeader2 headerText={riddle_section} />
                  <RiddleSectionsHeader1 headerText={parallel} />
                  <RiddleSectionsHeader1
                    headerText={'חידה מספר\n' + riddle_number}
                  />
                </View>
              </View>
              <View style={styles.viewFlex}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Diamonds headerText={diamonds} />
                  <View style={styles.ClueViewStyle}>
                    <TouchableOpacity
                      style={{ flex: 1, flexDirection: 'row' }}
                      onPress={() => this.clue(words_number, riddle_letter)}
                    >
                      <Image
                        style={{
                          alignItems: 'center',
                          marginLeft: 10,
                          height: 45,
                          width: 50
                        }}
                        source={require('../img/Helpout.png')}
                      />
                      <Text style={styles.ClueTextStyle}>חנות הצלה</Text>
                    </TouchableOpacity>
                  </View>
                  <Direction headerText={diamonds} navigation={this.props.navigation}/>
                </View>
              </View>
              <RiddleBox headerText={riddle} />
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{
                    width: 360,
                    height: 165,
                    resizeMode: 'stretch',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  source={require('../img/scroll.png')}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="הקלד את תשובתך"
                    style={styles.textInput}
                    onChangeText={userAnswer => this.setState({ userAnswer })}
                    value={this.state.userAnswer}
                  />
                </Image>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.clearAnswer(answer)}
                >
                  <Text style={styles.buttonText}>תקן</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.checkAnswer(answer)}
                >
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
    alignItems: 'center'
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: null,
    height: null
  },
  backdropView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.8)'
  },
  titleText: {
    fontFamily: 'stam',
    textAlign: 'center',
    color: '#2196F3',
    fontSize: 50
  },
  viewFlex: {
    height: 60,
    backgroundColor: 'rgba(0,0,0,0)'
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
    paddingTop: 0,
    paddingBottom: 0,
    width: 360,
    height: 300
  },
  titleText3: {
    paddingTop: 100,
    paddingBottom: 130,
    includeFontPadding: true,
    backgroundColor: 'rgba(135,206,235, 0.4)',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
  textInput: {
    width: 250,
    height: 60,
    borderWidth: 0,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'stam1'
  },
  button: {
    flex: 2,
    marginBottom: 5,
    width: 80,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    position: 'relative',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    margin: 10
  },
  buttonText: {
    marginTop: 5,
    fontSize: 30,
    padding: 0,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'nrkis'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButtonAnswer: {
    marginBottom: 2,
    width: 100,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#8e4e8e',
    position: 'relative',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    margin: 2,
    justifyContent: 'center'
  },
  modalButton: {
    flexDirection: 'row',
    marginBottom: 2,
    width: 250,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#8e4e8e',
    position: 'relative',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    margin: 2,
    justifyContent: 'center'
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
  modalClue: {
    backgroundColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 10,
    height: 200,
    width: 300
  },
  modalClueText: {
    flex: 3,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'nrkis',
    fontSize: 20
  },
  modalText: {
    color: 'white',
    fontFamily: 'nrkis',
    fontSize: 40
  },
  ClueViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8e4e8e',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin: 0,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  DirectionView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#472747',
    borderColor: 'black',
    borderWidth: 2,
    height: 60,
    margin: 0,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  ClueTextStyle: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'nrkis',
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
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
