import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../Services/data.service';
import { Icustomer, ILogin } from '../models/Login';
import * as alertyfy from 'alertifyjs';
import { faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm: FormGroup | any;
  loggedin={} as ILogin;
  customers=[] as Icustomer[];
  customer={} as Icustomer;
  title = 'material-login';
  constructor(private router:Router ,private _dataservice: DataService) {
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }
  ngOnInit(): void {
  }
  UserLogin(object:any,object1:any){
    
    this._dataservice.LoginUser("api/makemytrip/UserLogin",object,object1).subscribe({
      next:(out)=>{
        this.customers= out as Icustomer[];
        if(this.customers.length){
          localStorage.setItem('Customer',JSON.stringify(this.customers) );
        //   alertyfy.set('notifier','position', 'top-right');
        // alertyfy.success("Logged in");
         
         localStorage.setItem("token","sdfghjklkjhgfdsfghjk");
           this.router.navigate(['../']);
        }
        else {
          alertyfy.set('notifier','position', 'top-center');
          alertyfy.error("Invalid credentials");
          
        }
      },
      error:err=>{
        console.log(err);
      }
    })
    // this._dataservice.LoginUser(object,object1).subscribe({
    //   next:(out)=>{
    //     this.customers=out as Icustomer[];
    //     console.log(this.customers);
    //   }
    // })
  }
  


  Finalbooking(form:FormGroup){
    this.loggedin=form.value;
    this.UserLogin(this.loggedin.email,this.loggedin.password);
    form.reset();
  }
  }


