import { Component, Input } from '@angular/core';
import { MovieWatchlist } from 'src/app/models/movie-watchlist.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-watchlist-movie-item',
  templateUrl: './watchlist-movie-item.component.html',
  styleUrls: ['./watchlist-movie-item.component.css']
})
export class WatchlistMovieItemComponent {

  @Input() movie !: MovieWatchlist;
  type: string = "movie";
  setPosterUrl():string {
    return `${environment.posterImageBaseUrl}${this.movie.poster_path}`;
  }
}
