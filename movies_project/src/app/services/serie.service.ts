import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SeriePopularResponse } from '../models/serie-list.interface';
import { SerieDetailResponse } from '../models/serie-details.interface';
import { ReviewResponse } from '../models/review-list.interface';
import { RatingResponse } from '../models/rating.interface';
import { RatedSerieResponse } from '../models/rated-serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getPopularFilmList(numPage: number): Observable<SeriePopularResponse> {
    return this.http.get<SeriePopularResponse>(`${environment.baseUrl}/tv/popular?${environment.apiKey}&page=${numPage}`);
  }

  getSerieByName(name: string, page: number): Observable<SeriePopularResponse> {
    return this.http.get<SeriePopularResponse>(`${environment.baseUrl}/search/tv?${environment.apiKey}&query=${name}&page=${page}`);
  }

  getSerieDetails(id: number): Observable<SerieDetailResponse> {
    return this.http.get<SerieDetailResponse>(`${environment.baseUrl}/tv/${id}?${environment.apiKey}`);
  }

  getComents(id: number): Observable<ReviewResponse> {
    return this.http.get<ReviewResponse>(`${environment.baseUrl}/tv/${id}/reviews?${environment.apiKey}`);
  }

  addRating(id: number, value: number): Observable<RatingResponse> {
    return this.http.post<RatingResponse>(`${environment.baseUrl}/tv/${id}/rating?session_id=${localStorage.getItem('SESSION_ID')}`, {
      value: value
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    }
    );
  }

  deleteRating(id: number): Observable<RatingResponse> {
    return this.http.delete<RatingResponse>(`${environment.baseUrl}/tv/${id}/rating?session_id=${localStorage.getItem('SESSION_ID')}&${environment.apiKey}`);
  }

  getRatedSerieList(): Observable<RatedSerieResponse> {
    return this.http.get<RatedSerieResponse>(`${environment.baseUrl}/tv/top_rated?${environment.apiKey}`);
  }
}
