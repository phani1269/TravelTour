import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  WebApiUrl = environment.WebAPIUrl;

  constructor(private _http: HttpClient) { }

  getDataFromWebApi(url: string) {
    return this._http.get(`${this.WebApiUrl}${url}`);}

    sendDataToWebApi(url: string, obj: any) {
      return this._http.post(`${this.WebApiUrl}${url}`, obj);
    }
    
}
