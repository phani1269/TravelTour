import { Component, OnInit } from '@angular/core';
import { Icustomer } from '../models/Login';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  customer=[] as Icustomer[];

  constructor() { }

  ngOnInit(): void {
    this.customer=JSON.parse(localStorage.getItem('Customer')||'{}');

  }

}
