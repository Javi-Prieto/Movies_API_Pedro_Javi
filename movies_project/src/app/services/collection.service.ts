import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionDetailsResponse } from '../models/collection-details.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  getCollectionDetails(id:number):Observable<CollectionDetailsResponse>{
    return this.http.get<CollectionDetailsResponse>(`${environment.baseUrl}/collection/${id}?${environment.apiKey}`);
  }
}
