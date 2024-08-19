import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from './../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcoming = UseCases.movieUpcomingUseCase(movieDBFetcher);
    const topRated = UseCases.movieTopRatedUseCase(movieDBFetcher);
    const popular = UseCases.moviePopularUseCase(movieDBFetcher);
  };

  return {
    isLoading,
    nowPlaying,
  };
};
