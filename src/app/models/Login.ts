export interface ILogin{
    email:string;
    password:string;
}
export interface Icustomer{
    custId:number;
    name:string;
    email:string;
    phone:string;
    password:string;
}
export interface Irental1{
    pickDate: string,
    returnDate: string,
    carModel: string,
    carBrand: string,
    amount: number,
    cityName: string,
    carType: string,
    carPrice: number,
    carImage: string
}
export interface Ireservation1{
    reservationDate: string,
    dateIn: string,
    dateOut: string,
    cityName: string,
    hotelName:string,
    address: string,
    pincode: number,
    phoneNo: string,
    roomType: string,
    price: number,
    hotelImage: string
}
export interface Ibooking1{
   travelDate:string,
   name:string,
   age: number,
   gender:string,
   mobileNo:string,
   bookingAmount: number,
   seatNumber:string,
   seatType:string,
   boardingPoint:string,
   dropingPoint:string,
   busName:string,
   busType:string ,
   price: number,
   busNumber:string
}