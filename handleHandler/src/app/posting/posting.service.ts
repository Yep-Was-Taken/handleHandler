import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Posting } from './posting';

@Injectable()
export class PostingService {
  private postingsUrl = 'http://localhost:7071/api/';

  constructor(private http: HttpClient) { }

  getPostings(): Observable<Posting[]> {
    return this.http.get<Posting[]>(this.postingsUrl + 'Get')
      .pipe(
        catchError(this.handleError)
      );
  }

  getPosting(id: string, cityName: string): Observable<Posting> {
    if (id === '') {
      return of(this.initializePosting());
    }
    const url = `${this.postingsUrl + 'Get'}/${id}/${cityName}`;
    return this.http.get<Posting>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createPosting(posting: Posting): Observable<Posting> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Posting>(this.postingsUrl + 'CreateOrUpdate', posting, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePosting(id: string, cityname: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.postingsUrl + 'Delete'}/${id}/${cityname}`;
    return this.http.delete<Posting>(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePosting(posting: Posting): Observable<Posting> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = this.postingsUrl + 'CreateOrUpdate';
    return this.http.put<Posting>(url, posting, { headers: headers })
      .pipe(
        map(() => posting),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializePosting(): Posting {
    return {
      id: null,
      name: null,
      address: null,
      gender: null,
      company: null,
      designation: null,
      cityname: null
    };
  }
}  