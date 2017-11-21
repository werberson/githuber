import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class EmptyList extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  render() {
    const { icon, text } = this.props;
    return (
      <View style={styles.container}>
        <Icon name={icon} size={90} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
