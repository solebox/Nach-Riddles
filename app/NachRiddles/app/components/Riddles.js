import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native'

import database from '../database/riddles_json_file3'

export default class Riddles extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    var riddle = database.BookOfJoshua.JoshuaRiddle.riddles[2].riddle;
    var answer = database.BookOfJoshua.JoshuaRiddle.riddles[2].answer;
      return(
        <View>
          <View>
            <Text>{riddle}</Text>
            <Text>{answer}</Text>
          </View>
          <TextInput
            style={{height: 40}}
            placeholder="הקש את תשובתך"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
      );
    }
}
/*
    for (var i=1; 1<23; i++){
      var riddle = database.BookOfJoshua.JoshuaRiddle.riddles[1].riddle;
      var answer = database.BookOfJoshua.JoshuaRiddle.riddles[1].answer;
      return(alert(i))
    }
  }}*/
/*        <View>
          <Text style={styles.titleText3}>{riddle}</Text>
          <Text style={styles.titleText3}>{answer}</Text>
        </View>
      )
    }
  }*/
      /*
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
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

              <Text style={styles.titleText3}>{data}</Text>
          </Image>
        </View>
        <View>
          <Text style={styles.titleText3}>{database.BookOfJoshua.JoshuaRiddle.riddles[1].answer}</Text>
        </View>
      </View>
      </ScrollView>
    )
      }

  }
}*/


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
