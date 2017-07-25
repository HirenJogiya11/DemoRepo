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
var PassengerDetailComponent = (function () {
    function PassengerDetailComponent() {
        this.edit = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.editing = false;
    }
    PassengerDetailComponent.prototype.ngOnChanges = function (changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    };
    PassengerDetailComponent.prototype.onNameChange = function (value) {
        this.detail.FirstName = value;
    };
    PassengerDetailComponent.prototype.ToggleEdit = function () {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    };
    PassengerDetailComponent.prototype.OnRemove = function () {
        this.remove.emit(this.detail);
    };
    return PassengerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PassengerDetailComponent.prototype, "detail", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PassengerDetailComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PassengerDetailComponent.prototype, "remove", void 0);
PassengerDetailComponent = __decorate([
    core_1.Component({
        selector: 'passenger-detail',
        styleUrls: ['./passenger-detail.component.css'],
        template: "<div>\n                  <span class=\"status\"\n                  [class.checkedin]=\"detail.Checkdin\"></span>\n                  \n                 <div *ngIf=\"editing\"> \n                 <input \n                        type=\"text\" \n                        [value]=\"detail.FirstName\" \n                        (input)=\"onNameChange(name.value)\"\n                        #name\n                        /> \n                  </div>\n                        \n                  <div *ngIf=\"!editing\">\n                   {{detail.FirstName}} \n                   </div>\n               \n\n                <div class=\"children\">\n                  Children : {{detail.children?.length || 0}}\n                </div>\n                    <Button (click)=\"ToggleEdit()\">\n                        {{ editing ? 'Done' : 'Edit'}}\n                   </Button>\n               \n                   <Button (click)=\"OnRemove()\">\n                       Remove\n                   </Button>\n              </div>"
    }),
    __metadata("design:paramtypes", [])
], PassengerDetailComponent);
exports.PassengerDetailComponent = PassengerDetailComponent;
//# sourceMappingURL=passenger-detail.component.js.map