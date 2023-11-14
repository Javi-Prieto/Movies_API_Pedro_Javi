import { Component, Input } from '@angular/core';
import { Review } from 'src/app/models/review-list.interface';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent {

  @Input() comentario!: Review;
  
  setImg(): String{
    return `https://secure.gravatar.com/avatar/${this.comentario.author_details.avatar_path}`
  }

}
