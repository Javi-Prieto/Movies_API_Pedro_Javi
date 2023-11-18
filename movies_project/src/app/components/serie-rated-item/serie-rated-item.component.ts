import { Component, Input } from '@angular/core';
import { RatedSerie } from 'src/app/models/ratedSerie.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-serie-rated-item',
  templateUrl: './serie-rated-item.component.html',
  styleUrls: ['./serie-rated-item.component.css']
})
export class SerieRatedItemComponent {

  @Input() serieRated!: RatedSerie;
  @Input() index!: number;

  getImg() {
    return `${environment.posterImageBaseUrl}${this.serieRated.poster_path}`
  }
}
