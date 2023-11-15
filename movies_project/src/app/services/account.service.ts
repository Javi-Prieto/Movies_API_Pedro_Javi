import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccountDetails(){
    let session_id = localStorage.getItem('SESSION_ID');

    return this.http.get(`${environment.baseUrl}/account?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }
}
