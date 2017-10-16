import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


class LettersBox extends Component {
  onClick(letter) {
    console.log(letter);
  }
    render(){
    //this is script for making new string of the answer and random letters
    //the string is putting in the boxes in random way
    let answer = this.props.headerText;
    let randomNum;
    var str = "אבגדהוזחטיכלמנסעפצקרשת";
    var res = '';
    let LoopNum = 14-answer.length; //for making 14 letters to guess

    for (let i = 0; i < LoopNum; i++) {
        let randomNum = Math.floor(Math.random() * 22)
        answer += str.charAt(randomNum)
        console.log(i)
      }
    console.log('answer is 14' + answer.length)
    let answerlen = answer.length;
    let mixingLetters = []
    for (let i = 0; i < answerlen; i++) {
        let randomNum = Math.floor(Math.random() * answerlen)
        if (mixingLetters.indexOf(randomNum) >= 0) {
          i--
          continue
        } else {
          mixingLetters.push(randomNum)
        }
      }


    /*var res = str.split("")
    var letter = "ת";
    var letterPosition = res.indexOf(letter)+1;
    ranNums.next().value;*/
    let LettersBoxes = [];

    for (let i = 0; i < answerlen; i++) {
        let letter = answer[mixingLetters[i]]
        console.log('check',letter)
        LettersBoxes.push(
            <TouchableOpacity onPress={() => this.onClick(letter)} style={styles.boxStyle} key={i}>
              <Text letter={letter}>{letter}</Text>
            </TouchableOpacity>
        );
      }
    return(
      <View style={styles.viewStyle}>{LettersBoxes}</View>
    )
  }
};

const styles = {
  viewStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center',
    height: 130,
    borderWidth: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'steelblue',
    textAlign: 'center',
  },
  boxStyle: {
    borderWidth: 2,
    borderColor: 'blue',
    margin: 5,
    padding:10,

  }
};

export {LettersBox};
