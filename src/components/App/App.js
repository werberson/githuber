import 'config/ReactotronConfig';

import React, { Component } from 'react';

import createRootNavigator from 'routes';
import { AsyncStorage } from 'react-native';


export default class App extends Component<{}> {
  state = {
    userExists: false,
    userChecked: false,
  };

  componentWillMount() {
    console.tron.log('componentWillMount');
    this.checkUser().then((response) => {
      console.tron.log('checkUser.then');
      this.setState({ userExists: response, userChecked: true });
    });
  }

  checkUser = async () => {
    console.tron.log('checkUser');
    const user = await AsyncStorage.getItem('@Githuber:username');
    return user !== null;
  };

  render() {
    console.tron.log('render');
    const { userChecked, userExists } = this.state;

    if (!userChecked) return null;

    const Layout = createRootNavigator(userExists);
    return <Layout />;
  }
}
