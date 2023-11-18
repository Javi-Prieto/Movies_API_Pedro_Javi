import { Component, Input } from '@angular/core';
import { FavMovie } from 'src/app/models/get-fav-movies.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-fav-list-movie-item',
  templateUrl: './fav-list-movie-item.component.html',
  styleUrls: ['./fav-list-movie-item.component.css']
})
export class FavListMovieItemComponent {

  @Input() movie!: FavMovie;
  type: string = 'movie';
  setPosterMovie() {
    return `${environment.posterImageBaseUrl}${this.movie.poster_path}`;
  }
}
