import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent {
  @Input() average : number | undefined;
}
