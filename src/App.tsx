// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './presentation/navigations/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};
