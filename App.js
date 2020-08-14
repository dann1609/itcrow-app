/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/config/store';
import MainScreen from './src/screens/MainScreen/MainScreen';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MainScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
