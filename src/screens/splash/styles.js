import {StyleSheet} from 'react-native';

const useStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.text,
    },
    loader: {
      marginTop: 16,
    },
  });

export default useStyles;
