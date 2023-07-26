import {StyleSheet} from 'react-native';

const useStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgSecondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      color: colors.text,
      fontWeight: '600',
    },
    content: {
      marginTop: 24,
      paddingHorizontal: 20,
    },
    btnLvl: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 25,
      elevation: 6,
      width: 345,
      height: 60,
      backgroundColor: colors.bgEffect,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    btnText: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
    },
  });

export default useStyles;
