import { Component, Input } from '@angular/core';

import { RatedFilm } from 'src/app/models/movie-rated-list.interface';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent {
  @Input() average : number | undefined;

}
