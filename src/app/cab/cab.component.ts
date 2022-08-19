import { Component, OnInit } from '@angular/core';
import { Icab } from '../models/Cab';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit {

  cabs=[] as Icab[];
  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.CabData();
  }

  CabData() {
    this._dataService.getDataFromWebApi("api/makemytrip/GetallCars").subscribe(
      {
        next: (out) => {
          this.cabs = out as Icab[];
          console.log(this.cabs)
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }

}
