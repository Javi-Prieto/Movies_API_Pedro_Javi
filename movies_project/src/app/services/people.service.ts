import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../models/people-list.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList(numPage:number):Observable<PeopleListResponse>{
    return this.http.get<PeopleListResponse>(`${environment.baseUrl}/person/popular?${environment.apiKey}&page=${numPage}`);
  }
}
