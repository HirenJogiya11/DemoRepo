import { Component  } from '@angular/core';

/*export class AppComponent
{
  groceries: string[];
  constructor ()
    {
     this.groceries = ['banana'];
    }

  AddItem(item: string){
    this.groceries =[ ...this.groceries, item];
  }
  RemoveItem(item: string){
    this.groceries = this.groceries.filter((grocery) => item !== grocery)

  }

}
const NewList = new AppComponent();
NewList.AddItem('Ban');
NewList.AddItem('Apple');
console.log(NewList.groceries);
NewList.RemoveItem('Apple');
console.log(NewList.groceries);
*/



@Component({
  selector: 'my-app',
  styleUrls : ['./app.component.css'],
 /* template: `<div>
              <input
                type="text"
                [value]="name"
                (input)="handlechange($event.target.value)">
                <div *ngIf="name.length">
                 searchin For... {{name}}
                </div>

                <div>
                <h3> Airlines Pessenger</h3>
                <ul *ngFor=" let passenger of passengers ; let i = index">
                  <span class="status"
                  [class.checkedin]="passenger.Checkdin"></span>
                {{ i }} : {{passenger.FirstName}}

                <div class="children">
                  Children : {{passenger.children?.length || 0}}
                </div>
                </ul>


                </div>


                 <div>
                <h3> Airlines Pessenger</h3>
                <ul>
                <li *ngFor=" let passenger of passengers ; let i = index">
                <span class="status"
                  [ngClass]="{'checkedin': passenger.Checkdin,
                               'checkedout': !passenger.Checkdin}"></span>
                {{ i }} : {{passenger.FirstName}}
                </li>
                </ul>
                </div>

                   <div>
                <h3> Airlines Pessenger</h3>
                <ul>
                <li *ngFor=" let passenger of passengers ; let i = index">
                <span class="status"
                  [style.backgroundColor]="(passenger.Checkdin ? '#00AA00' : '#cd0a0a')"></span>
                {{ i }} : {{passenger.FirstName}}
                </li>
                </ul>


                </div>
                 <div>
                <h3> Airlines Pessenger</h3>
                <ul>
                <li *ngFor=" let passenger of passengers ; let i = index">
                <span class="status"
                  [ngStyle]="{backgroundColor : (passenger.Checkdin ? '#00AA00' : '#cd0a0a')}"></span>
                {{ i }} : {{passenger.FirstName}}
                </li>
                </ul>
                </div>

                <template [ngIf]="name.length > 2">
                  <div>
                 searchin here For... {{name}}
                </div>
                </template>
             </div>`*/
  /*`<h1 [innerHtml]="title"></h1>
              <div>{{numberone + numbertwo}}</div>
              <div>{{isHappy ? ':)' : ':('}}</div>
              <img [src]="logo">
              <input type="text" #Username
               />
               <div>{{ name }}</div>
               <button (click)="handleClick(Username.value)">
               Get Value
             </button>`,*/

  template: `<div>
                <passenger-dashboard></passenger-dashboard>
             </div>`

})

export class AppComponent
{
 /*name : string = '';
  handlechange(value : string)
  {
    this.name = value;
  }
*/


 /* title : string;
  numberone : number = 1;
  numbertwo : number = 2;
  isHappy:   boolean = true;
  logo: string = 'image/62654981.jpg';
  name: string = 'Hren';*/

 /* handlechang(value : string){
    this.name = value;
  }*/
  /*handleinput(event : any){
   this.name = event.target.value;
   }*/

/*  handleClick (value : string){
    console.log(value);
  }*/
 /* Handleblur(event : any){
    this.name = event.target.value;
    console.log("event");
  }*/

}

