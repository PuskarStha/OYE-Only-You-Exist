import React from 'react';
import { View, Text,StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        4000
      )
    )
  }

  async componentDidMount() {
    //can  Preload data from an external API
    //can  Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('home');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
         <StatusBar

backgroundColor="#f5af19"/>
        <Text style={styles.textStyles}>
        OYE
        </Text>
        <Text style= {styles.texts}>Only You exist</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5af19'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  texts:{
    color: 'white',
    fontSize:15,
  }
}

export default SplashScreen;