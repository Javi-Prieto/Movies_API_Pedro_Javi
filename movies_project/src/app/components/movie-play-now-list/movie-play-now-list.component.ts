import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { RatedFilm } from 'src/app/models/movie-rated-list.interface';
import { environment } from 'src/environments/environment';
declare var bootstrap: any;

interface Image {
  backdrop: string;
  poster: string;
  backdropUrl: string;
  posterUrl: string;
  title: string;
  overview: string;
}

@Component({
  selector: 'app-movie-play-now-list',
  templateUrl: './movie-play-now-list.component.html',
  styleUrls: ['./movie-play-now-list.component.css']
})
export class MoviePlayNowListComponent implements OnInit {
  film: RatedFilm[] = [];
  carouselImages: Image[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPlayNowFilms().subscribe(resp => {
      this.film = resp.results.slice(0,3);
      this.carouselImages = this.film.map(film => ({
      backdropUrl: `${environment.imageBackgroundBaseUrl}${film.backdrop_path}`,
      posterUrl: `${environment.posterImageBaseUrl}${film.poster_path}`,
      title: film.title,
      overview: film.overview
      })) as Image[];
    });

    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000, // Intervalo de tiempo entre las transiciones de las diapositivas (en milisegundos)
      wrap: true // Permitir el desplazamiento circular entre las diapositivas
    });
  }

   // Configuración del carrusel
  
}