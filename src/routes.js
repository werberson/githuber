import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Header from 'components/Header';
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';
import { colors } from 'styles';


const createRootNavigator = (userExists = false) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: TabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          activeTintColor: colors.white,
          inactiveTintColor: colors.inactive,
          style: {
            backgroundColor: colors.primary,
          },
        },
      }),
    },
  }, {
    initialRouteName: userExists ? 'User' : 'Welcome',
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  });

export default createRootNavigator;
