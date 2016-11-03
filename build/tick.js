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
var core_1 = require('@angular/core');
var Tick = (function () {
    function Tick() {
        this.width = 12;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Tick.prototype, "pos", void 0);
    Tick = __decorate([
        core_1.Component({
            selector: 'tick',
            template: "\n\t\t<div [style.width]=\"width\" [style.height]=\"width\" [style.left]=\"pos.left - width / 2\" [style.top]=\"pos.top - width / 2\" class=\"tick\">\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Tick);
    return Tick;
}());
exports.Tick = Tick;
//# sourceMappingURL=tick.js.map