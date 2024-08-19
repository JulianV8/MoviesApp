import React from 'react';
import {View, Text} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {} = useMovies();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
