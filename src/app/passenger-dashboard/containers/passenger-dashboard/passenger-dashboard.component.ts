import {Component, OnInit} from '@angular/core';
import { passenger } from '../../Models/passenger.interface';
import { CommonModule } from '@angular/common';


@Component ({
  selector : 'passenger-dashboard',
  styleUrls : ['./passenger-dashboard.component.css'],
  template:`<div>
                <passenger-count
                 [items]="passengers">    
                </passenger-count>
                
                <div *ngFor=" let passenger of passengers;">
                {{ passenger.FirstName }}
                </div>
                <passenger-detail 
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (edit)="HandleEdit($event) "
                (remove)="HandleRemove($event)"
              > 
               </passenger-detail>                 
            </div>`
})

export class PassengerDashboardComponent implements  OnInit {
  passengers:passenger[];

  constructor() {}

//constructor(private passengerService : PassengerDashboardService) {}

  ngOnInit() {
    this.passengers = [{
      id: 1,
      FirstName: 'john',
      Checkdin: true,
      children: null

    },
      {
        id: 2,
        FirstName: 'demon',
        Checkdin: false,
        children: [{name: 'ted', age: 12}, {name: 'edge', age: 12}]
      },
      {
        id: 3,
        FirstName: 'rose',
        Checkdin: true,
        children: null
      }];
  }

  /*  ngOnInit(){
   this.passengerService
   .getPassengers()
   .subscribe((data : passenger[]) => {
   this.passengers = data;
   });
   }*/

  //HandleEdit(event:passenger) {
 HandleEdit(event : passenger) {
   this.passengers = this.passengers.map((passenger:passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger,event);
      }
      return passenger;
    });
    console.log(this.passengers);

  }

   HandleRemove(event : passenger) {
   this.passengers = this.passengers.filter((passenger:passenger) => {
     return passenger.id !== event.id;
   })
  }

}
