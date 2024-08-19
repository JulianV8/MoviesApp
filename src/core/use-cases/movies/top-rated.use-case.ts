import {HttpAdapter} from '../../../config/adapters/http/http-adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';

export const movieTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<GeneralResponse>('/top_rated');
    // console.log({topRated});
    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las peliculas mejor valoradas');
  }
};
