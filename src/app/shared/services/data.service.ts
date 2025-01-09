import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = `https://dummyjson.com`;
  private data: any;
  
  constructor(private readonly http: HttpClient) { }

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  // Handle errors from HTTP requests
  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Pass the error message to the caller
      return throwError(() => new Error(JSON.stringify(error.error)));
    };
  }

  // Add your methods here
  getApi<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`)
      .pipe(
        map(response => response),
        catchError(this.handleError<T>('getData'))
      );
  }
}
