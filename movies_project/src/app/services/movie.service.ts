import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularListResponse } from '../models/movie-popular-list.interface';
import { environment } from 'src/environments/environment.development';
import { MovieDetailsResponse } from '../models/movie-details.interface';
import { CreditsResponse } from '../models/credits-details.interface';
import { MovieTrailersResponse } from '../models/movie-trailers.interface';
import { MovieImagesResponse } from '../models/movie-images.interface';
import { MoviePlayNowResponse } from '../models/movie-playNow.interface';
import { MovieGenresResponse } from '../models/genres-movies.interface';
import { RatingResponse } from '../models/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovieList(numPage: number): Observable<MoviePopularListResponse> {
    return this.http.get<MoviePopularListResponse>(`${environment.baseUrl}/movie/popular?${environment.apiKey}&page=${numPage}`);
  }

  getMovieDetails(id: number): Observable<MovieDetailsResponse> {
    return this.http.get<MovieDetailsResponse>(`${environment.baseUrl}/movie/${id}?${environment.apiKey}`);
  }


  getRatedMovieList(): Observable<MoviePopularListResponse> {
    return this.http.get<MoviePopularListResponse>(`${environment.baseUrl}/movie/top_rated?limit=10&&${environment.apiKey}`)
  }
  getCredits(id:number):Observable<CreditsResponse>{
    return this.http.get<CreditsResponse>(`${environment.baseUrl}/movie/${id}/credits?${environment.apiKey}`);
  }

  getTrailers(id:number):Observable<MovieTrailersResponse>{
    return this.http.get<MovieTrailersResponse>(`${environment.baseUrl}/movie/${id}/videos?${environment.apiKey}`);
  }


  getPlayNowFilms(): Observable<MoviePlayNowResponse>{
    return this.http.get<MoviePlayNowResponse>(`${environment.baseUrl}/movie/now_playing?${environment.apiKey}`)
  }  

  getImages(id:number):Observable<MovieImagesResponse>{
    return this.http.get<MovieImagesResponse>(`${environment.baseUrl}/movie/${id}/images?${environment.apiKey}`)
  }
  getMovieByName(name:string, page:number):Observable<MoviePopularListResponse>{
    return this.http.get<MoviePopularListResponse>(`${environment.baseUrl}/search/movie?${environment.apiKey}&query=${name}&page=${page}`);
  }
  getMovieGenres():Observable<MovieGenresResponse>{
    return this.http.get<MovieGenresResponse>(`${environment.baseUrl}/genre/movie/list?${environment.apiKey}`);
  }

  addRating(id:number, value:number):Observable<RatingResponse>{
    return this.http.post<RatingResponse>(`${environment.baseUrl}/movie/${id}/rating?session_id=${localStorage.getItem('SESSION_ID')}`,{
         value: value
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    }
    );
  }

  deleteRating(id:number):Observable<RatingResponse>{
    return this.http.delete<RatingResponse>(`${environment.baseUrl}/movie/${id}/rating?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`);
  }
}
