import { Component, Input } from '@angular/core';

import { RatedFilm } from 'src/app/models/movie-rated-list.interface';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent {


  @Input() filmRated!: RatedFilm;
  @Input() index!: number;

  getImg() {
    return `${environment.posterImageBaseUrl}${this.filmRated.poster_path}`;
  }

  @Input() average : number | undefined;

}
