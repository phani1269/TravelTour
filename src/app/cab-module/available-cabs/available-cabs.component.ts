import { Component, Input, OnInit } from '@angular/core';
import { Icab, Icity } from 'src/app/models/Cab';
import { DataService } from 'src/app/Services/data.service';
import { BlogPostCard } from './car-model';

@Component({
  selector: 'app-available-cabs',
  templateUrl: './available-cabs.component.html',
  styleUrls: ['./available-cabs.component.css']
})
export class AvailableCabsComponent implements OnInit {
  cabs=[] as Icab[];
  citys=[] as Icity[];
  city:any|undefined ={} as Icity;
  selectedCity:any;
  NewCabs:any=[] as Icab[];
  min:any;
  Dayslength=0;
  PickUpDate:any;
  ReturnDate:any;
  Date:any;

  
 
  
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.PastDate();
    this.GetCitys();
  //  this.CabData();
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
   
    this.PickUpDate=value;
    
 
    localStorage.setItem('PickUpDate',JSON.stringify(this.PickUpDate));
   
  }
  Onchange1(value:any){
    this.ReturnDate=value;
    

    localStorage.setItem('ReturnDate',JSON.stringify(this.ReturnDate));

    this.Dayslength= (new Date(this.ReturnDate).getTime()-new Date(this.PickUpDate).getTime())/(1000 * 3600 * 24);
    localStorage.setItem('Dayslength',JSON.stringify(this.Dayslength));
    this.clickData();

  }
 
  clickData(){
    this.CabData(this.PickUpDate,this.ReturnDate);
  }
  
  CabData(Object:string,Object1:string) {
    this._dataService.getAvailableCars("api/makemytrip/GetAvailableCars",Object,Object1).subscribe(
      {
        next: (out) => {
          this.cabs = out as Icab[];
          console.log(this.cabs);
          console.log(this.PickUpDate);
          console.log(this.ReturnDate);
         // localStorage.setItem('DaysLength',JSON.stringify(this.Dayslength));
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
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
    this.city=this.citys.find((x:{cityName:string})=>x.cityName==this.selectedCity);
    localStorage.setItem('selectedCity',JSON.stringify(this.city));
  }



}
