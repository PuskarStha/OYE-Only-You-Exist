import React, { Component } from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

class HomeScreen extends Component{
render(){
    return(
        <View style={Styles.homepage}>
        
        <LinearGradient 
      
  colors={[  '#f5af19','#f12711']} 
  style={Styles.linearGradient}>
      
    
  <Text style={Styles.Test}>
    Home Screen is Working.
  </Text>
</LinearGradient>
    
        </View>
    );
}
}

const Styles = StyleSheet.create({
    Test:{
       
        color:'#ffffff'
    },

    homepage: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
     
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center',
        width:'150%'
    }

});


export default HomeScreen;

