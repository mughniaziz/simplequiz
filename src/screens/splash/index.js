import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {getQuestion} from '../../redux/splash/actions';

function Splash({navigation}) {
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {loading, isSuccess} = useSelector(state => state.splash);
  const {levelSelected} = useSelector(state => state.core);

  useEffect(() => {
    dispatch(getQuestion());
    setTimeout(() => {
      if (isSuccess) {
        if (levelSelected !== '') {
          navigation.reset({index: 0, routes: [{name: 'home'}]});
        } else {
          navigation.navigate('level');
        }
      }
    }, 1500);
  }, [dispatch, navigation, isSuccess, levelSelected]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Ini Splash</Text>
      <View style={styles.loader}>
        {loading && <ActivityIndicator size="large" color="#000" />}
      </View>
    </View>
  );
}

export default Splash;
