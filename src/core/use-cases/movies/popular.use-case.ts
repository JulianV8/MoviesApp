import {HttpAdapter} from '../../../config/adapters/http/http-adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const moviePopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<GeneralResponse>('/popular');
    // console.log({popular});
    return popular.results.map(result =>
      MovieMapper.fromMoviesDBResultToMovie(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las peliculas populares');
  }
};
