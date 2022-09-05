import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabModuleRoutingModule } from './cab-module-routing.module';
import { AvailableCabsComponent } from './available-cabs/available-cabs.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AvailableCabsComponent,
    CabBookingComponent
  ],
  imports: [
    CommonModule,
    CabModuleRoutingModule,
    ReactiveFormsModule,
   AngularMaterialModule,
   FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CabModuleModule { }
