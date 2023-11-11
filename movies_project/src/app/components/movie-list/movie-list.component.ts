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
  constructor(private movieService:MovieService){}
  ngOnInit(): void {
      this.movieService.getPopularMovieList().subscribe(resp => this.movieList = resp.results);
  }
}
