import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class NotesScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>
        NotesScreen
        </Text>
        
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
