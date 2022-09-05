import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icab, ICabRental, Icity } from 'src/app/models/Cab';
import { Icustomer } from 'src/app/models/Login';
import { DataService } from 'src/app/Services/data.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.css']
})
export class CabBookingComponent implements OnInit {
  carId:any;
  
  cabs=[] as Icab[];
  newCars : any | undefined={} as Icab;
  selectedCity:any| undefined ={} as Icity;
  min:any;
  amount=0;
  Dayslength=0;
  PickUpDate:any;
  ReturnDate:any;
  customer=[] as Icustomer[];
  submit={} as ICabRental;
  Final=[] as ICabRental[];
  result:any[]=[] ;
  isdisabled=false;

  
  constructor(private route: ActivatedRoute,private _dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get("carId");
    this.PastDate();
    this.CabData();
    this.PickUpDate=JSON.parse( localStorage.getItem('PickUpDate')||'{}');
    this.ReturnDate=JSON.parse( localStorage.getItem('ReturnDate')||'{}');
    this.Dayslength=JSON.parse( localStorage.getItem('Dayslength')||'{}');
    this.selectedCity=JSON.parse( localStorage.getItem('selectedCity')||'{}');
    this.customer=JSON.parse(localStorage.getItem('Customer')||'{}');
    console.log(this.Dayslength);
    this.result = this.customer.map((a)=>a.custId);
    
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
  }
  CabData() {
    this._dataService.getDataFromWebApi("api/makemytrip/GetallCars").subscribe(
      {
        next: (out) => {
          this.cabs = out as Icab[];
          this.newCars=this.cabs.find((x:{carId:number})=>x.carId==this.carId);
          console.log(this.newCars);
           this.amount= this.Dayslength*this.newCars.carPrice;

        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  

  PostRental(obj:any){
    this._dataService.sendDataToWebApi("api/makemytrip/PostRental",obj).subscribe({
      next:(out)=>{
   //  alertyfy.confirm('Confirm Title');
  //  alertyfy.set('notifier','position', 'top-center')
  //  alertyfy.confirm('MakeYourWay','Are You Sure To Confirm?', function(){ alertyfy.success('Booking Successful') }, function(){ alertyfy.error('Cancel')});
  alertyfy.alert('Thanks For Booking', 'Booking Successful');
  this.router.navigate(['../']);
  this.isdisabled=true;
      },
      error:err=>{
        console.log(err);
      }

    })
  }

  SubmitData(){
  
    this.submit.carId=this.newCars.carId;
    this.submit.pickDate= this.PickUpDate;
    this.submit.returnDate=  this.ReturnDate;
    this.submit.amount=this.amount;
    this.submit.custId=this.result[0];
    this.submit.cityId=this.selectedCity.cityId;
    this.Final.push(this.submit);
    console.log(this.Final);

    this.PostRental(this.submit);
  }



}
