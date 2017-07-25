"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// Container
var passenger_dashboard_component_1 = require("./containers/passenger-dashboard/passenger-dashboard.component");
// Components
var passenger_count_component_1 = require("./components/passenger-count/passenger-count.component");
var passenger_detail_component_1 = require("./components/passenger-detail/passenger-detail.component");
//Service
var PassengerDashboardModule = (function () {
    function PassengerDashboardModule() {
    }
    return PassengerDashboardModule;
}());
PassengerDashboardModule = __decorate([
    core_1.NgModule({
        declarations: [
            passenger_dashboard_component_1.PassengerDashboardComponent,
            passenger_count_component_1.PassengerCountComponent,
            passenger_detail_component_1.PassengerDetailComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [
            passenger_dashboard_component_1.PassengerDashboardComponent
        ]
    })
], PassengerDashboardModule);
exports.PassengerDashboardModule = PassengerDashboardModule;
//# sourceMappingURL=passenger-dashboard.module.js.map