import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../models/people-list.interface';
import { environment } from 'src/environments/environment.development';
import { PeopleDetailResponse } from '../models/people-details.interface';
import { MoviePersonResponse } from '../models/person-movie.interface';
import { TvShowsPersonResponse } from '../models/tvshows-people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList(numPage:number):Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}/person/popular?${environment.apiKey}&page=${numPage}`);
  }

  getPersonDetails(id:number):Observable<PeopleDetailResponse>{
    return this.http.get<PeopleDetailResponse>(`${environment.baseUrl}/person/${id}?${environment.apiKey}`);
  }

  getMoviesFromPerson(id:number):Observable<MoviePersonResponse>{
    return this.http.get<MoviePersonResponse>(`${environment.baseUrl}/person/${id}/movie_credits?${environment.apiKey}`);
  }

  getTvShowsFromPerson(id:number):Observable<TvShowsPersonResponse>{
    return this.http.get<TvShowsPersonResponse>(`${environment.baseUrl}/person/${id}/tv_credits?${environment.apiKey}`);
  }
  getPersonByName(name:string, page:number):Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}/search/person?${environment.apiKey}&query=${name}&page=${page}`);
  }
}
