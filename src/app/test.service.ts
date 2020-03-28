import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: [
new HttpHeaders({ Authorization: 'Basic d2ViZmctdGVzdDpXVzU4WUpqODlsdFI0M0Ny'}),
new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})

  ]
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

constructor( private _httpClient: HttpClient) { }

private url = 'https://integra1.solutions.webfg.ch/restweb';
private tokenAcess;

getToken() {
  debugger
const requestToken ='/oauth/token?ClientID=webfg-test&Password=WW58YJj89ltR43Cr&grant_type=password&username=test001&password=ryby3NTyKduAMcvZ&scope=uaa.user';
return this._httpClient.post(`${this.url}${requestToken}`, httpOptions);
}

getCharacter(): Observable<any> {
const headers = new Headers();
headers.append('Authorization', `Bearer ${this.tokenAcess}`);

  this.tokenAcess = this.getToken();
 const quotes= 'quotes/2970161-1058-814?fields='
  return this._httpClient.get(`${this.url}${quotes}${headers}`);

}
}
