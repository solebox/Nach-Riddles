import React, {Component} from 'react';
import { Text, View } from 'react-native';


class RiddleBox extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
};

const styles = {
  viewStyle:{
    alignItems:'center',
    justifyContent:'center',
    height: 250,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'steelblue',
    textAlign: 'center',
  }

};

export {RiddleBox};
