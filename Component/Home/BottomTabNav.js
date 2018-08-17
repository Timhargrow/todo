import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button, Icon, Footer, FooterTab} from 'native-base';
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from '../Settings/SettingsScreen';

const BottomTabNav = createBottomTabNavigator({
    // HomeScreen: {
    //     screen: HomeScreen
    // },
    SettingsScreen: {
        screen: SettingsScreen
    },
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        vertical
                        onPress= {()=> this.props.navigation.navigate('HomeScreen')}
                    >
                    <Icon name="Home" />
                    <Text>
                        Home
                    </Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }

})

export default BottomTabNav;