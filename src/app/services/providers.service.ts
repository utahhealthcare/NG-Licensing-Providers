import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  private providersAPI = environment.providersAPI;

  constructor(private httpClient: HttpClient) {}

  // GET all providers
  getProviders(): Observable<any> {
    return this.httpClient.get(this.providersAPI).pipe(
      catchError(this.handleError<any>('getProviders', []))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
