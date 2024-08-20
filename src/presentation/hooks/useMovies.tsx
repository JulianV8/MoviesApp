import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from './../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, settopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.movieUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.movieTopRatedUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviePopularUseCase(movieDBFetcher);

    const [nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies] =
      await Promise.all([
        nowPlayingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setUpcoming(upcomingMovies);
    settopRated(topRatedMovies);
    setPopular(popularMovies);

    setIsLoading(false);

    console.log('Movies loaded');
    console.log({
      nowPlayingMovies,
      upcomingMovies,
      topRatedMovies,
      popularMovies,
    });
  };
  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    popular,
  };
};
