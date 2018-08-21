import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import NotesScreen from '../Notes/NotesScreen'

var CreateScreenNavigator = createBottomTabNavigator({

  NotesScreen:{
    screen: NotesScreen
  },
})

export class Input extends Component{
  render() {
    return (
        <TextInput
        {...this.props}
        editable = {true}
        maxLength = {40}
        />      

    );
  }
}

export default class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      text:'Input your title'
    };
  }
  render(){
    return(
      <View style = {{
        backgroundColor: this.state.text,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
        <Input
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  createBox: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
});
