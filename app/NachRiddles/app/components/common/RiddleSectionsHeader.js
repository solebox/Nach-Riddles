import React, {Component} from 'react';
import { Text, View } from 'react-native';


class RiddleSectionsHeader extends Component{
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
    flex:1,
    alignItems:'center',
    backgroundColor: 'blue',
    height: 60,
    margin:2,
    flexWrap: 'wrap'

  },
  textStyle: {
    fontSize:15,
    color: 'steelblue',
  }

};

export {RiddleSectionsHeader};
