import {StyleSheet} from 'react-native';

const useStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    questionBox: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 15,
      height: 40,
      justifyContent: 'center',
      marginBottom: 15,
    },
    imgBg: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
    },
    btnAns: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 6,
      borderRadius: 5,
    },
    correct: {
      backgroundColor: colors.background,
      borderRadius: 5,
      fontSize: 24,
      fontWeight: '700',
      color: colors.text,
      paddingHorizontal: 15,
      marginBottom: 15,
    },
  });

export default useStyles;
