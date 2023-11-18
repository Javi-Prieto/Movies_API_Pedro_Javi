
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDetailsResponse } from '../models/user-details.interface';
import { AddAccountResponse } from '../models/add-account.interface';
import { MovieWatchListResponse } from '../models/movie-watchlist.interface';
import { FabSeriesResponse } from '../models/get-fav-tv.interface';
import { Injectable } from '@angular/core';
import { WatchListSerieResponse } from '../models/serie-watchlist.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  addFavorite(type: String, id: number, favourite: boolean): Observable<AddAccountResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    console.log(type);
    console.log(id);
    console.log(favourite);
    return this.http.post<AddAccountResponse>(`${environment.baseUrl}/account/${user_id}/favorite?session_id=${session_id}&${environment.apiKey}`,
      {
        "media_type": type,
        "media_id": id,
        "favorite": favourite
      },
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  getFavSerie(): Observable<FabSeriesResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<FabSeriesResponse>(`${environment.baseUrl}/account/${user_id}/favorite/tv?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }

  getFavSeriePage(numPage: number): Observable<FabSeriesResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<FabSeriesResponse>(`${environment.baseUrl}/account/${user_id}/favorite/tv?page=${numPage}&session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  getAccountDetailsBySession(): Observable<UserDetailsResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }
  getAccountDetailsById(): Observable<UserDetailsResponse> {
    let session_id = localStorage.getItem('SESSION_ID')
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<UserDetailsResponse>(`${environment.baseUrl}/account/${user_id}?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      });
  }

  addToWatchList(type: string, id: number, insert: boolean): Observable<AddAccountResponse> {
    let session_id = localStorage.getItem('SESSION_ID');
    let user_id = localStorage.getItem('USER_ID');

    return this.http.post<AddAccountResponse>(`${environment.baseUrl}/account/${user_id}/watchlist?session_id=${session_id}&${environment.apiKey}`,
      {
        media_type: type,
        media_id: id,
        watchlist: insert
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  getMoviesWatchList(): Observable<MovieWatchListResponse> {
    let session_id = localStorage.getItem('SESSION_ID')
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<MovieWatchListResponse>(`${environment.baseUrl}/account/${user_id}/watchlist/movies?session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }
  getMoviesWatchListByPage(numPage: number): Observable<MovieWatchListResponse> {
    let session_id = localStorage.getItem('SESSION_ID')
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<MovieWatchListResponse>(`${environment.baseUrl}/account/${user_id}/watchlist/movies?page=${numPage}&session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }

  getSeriesWatchListByPage(numPage: number): Observable<WatchListSerieResponse> {
    let session_id = localStorage.getItem('SESSION_ID')
    let user_id = localStorage.getItem('USER_ID');
    return this.http.get<WatchListSerieResponse>(`${environment.baseUrl}/account/${user_id}/watchlist/tv?page=${numPage}&session_id=${session_id}`,
      {
        headers: {
          'Authorization': `Bearer ${environment.tmdbToken}`
        }
      }
    );
  }
}


