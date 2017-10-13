import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


class LettersBox extends Component{

    render(){
    //this is script for making new string of the answer and random letter
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
    let list = []
    for (let i = 0; i < answerlen; i++) {
        let randomNum = Math.floor(Math.random() * answerlen)
        if (list.indexOf(randomNum) >= 0) {
          i--
          continue
        } else {
          list.push(randomNum)
        }
      }
    /*var res = str.split("")
    var letter = "ת";
    var letterPosition = res.indexOf(letter)+1;
    ranNums.next().value;*/

    for (let i = 0; i < answerlen; i++) {
        var res = answer[list[i]]
        test.push(
            <TouchableOpacity style={styles.boxStyle} key={i}>
              <Text>{res}</Text>
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
