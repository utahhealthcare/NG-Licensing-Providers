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

  public getProviders(specialty?: string, uid?: { included?: string; excluded?: string }, isFaculty = false, buildings?: string): Observable<any> {
    const queryParams = [
      specialty ? `specialties=${specialty}` : '',
      uid?.included ? `included=${uid.included.toUpperCase()}` : '',
      uid?.excluded ? `excluded=${uid.excluded}` : '',
      buildings ? `buildings=${buildings}` : '',
    ].filter(param => param);

    const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';
    const url = this.providersAPI + queryString;

    // Implementing error handling with catchError
    return this.httpClient.get(url).pipe(
      catchError(this.handleError('getDoctors', []))
    );
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
