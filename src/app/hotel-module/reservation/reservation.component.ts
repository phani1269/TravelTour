import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IhoteID, Ireservation } from 'src/app/models/Hotel';
import { Icustomer } from 'src/app/models/Login';
import { DataService } from 'src/app/Services/data.service';
import * as alertyfy from 'alertifyjs';
import { Icity } from 'src/app/models/Cab';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  hotelId:any;
  isdisabled=false;
  hotels:any=[] as IhoteID[];
  hotel:any={} as IhoteID;
  customer=[] as Icustomer[];
  reservation:any={} as Ireservation;
  DateIn:any;
  DateOut:any;
  Date:any = new Date();
  TotalDays=0;
  result:any[]=[] ;
  selectedHotelCity:any={} as Icity;
  constructor(private route: ActivatedRoute, private _dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.paramMap.get("hotelId");
    //console.log(this.hotelId);
    this.GetHotelsbyHotelID(this.hotelId);
    this.selectedHotelCity=JSON.parse(localStorage.getItem('selectedHotelCity')||'{}');
    this.customer=JSON.parse(localStorage.getItem('Customer')||'{}');
    this.DateIn=JSON.parse(localStorage.getItem('DateIn')||'{}');
    this.DateOut=JSON.parse(localStorage.getItem('DateOut')||'{}');
    this.TotalDays=JSON.parse(localStorage.getItem('TotalDays')||'{}');

    this.result = this.customer.map((a)=>a.custId);
   

  }

  GetHotelsbyHotelID(obj:any){
    this._dataService.GetHotelsbyHotelID('api/makemytrip/GetHotelByHotelID',obj).subscribe({
      next:(out)=>{
        this.hotels= out as IhoteID
      this.hotel=this.hotels.find((x:{hotelId:any})=>x.hotelId==this.hotelId);
        console.log(this.hotel);
      },
      error: err => {
        console.log(err);
      },
    })
  }
  SubmitData(obj:any){
    this._dataService.sendDataToWebApi('api/makemytrip/Postreservation',obj).subscribe({
      next:(out)=>{
        alertyfy.set('notifier','position', 'top-center');
        alertyfy.success("Reservation Done");
        this.isdisabled=true;
        this.router.navigate(['../']);
      }, error: err => {
        console.log(err);
      },
    })
  }
  submit(){
    this.reservation.custId=this.result[0];
    this.reservation.reservationDate=this.Date;
    this.reservation.dateIn=this.DateIn;
    this.reservation.dateOut=this.DateOut;
    this.reservation.hotelId=this.hotelId;
    this.reservation.cityName=this.selectedHotelCity.cityName;
    this.SubmitData(this.reservation);
  }
}
