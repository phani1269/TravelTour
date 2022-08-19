import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { CabComponent } from './cab/cab.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'Hotel',component: HotelComponent},
  {path:'Bus',component: BusComponent},
  {path:'Cab',component: CabComponent},
  {path:'Cab/Cabbook',component: CabBookingComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
