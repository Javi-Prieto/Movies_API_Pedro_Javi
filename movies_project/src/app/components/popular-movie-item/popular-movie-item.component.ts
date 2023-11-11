import { Component, Input } from '@angular/core';
import { RatedFilm } from 'src/app/models/movie-rated-list.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-popular-movie-item',
  templateUrl: './popular-movie-item.component.html',
  styleUrls: ['./popular-movie-item.component.css']
})
export class PopularMovieItemComponent {
  @Input() filmRated!: RatedFilm;
  @Input() index!: number;

  getImg() {
    return `${environment.posterImageBaseUrl}${this.filmRated.poster_path}`;
  }
}
