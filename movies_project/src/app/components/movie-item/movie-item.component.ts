import { Component, Input } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-popular-list.interface';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: PopularMovie;
  setPosterUrl():string {
    return `${environment.posterImageBaseUrl}${this.movie.poster_path}`;
  }

}
