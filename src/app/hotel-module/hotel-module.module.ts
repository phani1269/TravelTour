import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelModuleRoutingModule } from './hotel-module-routing.module';
import { SearchHotelsComponent } from './search-hotels/search-hotels.component';
import { AvailableHotelsComponent } from './available-hotels/available-hotels.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SummaryComponent } from './summary/summary.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    SearchHotelsComponent,
    AvailableHotelsComponent,
    ReservationComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    HotelModuleRoutingModule,
   FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HotelModuleModule { }
