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
 private  token;

  constructor(private _httpClient: HttpClient) { }

  getToken(): Observable<any> {
    const requestTokenUri = 'https://integra1.solutions.webfg.ch/restweb/oauth/token';
    const ps = new HttpParams()
      .set('grant_type', 'password')
      .set('username', 'test001')
      .set('password', 'ryby3NTyKduAMcvZ')
      .set('scope', 'uaa.user');

    const getHeaders: HttpHeaders = new HttpHeaders({
       Authorization : 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

// tenemos dos maneras de pasar el header, como una const afuera de la funcion y pasarle luego el httpOptions
// o como lo hice aca adentro de la funcion.

    return this._httpClient.post(requestTokenUri, ps, {headers: getHeaders}).pipe(map(
      res => this.token = res));
  }

  getData(): Observable<any> {
    const httpOptionsData = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token.access_token}`)
    };

    const requestDataUri = 'https://integra1.solutions.webfg.ch/restweb/quotes/2970161-1058-814';

    return this._httpClient.get(requestDataUri, httpOptionsData);
  }

  paseDatatoTable(data) {
    const title = data[0].fields.M_NAME.v;
    const dataForTable = data.map(e => ({
      title : e.fields.M_NAME.v,
      dataR : e.fields.LVAL_NORM
      }
      ));
    const tableData = dataForTable[0].dataR;
    return {
         title,
         dataForTable,
         tableData
       };
  }
}
