import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { Ibus, IDestination, IOrigin } from 'src/app/models/bus';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  reverse:boolean=false;
  orderBy:any;
  busName:any
   min :any;
   Origins=[] as IOrigin[];
   Destinations=[] as IDestination[];
   selectedOrigin:any;
   selecteddestination:any;
   buses=[] as Ibus[];
   sortedData!:Ibus[];
   constructor(private _dataservice:DataService) { }
 
   ngOnInit(): void {
     this.BusOrigin();
     this.BusDestination();
     this.PastDate();
   }
   
   BusOrigin() {
    this._dataservice.getDataFromWebApi("api/Buses/GetAllOrigins").subscribe(
      {
        next: (out) => {
          this.Origins = out as IOrigin[];
          console.log(this.Origins);
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  BusDestination() {
    this._dataservice.getDataFromWebApi("api/Buses/GetAllDestinations").subscribe(
      {
        next: (out) => {
          this.Destinations = out as IDestination[];
          console.log(this.Destinations);
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  GetAVilableBuses(data: NgForm,Object: any,Object1:any){
    this._dataservice.getBusDetailswebApi("api/Buses/GetAvailableBusDetails", Object,Object1).subscribe(
      {
        next: (out) => {
          this.buses = out as Ibus[];
          console.log(this.buses);
          // if(this.buses.length){
          //   alert("Currently No Buses are available on this Route ");
          // }
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
   }
   changeorigin(e:any){
    //  console.log(e.target.value);
      this.selectedOrigin = e.target.value
       localStorage.setItem('origin', this.selectedOrigin);
    }
    changedestination(e:any){
      //console.log(e.target.value);
      this.selecteddestination = e.target.value
      localStorage.setItem('destination', this.selecteddestination);
    }
    PastDate(){
      var tdate:any = new Date();
      var date: any = tdate.getDate();
      if(date<10){
        date="0"+date;
      }
      var month:any = tdate.getMonth()+1;
      if(month<10){
        month="0"+month;
      }
      var year :any  = tdate.getFullYear();
      this.min = year +"-"+month+"-"+date;
      console.log(this.min); 
    }
    Onchange(value:any){
      console.log(value);
      localStorage.setItem('date',JSON.stringify(value));
    }
  
    change(){
      this.GetBusDetails(this.selectedOrigin, this.selecteddestination);
      //localStorage.setItem('date',JSON.stringify( this.date));
    }
    GetBusDetails(Object: any,Object1:any) {
      this._dataservice.getBusDetailswebApi("api/Buses/GetAvailableBusDetails", Object,Object1).subscribe(
        {
          next: (out) => {
            this.buses = out as Ibus[];
            console.log(this.buses);
          },
          error: err => {
            console.log(err);
          },
          complete: () => console.log("Completed")
        }
      );
    }
    key : string = 'busID';
    Show(key: string){
      {
        this.key = key
          this.reverse =!this.reverse;
        };
      }
      keys : any = 'startsFrom';
    ShowPrice(key: string){
      {
        this.keys = key
          this.reverse =!this.reverse;
        };
      }
      Search(){
        if(this.busName!=''){
          this.buses = this.buses.filter(ele=>{
            return ele.busName.toLocaleLowerCase().match(this.busName.toLocaleLowerCase());
          })}
          else if(this.busName==''){
            this.ngOnInit();
          }
        }
        FilterByAC(Object: any,Object1:any) {
          this._dataservice.getBusDetailswebApi("api/Buses/FilterByBusTypeAC", Object,Object1).subscribe(
            {
              next: (out) => {
                this.buses = out as Ibus[];
                console.log(this.buses);
              },
              error: err => {
                console.log(err);
              },
              complete: () => console.log("Completed")
            }
          );
        }
        FilterBynonAC(Object: any,Object1:any) {
          this._dataservice.getBusDetailswebApi("api/Buses/FilterByBusTypeNONAC", Object,Object1).subscribe(
            {
              next: (out) => {
                this.buses = out as Ibus[];
                console.log(this.buses);
              },
              error: err => {
                console.log(err);
              },
              complete: () => console.log("Completed")
            }
          );
        }
        Filterac(){
          this.FilterByAC(this.selectedOrigin, this.selecteddestination);
        }
        FilterNonAc(){
          this.FilterBynonAC(this.selectedOrigin, this.selecteddestination);
        }
       
        
      
      


    
}
