import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {themes} from './utils/themes';
import {route} from './utils/route';

const Stack = createNativeStackNavigator();

function Router() {
  const scheme = useColorScheme();
  const backgroundStyle = {
    backgroundColor: scheme === 'dark' ? '#FFF' : 'transparent',
  };
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer
        theme={scheme === 'dark' ? themes.dark : themes.default}>
        <Stack.Navigator initialRouteName="splash">
          {route.map(item => (
            <Stack.Screen
              key={item.key}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;
