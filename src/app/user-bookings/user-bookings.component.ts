import { Component, OnInit } from '@angular/core';
import { Ibus } from '../models/bus';
import { Ibooking1, Icustomer, Irental1, Ireservation1 } from '../models/Login';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {

  bus=[] as Ibooking1[];
  cab = [] as Irental1[];
  customer=[] as Icustomer[];
  result:any[]=[] ;
  hotel=[] as Ireservation1[];
  
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.customer=JSON.parse(localStorage.getItem('Customer')||'{}');
    this.result = this.customer.map((a)=>a.custId);

    this.GetBookingbyCustId(this.result[0]);
    this.GetRentalByCustId(this.result[0]);
    this.GetReservationByCustId(this.result[0]);

  }
  GetBookingbyCustId(pbj:any){
    this.dataservice.GetHotelsbyCustId("api/makemytrip/GetBookingbyCustId",pbj).subscribe({
      next:(out)=>{
        this.bus = out as Ibooking1[]
        console.log(this.bus);
      },
      error:err=>{
        console.log(err);
      }

    })
  }
 GetRentalByCustId(pbj:any){
  this.dataservice.GetHotelsbyCustId("api/makemytrip/GetRentalByCustId",pbj).subscribe({
    next:(out)=>{
      this.cab=out as Irental1[];
      console.log(this.cab);
    },
    error:err=>{
      console.log(err);
    }
  })
 }
 GetReservationByCustId(pbj:any){
  this.dataservice.GetHotelsbyCustId("api/makemytrip/GetReservationByCustId",pbj).subscribe({
    next:(out)=>{
      this.hotel=out as Ireservation1[];
      console.log(this.hotel);
    },
    error:err=>{
      console.log(err);
    }
  })
 }

}
