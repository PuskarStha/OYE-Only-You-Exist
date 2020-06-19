import React, { Component } from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

class MessageScreen extends Component{
render(){
    return(
        <View style={Styles.homepage}>
        
        <LinearGradient 
      
  colors={[  '#f5af19','#f12711']} 
  style={Styles.linearGradient}>
       <StatusBar

    backgroundColor="#f5af19"/>
    
  <Text style={Styles.Test}>
   This is Message Screen.
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


export default MessageScreen;

