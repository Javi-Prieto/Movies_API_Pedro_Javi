import { Component, OnInit } from '@angular/core';
import { PopularMovie } from 'src/app/models/movie-popular-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList!: PopularMovie[];
  numPage = 1;
  numMovies = 0;

  constructor(private movieService:MovieService){}
  ngOnInit(): void {
      this.loadNewPage()
  }
  loadNewPage(){
    this.movieService.getPopularMovieList(this.numPage).subscribe(resp => {
      this.movieList = resp.results;
      this.numMovies = resp.total_results;
    });
  }
  loadPageByName(event:any){
    let name: string = event.target.value; 
    if(name == ''){
      this.loadNewPage();
    }else{
      this.movieService.getMovieByName(event.target.value, this.numPage).subscribe(resp => {
        this.movieList = resp.results;
        this.numMovies = resp.total_results;
      });
    }
  }
}
