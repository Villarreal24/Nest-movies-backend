import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
import { map, catchError, firstValueFrom  } from 'rxjs';

@Injectable()

export class AppService {
  constructor(public httpService: HttpService) {}

  async getPopularMovies() {
    const { data } = await firstValueFrom(
      this.httpService.get('https://api.themoviedb.org/3/movie/popular?api_key=eb0e0f7554dd32697b9c77734dd53808&language=es&page=1&region=MX')
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      )
    );
    return data;
  }
}
