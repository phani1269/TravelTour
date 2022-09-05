export interface Ihotel{
    hotelId: number;
    hotelName: string; 
    address: string;
    pincode: number;
    no_Of_Rooms: number;
    phoneNo: number;
    roomType: string;
    price: number;
    cityId: number;
    hotelImage: string;
}
export interface IhoteID{
    hotelId: number;
    hotelName: string; 
    address: string;
    pincode: number;
    no_Of_Rooms: number;
    phoneNo: number;
    roomType: string;
    price: number;
    cityId: number;
    cityName:string;
    hotelImage: string;
}
export interface Ireservation{
    reserveId: number,
  custId: number,
  reservationDate: string,
  dateIn: string,
  dateOut: string,
  hotelId: number,
  cityName: string
}