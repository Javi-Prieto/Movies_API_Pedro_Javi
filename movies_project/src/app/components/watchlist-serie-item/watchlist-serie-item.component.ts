import { Component, Input } from '@angular/core';
import { SerieWatchlist } from 'src/app/models/serie-watchlist.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-watchlist-serie-item',
  templateUrl: './watchlist-serie-item.component.html',
  styleUrls: ['./watchlist-serie-item.component.css']
})
export class WatchlistSerieItemComponent {
  @Input() serie !: SerieWatchlist;
  type: string = "movie";
  setPosterUrl():string {
    return `${environment.posterImageBaseUrl}${this.serie.poster_path}`;
  }
}
