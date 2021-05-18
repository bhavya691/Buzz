import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in';
import Header from './Header';

export default class App extends React.Component{
    render(){
        return(
          <View style={{flex:1}}>
            <Header />
            <AppConatiner /> 
          </View>
          
        )
    }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen:FacebookScreen},
  Instagram: {screen:InstagramScreen}
})

const AppConatiner = createAppContainer(TabNavigator);