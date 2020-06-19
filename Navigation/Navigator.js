import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import MessageScreen from '../Screens/MessageScreen';
import CallScreen from '../Screens/CallScreen';

const Tab = createBottomTabNavigator({
   homeScreen:HomeScreen,
    messageScreen: MessageScreen,
    calls:CallScreen,
})

const Navigator=createStackNavigator({
    splashScreen:SplashScreen,
    homeScreen:Tab,

})

export default createAppContainer(Navigator);