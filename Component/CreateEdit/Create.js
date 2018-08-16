import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Tasks from './Component/Tasks/Tasks';

export default class Create extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Tasks />
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
