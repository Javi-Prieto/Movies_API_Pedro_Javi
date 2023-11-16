import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDetailsResponse } from '../models/user-details.interface';
import { AddAccountResponse } from '../models/add-account.interface';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private http: HttpClient) { }

    getAccountDetailsBySession(): Observable<UserDetailsResponse> {
        let session_id = localStorage.getItem('SESSION_ID');
        console.log(session_id);
        return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account?session_id=${session_id}`,
            {
                headers: {
                    'Authorization': `Bearer ${environment.tmdbToken}`
                }
            });
    }

    addFavorite(type: String, id: number, favourite: boolean): Observable<AddAccountResponse> {
        let session_id = localStorage.getItem('SESSION_ID');
        let user_id = localStorage.getItem('USER_ID');
        return this.http.post<AddAccountResponse>(`${environment.baseUrl}/account/${user_id}/favorite?session_id=${session_id}&${environment.apiKey}`,
            {
                "media_type": type,
                "media_id": id,
                "favorite": favourite
            },
            {
                headers: {
                    'Authorization': `Bearer ${environment.tmdbToken}`,
                    'content-type': 'application/json'
                }
            }
        );
    }
}
