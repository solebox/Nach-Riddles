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
    backgroundColor: '#000000',
    height: 60,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative',
    margin:2,
    flexWrap: 'wrap'

  },
  textStyle: {
    fontSize:15,
    color: 'steelblue',
  }

};

export {RiddleSectionsHeader};
