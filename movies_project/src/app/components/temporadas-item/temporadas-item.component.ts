import { Component, Input } from '@angular/core';
import { Season } from 'src/app/models/serie-details.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-temporadas-item',
  templateUrl: './temporadas-item.component.html',
  styleUrls: ['./temporadas-item.component.css']
})
export class TemporadasItemComponent {

  @Input() temporada !: Season;

  setPosterUrl(): String {
    if (this.temporada.poster_path != null) {
      return `${environment.posterImageBaseUrl}${this.temporada.poster_path}`;
    } else {
      return '../assets/img/notfound.PNG'
    }
  }
}

