import {StyleSheet} from 'react-native';

const useStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    questionBox: {
      alignItems: 'center',
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
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 6,
      borderRadius: 5,
    },
    correct: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.text,
    },
  });

export default useStyles;
