import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(public appService: AppService) {}

  @Get("movies/all")
  getTopMovies() {
    return this.appService.getPopularMovies();
  }
  
}
