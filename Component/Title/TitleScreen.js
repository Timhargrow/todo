import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from '../Home/HomeScreen';

class TitleScreen extends Component{
    static navigationOptions = {
        headr: null
    }
        render() {
        return (
        <View style={styles.container}>
            <Button
                title= "TODO-APP"
                vertical
                block={true}
                onPress={() => this.props.navigation.navigate('HomeScreen')}
            >

            
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

export default TitleScreen;
