import React, { Component } from 'react';

import { Button, Card, CardSection, TextField } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
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
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
