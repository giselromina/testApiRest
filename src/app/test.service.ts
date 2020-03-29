import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders()
    .set('Authorization', 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny')
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})

export class TestService {
  token;

  constructor(private _httpClient: HttpClient) { }

  getToken(): Observable<any> {
    const requestTokenUri = 'https://integra1.solutions.webfg.ch/restweb/oauth/token';
    const ps = new HttpParams()
      .set('grant_type', 'password')
      .set('username', 'test001')
      .set('password', 'ryby3NTyKduAMcvZ')
      .set('scope', 'uaa.user');
    return this._httpClient.post(requestTokenUri, ps, httpOptions);
  }
  getData(token): Observable<any> {
    const httpOptionsData = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    };

    const requestDataUri = 'https://integra1.solutions.webfg.ch/restweb/quotes/2970161-1058-814';


    return this._httpClient.get(requestDataUri, httpOptionsData);
  }


}
