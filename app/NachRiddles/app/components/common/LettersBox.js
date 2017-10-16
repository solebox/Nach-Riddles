import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


class LettersBox extends Component{

    render(){
    //this is script for making new string of the answer and random letters
    //the string is putting in the boxes in random way
    let answer = this.props.headerText;
    console.log(answer)
    let randomNum = Math.floor(Math.random() * 22)
    let test = [];
    var str = "אבגדהוזחטיכלמנסעפצקרשת";
    var res = '';
    for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * 22)
        answer += str.charAt(randomNum)
      }
    console.log(answer)
    let answerlen = answer.length;
    console.log(answerlen)
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

    for (let i = 0; i < answerlen; i++) {
        var res = answer[mixingLetters[i]]
        test.push(
            <TouchableOpacity onPress={console.log({res})} style={styles.boxStyle} key={i}>
              <Text letter={res}>{res}</Text>
            </TouchableOpacity>
        );
      }
    return(
      <View style={styles.viewStyle}>{test}</View>
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
