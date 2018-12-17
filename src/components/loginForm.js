import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, TextField, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    const { email, password, error } = this.state;
    this.setState({ error: '', loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  };

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Log in</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            label="Email"
            placeholder="user@email.com"
          />
        </CardSection>
        <CardSection>
          <TextField
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            label="Password"
            placeholder="password"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
