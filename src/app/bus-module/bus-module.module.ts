import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusModuleRoutingModule } from './bus-module-routing.module';
import { BusComponent } from './bus/bus.component';
import { BookingComponent } from './booking/booking.component';
import { JourneyDetailsComponent } from './journey-details/journey-details.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusComponent,
    BookingComponent,
    JourneyDetailsComponent,
    SelectSeatsComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    BusModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BusModuleModule { }
