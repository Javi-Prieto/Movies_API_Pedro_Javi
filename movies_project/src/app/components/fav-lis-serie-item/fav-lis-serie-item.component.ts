import { Component, Input } from '@angular/core';
import { FavSeries } from 'src/app/models/get-fav-tv.interface';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-fav-lis-serie-item',
  templateUrl: './fav-lis-serie-item.component.html',
  styleUrls: ['./fav-lis-serie-item.component.css']
})
export class FavLisSerieItemComponent {
  @Input() serie!: FavSeries;


  setPosterSerie(): string {
    return `${environment.posterImageBaseUrl}${this.serie.poster_path}`
  }
}
