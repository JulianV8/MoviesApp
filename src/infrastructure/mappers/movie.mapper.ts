import type {Movie} from '../../core/entities/movie.entity';
import {Result} from './../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMoviesDBResultToMovie(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `http://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `http://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}
