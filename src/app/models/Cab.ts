export interface Icab{
    carId:number;
    carModel:string;
    carBrand:string;
    carSeats:number;
    carAvailability:boolean;
    carType:string;
    carPrice:number;
}
export interface Icity{
    CityID:number;
    CityName:string;
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