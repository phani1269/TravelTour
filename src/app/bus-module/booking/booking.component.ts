import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingForm1, Ibook, ISeat } from 'src/app/models/bus';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  submitted = false;
  seat =[] as ISeat[];
  BookData:any={} as Ibook;

  BookingForm = new FormGroup({
    PassengerName:new FormControl(null,Validators.required),
    MobileNumber:new FormControl("",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    Age:new FormControl("",[Validators.required]),
    Gender:new FormControl(null,Validators.required)
  })
  Booking :any ={} as BookingForm1 ;
 BookingFormGroup!:FormGroup;
 BookingForm1array= new Array(this.seat.length)  as BookingForm1[];
 constructor(private router :Router,private _formBuilder: FormBuilder) { }

 ngOnInit(): void {
   this.seat =  JSON.parse( localStorage.getItem('selectedSeats') || "{}");

   this.BookingFormGroup= new FormGroup({
     PassengerName: new FormControl(''),
     MobileNumber:new FormControl(''),
     Age:new FormControl(''),
     Gender: new FormControl('')
   });

 }

 public get f() {
  return this.BookingForm.controls;
}
keyPressNumbers(event:any) {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}
PassengerBooking(f:FormGroup){

  this.Booking= this.BookingFormGroup.value;
  this.BookingForm1array.push(this.Booking);
  console.log(this.BookingForm1array);
}
FinalBooking(form:FormGroup){
  // this.BookData.push(this.BookingForm.value);
   console.log(this.BookingForm.value);

  // this.BookingForm1array.push(this.Booking);
   //console.log(this.BookingForm1array);
   this.submitted=true;
   if (form.invalid) {
     return;
   }
   
  localStorage.setItem("BookingForm",JSON.stringify(this.BookingForm.value) );
  this.router.navigateByUrl('/bus/seats/busId/booking/journeydetails');

 }












}
