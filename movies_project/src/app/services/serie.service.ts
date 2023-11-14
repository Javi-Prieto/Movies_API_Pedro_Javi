import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SeriePopularResponse } from '../models/serie-list.interface';
import { SerieDetailResponse } from '../models/serie-details.interface';
import { ReviewResponse } from '../models/review-list.interface';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getPopularFilmList(): Observable<SeriePopularResponse> {
    return this.http.get<SeriePopularResponse>(`${environment.baseUrl}/tv/popular?${environment.apiKey}`);
  }

  getSerieDetails(id: number): Observable<SerieDetailResponse> {
    return this.http.get<SerieDetailResponse>(`${environment.baseUrl}/tv/${id}?${environment.apiKey}`);
  }

  getComents(id: number): Observable<ReviewResponse> {
    return this.http.get<ReviewResponse>(`${environment.baseUrl}/tv/${id}/reviews?${environment.apiKey}`);
  }


}
