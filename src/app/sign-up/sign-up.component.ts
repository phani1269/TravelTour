import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Icustomer, ILogin } from '../models/Login';
import { DataService } from '../Services/data.service';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Register={} as Icustomer
  submitted=false;
  registerForm= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z].*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(6)])
  })

  constructor(private _dataservice:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  PostCustomer(obj:any){
    this._dataservice.sendDataToWebApi("api/makemytrip/Postcustomer",obj).subscribe({
      next:(out)=>{
        if(this.Register){

          alertyfy.set('notifier','position', 'top-right');
          alertyfy.success("registered Succesfully");
         //alert("registered Successfully");
          this.route.navigate(['/login']);
        }
        else{
          alertyfy.set('notifier','position', 'top-center');
          alertyfy.error("Invalid Details");
        }
        

      },
      error:err=>{
        console.log(err);
      }

    })

  }
  public get f(){
    return this.registerForm.controls;
  }
  FinalRegister(form:FormGroup){
    this.submitted=true;
    if(form.invalid){
     
      alertyfy.set('notifier','position', 'top-center');
          alertyfy.error("Invalid Details");
          return;
    }
    this.Register=form.value;
    
    form.reset();
    this.submitted=false;
    this.PostCustomer(this.Register);
  }

}
