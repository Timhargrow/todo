import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createBottomStackNavigator, createStackNavigator} from 'react-navigation';


import Create from '../CreateEdit/Create';
import NotesScreen from '../Notes/NotesScreen';
import Alarm from '../Alarm/Alarm';
import HomeScreen from './HomeScreen';

export default class HomeScreenNavUI extends Component{
    render(){
        return(
            <View>
            <Button
            vertical
            onPress= {() => this.props.navigation.navigate('Create')}
            >
           <Text>
               CREATE
           </Text>
            </Button>

            <Button
            vertical
            onPress= {() => this.props.navigation.navigate('NotesScreen')}
            >
            <Text>
            NotesScreen
            </Text>
            </Button>
            
            <Button
            vertical
            onPress= {() => this.props.navigation.navigate('Alarm')}
            >
           <Text>
               Alarm
           </Text>
            </Button>


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
