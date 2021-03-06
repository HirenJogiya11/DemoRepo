 import  { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import {BrowserModule} from "@angular/platform-browser/public_api";
 // Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

 // Components
import  { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
 import  { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

 //Service

 @NgModule({
   declarations : [
     PassengerDashboardComponent,
     PassengerCountComponent,
     PassengerDetailComponent
   ],
   imports : [
     CommonModule
   ],
   exports :[
     PassengerDashboardComponent
   ]

 })
 export  class  PassengerDashboardModule {}
