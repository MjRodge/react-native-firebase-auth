import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/loginForm';

const firebaseConfig = {
  apiKey: 'AIzaSyAOkOzTbhajSY7btbxohSG70FfgIb60I_w',
  authDomain: 'react-native-auth-test-a1d74.firebaseapp.com',
  databaseURL: 'https://react-native-auth-test-a1d74.firebaseio.com',
  projectId: 'react-native-auth-test-a1d74',
  storageBucket: 'react-native-auth-test-a1d74.appspot.com',
  messagingSenderId: '962256974612',
};

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header headerText="FirebaseAuth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
