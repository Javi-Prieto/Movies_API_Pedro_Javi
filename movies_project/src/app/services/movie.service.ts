import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularListResponse } from '../models/movie-popular-list.interface';
import { environment } from 'src/environments/environment.development';
import { MovieDetailsResponse } from '../models/movie-details.interface';
import { CreditsResponse } from '../models/credits-details.interface';
import { MovieTrailersResponse } from '../models/movie-trailers.interface';
import { MovieImagesResponse } from '../models/movie-images.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovieList(): Observable<MoviePopularListResponse> {
    return this.http.get<MoviePopularListResponse>(`${environment.baseUrl}/movie/popular?${environment.apiKey}`);
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






  getImages(id:number):Observable<MovieImagesResponse>{
    return this.http.get<MovieImagesResponse>(`${environment.baseUrl}/movie/${id}/images?${environment.apiKey}`)
  }
}
