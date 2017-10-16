import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';


class LettersBox extends Component {

  onClick(letter, test) {
    console.log(letter);
    test.push(letter);
    console.log(test.join(''));


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
    var test = [];
    for (let i = 0; i < answerlen; i++) {
      console.log(test)
        let letter = answer[mixingLetters[i]]
        console.log('check',letter)
        LettersBoxes.push(
            <TouchableOpacity onPress={() => this.onClick(letter, test)} style={styles.boxStyle} key={i}>
              <Image
                source={require('../../img/parchment3.gif')}
                style={{width: 40, height: 40, alignItems: 'center'}}
                >
                <View>
                  <Text
                    style={{fontSize:28, fontWeight: 'bold',}}
                    letter={letter}>{letter}</Text>
                </View>
              </Image>
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
    height: 96,
    borderWidth: 0,
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
    margin: 1,
    padding:0,

  }
};

export {LettersBox};
