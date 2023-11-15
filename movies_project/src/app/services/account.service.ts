import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDetailsResponse } from '../models/user-details.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetailsBySession():Observable<UserDetailsResponse>{
    let session_id = localStorage.getItem('SESSION_ID');
    console.log(session_id)
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }
  getAccountDetailsById(id:number):Observable<UserDetailsResponse>{
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${environment.tmdbToken}`
      }
    });
  }
}
