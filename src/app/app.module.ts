  import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



  import {FormsModule} from '@angular/forms';
  import {CommonModule} from "@angular/common";
  import { AppComponent }  from './app.component';

  import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
@NgModule({
  imports:      [ BrowserModule ,
                  FormsModule,
                  CommonModule,
                  PassengerDashboardModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



