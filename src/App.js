import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import {
  Header,
  Button,
  Spinner,
  Card,
  CardSection,
} from './components/common';
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
  state = {
    loggedIn: null,
  };

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  };

  render() {
    return (
      <View>
        <Header headerText="FirebaseAuth" />
        <View>{this.renderContent()}</View>
      </View>
    );
  }
}

export default App;
