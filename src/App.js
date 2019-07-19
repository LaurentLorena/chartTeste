import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import GradientLineExample from './Components/GradientLineExample';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={{marginHorizontal: 60}}>
          <GradientLineExample />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
