"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
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
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./app.component.css'],
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
        template: "<div>\n                <passenger-dashboard></passenger-dashboard>\n             </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map