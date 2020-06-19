/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import MessageScreen from './Screens/MessageScreen';
import CallScreen from './Screens/CallScreen';


const Tab = createMaterialBottomTabNavigator();

 function tabNavigator() {
  return (
  
    
      <Tab.Navigator 
      activeColor="#ffffff"
      inactiveColor="#fffccc"
      barStyle={{backgroundColor:'#f12711',shadowColor:'transparent'}}
      style={{backgroundColor:'#000000' }}
       >
        <Tab.Screen name="home" component={HomeScreen}options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        
         />
        <Tab.Screen name="Message" component={MessageScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="message" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="call" component={CallScreen} 
          options={{
            tabBarLabel: 'Call',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="phone" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>
  
  );
}

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <HomeStack.Navigator>
            <HomeStack.Screen name='splash' component={SplashScreen}
            options={{headerShown: false}} />

      <HomeStack.Screen name="home" component={tabNavigator}
      
      options={{headerStyle:{backgroundColor:'#f5af19',elevation:1},
      headerTitleAlign:'center',headerLeft:null}} />
     
    </HomeStack.Navigator>
      
    </NavigationContainer>
  );
}





