import { Component, Input, OnInit } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-popular-list.interface';
import { MovieWatchlist } from 'src/app/models/movie-watchlist.interface';
import { Cast } from 'src/app/models/person-movie.interface';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit{

  @Input() movie!: PopularMovie | Cast;
  type: string = 'movie';
  isOnWatchList!:boolean;
  constructor(private accService: AccountService){}

  ngOnInit(): void {
      this.accService.getMoviesWatchList().subscribe(answ => {
        console.log(answ.results);
        this.isOnWatchList = answ.results.map(m => m.id).includes(this.movie.id);
        console.log(this.isOnWatchList);
      });
  }

  setPosterUrl(): string {
    return `${environment.posterImageBaseUrl}${this.movie.poster_path}`;
  }
  isUserRegister():boolean{
    let user_id = localStorage.getItem('SESSION_ID');
    return user_id != null? true: false;
  }
}
