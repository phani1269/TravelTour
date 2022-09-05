import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ibook, Ibooking, IbusId, Iroutept, ISeat } from 'src/app/models/bus';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  Date:any
  Bookings:any=[] as Ibooking[];
  Booking:any = {} as Ibooking;
  bus={} as IbusId;
  seat =[] as ISeat[];
  BookingData={} as Ibook;
  BoardingPts={} as Iroutept;
  DropingPts={} as Iroutept;

  TotalAmount=0; 
  
  constructor(private _dataService:DataService,private route:Router) { }

  ngOnInit(): void {
    this.seat =  JSON.parse( localStorage.getItem('selectedSeats') || "{}");
   this.BookingData=JSON.parse(localStorage.getItem('BookingForm')||"{}");
   this.bus = JSON.parse(localStorage.getItem('bus')||'{}');
   this.TotalAmount = JSON.parse(localStorage.getItem('TotalAmount')||"{}");
   this.Date = JSON.parse(localStorage.getItem('date')||"{}");
   this.BoardingPts=JSON.parse(localStorage.getItem('BoardingPoints')||'{}');
   this.DropingPts=JSON.parse(localStorage.getItem('DroppingPoints')||'{}');
   console.log(this.BookingData);
   this.GetAllBookings();
  }

  GetAllBookings(){
    this._dataService.getDataFromWebApi("api/Buses/GetAllBookings").subscribe({
      next:(out)=>{
        this.Bookings=out as Ibooking[];
        this.Booking=this.Bookings.find((x:{travelDate:string,
          name:string,age:number,gender:string,mobileNo:string
        })=>x.name==this.BookingData.PassengerName&&x.mobileNo==this.BookingData.MobileNumber&&
        x.gender==this.BookingData.Gender&&x.age==this.BookingData.Age&&x.travelDate==this.Date);
        console.log(this.Booking); 
      } 
    })

  }
  navigate(){
    this.route.navigate(['../']);
  }


}
