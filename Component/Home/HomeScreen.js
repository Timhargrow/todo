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
import StickyHeaderExample from './StickyHeaderExample';
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
    StickyHeaderExample: { 
      screen: StickyHeaderExample
    },
    initialRouteName: "HomeScreenNavUI"
    },{
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
                onPress= {() => this.props.navigation.navigate('Create')}
                >
               <Text>
                   Alarm
               </Text>
                </Button>

                
                </View>
            );
        }
    
})



export default HomeScreen;
