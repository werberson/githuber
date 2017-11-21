import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.inactive,
    paddingBottom: 10,
  },
  text: {
    color: colors.inactive,
  },
});

export default styles;