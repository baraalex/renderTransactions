import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Transaction } from './transaction';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TransactionsService {
  private url = 'https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions';
  private username = 'code-challenge';
  private password = 'payvisioner';

  constructor(private http: HttpClient) {}

  getTransactions = (action?: string, currencyCode?: string, orderBy?: string): Observable<Transaction[]> => {
    let urlWithParams = this.url;
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) })
    };

    if (action) {
      urlWithParams += '?action=' + action;
    }

    if (currencyCode) {
      urlWithParams += action ? '&currencyCode=' + currencyCode : '?currencyCode=' + currencyCode;
    }

    if (orderBy) {
      urlWithParams += action || currencyCode ? '&orderBy=' + orderBy : '?orderBy=' + orderBy;
    }

    return this.http
      .get<Transaction[]>(urlWithParams, httpOptions)
      .pipe(tap(_ => console.log(`found transactions`)), catchError(this.handleError<any>('getTransactions')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed: `, error); // log to console instead

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
