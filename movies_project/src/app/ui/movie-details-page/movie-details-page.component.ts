import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/credits-details.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit{



  movie: MovieDetailsResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId: number = 0;
  bgImage: string = '';
  cast!: Cast[];


  constructor(private movieService: MovieService){
    this.movieId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(resp => {
      this.movie = resp;
      this.bgImage = `url(${environment.imageBackgroundBaseUrl}${this.movie.backdrop_path})`;
    });
    this.movieService.getCredits(this.movieId).subscribe(resp => this.cast = resp.cast);
  }
  setImgUrl():string{
    return `${environment.posterImageBaseUrl}${this.movie?.poster_path}`;
  }
  setBackCollectionUrl():string {
    return `background-image: url(${environment.imageBackgroundBaseUrl}${this.movie?.belongs_to_collection.backdrop_path});`;
  }
  getActorsList():Cast[]{
    return this.cast.filter(people => people.known_for_department == 'Acting')
  }

  setActorImageUrl(actor:Cast):string {
    return `${environment.actorImageBaseUrl}${actor.profile_path}`;
  }

}
