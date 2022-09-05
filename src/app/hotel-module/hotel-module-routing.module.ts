import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Shared/auth.guard';
import { AvailableHotelsComponent } from './available-hotels/available-hotels.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchHotelsComponent } from './search-hotels/search-hotels.component';

const routes: Routes = [
  {path:'',component:SearchHotelsComponent},
  {path:'availableHotels',component:AvailableHotelsComponent},
   {path:'availableHotels/reservation/:hotelId',component:ReservationComponent,canActivate:[AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelModuleRoutingModule { }
