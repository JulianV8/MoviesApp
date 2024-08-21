import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {
  return (
    <View style={{...styles.imageContainer, width: 300, height: 400}}>
      <Image style={styles.image} source={{uri: movie.poster}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
