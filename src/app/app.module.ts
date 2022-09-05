import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserDetailsComponent,
    UserBookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   AngularMaterialModule,
   FontAwesomeModule,

  
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
