import { Component, Input, OnInit } from '@angular/core';
import { MovieWatchlist } from 'src/app/models/movie-watchlist.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.css']
})
export class WatchlistListComponent implements OnInit{
  @Input() movie :boolean = false;
  @Input() serie:boolean = false;
  movieList!: MovieWatchlist[]; 
  numPage: number = 1;
  totalElements: number = 0;
  constructor(private accService: AccountService){}

  ngOnInit(): void {
      this.loadNewPage();
  }
  loadNewPage(){
    if(this.movie){
      this.accService.getMoviesWatchListByPage(this.numPage).subscribe(ans => {
        this.movieList = ans.results;
        this.totalElements = ans.total_results;
      });
    }
    if(this.serie){

    }
  }

}
