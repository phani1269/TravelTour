import { SubscriptionLoggable } from "rxjs/internal/testing/SubscriptionLoggable";

export interface Ibus{
      busID:number;
      busNumber: string;
      busName: string;
      busType: string;
      totalSeats: number;
      startsFrom: number;
      estimatedTime:string;
     
}
export interface IbusId{
  busID:number;
  busName: string;
  busNumber: string;
  busType: string;
  price: number;
}
export interface IOrigin{
  origin:string;
}
export interface IDestination{
  destination: string;
}
export interface ISeat {
id:number;
select:boolean;
name:string;
Type:string;
Price:number;
}
export interface IbookSeat{
  SeatNumber:string;
  SeatType:string
}

export interface Ibook{
  PassengerName:string;
  MobileNumber:string;
  Age:number;
  Gender:string;
}
export interface Iroutept{
  RouteDetailID:number;
routePoint : string;
arivalTime:string;
  DepartureTime:string;
}

export interface Isubmit{
  bookingId:number;
  custId:number;
  travelDate:string;
  name:string;
  age:number;
  gender:string;
  mobileNo:string;
  bookingAmount:number;
  seatNumber:string;
  busId:number;
  seatType:string;
  boardingPoint:string;
  dropingPoint:string;
}
export interface Ibooking{
  bookingId:number;
  custId:number;
  travelDate:string;
  name:string;
  age:number;
  gender:string;
  mobileNo:string;
  bookingAmount:number;
  seatNumber:string;
  seatType:string;
  boardingPoint:string;
  dropingPoint:string;
  busName: string;
  busNumber: string;
  busType: string;
  price: number;

}
export interface IBoardingPoints{
routeDetailId:Number;  
routePoint : string;
arivalTime: string;
departureTime: string;
}
export interface IDroppingPoints{
  routeDetailId:Number;
routePoint : string;
arivalTime: string;
departureTime: string;
}

export interface BookingForm1{
  PassengerName:any;
  MobileNumber:any;
  Age:any;
  Gender:any;
}