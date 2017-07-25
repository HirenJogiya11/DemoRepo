"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PassengerDashboardComponent = (function () {
    function PassengerDashboardComponent() {
    }
    //constructor(private passengerService : PassengerDashboardService) {}
    PassengerDashboardComponent.prototype.ngOnInit = function () {
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
                children: [{ name: 'ted', age: 12 }, { name: 'edge', age: 12 }]
            },
            {
                id: 3,
                FirstName: 'rose',
                Checkdin: true,
                children: null
            }];
    };
    /*  ngOnInit(){
     this.passengerService
     .getPassengers()
     .subscribe((data : passenger[]) => {
     this.passengers = data;
     });
     }*/
    //HandleEdit(event:passenger) {
    PassengerDashboardComponent.prototype.HandleEdit = function (event) {
        this.passengers = this.passengers.map(function (passenger) {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
        console.log(this.passengers);
    };
    PassengerDashboardComponent.prototype.HandleRemove = function (event) {
        this.passengers = this.passengers.filter(function (passenger) {
            return passenger.id !== event.id;
        });
    };
    return PassengerDashboardComponent;
}());
PassengerDashboardComponent = __decorate([
    core_1.Component({
        selector: 'passenger-dashboard',
        styleUrls: ['./passenger-dashboard.component.css'],
        template: "<div>\n                <passenger-count\n                 [items]=\"passengers\">    \n                </passenger-count>\n                \n                <div *ngFor=\" let passenger of passengers;\">\n                {{ passenger.FirstName }}\n                </div>\n                <passenger-detail \n                *ngFor=\"let passenger of passengers;\"\n                [detail]=\"passenger\"\n                (edit)=\"HandleEdit($event) \"\n                (remove)=\"HandleRemove($event)\"\n              > \n               </passenger-detail>                 \n            </div>"
    }),
    __metadata("design:paramtypes", [])
], PassengerDashboardComponent);
exports.PassengerDashboardComponent = PassengerDashboardComponent;
//# sourceMappingURL=passenger-dashboard.component.js.map