import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: SignUpComponent},
  {path:'userdetails',component: UserDetailsComponent},
  {path:'userbookings',component: UserBookingsComponent},



  // {path:'Cab',component: CabComponent},
  // {path:'Cab/Cabbook',component: CabBookingComponent},
  {path:'cab',loadChildren:()=>import("./cab-module/cab-module.module").then(x=>x.CabModuleModule)},
  {path:'bus',loadChildren:()=>import("./bus-module/bus-module.module").then(x=>x.BusModuleModule)},
  {path:'hotel',loadChildren:()=>import("./hotel-module/hotel-module.module").then(x=>x.HotelModuleModule)}


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
