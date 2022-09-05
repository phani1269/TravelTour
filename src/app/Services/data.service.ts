import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


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
    getAvailableCars(url:string,object:any,Object1:any){
      const params = new HttpParams()
      .set('PickUpDate', object)
      .set('ReturnDate', Object1);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    
    LoginUser(url:string,object:any,object1:any){
      const params = new HttpParams()
      .set('email', object)
       .set('password', object1);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    getOrigins(url:string){
      return this._http.get(`${this.WebApiUrl}${url}`);
    }
    getBusDetailswebApi(url:string,Object:any,Object1:any){
      const params = new HttpParams()
      .set('origin', Object)
      .set('destination', Object1);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    getBusById(url:string,Object:any){
      const params = new HttpParams()
      .set('BusID',Object);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    GetHotelsbyCityID(url:string,Object:any){
      const params = new HttpParams()
      .set('cityId',Object);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    GetHotelsbyHotelID(url:string,Object:any){
      const params = new HttpParams()
      .set('hotelId',Object);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    GetHotelsbyCustId(url:string,Object:any){
      const params = new HttpParams()
      .set('custId',Object);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    getBookingDetails(BusID:number,TravelDate:string)
    { 
        const url = "api/Buses/GetBooking?BusID="
         return this._http.get(`${this.WebApiUrl}${url}${BusID}&TravelDate=${TravelDate}`);
    }
    getRoutePointsWebApi(url:string,Object5:any,Object6:any,Object4:any){
      const params = new HttpParams()
      .set('origin', Object5)
      .set('destination', Object6)
      .set('BusID',Object4);
      return this._http.get(`${this.WebApiUrl}${url}`,{params});
    }
    
}
