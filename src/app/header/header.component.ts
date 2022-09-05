import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

//  faLock = faLock;
  faLock = faUser;

  constructor(private Route:Router) { }

  ngOnInit(): void {
  }
  LoggedIn(){
    return localStorage.getItem("token");
  }
  LoggedOut(){
    //localStorage.removeItem('token');
    
    localStorage.clear();
    this.Route.navigate(['../']);
  }
}
