import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Icab, Icity } from 'src/app/models/Cab';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.css']
})
export class SearchHotelsComponent implements OnInit {
  selected = "";
  min: any;
  ci! : Date;
  co!: Date;
  length : any | number| bigint ;
   tdate: any = new Date();
   date = this.tdate.getDate();
  // price:any|number;
  loginForm!: FormGroup;
  cityList=[] as Icity[];
  selectedCity:any;
  cabs=[] as Icab[];
  citys=[] as Icity[];
  city:any|undefined ={} as Icity;
  Date:any;
  DateIn:any;
  DateOut:any;
  TotalDays=0;

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.GetCitys();
    this.PastDate();
  }
  GetCitys(){
    this._dataService.getDataFromWebApi("api/makemytrip/Getcity").subscribe({
      next:(out)=>{
        this.citys=out as Icity[];
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  changeCity(event:any){
    this.selectedCity=event.target.value;
    this.city=this.citys.find((x:{cityId:number})=>x.cityId==this.selectedCity);
    //console.log(this.city);
    localStorage.setItem('selectedHotelCity',JSON.stringify(this.city));

  }
  PastDate(){
    var tdate:any = new Date();
    var date: any = tdate.getDate();
    if(date<10){
      date="0"+date;
    }
    var month:any = tdate.getMonth()+1;
    if(month<10){
      month="0"+month;
    }
    var year :any  = tdate.getFullYear();
    this.min = year +"-"+month+"-"+date;
    console.log(this.min);
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate();
    var month1 = currentDate.getMonth() + 1;
    var year1 = currentDate.getFullYear();
    this.Date= year1 +"-"+month+"-"+day;
    console.log(this.Date);
}
Onchange(value:any){
   
  this.DateIn=value;
  
  

  localStorage.setItem('DateIn',JSON.stringify(this.DateIn));
 
}
Onchange1(value:any){
  this.DateOut=value;

  

  localStorage.setItem('DateOut',JSON.stringify(this.DateOut));

  this.TotalDays= (new Date(this.DateOut).getTime()-new Date(this.DateIn).getTime())/(1000 * 3600 * 24);
 // console.log(this.TotalDays);
  localStorage.setItem('TotalDays',JSON.stringify(this.TotalDays));
  

}
}
