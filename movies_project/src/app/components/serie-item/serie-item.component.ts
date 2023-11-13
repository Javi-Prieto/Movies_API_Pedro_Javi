import { Component, Input } from '@angular/core';
import { PopularList } from 'src/app/models/serie-list.interface';
import { CastTvShow } from 'src/app/models/tvshows-people.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent {

  @Input() serie!: PopularList | CastTvShow;

  setPosterUrl(): String {
    return `${environment.posterImageBaseUrl}${this.serie.poster_path}`;
  }

}
