import { Component, OnInit } from '@angular/core';
import { Ibook, IbusId, Iroutept, ISeat, Isubmit } from 'src/app/models/bus';
import { DataService } from 'src/app/Services/data.service';
import { Icustomer } from 'src/app/models/Login';
import * as alertyfy from 'alertifyjs';



@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent implements OnInit {

  Date:any
  bus={} as IbusId;
  seat =[] as ISeat[];
  BookingData={} as Ibook;
  TotalAmount=0;
  Age=0;
  DiscountAmount=0;
  submit={} as Isubmit;
  BoardingPts={} as Iroutept;
  DropingPts={} as Iroutept; 
  customers=[] as Icustomer[];
  result:any []=[];

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
   this.seat =  JSON.parse( localStorage.getItem('selectedSeats') || "{}");
   this.BookingData=JSON.parse(localStorage.getItem('BookingForm')||"{}");
   this.bus = JSON.parse(localStorage.getItem('bus')||'{}');
   this.TotalAmount = JSON.parse(localStorage.getItem('TotalAmount')||"{}");
   this.Date = JSON.parse(localStorage.getItem('date')||"{}");
   this.BoardingPts=JSON.parse(localStorage.getItem('BoardingPoints')||'{}');
   this.DropingPts=JSON.parse(localStorage.getItem('DroppingPoints')||'{}');
   this.customers=JSON.parse(localStorage.getItem('Customer')||'{}');
   this.result=this.customers.map((a)=>a.custId);
   


   console.log(this.bus);
   console.log(this.bus.busID);
   console.log(this.BookingData);
   console.log(this.BookingData.PassengerName);

    this.Age=this.BookingData.Age;
    if(this.Age>60){
      this.DiscountAmount=this.TotalAmount-(0.2*this.TotalAmount);

    }
    else if (this.Age<12) {
      this.DiscountAmount=this.TotalAmount-(0.1*this.TotalAmount);
    }

    else {
      this.DiscountAmount=this.TotalAmount;
    }
  }

  PostData(obj:any){
    this._dataService.sendDataToWebApi("api/Buses/Booking",obj).subscribe({
      next: data => {
       // Alertify.success('Hello world!');
       alertyfy.set('notifier','position', 'top-center');
       alertyfy.success("Booking Done");
      
      },
      error: err => {
        console.log(err);
      },
      complete: () => console.log("completed")
    });
  }

  SubmitData(){
    this.seat.forEach((element:any) => {
      this.submit.custId=this.result[0];
  this.submit.travelDate=this.Date;
  this.submit.name=this.BookingData.PassengerName;
  this.submit.age = this.BookingData.Age;
  this.submit.gender=this.BookingData.Gender;
  this.submit.mobileNo=this.BookingData.MobileNumber;
  this.submit.bookingAmount=element.Price;
  this.submit.seatNumber=element.name;
  this.submit.seatType= element.Type;
  this.submit.busId= this.bus.busID;
  this.submit.boardingPoint=this.BoardingPts.routePoint;
  this.submit.dropingPoint=this.DropingPts.routePoint;

  this.PostData(this.submit);
    });
 // alertyfy.success("Data Saved");

  

  }

}
