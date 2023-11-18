import { Component, Input } from '@angular/core';
import { FavMovie } from 'src/app/models/get-fav-movies.interface';
import { FavSeries } from 'src/app/models/get-fav-tv.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent {

  @Input() serie: boolean = false;
  @Input() movie: boolean = false;
  serieList!: FavSeries[];
  movieList!: FavMovie[];

  numPage: number = 1;
  totalElements: number = 0;
  constructor(private acountService: AccountService) { }

  ngOnInit(): void {
    this.lodPage();
  }

  lodPage() {
    if (this.serie) {
      this.acountService.getFavSeriePage(this.numPage).subscribe(resp => {
        this.serieList = resp.results;
        this.totalElements = resp.total_results;
      })
    }
    if (this.movie) {
      this.acountService.getFavouriteMoviesPag(this.numPage).subscribe(resp => {
        this.movieList = resp.results;
        this.totalElements = resp.total_results;
      })
    }
  }
}
