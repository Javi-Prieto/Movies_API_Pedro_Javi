import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { RatedFilm } from 'src/app/models/movie-rated-list.interface';

@Component({
  selector: 'app-movie-rated-list',
  templateUrl: './movie-rated-list.component.html',
  styleUrls: ['./movie-rated-list.component.css']
})
export class MovieRatedListComponent implements OnInit {

  ratedFilmList: RatedFilm[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getRatedMovieList().subscribe(resp => {
      this.ratedFilmList = resp.results
    })
  }
}
