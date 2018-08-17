import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createBottomStackNavigator, createStackNavigator} from 'react-navigation';

import TitleScreen from '../Title/TitleScreen';
import Create from '../CreateEdit/Create';
import Edit from '../CreateEdit/Edit';
import NotesScreen from '../Notes/NotesScreen';
import Alarm from '../Alarm/Alarm';
import SettingsScreen from '../Settings/SettingsScreen';
import HomeScreenNavUI from './HomeScreenNavUI';

const HomeScreen = createStackNavigator({
    HomeScreenNavUI: {
        screen: HomeScreenNavUI
    },
    Create: {
      screen: Create
    },
    Edit: {
      screen: Edit
    },
    NotesScreen: {
      screen: NotesScreen
    },
    Alarm: {
      screen: Alarm
    },
    SettingsScreen:{
      screen: SettingsScreen
    },
    initialRouteName: "HomeScreenNavUI"
    },{
        render(){
            return(
                <View 
                style={styles.homeScreen}
                >
                <Button
                style={styles.homeScreen}
                vertical
                onPress= {() => this.props.navigation.navigate('Create')}
                >
               <Text>
                   CREATE
               </Text>
                </Button>

                <Button
                style={styles.homeScreen}
                vertical
                onPress= {() => this.props.navigation.navigate('NotesScreen')}
                >
                <Text>
                NotesScreen
                </Text>
                </Button>
                
                <Button
                style={styles.homeScreen}
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
    
})

const styles = StyleSheet.create({
  homeScreen: {
    flex: 20,
    margin: 40,
    
  },
  NotesScreen: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  Create: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Alarm: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default HomeScreen;
