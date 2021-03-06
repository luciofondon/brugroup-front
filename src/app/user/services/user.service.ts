
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  private readonly API_COUNTRY_URI = environment.apiUrl + '/api/users';
  private readonly PATH_WS = '/ws';

  private isWS : boolean;

  constructor(private http: HttpClient) { 
    this.isWS = false;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_COUNTRY_URI)
      .pipe(
        tap(heroes => console.log('fetched userss')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    let url = `${this.API_COUNTRY_URI}/${id}`;
    url = this.isWS ? `${url}${this.PATH_WS}` : url;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addUser(user): Observable<User> {
    return this.http.post<User>(this.API_COUNTRY_URI, user, httpOptions).pipe(
      tap((user: User) => console.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  updateUser(id, user): Observable<any> {
    const url = `${this.API_COUNTRY_URI}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id): Observable<User> {
    const url = `${this.API_COUNTRY_URI}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

}
