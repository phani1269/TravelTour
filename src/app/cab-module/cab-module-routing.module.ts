import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Shared/auth.guard';
import { AvailableCabsComponent } from './available-cabs/available-cabs.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';

const routes: Routes = [
{path:'',component:AvailableCabsComponent},
{path:'CabBooking/:carId',component:CabBookingComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabModuleRoutingModule { }
