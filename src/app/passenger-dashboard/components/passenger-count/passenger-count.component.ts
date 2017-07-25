import  { Component ,Input} from '@angular/core';
import {passenger} from "../../Models/passenger.interface";

import { CommonModule } from '@angular/common';
@Component ({
  selector : 'passenger-count',
  template : `<div>
                  <h3> Airlines Pessenger</h3>
                  <div>
                  Total Checked in : {{ CheckedinCount() }} / {{ items.length }}
                  </div>
              </div>`
})

export class PassengerCountComponent {
 @Input()
  items : passenger[];
  CheckedinCount() : number{
    if(!this.items) return;

    return this.items.filter((passenger : passenger) => passenger.Checkdin).length;
  }
}
