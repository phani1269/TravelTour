import { Component, OnInit } from '@angular/core';
import { Icab, Icity } from 'src/app/models/Cab';
import { Ihotel } from 'src/app/models/Hotel';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrls: ['./available-hotels.component.css']
})
export class AvailableHotelsComponent implements OnInit {
  city:any|undefined ={} as Icity;
  cityId:any;
  TotalDays=0;
  hotels=[] as Ihotel[];
  hotel:any={} as Ihotel;
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.city=JSON.parse( localStorage.getItem('selectedHotelCity')||'{}');
    this.TotalDays=JSON.parse( localStorage.getItem('TotalDays')||'{}');
   this.cityId=this.city.cityId;
   console.log(this.cityId);
   this.GetHotels(this.cityId);
  }
  GetHotels(obj:number){
    this._dataService.GetHotelsbyCityID("api/makemytrip/GetHotelsbyCityID",obj).subscribe({
      next:(out)=>{
        this.hotels=out as Ihotel[];
        console.log(this.hotels);

      },
      error:err=>{
        console.log(err);
      }
    })
  }
  

}
