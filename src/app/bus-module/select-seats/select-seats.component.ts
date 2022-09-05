import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBoardingPoints, IbookSeat, IbusId, IDroppingPoints, ISeat } from 'src/app/models/bus';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css']
})
export class SelectSeatsComponent implements OnInit {
  busID!: any;
  isDisabled=false;
  total=0;
  seats=[
    {id:1,select:false,name:"A1",Type:'Seater',Price:0},
    {id:2,select:false,name:"A2",Type:'Seater',Price:0},
    {id:3,select:false,name:"A3",Type:'Seater',Price:0},
    {id:4,select:false,name:"A4",Type:'Seater',Price:0},
    {id:5,select:false,name:"B1",Type:'Seater',Price:0},
    {id:6,select:false,name:"B2",Type:'Seater',Price:0},
    {id:7,select:false,name:"B3",Type:'Seater',Price:0},
    {id:8,select:false,name:"B4",Type:'Seater',Price:0},
    {id:9,select:false,name:"C1",Type:'Seater',Price:0},
    {id:10,select:false,name:"C2",Type:'Seater',Price:0},
    {id:11,select:false,name:"C3",Type:'Seater',Price:0},
    {id:12,select:false,name:"C4",Type:'Seater',Price:0},
    {id:13,select:false,name:"D1",Type:'Seater',Price:0},
    {id:14,select:false,name:"D2",Type:'Seater',Price:0},
    {id:15,select:false,name:"D3",Type:'Seater',Price:0},
    {id:16,select:false,name:"D4",Type:'Seater',Price:0},
    {id:17,select:false,name:"S1",Type:'Sleeper',Price:300},
    {id:18,select:false,name:"S2",Type:'Sleeper',Price:300},
    {id:19,select:false,name:"S3",Type:'Sleeper',Price:300},
    {id:20,select:false,name:"S4",Type:'Sleeper',Price:300},
    {id:21,select:false,name:"S5",Type:'Sleeper',Price:300},
    {id:22,select:false,name:"S6",Type:'Sleeper',Price:300},
    {id:23,select:false,name:"S7",Type:'Sleeper',Price:300},
    {id:24,select:false,name:"S8",Type:'Sleeper',Price:300},
    {id:25,select:false,name:"S9",Type:'Sleeper',Price:300},
    {id:26,select:false,name:"S10",Type:'Sleeper',Price:300}
  ] 
  BookedSeats=[] as IbookSeat[];
  fillseat=[] as ISeat[];
  BoardingPoints =[] as IBoardingPoints[];
  boardingpt:any|undefined={} as IBoardingPoints;
  DroppingPoints =[] as IDroppingPoints[];
  dropingpt:any|undefined={} as IDroppingPoints;
  SelectedBoardingPoint: any;
  SelectedDroppingPoint:any;
  fill:any|undefined ={} as ISeat;
    sum=0;
  
  
  selectseat= {} as ISeat;
  
  buses =[] as IbusId[];
    selectedSeats: any[]=[];
    submitted: boolean = false;
  
    bus : any | undefined = {} as IbusId;
    constructor(private route: ActivatedRoute, private _dataService: DataService,
      private router: Router) { }
  
      
    ngOnInit(): void {
      this.busID = this.route.snapshot.paramMap.get("busID");
      this.BusData();
     //this.bus=this.buses.find((x:{busID:number})=>x.busID==this.busID);
     var Object4 = this.busID;
     var Object5 = localStorage.getItem('origin') || '{}';
     var Object6 = localStorage.getItem('destination') || '{}';
     var Object7 = JSON.parse(localStorage.getItem('date')||'{}');
     this.BusBoardingPoints(Object5 ,Object6,Object4);
     this.BusDroppingPoints(Object5 ,Object6,Object4);
     this.GetBooking(Object4,Object7);
     console.log(Object7);
  }
  GetBooking(Object4:any,Object7:any){
    this._dataService.getBookingDetails(Object4,Object7).subscribe(
      {
        next:(out)=>{
          this.BookedSeats=out as IbookSeat[];
          console.log(this.BookedSeats);
          this.BookedSeats.forEach((ele:any)=>{
            ele.seatNumber;
            this.disableCheck(ele.seatNumber);
  
          })
        },
        error:err=>{
          console.log(err);
        }
      }
    )
  }
  disableCheck(n:any){
    this.seats.forEach((ele:any)=>{
     if( ele.name==n){
      ele.select=true;
     }
    })
  }
  BusBoardingPoints(Object5: any,Object6:any,Object4:any) {
    this._dataService.getRoutePointsWebApi("api/Buses/GetRoutePointsbyID",Object5,Object6,Object4).subscribe(
      {
        next: (out) => {
          this.BoardingPoints = out as IBoardingPoints[];
          console.log(this.BoardingPoints);
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  BusDroppingPoints(Object5: any,Object6:any,Object4:any) {
    this._dataService.getRoutePointsWebApi("api/Buses/GetRoutePointsbyID",Object5,Object6,Object4).subscribe(
      {
        next: (out) => {
          this.DroppingPoints = out as IDroppingPoints[];
          console.log(this.DroppingPoints);
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  changeBoardingPoints($event:any){
    this.SelectedBoardingPoint = $event.target.value
     console.log(this.SelectedBoardingPoint);
  //this.bus=this.buses.find((x:{busID:number})=>x.busID==this.busID);
     
   this.boardingpt =  this.BoardingPoints.find((x:{routeDetailId:Number})=>x.routeDetailId==this.SelectedBoardingPoint);
  console.log(this.boardingpt);
  }
  changeDroppingPoints($event:any){
    this.SelectedDroppingPoint = $event.target.value
   // console.log(this.SelectedDroppingPoint);
   this.dropingpt =  this.DroppingPoints.find((x:{routeDetailId:Number})=>x.routeDetailId==this.SelectedDroppingPoint);
   console.log(this.dropingpt);
  }
  check(n:any){
    const b =this.fillseat.findIndex(({id})=>id==n);
    this.fillseat.splice(b,1);
   
    const c= this.seats.filter((e)=>e.id==n).map(a=>a.Price);
   this.sum-=c[0];
   this.total=this.total-c[0]-this.bus.price;
   }
   BusData() {
    this._dataService.getBusById("api/Buses/GetBusDetailsbyIDs",this.busID).subscribe(
      {
        next: (out) => {
          this.buses = out as IbusId[];
          console.log(this.buses)
        },
        error: err => {
          console.log(err);
        },
        complete: () => console.log("Completed")
      }
    );
  }
  disableparticularCheck(n:any){
    this.seats.forEach((element:any)=> {
      if(element.id==n){
        element.select=true;
      }
    });
  }
  Onchange($event: any){
    const a=$event.target.value;
  var ischecked = $event.target.checked;
  this.bus=this.buses.find((x:{busID:number})=>x.busID==this.busID);
  localStorage.setItem("bus",JSON.stringify(this.bus));
    if(ischecked){
      this.selectedSeats.push(a);
      this.fill= this.seats.find((x:{id:any})=>x.id==a);
        this.fillseat.push(this.fill);
        // if(this.fillseat.length>4){
        //   alert("Only 4 Seats are Allowed to book at Once");
        //   console.log(a);
        //   this.disableparticularCheck(a);
        // }
        this.sum = this.fillseat.reduce((accumulator,obj)=>{
          return accumulator+ obj.Price;
        },0);
        this.total=(this.fillseat.length*this.bus.price)+this.sum;
        console.log(this.fillseat);
    }
    
   
  
    else{
         this.check(a);
       }
  
  }
  
  final:any|undefined =[] as ISeat[];
  
  
  buttonClick(){
  
    const b = this.bus.busPrice;
      this.fillseat.forEach((element: any) => {
          element.Price=element.Price+this.bus.price;
      });
    localStorage.setItem("selectedSeats",JSON.stringify(this.fillseat) );
    localStorage.setItem("TotalAmount",JSON.stringify(this.total));
   localStorage.setItem("BoardingPoints",JSON.stringify(this.boardingpt));
    localStorage.setItem("DroppingPoints",JSON.stringify(this.dropingpt));
  
  
  }
  




}
