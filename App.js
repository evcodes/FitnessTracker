import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/utils/StackNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default App;