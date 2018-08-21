import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import TitleScreen from './Component/Title/TitleScreen';
import HomeScreen from './Component/Home/HomeScreen';
import Create from './Component/CreateEdit/Create';
import Edit from './Component/CreateEdit/Edit';
import NotesScreen from './Component/Notes/NotesScreen';
import Alarm from './Component/Alarm/Alarm';
import SettingsScreen from './Component/Settings/SettingsScreen';
import CreateScreenNavigator from './Component/AdditionalNavigators/CreateScreenNavigator';

const App = createStackNavigator({
  TitleScreen: {
    screen: TitleScreen
  },
  HomeScreen: {
    screen: HomeScreen
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
  initialRouteName: 'HomeScreen'
  },{
    render(){
      return(
        <View>
          <Text>
            App
          </Text>
        </View>
      );
    }
  });
export default App;