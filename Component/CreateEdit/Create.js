import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class Create extends Component{
  constructor(props){
    super(prop);
    this.state = {text: ''}
  }
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text>
        Let's Get Started!
        </Text>
        <TextInput
        style={{height: 40}}
        placeholder="Input your title"
        onChangeText={(text) => this.setState({text})}
        />
        {this.setState.text.('')}        
        </View>
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
});
