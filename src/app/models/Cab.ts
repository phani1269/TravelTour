export interface Icab{
    carId:number;
    carModel:string;
    carBrand:string;
    carSeats:number;
    carAvailability:boolean;
    carType:string;
    carPrice:number;
    carImage:string;
}
export interface Icity{
    cityId:number;
    cityName:string;
}
export interface Irental{
    RentalID:number;
    PickDate:string;
    ReturnDate:string;
    CarID:number;
    CustID:number;
    CityID:number;
    Amount:number;
}
export interface ICabRental{
    rentalId: number;
  pickDate: string;
  returnDate: string;
  carId: number;
  custId: number;
  cityId: number;
  amount: number
}