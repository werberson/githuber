import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Image, Text } from 'react-native';
import styles from './styles';

export default class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { organization } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: organization.avatar_url }}
        />
        <Text style={styles.title}>{ organization.login }</Text>
      </View>
    );
  }
}
