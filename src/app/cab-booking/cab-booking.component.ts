import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Irental } from '../models/Cab';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.css']
})
export class CabBookingComponent implements OnInit {

  Rentcars=[] as Irental[];
  Rentcar={} as Irental;
  // RentalForm=new FormGroup({
  //   RentalID:new FormControl(''),
  //   PickDate:new FormControl(''),
  //   ReturnDate:new FormControl(''),
  //   CarID:new FormControl(''),
  //   CustID:new FormControl(''),
  //   CityID:new FormControl(''),
  //   Amount:new FormControl(''),
  // });
  constructor(private _dataservice: DataService) { }

  ngOnInit(): void {
  }

  addCar(f:NgForm){
    this._dataservice.sendDataToWebApi("api/makemytrip/PostRental",this.Rentcar).subscribe({
      next:data=>{
        this.Rentcar={} as Irental;
        console.log(this.Rentcar);
        f.resetForm();
      },
      error:err=>{
        console.log(err);
      },
      complete:()=>console.log("Completed")
    });
    
  }

}
