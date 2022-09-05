import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Shared/auth.guard';
import { BookingComponent } from './booking/booking.component';
import { BusComponent } from './bus/bus.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'',component:BusComponent},
  {path:'seats/:busID',component: SelectSeatsComponent,canActivate:[AuthGuard]},
  {path:'seats/:busID/booking',component:BookingComponent},
  {path:'seats/:busID/booking/journeydetails',component:JourneyDetailsComponent},
  {path:'seats/:busID/booking/journeydetails/ticket',component:TicketComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusModuleRoutingModule { }
