import Splash from '../screens/splash';
import SelLevel from '../screens/select-level';
import Home from '../screens/home';

export const route = [
  {
    key: 'splash',
    name: 'splash',
    component: Splash,
    options: {headerShown: false},
  },
  {
    key: 'level',
    name: 'level',
    component: SelLevel,
    options: {headerShown: false},
  },
  {
    key: 'home',
    name: 'home',
    component: Home,
    options: {headerShown: false},
  },
];
