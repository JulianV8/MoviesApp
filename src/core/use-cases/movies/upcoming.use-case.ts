import {HttpAdapter} from '../../../config/adapters/http/http-adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {Movie} from '../../entities/movie.entity';

export const movieUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<GeneralResponse>('/upcoming');
    // console.log({upcoming});
    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener las peliculas proximas a estrenar');
  }
};
