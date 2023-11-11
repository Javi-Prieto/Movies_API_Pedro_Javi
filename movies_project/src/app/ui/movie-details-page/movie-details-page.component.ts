import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/credits-details.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Trailer } from 'src/app/models/movie-trailers.interface';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment.development';
import { DomSanitizer } from '@angular/platform-browser'
import { Image } from 'src/app/models/movie-images.interface';

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
  crew !: Cast[]; 
  trailer !: Trailer;
  carouselImages !: Image[];


  constructor(private movieService: MovieService,  private _sanitizer: DomSanitizer){
    this.movieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(resp => {
      this.movie = resp;
      this.bgImage = `url(${environment.imageBackgroundBaseUrl}${this.movie.backdrop_path})`;
    });
    this.movieService.getCredits(this.movieId).subscribe(resp => {
      this.cast = resp.cast;
      this.crew = resp.crew;
    });
    this.movieService.getTrailers(this.movieId).subscribe(resp => {
      this.trailer = resp.results.filter(video => video.type == 'Trailer')[0];
    });
    this.movieService.getImages(this.movieId).subscribe(resp => {
      this.carouselImages = resp.backdrops;
    });
  }
  setPosterImgUrl():string{
    return `${environment.posterImageBaseUrl}${this.movie?.poster_path}`;
  }
  setBackCollectionUrl():string {
    return `background-image: url(${environment.imageBackgroundBaseUrl}${this.movie?.belongs_to_collection.backdrop_path});`;
  }
  getActorsList():Cast[]{
    return this.cast.filter(people => people.known_for_department == 'Acting')
  }
  getDirectorsList():Cast[]{
    return this.crew.filter(people => people.known_for_department == 'Directing');
  }
  setBgImagesList():string[]{
    return this.carouselImages.map(img => {return `${environment.bgShortImageUrl}${img.file_path}`;});
  }
  setActorImageUrl(actor:Cast):string {
    return `${environment.actorImageBaseUrl}${actor.profile_path}`;
  }
  setVideoUrl(trailer:Trailer):any{
    return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailer.key}`);
  }
}
